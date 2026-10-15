import { apiClient } from '../../services/api/apiClient';

/**
 * Education API service layer.
 * Base path: /api/v1/users/me/educations
 * All endpoints require Bearer token (Auth required).
 */
export const educationApi = {
  /** POST /api/v1/users/me/educations — Add an education entry. */
  async addEducation(payload) {
    const res = await apiClient.post('/api/v1/users/me/educations', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/educations — List all education entries. */
  async listEducations() {
    const res = await apiClient.get('/api/v1/users/me/educations');
    return res.data;
  },

  /** GET /api/v1/users/me/educations/:educationId — Get one education entry. */
  async getEducation(educationId) {
    const res = await apiClient.get(`/api/v1/users/me/educations/${educationId}`);
    return res.data;
  },

  /** PUT /api/v1/users/me/educations/:educationId — Update an education entry. */
  async updateEducation(educationId, payload) {
    const res = await apiClient.put(`/api/v1/users/me/educations/${educationId}`, payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/educations/:educationId — Delete an education entry. */
  async deleteEducation(educationId) {
    const res = await apiClient.delete(`/api/v1/users/me/educations/${educationId}`);
    return res.data;
  },
};
