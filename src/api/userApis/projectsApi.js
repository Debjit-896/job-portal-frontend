import { apiClient } from '../services/api/apiClient';

/**
 * Projects API service layer.
 * Base path: /api/v1/users/me/projects
 * All endpoints require Bearer token (Auth required).
 */
export const projectsApi = {
  /** POST /api/v1/users/me/projects — Add a project. */
  async addProject(payload) {
    const res = await apiClient.post('/api/v1/users/me/projects', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/projects — List all projects. */
  async listProjects() {
    const res = await apiClient.get('/api/v1/users/me/projects');
    return res.data;
  },

  /** PUT /api/v1/users/me/projects/:projectId — Update a project. */
  async updateProject(projectId, payload) {
    const res = await apiClient.put(`/api/v1/users/me/projects/${projectId}`, payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/projects/:projectId — Delete a project. */
  async deleteProject(projectId) {
    const res = await apiClient.delete(`/api/v1/users/me/projects/${projectId}`);
    return res.data;
  },
};
