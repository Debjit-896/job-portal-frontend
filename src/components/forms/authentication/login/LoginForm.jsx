import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
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

  const initialEmail = location.state?.email || '';

  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const targetEmail = email.trim().toLowerCase();
    if (!targetEmail || !password) {
      toast.error('Please provide both email address and password.', 'Missing Credentials');
      return;
    }

    setIsLoading(true);
    try {
      const { user, role } = await login(targetEmail, password, rememberMe);
      toast.success(`Welcome back, ${user?.name || 'User'}!`, 'Login Successful');

      const destination = getDashboardPathForRole(role);
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
      <div className="mb-5 text-center">
        <h2 className="text-[1.6rem] font-bold text-[#102E6D] mb-1">
          Welcome Back
        </h2>
        <p className="text-sm text-[#627BAF]">
          Log in to access your jobs, applications, and dashboard
        </p>
      </div>

      <form className="flex flex-col gap-3.5 w-full" onSubmit={handleSubmit}>
        {/* Email Address */}
        <div className="relative flex items-center">
          <Mail className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="email"
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
          />
        </div>

        {/* Password */}
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="current-password"
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

        {/* Remember me & Forgot Password */}
        <div className="flex items-center justify-between text-xs text-[#627BAF]">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-[#1463F3] rounded"
            />
            <span>Remember me</span>
          </label>

          <Link
            to="/forgot-password"
            className="text-[#1463F3] hover:underline font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Logging in...</span>
            </>
          ) : (
            <span>Log In</span>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-4 w-full">
        <div className="flex-1 h-px bg-[#E2E8F0]" />
        <span className="px-3 text-xs text-[#8DA0C2]">or continue with</span>
        <div className="flex-1 h-px bg-[#E2E8F0]" />
      </div>

      {/* Social Auth */}
      <SocialAuthButtons />
    </>
  );
}
