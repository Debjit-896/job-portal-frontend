import axios from 'axios';
import { tokenStorage } from '../../utils/tokenStorage';

const BASE_URL = import.meta.env.VITE_USER_SERVICE_URL !== undefined && import.meta.env.VITE_USER_SERVICE_URL !== ''
  ? import.meta.env.VITE_USER_SERVICE_URL
  : (import.meta.env.DEV ? '' : 'http://localhost:8001');

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Request Interceptor: Attach Bearer token
apiClient.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();
    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Token Refresh & Uniform Error Handling
apiClient.interceptors.response.use(
  (response) => {
    // Check if Spring Security returned an HTML login page with 200 OK
    if (
      typeof response.data === 'string' &&
      (response.data.includes('<!DOCTYPE') || response.data.includes('<html') || response.data.includes('Please sign in'))
    ) {
      const err = new Error(
        'Backend Spring Security intercepted this request with an HTML login page. /api/v1/auth/** must be permitted in SecurityFilterChain.'
      );
      err.isSpringSecurityRedirect = true;
      return Promise.reject(err);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Do not attempt refresh on auth endpoints like login, refresh, register
    const isAuthEndpoint = originalRequest?.url?.includes('/api/v1/auth/login') ||
      originalRequest?.url?.includes('/api/v1/auth/refresh') ||
      originalRequest?.url?.includes('/api/v1/auth/register');

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      const refreshToken = tokenStorage.getRefreshToken();
      if (!refreshToken) {
        tokenStorage.clear();
        window.dispatchEvent(new CustomEvent('auth:session-expired'));
        if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshResponse = await axios.post(`${BASE_URL}/api/v1/auth/refresh`, {
          refreshToken,
        });

        const newAccessToken = refreshResponse.data?.jwt;
        const newRefreshToken = refreshResponse.data?.refreshToken;

        if (newAccessToken) {
          tokenStorage.setAccessToken(newAccessToken);
          if (newRefreshToken) {
            tokenStorage.setRefreshToken(newRefreshToken);
          }
          apiClient.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
          processQueue(null, newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        } else {
          throw new Error('Refresh response did not return an access token');
        }
      } catch (refreshErr) {
        processQueue(refreshErr, null);
        tokenStorage.clear();
        window.dispatchEvent(new CustomEvent('auth:session-expired'));
        if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
        return Promise.reject(refreshErr);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

/**
 * Extracts a user-friendly error message from Axios errors.
 */
export const getErrorMessage = (error, defaultMessage = 'An unexpected error occurred') => {
  const backendMsg = error.response?.data?.message || error.response?.data?.error;
  if (backendMsg && typeof backendMsg === 'string') {
    if (backendMsg.includes('Could not initialize proxy') || backendMsg.includes('no session')) {
      return 'Backend Hibernate Error: LazyInitializationException. The backend confirmEmail() method is missing @Transactional on User entity.';
    }
    if (backendMsg.includes('expired or already used')) {
      return 'Verification code is expired or already used. Please click "Resend OTP" to generate a fresh code.';
    }
    if (/Email Already Registered[^\s]/i.test(backendMsg)) {
      return backendMsg.replace(/Email Already Registered([^\s]+)/i, 'Email already registered: $1');
    }
    return backendMsg;
  }
  if (typeof error.response?.data === 'string') {
    if (error.response.data.includes('<!DOCTYPE') || error.response.data.includes('<html')) {
      return 'The backend server returned an HTML login page instead of JSON. Ensure Spring Security has permitted /api/v1/auth/** without authentication.';
    }
    if (error.response.data.length < 200) {
      return error.response.data;
    }
  }
  if (error.isSpringSecurityRedirect) {
    return error.message;
  }
  if (error.message === 'Network Error') {
    return 'Cannot reach the server or CORS blocked. Please ensure the backend is running on port 8001 and CORS is configured for http://localhost:5173.';
  }
  return error.message || defaultMessage;
};
