import { Flame } from 'lucide-react';
import SectionCard from '../../../common/userCommon/SectionCard';
import Badge from '../../../common/userCommon/Badge';

export default function TrendingTopics({
  topics = [
    '#React',
    '#NextJS',
    '#SpringBoot',
    '#Java',
    '#FullStack',
    '#WebDevelopment',
    '#CareerTips',
    '#AI',
    '#TechNews',
    '#RemoteJobs',
  ],
  onTopicClick,
}) {
  return (
    <SectionCard className="p-[18px_20px]">
      <div className="flex items-center gap-2 mb-3.5">
        <Flame size={18} className="text-[#EA580C]" />
        <h3 className="text-[14.5px] font-bold text-[#102E6D]">
          Trending Topics
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge
            key={topic}
            variant="clickable"
            onClick={() => onTopicClick && onTopicClick(topic)}
            className="text-xs px-3 py-1 bg-[#F1F6FD] text-[#2563EB] border-[#D8E7FA] font-medium hover:bg-[#E2EEFE]"
          >
            {topic}
          </Badge>
        ))}
      </div>
    </SectionCard>
  );
}

