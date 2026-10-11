import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './components/forms/authentication/oauth/AuthPage';
import AuthCard from './components/forms/authentication/oauth/AuthCard';
import SignupForm from './components/forms/authentication/signup/SignupForm';
import LoginForm from './components/forms/authentication/login/LoginForm';
import OTPForm from './components/forms/authentication/otp/OTPForm';
import ResetPasswordForm from './components/forms/authentication/password/ResetPasswordForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />

        <Route path="/signup" element={
          <AuthPage>
            <AuthCard>
              <SignupForm />
            </AuthCard>
          </AuthPage>
        } />

        <Route path="/login" element={
          <AuthPage>
            <AuthCard>
              <LoginForm />
            </AuthCard>
          </AuthPage>
        } />

        <Route path="/verify-otp" element={
          <AuthPage>
            <AuthCard>
              <OTPForm />
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
      </Routes>
    </Router>
  );
}

export default App;
