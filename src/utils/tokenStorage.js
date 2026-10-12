/**
 * Token and authentication session storage utility.
 * Manages access tokens, refresh tokens, and user session metadata.
 */

const ACCESS_TOKEN_KEY = 'jobportal_access_token';
const REFRESH_TOKEN_KEY = 'jobportal_refresh_token';
const USER_KEY = 'jobportal_user';

let memoryAccessToken = null;

export const tokenStorage = {
  getAccessToken() {
    if (memoryAccessToken) return memoryAccessToken;
    return localStorage.getItem(ACCESS_TOKEN_KEY) || sessionStorage.getItem(ACCESS_TOKEN_KEY);
  },

  setAccessToken(token, remember = true) {
    memoryAccessToken = token;
    if (token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, token);
      if (!remember) {
        sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
      }
    } else {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    }
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY) || sessionStorage.getItem(REFRESH_TOKEN_KEY);
  },

  setRefreshToken(token, remember = true) {
    if (token) {
      localStorage.setItem(REFRESH_TOKEN_KEY, token);
      if (!remember) {
        sessionStorage.setItem(REFRESH_TOKEN_KEY, token);
      }
    } else {
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    }
  },

  getUser() {
    const raw = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },

  setUser(user, remember = true) {
    if (user) {
      const data = JSON.stringify(user);
      localStorage.setItem(USER_KEY, data);
      if (!remember) {
        sessionStorage.setItem(USER_KEY, data);
      }
    } else {
      localStorage.removeItem(USER_KEY);
      sessionStorage.removeItem(USER_KEY);
    }
  },

  clear() {
    memoryAccessToken = null;
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    localStorage.removeItem(USER_KEY);
  }
};
