import { FolderGit2, Edit2, ArrowRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileProjectsCard({ projects = [], onEdit, onViewAll }) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <FolderGit2 size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Projects</h3>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
        >
          <Edit2 size={12} />
          <span>Edit</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-4">
        {projects.map((proj) => (
          <div key={proj.id} className="flex items-start gap-3.5">
            {/* Project icon */}
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                proj.isCloud
                  ? 'bg-[#1463F3] text-white shadow-xs'
                  : 'bg-[#1E293B] text-[#FF9900]'
              }`}
            >
              {proj.isCloud ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              ) : (
                <span className="font-bold text-base">N</span>
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

      {/* View All Projects link */}
      <div className="mt-4 pt-2 border-t border-[#F1F5F9]">
        <button
          type="button"
          onClick={onViewAll}
          className="text-[#1463F3] text-[12px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
        >
          <span>View All Projects</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </SectionCard>
  );
}
