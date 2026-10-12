import { apiClient } from '../services/api/apiClient';

/**
 * Experience API service layer.
 * Base path: /api/v1/users/me/experiences
 * All endpoints require Bearer token (Auth required).
 */
export const experienceApi = {
  /** POST /api/v1/users/me/experiences — Add an experience entry. */
  async addExperience(payload) {
    const res = await apiClient.post('/api/v1/users/me/experiences', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/experiences — List all experience entries. */
  async listExperiences() {
    const res = await apiClient.get('/api/v1/users/me/experiences');
    return res.data;
  },

  /** GET /api/v1/users/me/experiences/:experienceId — Get one experience entry. */
  async getExperience(experienceId) {
    const res = await apiClient.get(`/api/v1/users/me/experiences/${experienceId}`);
    return res.data;
  },

  /** PUT /api/v1/users/me/experiences/:experienceId — Update an experience entry. */
  async updateExperience(experienceId, payload) {
    const res = await apiClient.put(`/api/v1/users/me/experiences/${experienceId}`, payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/experiences/:experienceId — Delete an experience entry. */
  async deleteExperience(experienceId) {
    const res = await apiClient.delete(`/api/v1/users/me/experiences/${experienceId}`);
    return res.data;
  },
};
