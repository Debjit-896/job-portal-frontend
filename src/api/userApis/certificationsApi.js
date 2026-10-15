import { apiClient } from '../../services/api/apiClient';

/**
 * Certification API service layer.
 * Base path: /api/v1/users/me/certifications
 * All endpoints require Bearer token (Auth required).
 */
export const certificationsApi = {
  /** POST /api/v1/users/me/certifications — Add a certification. */
  async addCertification(payload) {
    const res = await apiClient.post('/api/v1/users/me/certifications', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/certifications — List all certifications. */
  async listCertifications() {
    const res = await apiClient.get('/api/v1/users/me/certifications');
    return res.data;
  },

  /** PUT /api/v1/users/me/certifications/:certificationId — Update a certification. */
  async updateCertification(certificationId, payload) {
    const res = await apiClient.put(`/api/v1/users/me/certifications/${certificationId}`, payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/certifications/:certificationId — Delete a certification. */
  async deleteCertification(certificationId) {
    const res = await apiClient.delete(`/api/v1/users/me/certifications/${certificationId}`);
    return res.data;
  },
};
