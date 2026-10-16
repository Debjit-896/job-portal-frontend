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

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState(() => (searchParams.get('email') || '').trim());
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

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
      const response = await authApi.verifyResetOtp(targetEmail, otpCode);
      const token = response?.token || response?.resetToken;
      if (!token) {
        throw new Error('Server did not return a valid reset token.');
      }

      setResetToken(token);
      setStep(3);
      toast.success('Code verified successfully! Now create your new password.', 'Identity Confirmed');
    } catch (err) {
      const message = getErrorMessage(err, 'Invalid or expired reset code. Please try again.');
      toast.error(message, 'Verification Failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.warning('Password must be at least 6 characters long.', 'Password Too Short');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match. Please ensure both fields are identical.', 'Mismatch');
      return;
    }

    setIsLoading(true);
    try {
      await authApi.resetPassword({
        token: resetToken,
        newPassword,
      });

      toast.success('Your password has been reset successfully! Redirecting...', 'Password Reset');

      setTimeout(() => {
        navigate('/login', {
          state: {
            email,
            successMessage: 'Password updated successfully. Please log in.'
          }
        });
      }, 1500);
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to reset password. The reset session may have expired.');
      toast.error(message, 'Reset Failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mb-5 text-center">
        <h2 className="text-[1.6rem] font-bold text-[#102E6D] mb-1">
          {step === 1 && 'Reset Password'}
          {step === 2 && 'Enter Verification Code'}
          {step === 3 && 'Create New Password'}
        </h2>
        <p className="text-sm text-[#627BAF]">
          {step === 1 && 'Enter your email address to receive a 6-digit recovery code'}
          {step === 2 && `We sent a code to ${email}`}
          {step === 3 && 'Choose a strong password to protect your account'}
        </p>
      </div>

      {step === 1 && (
        <form onSubmit={handleSendOTP} className="flex flex-col gap-4 w-full">
          <div>
            <label className="block text-xs font-semibold text-[#102E6D] mb-1.5">
              Email Address
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending Code...</span>
              </>
            ) : (
              <span>Send Recovery Code</span>
            )}
          </button>

          <div className="text-center mt-2">
            <Link
              to="/login"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#627BAF] hover:text-[#1463F3] transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Login</span>
            </Link>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4 w-full">
          <div>
            <label className="block text-xs font-semibold text-[#102E6D] mb-1">
              Enter 6-Digit Code
            </label>
            <OtpInput
              value={otp}
              onChange={setOtp}
              disabled={isLoading}
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.join('').length !== 6}
            className="w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Verifying...</span>
              </>
            ) : (
              <span>Verify Code</span>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#627BAF] mt-1">
            <span>Didn&apos;t get code?</span>
            {countdown > 0 ? (
              <span className="font-semibold text-[#1463F3]">
                Resend in {countdown}s
              </span>
            ) : (
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={isLoading}
                className="font-semibold text-[#1463F3] hover:underline cursor-pointer flex items-center gap-1"
              >
                <RefreshCw size={12} className={isLoading ? 'animate-spin' : ''} />
                <span>Resend Code</span>
              </button>
            )}
          </div>

          <div className="text-center mt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#627BAF] hover:text-[#1463F3] transition-colors cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Change Email Address</span>
            </button>
          </div>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword} className="flex flex-col gap-3.5 w-full">
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
            <input
              type={showNewPassword ? 'text' : 'password'}
              placeholder="New Password (min 6 chars)"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              className="w-full pl-11 pr-11 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-3.5 text-[#8DA0C2] hover:text-[#102E6D] cursor-pointer"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              className="w-full pl-11 pr-11 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3.5 text-[#8DA0C2] hover:text-[#102E6D] cursor-pointer"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Resetting Password...</span>
              </>
            ) : (
              <span>Set New Password</span>
            )}
          </button>
        </form>
      )}
    </>
  );
}
