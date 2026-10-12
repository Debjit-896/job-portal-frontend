import { Link, useLocation } from 'react-router-dom';

export default function AuthCard({ children }) {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <>
      <div className="top-nav">
        {isLogin ? (
          <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
        ) : (
          <span>Already have an account? <Link to="/login">Log In</Link></span>
        )}
      </div>

      <div className="auth-card-container">
        <div className="auth-card">
          {children}
        </div>
      </div>
    </>
  );
}
