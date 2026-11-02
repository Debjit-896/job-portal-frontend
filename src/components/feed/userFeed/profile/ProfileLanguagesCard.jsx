import { Globe2, Plus, Edit2, Trash2 } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileLanguagesCard({
  languages = [],
  onEdit,
  onAdd,
  onDeleteLanguage,
}) {
  // Normalize languages in case they are passed as a string e.g. "English (Fluent), Bengali (Native)"
  const parsedLanguages = Array.isArray(languages)
    ? languages
    : typeof languages === 'string'
    ? languages.split(',').map((l, index) => {
        const parts = l.trim().match(/^(.*?)(?:\s*\((.*?)\))?$/);
        return {
          id: 'lang-' + index,
          language: parts ? parts[1].trim() : l.trim(),
          proficiency: parts && parts[2] ? parts[2].trim() : 'Proficient',
        };
      })
    : [];

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Globe2 size={17} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Languages</h3>
          {parsedLanguages.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {parsedLanguages.length}
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
          {parsedLanguages.length > 0 && (
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

      {/* Languages List */}
      {parsedLanguages.length === 0 ? (
        <div className="py-6 text-center text-[#94A3B8] text-[12px] bg-slate-50 rounded-xl border border-dashed border-slate-200">
          <Globe2 size={24} className="mx-auto text-slate-300 mb-1" />
          <p className="font-medium text-slate-600">No languages added yet</p>
          <p className="text-[11px] mt-0.5">Add languages you speak and your proficiency</p>
          <button
            type="button"
            onClick={onAdd || onEdit}
            className="mt-2.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline"
          >
            <Plus size={12} />
            <span>Add Language</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {parsedLanguages.map((lang, index) => (
            <div
              key={lang.id || index}
              className="p-3 rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] flex items-center justify-between gap-2 hover:border-[#BFDBFE] transition-colors"
            >
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-[#0F172A] truncate">
                  {lang.language}
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">
                  {lang.proficiency}
                </p>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={onEdit}
                  className="p-1 text-slate-400 hover:text-[#1463F3] transition-colors"
                  title="Edit language"
                >
                  <Edit2 size={12} />
                </button>
                {onDeleteLanguage && (
                  <button
                    type="button"
                    onClick={() => onDeleteLanguage(lang.id || index)}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                    title="Delete language"
                  >
                    <Trash2 size={12} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionCard>
  );
}
