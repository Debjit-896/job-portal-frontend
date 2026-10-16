import SectionCard from '../../../common/userCommon/SectionCard';
import Badge from '../../../common/userCommon/Badge';

export default function TopSkillsInDemand({
  skills = [
    'React',
    'Node.js',
    'Java',
    'Spring Boot',
    'TypeScript',
    'AWS',
    'Docker',
    'Kubernetes',
    'SQL',
    'Python',
  ],
  onSkillClick,
}) {
  return (
    <SectionCard className="p-[20px_18px]">
      <h4 className="text-[14.5px] font-bold text-[#102E6D] mb-3.5">
        Top Skills in Demand
      </h4>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="clickable"
            onClick={() => onSkillClick && onSkillClick(skill)}
            className="text-xs px-3 py-1 bg-[#F1F6FD] text-[#2563EB] border-[#D8E7FA] font-medium hover:bg-[#E2EEFE]"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </SectionCard>
  );
}

