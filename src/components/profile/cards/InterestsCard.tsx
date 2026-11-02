import React from 'react';
import { Heart, Plus } from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';

export interface InterestsCardProps {
  interests?: string;
  onAdd?: () => void;
}

export const InterestsCard: React.FC<InterestsCardProps> = ({
  interests = 'Coding, Tech News, Gaming, Travel',
  onAdd,
}) => {
  const interestList = typeof interests === 'string'
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
          {interestList.length > 0 && (
            <span className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] px-2 py-0.5 rounded-full border border-[#BFDBFE]">
              {interestList.length}
            </span>
          )}
        </div>
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

      <div className="flex flex-wrap gap-2">
        {interestList.length === 0 ? (
          <div className="py-4 text-center w-full">
            <p className="text-[12px] text-slate-400">No interests added yet.</p>
            {onAdd && (
              <button
                type="button"
                onClick={onAdd}
                className="mt-1.5 inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline cursor-pointer"
              >
                <Plus size={12} />
                <span>Add Interests</span>
              </button>
            )}
          </div>
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
};

export default InterestsCard;
