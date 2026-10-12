import { apiClient } from '../services/api/apiClient';

/**
 * Health Check API service layer.
 * Base path: /
 * This endpoint is public and does NOT require a Bearer token.
 */
export const healthApi = {
  /**
   * GET / — Check User Service health status.
   * Returns a simple confirmation that the backend is reachable and running.
   */
  async checkHealth() {
    const res = await apiClient.get('/');
    return res.data;
  },
};
