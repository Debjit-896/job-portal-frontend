import { Heart, Award, Edit2 } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function ProfileAdditionalInfoCard({
  interests = 'Coding, Tech News, Gaming, Travel',
  achievements = 'Winner - College Hackathon 2024',
  onEditInterests,
  onEditAchievements,
}) {
  return (
    <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#F1F5F9]">
        <h3 className="text-[14px] font-bold text-[#0F172A]">Additional Details</h3>
      </div>

      <div className="flex flex-col gap-4 text-[12.5px]">
        {/* Interests */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-[#F1F5F9]">
          <div className="flex items-center gap-3">
            <Heart size={16} className="text-[#1463F3] shrink-0" />
            <span className="font-bold text-[#0F172A] w-28 shrink-0">Interests</span>
            <span className="text-[#475569]">{interests}</span>
          </div>
          <button
            type="button"
            onClick={onEditInterests}
            className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
          >
            <Edit2 size={12} />
            <span>Edit</span>
          </button>
        </div>

        {/* Achievements */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Award size={16} className="text-[#1463F3] shrink-0" />
            <span className="font-bold text-[#0F172A] w-28 shrink-0">Achievements</span>
            <span className="text-[#475569]">{achievements}</span>
          </div>
          <button
            type="button"
            onClick={onEditAchievements}
            className="text-[#1463F3] text-[11.5px] font-semibold flex items-center gap-1 hover:underline bg-transparent border-0 cursor-pointer"
          >
            <Edit2 size={12} />
            <span>Edit</span>
          </button>
        </div>
      </div>
    </SectionCard>
  );
}