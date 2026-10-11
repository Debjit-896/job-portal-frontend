import { useState, useRef, useEffect } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function OTPForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialEmail = location.state?.email || '';
  const flow = location.state?.flow || 'reset'; // 'signup' or 'reset'

  const [email, setEmail] = useState(initialEmail);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);

  const inputRefs = useRef([]);

  const handleSendOTP = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsOtpSent(true);
    }, 800);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otpValue = otp.join('');
    if (otpValue.length < 6) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);

      if (flow === 'signup') {
        alert('Account verified successfully!');
        navigate('/login');
      } else {
        navigate('/reset-password');
      }
    }, 800);
  };

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    // Take only the last character in case they paste or type multiple
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on Backspace if current is empty
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    if (isOtpSent && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [isOtpSent]);

  return (
    <>
      <div className="auth-card-header" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--dark-navy)' }}>
          {flow === 'signup' ? 'Verify Your Email' : 'Reset Password'}
        </h2>
        <p className="auth-subtitle" style={{ marginBottom: 0 }}>
          {isOtpSent
            ? 'Enter the 6-digit code sent to your email.'
            : 'Enter your email to receive a verification code.'}
        </p>
      </div>

      <form className="auth-form" onSubmit={isOtpSent ? handleVerify : handleSendOTP}>
        <div
          className="input-group"
          style={{
            transform: isOtpSent ? 'translateY(-10px)' : 'translateY(0)',
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Mail className="input-icon" />
          <input
            type="email"
            className="form-input"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={flow === 'signup' || isOtpSent}
            style={{
              backgroundColor: (flow === 'signup' || isOtpSent) ? 'var(--pale-blue)' : 'var(--white)',
              color: (flow === 'signup' || isOtpSent) ? 'var(--supporting-text)' : 'var(--dark-navy)'
            }}
            required
          />
        </div>

        {isOtpSent && (
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="otp-input"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
                required
              />
            ))}
          </div>
        )}

        <button type="submit" className="btn-primary" disabled={isLoading} style={{ marginTop: '1rem' }}>
          {isLoading
            ? 'Processing...'
            : isOtpSent ? 'Verify Now' : 'Send OTP'
          }
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Link to="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          <ArrowLeft size={16} /> Back to Log In
        </Link>
      </div>
    </>
  );
}
