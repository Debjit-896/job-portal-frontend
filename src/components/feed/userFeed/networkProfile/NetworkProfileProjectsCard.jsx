import { FolderGit2, Briefcase, ShoppingCart } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function NetworkProfileProjectsCard({ projects = [] }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#F1F5F9]">
        <FolderGit2 size={16} className="text-[#1463F3]" />
        <h3 className="text-[14px] font-bold text-[#0F172A]">Projects</h3>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-4">
        {projects.map((proj) => (
          <div key={proj.id} className="flex items-start gap-3.5">
            {/* Project icon */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                proj.iconType === 'cart'
                  ? 'bg-[#DCFCE7] text-[#16A34A]'
                  : 'bg-[#F3E8FF] text-[#9333EA]'
              }`}
            >
              {proj.iconType === 'cart' ? (
                <ShoppingCart size={17} />
              ) : (
                <Briefcase size={17} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h4 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                {proj.title}
              </h4>
              <p className="text-[12px] text-[#64748B] mt-0.5">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex items-center gap-1.5 flex-wrap mt-2">
                {proj.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
