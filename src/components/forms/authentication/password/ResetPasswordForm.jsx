import { useState } from 'react';
import { Lock, Eye, EyeOff, ArrowLeft, Loader2 } from 'lucide-react';
import { useNavigate, useLocation, useSearchParams, Link } from 'react-router-dom';
import { useToast } from '../../../common/toast';
import { authApi } from '../../../../services/api/authApi';
import { getErrorMessage } from '../../../../services/api/apiClient';

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const toast = useToast();

  const resetToken = location.state?.resetToken || searchParams.get('token');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  return (
    <>
      <div className="mb-5 text-center">
        <h2 className="text-[1.6rem] font-bold text-[#102E6D] mb-1">
          Reset Your Password
        </h2>
        <p className="text-sm text-[#627BAF]">
          Please enter and confirm your new password below
        </p>
      </div>

      {isUnauthorized ? (
        <div className="text-center p-4 bg-[#FFFBEB] border border-[#FDE68A] rounded-xl my-2">
          <p className="text-sm text-[#B45309] mb-4">
            No valid password reset token found. Please request a new verification code.
          </p>
          <Link
            to="/forgot-password"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors"
          >
            <span>Request Reset Code</span>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 w-full">
          <div className="relative flex items-center">
            <Lock className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="New Password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              disabled={isLoading}
              className="w-full pl-11 pr-11 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 text-[#8DA0C2] hover:text-[#102E6D] cursor-pointer"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
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
                <span>Updating Password...</span>
              </>
            ) : (
              <span>Reset Password</span>
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
    </>
  );
}
