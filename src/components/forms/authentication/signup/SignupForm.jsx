import { useState } from 'react';
import { User, Mail, Phone, Lock, Eye, EyeOff, Briefcase, UserCheck, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
  const [role, setRole] = useState('JOB_SEEKER');

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

      if (response?.jwt) {
        tokenStorage.setAccessToken(response.jwt);
      }
      if (response?.refreshToken) {
        tokenStorage.setRefreshToken(response.refreshToken);
      }

      toast.success('Account created successfully! Please verify your email.', 'Welcome to JobNest');

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
      <div className="mb-5 text-center">
        <h2 className="text-[1.6rem] font-bold text-[#102E6D] mb-1">
          Create Your Account
        </h2>
        <p className="text-sm text-[#627BAF]">
          Join our AI-powered job matching platform today
        </p>
      </div>

      {/* Role Selection Toggle */}
      <div className="flex gap-2 p-1 bg-[#EAF3FF] rounded-[10px] mb-5">
        <button
          type="button"
          onClick={() => setRole('JOB_SEEKER')}
          disabled={isLoading}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
            role === 'JOB_SEEKER'
              ? 'bg-white text-[#1463F3] shadow-[0_2px_8px_rgba(20,99,243,0.15)]'
              : 'bg-transparent text-[#627BAF] hover:text-[#102E6D]'
          }`}
        >
          <UserCheck size={18} />
          <span>Job Seeker</span>
        </button>

        <button
          type="button"
          onClick={() => setRole('EMPLOYER')}
          disabled={isLoading}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
            role === 'EMPLOYER'
              ? 'bg-white text-[#1463F3] shadow-[0_2px_8px_rgba(20,99,243,0.15)]'
              : 'bg-transparent text-[#627BAF] hover:text-[#102E6D]'
          }`}
        >
          <Briefcase size={18} />
          <span>Employer</span>
        </button>
      </div>

      <form className="flex flex-col gap-3.5 w-full" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="relative flex items-center">
          <User className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type="text"
            placeholder="Full Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="name"
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
          />
        </div>

        {/* Email Address */}
        <div className="relative flex items-center">
          <Mail className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="email"
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
          />
        </div>

        {/* Phone Number */}
        <div className="relative flex items-center">
          <Phone className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isLoading}
            autoComplete="tel"
            className="w-full pl-11 pr-4 py-2.5 bg-white border border-[#D8E6FF] rounded-lg text-sm text-[#102E6D] placeholder-[#8DA0C2] outline-none transition-all focus:border-[#1463F3] focus:ring-2 focus:ring-[#1463F3]/15"
          />
        </div>

        {/* Password */}
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password (min 6 chars) *"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="new-password"
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

        {/* Confirm Password */}
        <div className="relative flex items-center">
          <Lock className="absolute left-3.5 text-[#8DA0C2] pointer-events-none" size={19} />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password *"
            required
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="new-password"
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 w-full py-2.5 bg-[#1463F3] text-white rounded-lg text-sm font-semibold hover:bg-[#104ec4] transition-colors shadow-[0_2px_8px_rgba(20,99,243,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Creating account...</span>
            </>
          ) : (
            <span>Create Account</span>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-4 w-full">
        <div className="flex-1 h-px bg-[#E2E8F0]" />
        <span className="px-3 text-xs text-[#8DA0C2]">or sign up with</span>
        <div className="flex-1 h-px bg-[#E2E8F0]" />
      </div>

      {/* Social Auth */}
      <SocialAuthButtons />
    </>
  );
}
