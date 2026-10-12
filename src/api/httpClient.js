/**
 * httpClient.js — Centralized Axios instance entry point.
 *
 * Re-exports the shared apiClient (Axios instance) and error helper so that
 * consumers can import from `src/api/httpClient` without coupling to the
 * internal services/api path.
 *
 * The instance is configured with:
 *  - baseURL  : VITE_USER_SERVICE_URL env var (fallback: http://localhost:8001)
 *  - timeout  : 15 000 ms
 *  - headers  : Content-Type: application/json
 *  - request  : Bearer JWT injected automatically from tokenStorage
 *  - response : Transparent token-refresh on 401 with queue; session-expired
 *               event dispatched when refresh also fails.
 */
export { apiClient as default, apiClient, getErrorMessage } from '../services/api/apiClient';
