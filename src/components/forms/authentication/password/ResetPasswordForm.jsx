import { useState } from 'react';
import { Lock, Eye, EyeOff, CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate, useLocation, useSearchParams, Link } from 'react-router-dom';
import { useToast } from '../../../common/toast';
import { authApi } from '../../../../services/api/authApi';
import { getErrorMessage } from '../../../../services/api/apiClient';

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const toast = useToast();

  // Retrieve resetToken from route state or URL query
  const resetToken = location.state?.resetToken || searchParams.get('token');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // If user navigated directly without token
  const isUnauthorized = !resetToken;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.warning('Password must be at least 6 characters long.', 'Password Too Short');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match. Please verify both fields.', 'Password Mismatch');
      return;
    }

    if (!resetToken) {
      toast.error('Missing reset authorization. Please verify your OTP again.', 'Verification Required');
      return;
    }

    setIsLoading(true);
    try {
      await authApi.resetPassword({
        token: resetToken,
        newPassword: password,
      });

      toast.success('Password reset successfully! Please login with your new password.', 'Password Updated');

      // Redirect to login with success toast
      navigate('/login', {
        state: {
          successMessage: 'Password reset successfully! Please login with your new password.'
        }
      });
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to reset password. The reset link or OTP may have expired.');
      toast.error(message, 'Reset Failed');
    } finally {
      setIsLoading(false);
    }
  };

  if (isUnauthorized) {
    return (
      <div className="auth-form" style={{ textAlign: 'center', padding: '1rem 0' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--dark-navy)', fontSize: '1.35rem', fontWeight: '700' }}>
          Verification Required
        </h3>
        <p style={{ color: 'var(--supporting-text)', marginBottom: '1.5rem', lineHeight: '1.5', fontSize: '0.875rem' }}>
          To set a new password, please request and verify a 6-digit recovery code first.
        </p>
        <Link
          to="/forgot-password"
          className="btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', width: '100%' }}
        >
          Go to Forgot Password
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="auth-card-header" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
          Set New Password
        </h2>
        <p className="auth-subtitle" style={{ fontSize: '0.875rem', color: 'var(--supporting-text)' }}>
          Please choose a strong password with at least 6 characters.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-input"
            placeholder="New Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            disabled={isLoading}
            autoFocus
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="form-input"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            disabled={isLoading}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            disabled={isLoading}
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="btn-primary"
          disabled={isLoading}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '0.5rem'
          }}
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Resetting Password...</span>
            </>
          ) : (
            'Reset Password'
          )}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Link
          to="/login"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            color: 'var(--supporting-text)'
          }}
        >
          <ArrowLeft size={16} /> Back to Log In
        </Link>
      </div>
    </>
  );
}
