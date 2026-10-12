/**
 * src/api/index.js — Barrel entry point for all API service modules.
 *
 * Import any API from this single location:
 *   import { authApi, userApi, educationApi, ... } from '../api';
 */

// A. Authentication (17 APIs)
export * from '../services/api/authApi';
export { authApi } from '../services/api/authApi';

// B. User / Account / Profile / Sessions (16 APIs)
export { userApi } from './userApi';

// C. Education (5 APIs)
export { educationApi } from './educationApi';

// D. Experience (5 APIs)
export { experienceApi } from './experienceApi';

// E. Skills (4 APIs)
export { skillsApi } from './skillsApi';

// F. Certifications (4 APIs)
export { certificationsApi } from './certificationsApi';

// G. Projects (4 APIs)
export { projectsApi } from './projectsApi';

// H. Languages (4 APIs)
export { languagesApi } from './languagesApi';

// I. Locations (4 APIs)
export { locationsApi } from './locationsApi';

// J. Preferences (3 APIs)
export { preferencesApi } from './preferencesApi';

// K. Public Master Data (2 APIs)
export { masterDataApi } from './masterDataApi';

// L. Health Check (1 API)
export { healthApi } from './healthApi';

// Shared Axios client and error helper
export { apiClient, getErrorMessage } from '../services/api/apiClient';
