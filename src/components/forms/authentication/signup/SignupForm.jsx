import { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, Briefcase, UserCheck, Loader2 } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import SocialAuthButtons from '../oauth/SocialAuthButtons';
import { useToast } from '../../../common/toast';
import { authApi } from '../../../../services/api/authApi';
import { getErrorMessage } from '../../../../services/api/apiClient';
import { tokenStorage } from '../../../../utils/tokenStorage';

export default function SignupForm() {
  const navigate = useNavigate();
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('JOB_SEEKER'); // default JOB_SEEKER, optional EMPLOYER

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPhone = phone.trim();

    if (!trimmedName) {
      toast.error('Full name is required.', 'Validation Error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      toast.error('Please provide a valid email address.', 'Invalid Email');
      return;
    }

    if (password.length < 6) {
      toast.warning('Password must be at least 6 characters long.', 'Password Too Short');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match. Please verify both fields.', 'Password Mismatch');
      return;
    }

    setIsLoading(true);
    try {
      const response = await authApi.register({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone || undefined,
        password,
        role,
      });

      // Temporarily store returned tokens if backend returned them
      if (response?.jwt) {
        tokenStorage.setAccessToken(response.jwt);
      }
      if (response?.refreshToken) {
        tokenStorage.setRefreshToken(response.refreshToken);
      }

      toast.success('Account created successfully! Please verify your email.', 'Welcome to JobNest');

      // Immediately redirect user to /verify-email?email=...
      navigate(`/verify-email?email=${encodeURIComponent(trimmedEmail)}`, {
        state: {
          email: trimmedEmail,
          role,
          registered: true
        }
      });
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to create account. Please try again.');
      toast.error(message, 'Registration Failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="auth-card-header" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
          Create Your Account
        </h2>
        <p className="auth-subtitle" style={{ fontSize: '0.875rem', color: 'var(--supporting-text)' }}>
          Join our AI-powered job matching platform today
        </p>
      </div>

      {/* Role Selection Toggle */}
      <div style={{
        display: 'flex',
        gap: '8px',
        padding: '4px',
        backgroundColor: 'var(--light-blue-bg)',
        borderRadius: '10px',
        marginBottom: '1.25rem'
      }}>
        <button
          type="button"
          onClick={() => setRole('JOB_SEEKER')}
          disabled={isLoading}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            border: 'none',
            cursor: isLoading ? 'default' : 'pointer',
            backgroundColor: role === 'JOB_SEEKER' ? 'var(--white)' : 'transparent',
            color: role === 'JOB_SEEKER' ? 'var(--primary-blue)' : 'var(--supporting-text)',
            boxShadow: role === 'JOB_SEEKER' ? '0 2px 8px rgba(20, 99, 243, 0.15)' : 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <UserCheck size={18} />
          <span>Job Seeker</span>
        </button>

        <button
          type="button"
          onClick={() => setRole('EMPLOYER')}
          disabled={isLoading}
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '10px 14px',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            border: 'none',
            cursor: isLoading ? 'default' : 'pointer',
            backgroundColor: role === 'EMPLOYER' ? 'var(--white)' : 'transparent',
            color: role === 'EMPLOYER' ? 'var(--primary-blue)' : 'var(--supporting-text)',
            boxShadow: role === 'EMPLOYER' ? '0 2px 8px rgba(20, 99, 243, 0.15)' : 'none',
            transition: 'all 0.2s ease'
          }}
        >
          <Briefcase size={18} />
          <span>Employer</span>
        </button>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="input-group">
          <User className="input-icon" size={20} />
          <input
            type="text"
            className="form-input"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="name"
          />
        </div>

        {/* Email Address */}
        <div className="input-group">
          <Mail className="input-icon" size={20} />
          <input
            type="email"
            className="form-input"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="email"
          />
        </div>

        {/* Phone Number */}
        <div className="input-group">
          <Phone className="input-icon" size={20} />
          <input
            type="tel"
            className="form-input"
            placeholder="Phone Number (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isLoading}
            autoComplete="tel"
          />
        </div>

        {/* Password */}
        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-input"
            placeholder="Password (min 6 chars) *"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="new-password"
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

        {/* Confirm Password */}
        <div className="input-group">
          <Lock className="input-icon" size={20} />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="form-input"
            placeholder="Confirm Password *"
            required
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            disabled={isLoading}
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <p className="password-guidance" style={{ fontSize: '0.785rem', color: 'var(--supporting-text)' }}>
          Password must be at least 6 characters with letters and numbers.
        </p>

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
              <span>Creating Account...</span>
            </>
          ) : (
            'Create Account'
          )}
        </button>
      </form>

      <div className="divider">OR</div>

      <SocialAuthButtons />

      <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.875rem' }}>
        <span style={{ color: 'var(--supporting-text)' }}>Already have an account? </span>
        <Link to="/login" style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>
          Log In
        </Link>
      </div>
    </>
  );
}
