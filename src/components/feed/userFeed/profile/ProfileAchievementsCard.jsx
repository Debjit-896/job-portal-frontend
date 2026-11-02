import { useState } from 'react';
import {
  Trophy,
  Plus,
  Edit2,
  Trash2,
  Calendar,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  X,
  Maximize2,
} from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileAchievementsCard({
  achievements = [],
  onEdit,
  onAdd,
  onDeleteAchievement,
}) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Normalize in case it was a plain string e.g. "Winner - College Hackathon 2024"
  const items = Array.isArray(achievements)
    ? achievements
    : typeof achievements === 'string' && achievements.trim()
    ? [
        {
          id: 'achieve-default',
          title: achievements,
          issuer: 'Award & Recognition',
          date: '2024',
          description: '',
          photo: null,
          fileName: null,
        },
      ]
    : [];

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Trophy size={17} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Achievements</h3>
          {items.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {items.length}
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
          {items.length > 0 && (
            <button
              type="button"
              onClick={onEdit}
              className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
            >
              <Edit2 size={12} />
              <span>Edit</span>
            </button>
          )}
        </div>
      </div>

      {/* List of achievements */}
      {items.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <Trophy size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No achievements added yet</p>
          <p className="text-[11px] mt-0.5">
            Showcase hackathon prizes, honors, academic awards, and competitions
          </p>
          <button
            type="button"
            onClick={onAdd || onEdit}
            className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
          >
            <Plus size={12} />
            <span>Add Achievement</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] hover:border-[#BFDBFE] transition-colors flex flex-col sm:flex-row gap-4"
            >
              {/* Optional Photo Thumbnail preview */}
              {item.photo && (
                <div
                  onClick={() => setSelectedPhoto(item.photo)}
                  className="relative w-full sm:w-28 h-28 sm:h-24 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shrink-0 cursor-pointer group shadow-xs"
                >
                  <img
                    src={item.photo}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                    <Maximize2 size={16} />
                  </div>
                </div>
              )}

              {/* Achievement Info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-[13.5px] font-bold text-[#0F172A] leading-tight">
                      {item.title}
                    </h4>
                    {item.issuer && (
                      <p className="text-[12px] font-medium text-[#475569] mt-0.5">
                        {item.issuer}
                      </p>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={onEdit}
                      className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-white rounded-lg transition-colors cursor-pointer"
                      title="Edit Achievement"
                    >
                      <Edit2 size={13} />
                    </button>
                    {onDeleteAchievement && (
                      <button
                        type="button"
                        onClick={() => onDeleteAchievement(item.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-white rounded-lg transition-colors cursor-pointer"
                        title="Delete Achievement"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </div>
                </div>

                {item.date && (
                  <div className="flex items-center gap-1 text-[11px] text-[#64748B] mt-1">
                    <Calendar size={12} className="text-[#94A3B8]" />
                    <span>{item.date}</span>
                  </div>
                )}

                {item.description && (
                  <p className="text-[12px] text-[#475569] mt-2 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                )}

                {/* Attached Document or External Link */}
                <div className="flex items-center gap-3 mt-2.5 flex-wrap">
                  {item.fileName && (
                    <a
                      href={item.fileUrl || '#'}
                      download={item.fileName}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[11px] text-[#334155] font-medium hover:border-[#1463F3] transition-colors"
                    >
                      <FileText size={12} className="text-[#1463F3]" />
                      <span className="truncate max-w-[200px]">{item.fileName}</span>
                    </a>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1463F3] hover:underline"
                    >
                      <span>View recognition</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal for Photo */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs cursor-pointer animate-in fade-in duration-150"
        >
          <div className="relative max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors z-10"
            >
              <X size={18} />
            </button>
            <img
              src={selectedPhoto}
              alt="Achievement full view"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </SectionCard>
  );
}
