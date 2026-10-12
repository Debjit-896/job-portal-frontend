import { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialAuthButtons from '../oauth/SocialAuthButtons';
import { useAuth } from '../../../../hooks/useAuth';
import { useToast } from '../../../common/toast';
import { getErrorMessage } from '../../../../services/api/apiClient';
import { getDashboardPathForRole } from '../../../../utils/navigation';

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const toast = useToast();

  // Read prefilled email if passed from verification or signup
  const initialEmail = location.state?.email || '';

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Success message passed from verification (/verify-email) or reset (/reset-password)
  const successMessage = location.state?.successMessage;

  // Display sliding notification if arrived with a success message
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, 'Verification Notice');
    }
  }, [successMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const targetEmail = email.trim().toLowerCase();
    if (!targetEmail || !password) {
      toast.error('Please provide both email address and password.', 'Missing Credentials');
      return;
    }

    setIsLoading(true);
    try {
      // Calls POST /api/v1/auth/login and immediately calls GET /api/v1/auth/me
      const { user, role } = await login(targetEmail, password, rememberMe);

      toast.success(`Welcome back, ${user?.name || 'User'}!`, 'Login Successful');

      // Check role-based destination
      const destination = getDashboardPathForRole(role);

      // If user had a deep link before login (except auth pages), respect that
      const fromPath = location.state?.from?.pathname;
      const targetPath = (fromPath && !fromPath.startsWith('/login') && !fromPath.startsWith('/signup') && !fromPath.startsWith('/verify'))
        ? fromPath
        : destination;

      navigate(targetPath, {
        replace: true,
        state: {
          showUnverifiedWarning: user?.emailVerified === false
        }
      });
    } catch (err) {
      const message = getErrorMessage(err, 'Invalid email or password. Please verify your credentials.');
      toast.error(message, 'Login Failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="auth-card-header" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
          Welcome Back
        </h2>
        <p className="auth-subtitle" style={{ fontSize: '0.875rem', color: 'var(--supporting-text)' }}>
          Log in to access your jobs, applications, and dashboard
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Email Address */}
        <div className="input-group">
          <Mail className="input-icon" size={20} />
          <input
            type="email"
            className="form-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="current-password"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            disabled={isLoading}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="form-footer" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0.5rem 0 1rem',
          fontSize: '0.875rem'
        }}>
          <label className="remember-me" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none',
            color: 'var(--dark-navy)'
          }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              disabled={isLoading}
            />
            <span>Remember Me</span>
          </label>
          <Link
            to="/forgot-password"
            style={{
              color: 'var(--primary-blue)',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={isLoading}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Logging In...</span>
            </>
          ) : (
            'Log In'
          )}
        </button>
      </form>

      <div className="divider">OR</div>

      <SocialAuthButtons />

      <div style={{ textAlign: 'center', marginTop: '1.25rem', fontSize: '0.875rem' }}>
        <span style={{ color: 'var(--supporting-text)' }}>Don't have an account? </span>
        <Link to="/signup" style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>
          Sign Up
        </Link>
      </div>
    </>
  );
}
