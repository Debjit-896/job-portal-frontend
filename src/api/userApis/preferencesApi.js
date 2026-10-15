import { apiClient } from '../services/api/apiClient';

/**
 * Job Preferences API service layer.
 * Base path: /api/v1/users/me/preferences
 * All endpoints require Bearer token (Auth required).
 */
export const preferencesApi = {
  /** GET /api/v1/users/me/preferences — Retrieve job preferences. */
  async getPreferences() {
    const res = await apiClient.get('/api/v1/users/me/preferences');
    return res.data;
  },

  /**
   * PUT /api/v1/users/me/preferences — Replace job preferences entirely.
   * @param {object} payload — full preferences object.
   */
  async replacePreferences(payload) {
    const res = await apiClient.put('/api/v1/users/me/preferences', payload);
    return res.data;
  },

  /**
   * PATCH /api/v1/users/me/preferences — Partially update job preferences.
   * @param {object} payload — partial preferences object.
   */
  async updatePreferences(payload) {
    const res = await apiClient.patch('/api/v1/users/me/preferences', payload);
    return res.data;
  },
};
