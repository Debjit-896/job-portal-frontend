import { apiClient } from '../services/api/apiClient';

/**
 * Languages API service layer.
 * Base path: /api/v1/users/me/languages
 * All endpoints require Bearer token (Auth required).
 */
export const languagesApi = {
  /**
   * POST /api/v1/users/me/languages — Add one or more languages.
   * @param {object|object[]} payload — single language object or array.
   */
  async addLanguages(payload) {
    const res = await apiClient.post('/api/v1/users/me/languages', payload);
    return res.data;
  },

  /** GET /api/v1/users/me/languages — List all user languages. */
  async listLanguages() {
    const res = await apiClient.get('/api/v1/users/me/languages');
    return res.data;
  },

  /**
   * PUT /api/v1/users/me/languages — Replace the entire language list.
   * @param {object[]} payload — full replacement array of language objects.
   */
  async replaceLanguages(payload) {
    const res = await apiClient.put('/api/v1/users/me/languages', payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me/languages/:languageId — Remove a language by ID. */
  async deleteLanguage(languageId) {
    const res = await apiClient.delete(`/api/v1/users/me/languages/${languageId}`);
    return res.data;
  },
};
