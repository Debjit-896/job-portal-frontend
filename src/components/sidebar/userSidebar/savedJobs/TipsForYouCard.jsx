import { Lightbulb, User, Key, Bell, ChevronRight } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';

export default function TipsForYouCard({ onTipClick }) {
  const tips = [
    {
      id: 'update-profile',
      title: 'Update your profile',
      subtitle: 'A complete profile gets you 3x more interviews.',
      icon: User,
    },
    {
      id: 'add-skills',
      title: 'Add skills',
      subtitle: 'Include relevant skills to match with better jobs.',
      icon: Key,
    },
    {
      id: 'set-job-alerts',
      title: 'Set job alerts',
      subtitle: 'Get notified when new jobs matching your interest are posted.',
      icon: Bell,
    },
  ];

  return (
    <SectionCard className="p-4">
      <div className="flex items-center gap-2 mb-3.5">
        <Lightbulb size={16} className="text-[#1463F3]" />
        <h4 className="text-[13.5px] font-bold text-[#102E6D]">
          Tips for You
        </h4>
      </div>

      <div className="flex flex-col gap-3.5">
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <div
              key={tip.id}
              onClick={() => onTipClick && onTipClick(tip.id)}
              className="flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-start gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#F1F5F9] flex items-center justify-center text-[#64748B] shrink-0 mt-0.5 group-hover:bg-[#EFF6FF] group-hover:text-[#1463F3] transition-colors">
                  <Icon size={16} />
                </div>

                <div className="min-w-0">
                  <h5 className="text-[12.5px] font-semibold text-[#102E6D] leading-tight group-hover:text-[#1463F3] transition-colors">
                    {tip.title}
                  </h5>
                  <p className="text-[10.5px] text-[#64748B] mt-0.5 leading-snug">
                    {tip.subtitle}
                  </p>
                </div>
              </div>

              <ChevronRight size={14} className="text-[#94A3B8] shrink-0 ml-1.5" />
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
}

