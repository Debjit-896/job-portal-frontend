import { ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function EmployeesAtCompanyCard({ company, onViewAll }) {
  const employees = company.employeesPreview || [];
  const totalEmployeesCount = company.employeesTotalCount || 46;

  return (
    <SectionCard className="p-4.5 bg-white border border-[#E2E8F0] shadow-sm rounded-[14px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-[#F1F5F9]">
        <h3 className="text-[13.5px] font-bold text-[#0F172A]">
          Employees at {company.name.split(' ')[0]}
        </h3>
        <button
          type="button"
          onClick={onViewAll}
          className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-0.5 hover:underline bg-transparent border-0 cursor-pointer"
        >
          View All <ArrowRight size={12} />
        </button>
      </div>

      {/* Row of avatars */}
      <div className="flex items-center gap-2 mb-3">
        {employees.slice(0, 6).map((emp) => (
          <div
            key={emp.id}
            className="w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm shrink-0 bg-[#E2E8F0]"
            title={emp.name}
          >
            <img
              src={emp.avatar}
              alt={emp.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {totalEmployeesCount > 0 && (
          <div className="w-8 h-8 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center text-[10.5px] font-semibold text-[#64748B] shrink-0">
            +{totalEmployeesCount}
          </div>
        )}
      </div>

      <p className="text-[11px] text-[#64748B]">
        Join 100+ professionals already working here
      </p>
    </SectionCard>
  );
}
