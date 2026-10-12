import { useState, useEffect, useCallback } from 'react';
import { AuthContext } from './authContextInstance';
import { authApi } from '../../../services/api/authApi';
import { tokenStorage } from '../../../utils/tokenStorage';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => tokenStorage.getUser());
  const [token, setToken] = useState(() => tokenStorage.getAccessToken());
  const [isLoading, setIsLoading] = useState(true);

  // Restore authenticated session on mount
  useEffect(() => {
    let isMounted = true;

    const restoreSession = async () => {
      const storedToken = tokenStorage.getAccessToken();
      const storedRefreshToken = tokenStorage.getRefreshToken();

      if (!storedToken && !storedRefreshToken) {
        if (isMounted) setIsLoading(false);
        return;
      }

      try {
        if (storedToken) {
          const userData = await authApi.getCurrentUser();
          if (isMounted) {
            setUser(userData);
            tokenStorage.setUser(userData);
          }
        } else if (storedRefreshToken) {
          const refreshRes = await authApi.refreshTokens(storedRefreshToken);
          if (refreshRes?.jwt) {
            tokenStorage.setAccessToken(refreshRes.jwt);
            if (refreshRes.refreshToken) tokenStorage.setRefreshToken(refreshRes.refreshToken);
            const resolvedUser = refreshRes.userResponse || await authApi.getCurrentUser();
            if (isMounted) {
              setToken(refreshRes.jwt);
              setUser(resolvedUser);
              tokenStorage.setUser(resolvedUser);
            }
          }
        }
      } catch (err) {
        console.warn('Failed to restore session:', err?.message || err);
        tokenStorage.clear();
        if (isMounted) {
          setUser(null);
          setToken(null);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    restoreSession();

    const handleSessionExpired = () => {
      setUser(null);
      setToken(null);
    };

    window.addEventListener('auth:session-expired', handleSessionExpired);
    return () => {
      isMounted = false;
      window.removeEventListener('auth:session-expired', handleSessionExpired);
    };
  }, []);

  const login = useCallback(async (email, password, rememberMe = true) => {
    const data = await authApi.login({ email, password });
    const { jwt, refreshToken } = data;

    tokenStorage.setAccessToken(jwt, rememberMe);
    if (refreshToken) {
      tokenStorage.setRefreshToken(refreshToken, rememberMe);
    }
    setToken(jwt);

    // Use userResponse from login response if present; fetch via /me only if missing
    let resolvedUser = data.userResponse || null;
    if (!resolvedUser) {
      try {
        const meProfile = await authApi.getCurrentUser();
        if (meProfile) {
          resolvedUser = meProfile;
        }
      } catch (profileErr) {
        console.warn('Failed to fetch user profile via /me:', profileErr);
      }
    }

    if (resolvedUser) {
      tokenStorage.setUser(resolvedUser, rememberMe);
      setUser(resolvedUser);
    }

    return { user: resolvedUser, role: resolvedUser?.role, token: jwt };
  }, []);

  const setAuthSession = useCallback((tokens, profile = null) => {
    if (tokens?.jwt) {
      tokenStorage.setAccessToken(tokens.jwt);
      setToken(tokens.jwt);
    }
    if (tokens?.refreshToken) {
      tokenStorage.setRefreshToken(tokens.refreshToken);
    }
    if (profile) {
      tokenStorage.setUser(profile);
      setUser(profile);
    }
  }, []);

  const logout = useCallback(async () => {
    const refreshToken = tokenStorage.getRefreshToken();
    try {
      if (refreshToken) {
        await authApi.logout(refreshToken);
      }
    } catch (err) {
      console.warn('Backend logout failed or offline:', err?.message);
    } finally {
      tokenStorage.clear();
      setUser(null);
      setToken(null);
    }
  }, []);

  const refreshUser = useCallback(async () => {
    try {
      const userData = await authApi.getCurrentUser();
      setUser(userData);
      tokenStorage.setUser(userData);
      return userData;
    } catch (err) {
      console.error('Failed to reload user:', err);
      return null;
    }
  }, []);

  const value = {
    user,
    role: user?.role || null,
    token,
    isAuthenticated: Boolean(token && user),
    isLoading,
    login,
    logout,
    refreshUser,
    setUser,
    setAuthSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
