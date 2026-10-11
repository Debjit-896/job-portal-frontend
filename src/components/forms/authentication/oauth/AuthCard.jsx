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
          <h2>Welcome to <span>JobNest</span></h2>
          <p className="auth-subtitle">
            {isLogin 
              ? "Welcome back! Please enter your details."
              : "Create your account and start your journey towards a better career."}
          </p>

          {location.pathname !== '/forgot-password' && (
            <div className="auth-tabs">
              <Link to="/signup" className={`auth-tab ${!isLogin ? 'active' : ''}`}>
                Sign Up
              </Link>
              <Link to="/login" className={`auth-tab ${isLogin ? 'active' : ''}`}>
                Log In
              </Link>
            </div>
          )}

          {children}
        </div>
      </div>
    </>
  );
}
