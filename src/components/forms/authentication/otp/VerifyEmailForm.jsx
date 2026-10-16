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
      await authApi.sendVerificationOtp(targetEmail);
      setIsOtpSent(true);
      setCountdown(60);
      setIsEditingEmail(false);
      toast.success(`Verification code sent to ${targetEmail}`, 'Code Dispatched');
      setOtp(['', '', '', '', '', '']);
    } catch (err) {
      const message = getErrorMessage(err, 'Failed to send verification code. Please try again.');
      toast.error(message, 'Dispatch Failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      toast.warning('Please enter the complete 6-digit code.', 'Incomplete Code');
      return;
    }

    const targetEmail = email.trim().toLowerCase();
    setIsVerifying(true);
    try {
      await authApi.verifyEmail(targetEmail, otpCode);
      toast.success('Your email has been verified! Redirecting to login...', 'Email Verified');

      setTimeout(() => {
        navigate('/login', {
          state: {
            email: targetEmail,
            successMessage: 'Email verified successfully. You can now log in.'
          }
        });
      }, 1500);
    } catch (err) {
      const message = getErrorMessage(err, 'Invalid or expired verification code.');
      toast.error(message, 'Verification Failed');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <>
      <div className="mb-5 text-center">
        <h2 className="text-[1.6rem] font-bold text-[#102E6D] mb-1">
          Verify Your Email
        </h2>
        <p className="text-sm text-[#627BAF]">
          {isOtpSent
            ? 'We have sent a 6-digit verification code to your email'
            : 'Enter your email to receive a verification code'}
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        {/* Email Address Display or Input */}
        <div>
          <label className="block text-xs font-semibold text-[#102E6D] mb-1.5">
            Email Address
          </label>
          <div className="relative flex items-center">
            <Mail className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isOtpSent && !isEditingEmail}
              required
              placeholder="name@example.com"
              className={`w-full pl-11 pr-11 py-2.5 rounded-lg text-sm text-[#102E6D] outline-none transition-all ${
                isOtpSent && !isEditingEmail
                  ? 'bg-[#F4F8FF] border border-[#D8E6FF] text-[#627BAF]'
                  : 'bg-white border border-[#D8E6FF] focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15'
              }`}
            />
            {isOtpSent && (
              <button
                type="button"
                onClick={() => setIsEditingEmail(!isEditingEmail)}
                className="absolute right-3.5 text-[#1463F3] hover:text-[#104ec4] cursor-pointer"
                title={isEditingEmail ? 'Lock email' : 'Change email'}
              >
                {isEditingEmail ? <Check size={18} /> : <Edit2 size={16} />}
              </button>
            )}
          </div>
        </div>

        {!isOtpSent || isEditingEmail ? (
          <button
            type="button"
            onClick={handleSendOTP}
            disabled={isLoading}
            className="w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending Code...</span>
              </>
            ) : (
              <span>Send Verification Code</span>
            )}
          </button>
        ) : (
          <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#102E6D] mb-1">
                Enter 6-Digit Code
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                disabled={isVerifying}
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={isVerifying || otp.join('').length !== 6}
              className="w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isVerifying ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Verifying Code...</span>
                </>
              ) : (
                <span>Verify &amp; Continue</span>
              )}
            </button>

            {/* Resend Link */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-[#627BAF] mt-1">
              <span>Didn&apos;t receive the code?</span>
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
          </form>
        )}

        {/* Back to Login link */}
        <div className="text-center mt-3">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#627BAF] hover:text-[#1463F3] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </>
  );
}
