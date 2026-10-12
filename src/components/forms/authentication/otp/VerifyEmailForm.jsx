import { useState, useEffect, useRef } from 'react';
import { Mail, ArrowLeft, RefreshCw, CheckCircle2, Edit2, Check, Loader2 } from 'lucide-react';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import OtpInput from '../../../common/OtpInput';
import { useToast } from '../../../common/toast';
import { authApi } from '../../../../services/api/authApi';
import { getErrorMessage } from '../../../../services/api/apiClient';

export default function VerifyEmailForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const toast = useToast();

  // Read email from search query param or route state
  const initialEmail = (
    searchParams.get('email') ||
    location.state?.email ||
    ''
  ).trim();

  const [email, setEmail] = useState(initialEmail);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  // 60-second countdown timer
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const autoSentRef = useRef(false);

  // If redirected from signup, auto-trigger "Send OTP" on mount at most once
  useEffect(() => {
    if (initialEmail && location.state?.registered && !autoSentRef.current) {
      autoSentRef.current = true;
      handleSendOTP();
    }
  }, []);

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
      await authApi.sendEmailVerification(targetEmail);
      setIsOtpSent(true);
      setIsEditingEmail(false);
      setCountdown(60);
      const msg = `A 6-digit verification code has been sent to ${targetEmail}`;
      toast.success(msg, 'Verification Code Sent');
      setOtp(['', '', '', '', '', '']);
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to send verification code. Please check your email.');
      toast.error(message, 'Failed to Send Code');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    const otpString = otp.join('');
    if (otpString.length !== 6) {
      toast.warning('Please enter all 6 digits of the verification code.', 'Incomplete Code');
      return;
    }

    const targetEmail = email.trim().toLowerCase();
    setIsVerifying(true);
    try {
      await authApi.confirmEmail({
        email: targetEmail,
        otp: otpString,
      });

      toast.success('Email verified successfully! Please log in.', 'Email Verified');
      navigate('/login', {
        state: {
          successMessage: 'Email verified successfully! Please log in.',
          email: targetEmail
        }
      });
    } catch (err) {
      const message = getErrorMessage(err, 'Invalid or expired verification code. Please try again.');
      toast.error(message, 'Verification Failed');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <>
      <div className="auth-card-header" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          backgroundColor: 'var(--light-blue-bg)',
          color: 'var(--primary-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 12px'
        }}>
          <Mail size={24} />
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--dark-navy)', marginBottom: '0.25rem' }}>
          Verify Your Email
        </h2>
        <p className="auth-subtitle" style={{ fontSize: '0.875rem', color: 'var(--supporting-text)' }}>
          {isOtpSent
            ? 'Enter the 6-digit verification code sent to your email.'
            : 'Click "Send OTP" to receive your verification code.'}
        </p>
      </div>

      {/* Email input with view / edit capability */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '6px'
        }}>
          <label style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--dark-navy)' }}>
            Email Address
          </label>
          {isOtpSent && (
            <button
              type="button"
              onClick={() => setIsEditingEmail(!isEditingEmail)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--primary-blue)',
                fontSize: '0.75rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {isEditingEmail ? <Check size={13} /> : <Edit2 size={13} />}
              {isEditingEmail ? 'Done Editing' : 'Change Email'}
            </button>
          )}
        </div>

        <div className="input-group" style={{ marginBottom: 0 }}>
          <Mail className="input-icon" size={20} />
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={(!isEditingEmail && isOtpSent) || isLoading || isVerifying}
            required
            style={{
              backgroundColor: (!isEditingEmail && isOtpSent) ? 'var(--pale-blue)' : 'var(--white)',
              color: (!isEditingEmail && isOtpSent) ? 'var(--supporting-text)' : 'var(--dark-navy)'
            }}
          />
        </div>
      </div>

      {!isOtpSent ? (
        /* Send OTP Button */
        <button
          type="button"
          onClick={handleSendOTP}
          className="btn-primary"
          disabled={isLoading || !email.trim()}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '1rem'
          }}
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Sending OTP...</span>
            </>
          ) : (
            'Send OTP'
          )}
        </button>
      ) : (
        /* OTP Verification Form */
        <form onSubmit={handleVerifyOTP} className="auth-form">
          <div style={{ textAlign: 'center', margin: '0.5rem 0' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: '600', color: 'var(--supporting-text)' }}>
              6-Digit Verification Code
            </span>
            <OtpInput
              value={otp}
              onChange={setOtp}
              disabled={isVerifying}
              hasError={Boolean(error)}
              length={6}
              autoFocus
            />
          </div>

          {/* Resend OTP countdown */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0.25rem',
            marginBottom: '1rem'
          }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--supporting-text)' }}>
              Didn't receive the OTP?
            </span>
            <button
              type="button"
              onClick={handleSendOTP}
              disabled={countdown > 0 || isLoading || isVerifying}
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
            disabled={isVerifying || otp.join('').length !== 6}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            {isVerifying ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              'Verify'
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
