import { ExternalLink } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function CompanyDetailsCard({ company }) {
  const details = [
    {
      label: 'Website',
      value: company.website,
      isLink: true,
    },
    {
      label: 'Founded',
      value: company.founded,
    },
    {
      label: 'Headquarters',
      value: company.headquarters,
    },
    {
      label: 'Industry',
      value: company.industry,
    },
    {
      label: 'Size',
      value: company.companySize || company.employeesCount,
    },
  ];

  return (
    <SectionCard className="p-4.5 bg-white border border-[#E2E8F0] shadow-sm rounded-[14px]">
      <h3 className="text-[14px] font-bold text-[#0F172A] mb-3.5 pb-2 border-b border-[#F1F5F9]">
        Company Details
      </h3>

      <div className="flex flex-col gap-3">
        {details.map((item) => (
          <div key={item.label} className="flex items-start justify-between gap-4 text-[12px]">
            <span className="text-[#64748B] font-medium shrink-0 w-[95px]">
              {item.label}
            </span>
            <div className="flex-1 text-right truncate">
              {item.isLink ? (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1463F3] hover:underline inline-flex items-center gap-1 font-medium truncate max-w-full justify-end"
                >
                  <span className="truncate">{item.value}</span>
                  <ExternalLink size={12} className="shrink-0" />
                </a>
              ) : (
                <span className="text-[#1E293B] font-medium leading-tight">
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
