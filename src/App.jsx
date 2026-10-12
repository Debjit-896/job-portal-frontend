import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './features/auth/context/AuthContext';
import { ToastProvider } from './components/common/toast';
import { useAuth } from './hooks/useAuth';
import AuthPage from './components/forms/authentication/oauth/AuthPage';
import AuthCard from './components/forms/authentication/oauth/AuthCard';
import SignupForm from './components/forms/authentication/signup/SignupForm';
import LoginForm from './components/forms/authentication/login/LoginForm';
import VerifyEmailForm from './components/forms/authentication/otp/VerifyEmailForm';
import ForgotPasswordForm from './components/forms/authentication/password/ForgotPasswordForm';
import ResetPasswordForm from './components/forms/authentication/password/ResetPasswordForm';
import UserDashboard from './panels/users/pages/UserDashboard';
import RecruiterDashboard from './panels/recruiter/pages/RecruiterDashboard';
import AdminDashboard from './panels/admin/pages/AdminDashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';
import RoleBasedRoute from './components/routing/RoleBasedRoute';
import { getDashboardPathForRole } from './utils/navigation';

function RootRedirect() {
  const { isAuthenticated, role, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: 'var(--primary-blue)' }}>
        Loading...
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Navigate to={getDashboardPathForRole(role)} replace />;
}

function PublicOnlyRoute({ children }) {
  const { isAuthenticated, role, isLoading } = useAuth();
  if (isLoading) {
    return null;
  }
  if (isAuthenticated) {
    return <Navigate to={getDashboardPathForRole(role)} replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <Routes>
            {/* Root Redirect based on authentication and role */}
            <Route path="/" element={<RootRedirect />} />

            {/* Public Auth Routes */}
            <Route path="/signup" element={
              <PublicOnlyRoute>
                <AuthPage>
                  <AuthCard>
                    <SignupForm />
                  </AuthCard>
                </AuthPage>
              </PublicOnlyRoute>
            } />

            <Route path="/login" element={
              <PublicOnlyRoute>
                <AuthPage>
                  <AuthCard>
                    <LoginForm />
                  </AuthCard>
                </AuthPage>
              </PublicOnlyRoute>
            } />

            {/* Feature 1: Email OTP Verification */}
            <Route path="/verify-email" element={
              <AuthPage>
                <AuthCard>
                  <VerifyEmailForm />
                </AuthCard>
              </AuthPage>
            } />

            {/* Legacy OTP route alias */}
            <Route path="/verify-otp" element={
              <AuthPage>
                <AuthCard>
                  <VerifyEmailForm />
                </AuthCard>
              </AuthPage>
            } />

            {/* Feature 3: Forgot Password (3-Step OTP Verification Flow) */}
            <Route path="/forgot-password" element={
              <AuthPage>
                <AuthCard>
                  <ForgotPasswordForm />
                </AuthCard>
              </AuthPage>
            } />

            <Route path="/reset-password" element={
              <AuthPage>
                <AuthCard>
                  <ResetPasswordForm />
                </AuthCard>
              </AuthPage>
            } />

            {/* Protected Role-Based Dashboards */}
            {/* Job Seeker / Candidate */}
            <Route path="/candidate/dashboard" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/dashboard" element={<Navigate to="/candidate/dashboard" replace />} />

            {/* Employer / Recruiter */}
            <Route path="/employer/dashboard" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['EMPLOYER']}>
                  <RecruiterDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/recruiter/dashboard" element={<Navigate to="/employer/dashboard" replace />} />

            {/* Administrator */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['ADMIN']}>
                  <AdminDashboard />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />

            {/* Fallback Catch-all Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
