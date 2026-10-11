import { useState } from 'react';
import { Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="auth-form" style={{ textAlign: 'center', padding: '1rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: '#10B981' }}>
          <CheckCircle size={48} />
        </div>
        <h3 style={{ marginBottom: '1rem', color: 'var(--dark-navy)', fontSize: '1.5rem' }}>Password Updated!</h3>
        <p style={{ color: 'var(--supporting-text)', marginBottom: '2rem', lineHeight: '1.5' }}>
          Your password has been changed successfully. You can now log in with your new password.
        </p>
        <button onClick={() => navigate('/login')} className="btn-primary" style={{ width: '100%' }}>
          Continue to Log In
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="auth-card-header" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--dark-navy)' }}>
          Set New Password
        </h2>
        <p className="auth-subtitle" style={{ marginBottom: 0 }}>
          Must be at least 8 characters.
        </p>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <Lock className="input-icon" />
          <input 
            type={showPassword ? 'text' : 'password'} 
            className="form-input" 
            placeholder="New Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button 
            type="button" 
            className="password-toggle" 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        <div className="input-group">
          <Lock className="input-icon" />
          <input 
            type={showConfirmPassword ? 'text' : 'password'} 
            className="form-input" 
            placeholder="Confirm New Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />
          <button 
            type="button" 
            className="password-toggle" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {error && (
          <div style={{ color: 'var(--error-red)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {error}
          </div>
        )}

        <button type="submit" className="btn-primary" disabled={isLoading} style={{ marginTop: '0.5rem' }}>
          {isLoading ? 'Saving...' : 'Save Password'}
        </button>
      </form>
    </>
  );
}
