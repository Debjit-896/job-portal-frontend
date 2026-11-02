import { Heart, Edit2, Plus } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileInterestsCard({
  interests = 'Coding, Tech News, Gaming, Travel',
  onEdit,
}) {
  const interestList = Array.isArray(interests)
    ? interests
    : typeof interests === 'string'
    ? interests
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F1F5F9]">
        <div className="flex items-center gap-2">
          <Heart size={16} className="text-[#1463F3]" />
          <h3 className="text-[14px] font-bold text-[#0F172A]">Interests</h3>
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

      <div className="flex flex-wrap gap-2">
        {interestList.length === 0 ? (
          <p className="text-[12px] text-slate-400 py-2">No interests added yet.</p>
        ) : (
          interestList.map((interest) => (
            <span
              key={interest}
              className="text-[12px] font-medium text-slate-700 bg-slate-100 hover:bg-[#EFF6FF] hover:text-[#1463F3] border border-slate-200 px-3 py-1 rounded-lg transition-colors"
            >
              {interest}
            </span>
          ))
        )}
      </div>
    </SectionCard>
  );
}
