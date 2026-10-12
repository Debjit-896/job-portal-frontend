/**
 * Resolves the default dashboard URL for a user's role.
 */
export const getDashboardPathForRole = (role) => {
  switch (role) {
    case 'ADMIN':
      return '/admin/dashboard';
    case 'EMPLOYER':
      return '/employer/dashboard';
    case 'JOB_SEEKER':
    default:
      return '/candidate/dashboard';
  }
};
