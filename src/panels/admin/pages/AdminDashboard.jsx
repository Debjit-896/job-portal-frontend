import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { LogOut, User, Mail, Shield, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F4F8FF] p-8">
      {/* Header */}
      <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E9EFF8] mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#EAF3FF] text-[#1463F3] rounded-[10px] flex items-center justify-center font-bold text-lg">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'A'}
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#102E6D]">
              System Administration
            </h1>
            <p className="text-sm text-[#627BAF]">
              Platform monitoring, user governance, and security controls
            </p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 py-2 px-4 border border-[#E11D48]/30 rounded-lg bg-transparent text-[#E11D48] font-semibold text-sm hover:bg-[#FFF1F2] transition-colors cursor-pointer"
        >
          <LogOut size={16} />
          Logout
        </button>
      </header>

      {/* Profile Overview Card */}
      <main className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#E9EFF8] max-w-4xl">
        <h2 className="text-lg font-bold text-[#102E6D] mb-6">
          Admin Details
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-[#F4F8FF]">
            <div className="flex items-center gap-2 text-[#627BAF] text-sm mb-1">
              <User size={16} /> Name
            </div>
            <div className="font-semibold text-[#102E6D] truncate">{user?.name || 'N/A'}</div>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F8FF]">
            <div className="flex items-center gap-2 text-[#627BAF] text-sm mb-1">
              <Mail size={16} /> Email
            </div>
            <div className="font-semibold text-[#102E6D] truncate">{user?.email || 'N/A'}</div>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F8FF]">
            <div className="flex items-center gap-2 text-[#627BAF] text-sm mb-1">
              <Shield size={16} /> Role
            </div>
            <div className="font-semibold text-[#1463F3]">{user?.role || 'ADMIN'}</div>
          </div>

          <div className="p-4 rounded-lg bg-[#F4F8FF]">
            <div className="flex items-center gap-2 text-[#627BAF] text-sm mb-1">
              <CheckCircle size={16} /> Status
            </div>
            <div className="font-semibold text-[#10B981]">{user?.status || 'ACTIVE'}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
