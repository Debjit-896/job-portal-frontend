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
    <SectionCard padding="20px 18px">
      <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#102E6D', marginBottom: '14px' }}>
        Top Skills in Demand
      </h4>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="clickable"
            onClick={() => onSkillClick && onSkillClick(skill)}
            style={{
              fontSize: '12px',
              padding: '5px 12px',
              backgroundColor: '#F1F6FD',
              color: '#2563EB',
              border: '1px solid #D8E7FA',
              fontWeight: 500,
            }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </SectionCard>
  );
}
