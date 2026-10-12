import { useAuth } from '../../../hooks/useAuth';
import { ShieldAlert, LogOut, CheckCircle, Mail, User } from 'lucide-react';
import EmailVerificationBanner from '../../../components/common/EmailVerificationBanner';

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--pale-blue)', padding: '2rem' }}>
      <EmailVerificationBanner />
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'var(--white)',
        padding: '1rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            backgroundColor: 'var(--dark-navy)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--white)'
          }}>
            <ShieldAlert size={22} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--dark-navy)' }}>
              System Administrator Portal
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--supporting-text)' }}>
              Welcome back, {user?.name || 'Administrator'}!
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.625rem 1.25rem',
            borderRadius: '8px',
            border: '1px solid var(--input-border)',
            background: 'var(--white)',
            color: 'var(--dark-navy)',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          <LogOut size={16} /> Log Out
        </button>
      </header>

      <main style={{
        background: 'var(--white)',
        borderRadius: '12px',
        padding: '2rem',
        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
        maxWidth: '800px'
      }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--dark-navy)', marginBottom: '1.5rem' }}>
          Admin Profile & System Status
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem', borderRadius: '8px', background: 'var(--pale-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supporting-text)', fontSize: '0.875rem', marginBottom: '4px' }}>
              <User size={16} /> Name
            </div>
            <div style={{ fontWeight: '600', color: 'var(--dark-navy)' }}>{user?.name || 'N/A'}</div>
          </div>

          <div style={{ padding: '1rem', borderRadius: '8px', background: 'var(--pale-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supporting-text)', fontSize: '0.875rem', marginBottom: '4px' }}>
              <Mail size={16} /> Email Address
            </div>
            <div style={{ fontWeight: '600', color: 'var(--dark-navy)' }}>{user?.email || 'N/A'}</div>
          </div>

          <div style={{ padding: '1rem', borderRadius: '8px', background: 'var(--pale-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supporting-text)', fontSize: '0.875rem', marginBottom: '4px' }}>
              <ShieldAlert size={16} /> Role
            </div>
            <div style={{ fontWeight: '600', color: 'var(--primary-blue)' }}>{user?.role || 'ADMIN'}</div>
          </div>

          <div style={{ padding: '1rem', borderRadius: '8px', background: 'var(--pale-blue)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--supporting-text)', fontSize: '0.875rem', marginBottom: '4px' }}>
              <CheckCircle size={16} /> Status
            </div>
            <div style={{ fontWeight: '600', color: '#10B981' }}>{user?.status || 'ACTIVE'}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
