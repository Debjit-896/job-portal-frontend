import { apiClient } from '../services/api/apiClient';

/**
 * Skills API service layer.
 * Base path: /api/v1/users/me/skills
 * All endpoints require Bearer token (Auth required).
 */
export const skillsApi = {
  /**
   * POST /api/v1/users/me/skills — Add one or more skills.
   * @param {object|object[]} payload — single skill object or array of skill objects.
   */
  async addSkills(payload) {
    const res = await apiClient.post('/api/v1/users/me/skills', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/skills — List all user skills. */
  async listSkills() {
    const res = await apiClient.get('/api/v1/users/me/skills');
    return res.data;
  },

  /**
   * PUT /api/v1/users/me/skills — Replace the entire skill list.
   * @param {object[]} payload — full replacement array of skill objects.
   */
  async replaceSkills(payload) {
    const res = await apiClient.put('/api/v1/users/me/skills', payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/skills/:skillId — Remove a skill by ID. */
  async deleteSkill(skillId) {
    const res = await apiClient.delete(`/api/v1/users/me/skills/${skillId}`);
    return res.data;
  },
};
