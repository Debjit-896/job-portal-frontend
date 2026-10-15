import { apiClient } from '../services/api/apiClient';

/**
 * Preferred Locations API service layer.
 * Base path: /api/v1/users/me/locations
 * All endpoints require Bearer token (Auth required).
 */
export const locationsApi = {
  /** POST /api/v1/users/me/locations — Add a preferred location. */
  async addLocation(payload) {
    const res = await apiClient.post('/api/v1/users/me/locations', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/locations — List all saved preferred locations. */
  async listLocations() {
    const res = await apiClient.get('/api/v1/users/me/locations');
    return res.data;
  },

  /** PUT /api/v1/users/me/locations/:locationId — Update a preferred location. */
  async updateLocation(locationId, payload) {
    const res = await apiClient.put(`/api/v1/users/me/locations/${locationId}`, payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/locations/:locationId — Delete a preferred location. */
  async deleteLocation(locationId) {
    const res = await apiClient.delete(`/api/v1/users/me/locations/${locationId}`);
    return res.data;
  },
};
