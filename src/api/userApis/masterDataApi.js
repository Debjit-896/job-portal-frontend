import { apiClient } from '../services/api/apiClient';

/**
 * Public Master Data API service layer.
 * These endpoints are public and do NOT require a Bearer token.
 */
export const masterDataApi = {
  /**
   * GET /api/v1/languages — Fetch the supported languages list for dropdowns.
   * Returns the full catalogue of language options available on the platform.
   */
  async getSupportedLanguages() {
    const res = await apiClient.get('/api/v1/languages');
    return res.data;
  },

  /**
   * GET /api/v1/skills — Fetch the supported skills list for dropdowns.
   * Returns the full catalogue of skill options available on the platform.
   */
  async getSupportedSkills() {
    const res = await apiClient.get('/api/v1/skills');
    return res.data;
  },
};
