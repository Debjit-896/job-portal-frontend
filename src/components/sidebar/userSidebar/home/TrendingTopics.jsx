import { Flame } from 'lucide-react';
import SectionCard from '../common/userCommon/SectionCard';
import Badge from '../common/userCommon/Badge';

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
    <SectionCard padding="18px 20px">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
        <Flame size={18} color="#EA580C" />
        <h3 style={{ fontSize: '14.5px', fontWeight: 700, color: '#102E6D' }}>
          Trending Topics
        </h3>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {topics.map((topic) => (
          <Badge
            key={topic}
            variant="clickable"
            onClick={() => onTopicClick && onTopicClick(topic)}
            style={{
              fontSize: '12px',
              padding: '5px 12px',
              backgroundColor: '#F1F6FD',
              color: '#2563EB',
              border: '1px solid #D8E7FA',
              fontWeight: 500,
            }}
          >
            {topic}
          </Badge>
        ))}
      </div>
    </SectionCard>
  );
}
