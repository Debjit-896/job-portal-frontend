import { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  if (isSent) {
    return (
      <div className="auth-form" style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--dark-navy)' }}>Check your email</h3>
        <p style={{ color: 'var(--supporting-text)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
          If an account exists for that email, we have sent password reset instructions.
        </p>
        <Link to="/login" className="btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Back to Log In
        </Link>
      </div>
    );
  }

  return (
    <>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <Mail className="input-icon" size={20} />
          <input type="email" className="form-input" placeholder="Email Address" required />
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Reset Link'}
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
