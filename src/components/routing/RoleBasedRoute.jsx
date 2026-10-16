import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getDashboardPathForRole } from '../../utils/navigation';

export default function RoleBasedRoute({ children, allowedRoles }) {
  const { user, role, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-[#1463F3]">
        <div>Validating permissions...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={getDashboardPathForRole(role)} replace />;
  }

  return children;
}
