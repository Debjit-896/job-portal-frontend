import React from 'react';
import { FolderGit2, Edit2, ArrowRight, Plus, Trash2 } from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';
import { Project } from '../../../types/profile';

export interface ProjectsCardProps {
  projects?: Project[];
  onAdd?: () => void;
  onEdit?: (item?: Project) => void;
  onDelete?: (id: string) => void;
  onShowAll?: () => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  projects = [],
  onAdd,
  onEdit,
  onDelete,
  onShowAll,
}) => {
  const visibleProjects = projects.slice(0, 3);

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <FolderGit2 size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Projects</h3>
          {projects.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {projects.length}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
            >
              <Plus size={13} />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <FolderGit2 size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No projects added yet</p>
          <p className="text-[11px] mt-0.5">Showcase codebases, web apps, and personal projects</p>
          {onAdd && (
            <button
              type="button"
              onClick={onAdd}
              className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
            >
              <Plus size={12} />
              <span>Add Project</span>
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {visibleProjects.map((proj) => (
            <div key={proj.id} className="flex items-start justify-between gap-3.5">
              <div className="flex items-start gap-3.5 min-w-0 flex-1">
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

                  {proj.tags && proj.tags.length > 0 && (
                    <div className="flex items-center gap-1.5 flex-wrap mt-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                {onEdit && (
                  <button
                    type="button"
                    onClick={() => onEdit(proj)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit project"
                  >
                    <Edit2 size={13} />
                  </button>
                )}
                {onDelete && (
                  <button
                    type="button"
                    onClick={() => onDelete(proj.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete project"
                  >
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Show all button when > 3 items */}
      {projects.length > 3 && onShowAll && (
        <div className="mt-4 pt-3 border-t border-[#F1F5F9]">
          <button
            type="button"
            onClick={onShowAll}
            className="text-[#1463F3] hover:text-[#0F52CC] text-[12.5px] font-semibold flex items-center gap-1.5 hover:underline bg-transparent border-0 cursor-pointer"
          >
            <span>Show all {projects.length} projects</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </SectionCard>
  );
};

export default ProjectsCard;
