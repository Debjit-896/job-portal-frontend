import { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, RefreshCw, KeyRound, Check, ShieldCheck, Loader2 } from 'lucide-react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import OtpInput from '../../../common/OtpInput';
import { useToast } from '../../../common/toast';
import { authApi } from '../../../../services/api/authApi';
import { getErrorMessage } from '../../../../services/api/apiClient';

export default function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const toast = useToast();

  // Current Step: 1 = Request OTP, 2 = Verify OTP, 3 = Set New Password
  const [step, setStep] = useState(1);

  // Form State
  const [email, setEmail] = useState(() => (searchParams.get('email') || '').trim());
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // UI State
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  // 60-second countdown effect for Resend OTP
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  // STEP 1: Send OTP to Email
  const handleSendOTP = async (e) => {
    if (e) e.preventDefault();

    const targetEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!targetEmail || !emailRegex.test(targetEmail)) {
      toast.error('Please provide a valid email address.', 'Invalid Email');
      return;
    }

    setIsLoading(true);
    try {
      await authApi.forgotPassword(targetEmail);
      setStep(2);
      setCountdown(60);
      const msg = `A 6-digit reset code has been sent to ${targetEmail}`;
      toast.success(msg, 'Reset Code Sent');
      setOtp(['', '', '', '', '', '']);
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to send reset code. Please check your email.');
      toast.error(message, 'Failed to Send Code');
    } finally {
      setIsLoading(false);
    }
  };

  // STEP 2: Verify 6-digit OTP and get resetToken
  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      toast.warning('Please enter all 6 digits of the reset code.', 'Incomplete Code');
      return;
    }

    const targetEmail = email.trim().toLowerCase();
    setIsLoading(true);
    try {
      const response = await authApi.verifyResetOtp({
        email: targetEmail,
        otp: otpCode,
      });

      const token = response?.resetToken;
      if (!token) {
        throw new Error('Verification succeeded but reset token was not received.');
      }

      setResetToken(token);
      setStep(3);
      toast.success('Code verified successfully! Please enter your new password.', 'Code Verified');
    } catch (err) {
      const message = getErrorMessage(err, 'Invalid or expired reset code. Please try again.');
      toast.error(message, 'Verification Failed');
    } finally {
      setIsLoading(false);
    }
  };

  // STEP 3: Reset Password with resetToken
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.warning('New password must be at least 6 characters long.', 'Password Too Short');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match. Please verify both fields.', 'Password Mismatch');
      return;
    }

    if (!resetToken) {
      toast.error('Reset session expired. Please request a new code.', 'Session Expired');
      setStep(1);
      return;
    }

    setIsLoading(true);
    try {
      await authApi.resetPassword({
        token: resetToken,
        newPassword,
      });

      toast.success('Password reset successfully! Please login with your new password.', 'Password Updated');
      navigate('/login', {
        state: {
          successMessage: 'Password reset successfully! Please login with your new password.',
          email: email.trim().toLowerCase()
        }
      });
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to reset password. The reset session may have expired.');
      toast.error(message, 'Reset Failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 3-Step Progress Indicator */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        gap: '8px'
      }}>
        {[
          { num: 1, label: 'Email', icon: Mail },
          { num: 2, label: 'Verify', icon: KeyRound },
          { num: 3, label: 'Reset', icon: Lock },
        ].map((s, idx) => {
          const Icon = s.icon;
          const isDone = step > s.num;
          const isActive = step === s.num;
          return (
            <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 10px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                backgroundColor: isActive
                  ? 'var(--light-blue-bg)'
                  : isDone
                    ? '#d1fae5'
                    : 'var(--pale-blue)',
                color: isActive
                  ? 'var(--primary-blue)'
                  : isDone
                    ? '#065f46'
                    : 'var(--supporting-text)',
                border: isActive
                  ? '1px solid var(--primary-blue)'
                  : '1px solid transparent'
              }}>
                {isDone ? <Check size={13} /> : <Icon size={13} />}
                <span>{s.label}</span>
              </div>
              {idx < 2 && (
                <div style={{
                  width: '16px',
                  height: '2px',
                  backgroundColor: step > s.num ? '#10B981' : 'var(--input-border)'
                }} />
              )}
            </div>
          );
        })}
      </div>

      <div className="auth-card-header" style={{ marginBottom: '1.25rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
          {step === 1 && 'Forgot Password'}
          {step === 2 && 'Enter Verification Code'}
          {step === 3 && 'Create New Password'}
        </h2>
        <p className="auth-subtitle" style={{ fontSize: '0.875rem', color: 'var(--supporting-text)' }}>
          {step === 1 && 'Enter your email to receive a 6-digit recovery code'}
          {step === 2 && `We sent a 6-digit code to ${email}`}
          {step === 3 && 'Your new password must be at least 6 characters'}
        </p>
      </div>

      {/* STEP 1: Email Form */}
      {step === 1 && (
        <form className="auth-form" onSubmit={handleSendOTP}>
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              className="form-input"
              placeholder="Registered Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              autoComplete="email"
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading || !email.trim()}
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
                <span>Sending Code...</span>
              </>
            ) : (
              'Send OTP'
            )}
          </button>
        </form>
      )}

      {/* STEP 2: Verify 6-Digit OTP */}
      {step === 2 && (
        <form className="auth-form" onSubmit={handleVerifyOTP}>
          <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--supporting-text)' }}>
              6-Digit Reset Code
            </span>
            <OtpInput
              value={otp}
              onChange={setOtp}
              disabled={isLoading}
              hasError={Boolean(error)}
              length={6}
              autoFocus
            />
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0.25rem',
            marginBottom: '1rem'
          }}>
            <button
              type="button"
              onClick={() => setStep(1)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--supporting-text)',
                fontSize: '0.8125rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Change Email
            </button>

            <button
              type="button"
              onClick={handleSendOTP}
              disabled={countdown > 0 || isLoading}
              style={{
                background: 'none',
                border: 'none',
                color: countdown > 0 ? 'var(--supporting-text)' : 'var(--primary-blue)',
                fontSize: '0.8125rem',
                fontWeight: '600',
                cursor: countdown > 0 ? 'default' : 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <RefreshCw size={12} className={isLoading ? 'animate-spin' : ''} />
              {countdown > 0 ? `Resend in ${countdown}s` : 'Resend OTP'}
            </button>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={isLoading || otp.join('').length !== 6}
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
                <span>Verifying...</span>
              </>
            ) : (
              'Verify OTP'
            )}
          </button>
        </form>
      )}

      {/* STEP 3: Set New Password */}
      {step === 3 && (
        <form className="auth-form" onSubmit={handleResetPassword}>
          {/* New Password */}
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input
              type={showNewPassword ? 'text' : 'password'}
              className="form-input"
              placeholder="New Password (min 6 chars)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              autoComplete="new-password"
              autoFocus
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowNewPassword(!showNewPassword)}
              aria-label={showNewPassword ? "Hide password" : "Show password"}
              disabled={isLoading}
              tabIndex={-1}
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
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
      )}

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
