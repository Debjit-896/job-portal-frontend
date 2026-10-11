import BrandingPanel from '../BrandingPanel';

export default function AuthPage({ children }) {
  return (
    <div className="auth-container">
      <BrandingPanel />
      <div className="auth-right">
        {children}
      </div>
    </div>
  );
}
