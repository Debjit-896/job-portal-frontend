import { User, Mail, Phone, Lock } from 'lucide-react';
import SectionCard from '../../../../common/userCommon/SectionCard';

export default function AccountInfoSection({
  account = {
    fullName: 'Debjit Pal',
    email: 'debjitpal123@gmail.com',
    phone: '+91 98765 43210',
    passwordMasked: '*********',
  },
  onEdit,
  onChangePassword,
}) {
  return (
    <SectionCard className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-[15px] font-bold text-[#102E6D] m-0">
            Account Information
          </h2>
          <p className="text-xs text-[#64748B] mt-1 mb-0">
            Update your basic account details
          </p>
        </div>

        <button
          type="button"
          onClick={onEdit}
          className="bg-white hover:bg-slate-50 text-[#1463F3] border border-[#BFDBFE] rounded-lg px-4 py-1.5 text-xs font-semibold cursor-pointer transition-colors"
        >
          Edit
        </button>
      </div>

      {/* Fields List */}
      <div className="flex flex-col gap-4">
        {/* Full Name */}
        <div className="flex items-center text-xs">
          <div className="flex items-center gap-2.5 w-[160px] sm:w-[190px] text-[#64748B] shrink-0">
            <User size={15} className="text-[#94A3B8]" />
            <span>Full Name</span>
          </div>
          <span className="font-semibold text-[#1E293B] truncate">
            {account.fullName}
          </span>
        </div>

        {/* Email Address */}
        <div className="flex items-center text-xs">
          <div className="flex items-center gap-2.5 w-[160px] sm:w-[190px] text-[#64748B] shrink-0">
            <Mail size={15} className="text-[#94A3B8]" />
            <span>Email Address</span>
          </div>
          <span className="text-[#1E293B] font-medium truncate">
            {account.email}
          </span>
        </div>

        {/* Phone Number */}
        <div className="flex items-center text-xs">
          <div className="flex items-center gap-2.5 w-[160px] sm:w-[190px] text-[#64748B] shrink-0">
            <Phone size={15} className="text-[#94A3B8]" />
            <span>Phone Number</span>
          </div>
          <span className="text-[#1E293B] font-medium truncate">
            {account.phone}
          </span>
        </div>

        {/* Password */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center">
            <div className="flex items-center gap-2.5 w-[160px] sm:w-[190px] text-[#64748B] shrink-0">
              <Lock size={15} className="text-[#94A3B8]" />
              <span>Password</span>
            </div>
            <span className="text-[#64748B] tracking-wider font-mono">
              {account.passwordMasked}
            </span>
          </div>

          <button
            type="button"
            onClick={onChangePassword}
            className="bg-transparent border-0 text-[#1463F3] hover:underline font-semibold text-xs cursor-pointer"
          >
            Change
          </button>
        </div>
      </div>
    </SectionCard>
  );
}
