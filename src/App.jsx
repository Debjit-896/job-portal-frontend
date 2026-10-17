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
import UserJobPage from './panels/users/pages/UserJobPage';
import UserCompaniesPage from './panels/users/pages/UserCompaniesPage';
import UserSavedJobsPage from './panels/users/pages/UserSavedJobsPage';
import UserNetworkPage from './panels/users/pages/UserNetworkPage';
import UserSettingsPage from './panels/users/pages/UserSettingsPage';
import UserMessagesPage from './panels/users/pages/UserMessagesPage';
import UserNotificationsPage from './panels/users/pages/UserNotificationsPage';
import RecruiterDashboard from './panels/recruiter/pages/RecruiterDashboard';
import AdminDashboard from './panels/admin/pages/AdminDashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';
import RoleBasedRoute from './components/routing/RoleBasedRoute';
import { getDashboardPathForRole } from './utils/navigation';

function RootRedirect() {
  const { isAuthenticated, role, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-[#1463F3]">
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

            <Route path="/candidate/jobs" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserJobPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/jobs" element={<Navigate to="/candidate/jobs" replace />} />

            <Route path="/candidate/companies" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserCompaniesPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/companies" element={<Navigate to="/candidate/companies" replace />} />

            <Route path="/candidate/saved-jobs" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserSavedJobsPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/saved-jobs" element={<Navigate to="/candidate/saved-jobs" replace />} />

            <Route path="/candidate/network" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserNetworkPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/network" element={<Navigate to="/candidate/network" replace />} />

            <Route path="/candidate/settings" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserSettingsPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/settings" element={<Navigate to="/candidate/settings" replace />} />

            <Route path="/candidate/messages" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserMessagesPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/messages" element={<Navigate to="/candidate/messages" replace />} />

            <Route path="/candidate/notifications" element={
              <ProtectedRoute>
                <RoleBasedRoute allowedRoles={['JOB_SEEKER']}>
                  <UserNotificationsPage />
                </RoleBasedRoute>
              </ProtectedRoute>
            } />
            <Route path="/user/notifications" element={<Navigate to="/candidate/notifications" replace />} />

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
