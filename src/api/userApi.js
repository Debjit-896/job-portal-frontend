import { apiClient } from '../services/api/apiClient';

/**
 * User, Account, Profile and Session API service layer.
 * Base paths:
 *   /api/v1/users
 *   /api/v1/users/me
 *   /api/v1/users/me/sessions
 *   /api/v1/users/me/profile
 */
export const userApi = {
  // ── Account ──────────────────────────────────────────────────────────────

  /** GET /api/v1/users/me — Get own account details. (Auth required) */
  async getMe() {
    const res = await apiClient.get('/api/v1/users/me');
    return res.data;
  },

  /** PATCH /api/v1/users/me — Update own account information. (Auth required) */
  async updateMe(payload) {
    const res = await apiClient.patch('/api/v1/users/me', payload);
    return res.data;
  },

  /** DELETE /api/v1/users/me — Request own account deletion. (Auth required) */
  async deleteMe() {
    const res = await apiClient.delete('/api/v1/users/me');
    return res.data;
  },

  /** GET /api/v1/users/me/account-status — Check own account status. (Auth required) */
  async getAccountStatus() {
    const res = await apiClient.get('/api/v1/users/me/account-status');
    return res.data;
  },

  // ── Sessions ──────────────────────────────────────────────────────────────

  /** GET /api/v1/users/me/sessions — List active sessions. (Auth required) */
  async getSessions() {
    const res = await apiClient.get('/api/v1/users/me/sessions');
    return res.data;
  },

  /** DELETE /api/v1/users/me/sessions/:sessionId — Revoke one session. (Auth required) */
  async revokeSession(sessionId) {
    const res = await apiClient.delete(`/api/v1/users/me/sessions/${sessionId}`);
    return res.data;
  },

  /** DELETE /api/v1/users/me/sessions — Revoke all sessions. (Auth required) */
  async revokeAllSessions() {
    const res = await apiClient.delete('/api/v1/users/me/sessions');
    return res.data;
  },

  // ── Profile ───────────────────────────────────────────────────────────────

  /** GET /api/v1/users/me/profile — Get own profile. (Auth required) */
  async getProfile() {
    const res = await apiClient.get('/api/v1/users/me/profile');
    return res.data;
  },

  /** PUT /api/v1/users/me/profile — Create or fully replace own profile. (Auth required) */
  async replaceProfile(payload) {
    const res = await apiClient.put('/api/v1/users/me/profile', payload);
    return res.data;
  },

  /** PATCH /api/v1/users/me/profile — Partially update own profile. (Auth required) */
  async updateProfile(payload) {
    const res = await apiClient.patch('/api/v1/users/me/profile', payload);
    return res.data;
  },

  // ── Public Profile ────────────────────────────────────────────────────────

  /** GET /api/v1/users/:userId/public-profile — View a user's public profile. */
  async getPublicProfile(userId) {
    const res = await apiClient.get(`/api/v1/users/${userId}/public-profile`);
    return res.data;
  },

  // ── Admin: Single User ────────────────────────────────────────────────────

  /**
   * GET /api/v1/users/:id — Retrieve a user by UUID.
   * Requires administrative authorization.
   */
  async getUserById(id) {
    const res = await apiClient.get(`/api/v1/users/${id}`);
    return res.data;
  },

  // ── Admin: User List ──────────────────────────────────────────────────────

  /**
   * GET /api/v1/users/ — List users with optional query params.
   * Requires administrative authorization.
   * @param {object} params — e.g. { page, size, role, status, search }
   */
  async listUsers(params = {}) {
    const res = await apiClient.get('/api/v1/users/', { params });
    return res.data;
  },

  // ── Admin: Account Actions ────────────────────────────────────────────────

  /**
   * PATCH /api/v1/users/:id/suspend — Suspend a user.
   * Requires administrative authorization.
   */
  async suspendUser(id) {
    const res = await apiClient.patch(`/api/v1/users/${id}/suspend`);
    return res.data;
  },

  /**
   * PATCH /api/v1/users/:id/activate — Reactivate a suspended user.
   * Requires administrative authorization.
   */
  async activateUser(id) {
    const res = await apiClient.patch(`/api/v1/users/${id}/activate`);
    return res.data;
  },

  /**
   * DELETE /api/v1/users/:id — Hard-delete a user.
   * Requires administrative authorization.
   */
  async deleteUser(id) {
    const res = await apiClient.delete(`/api/v1/users/${id}`);
    return res.data;
  },
};
