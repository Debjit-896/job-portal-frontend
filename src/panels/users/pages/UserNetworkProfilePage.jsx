import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NetworkProfileLayout } from '../../../components/layouts/userLayout/networkProfile';
import {
  NetworkProfileHeaderCard,
  NetworkProfileAboutCard,
  NetworkProfileContactCard,
  NetworkProfileExperienceCard,
  NetworkProfileEducationCard,
  NetworkProfileSkillsCard,
  NetworkProfileProjectsCard,
  NetworkProfileLanguagesCard,
} from '../../../components/feed/userFeed/networkProfile';
import { getNetworkMemberById } from '../../../constants/networkMembersData';

export default function UserNetworkProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Load member data based on ID or default to 'rahul-saha'
  const member = useMemo(() => {
    return getNetworkMemberById(id || 'rahul-saha');
  }, [id]);

  return (
    <NetworkProfileLayout activeNav="network" activeMenu="network">
      {/* Back to Network navigation button */}
      <div>
        <button
          type="button"
          onClick={() => navigate('/candidate/network')}
          className="bg-transparent border-0 text-[#1463F3] hover:text-[#0E52D4] text-[13px] font-semibold flex items-center gap-1.5 cursor-pointer p-0 transition-colors"
        >
          <ArrowLeft size={15} />
          <span>Back to Network</span>
        </button>
      </div>

      {/* 1. Header Card (Avatar with green online dot, Connect & Message buttons) */}
      <NetworkProfileHeaderCard
        member={member}
        onMessage={() => navigate('/candidate/messages')}
      />

      {/* 2. About Me */}
      <NetworkProfileAboutCard about={member.about} />

      {/* 3. Contact Information */}
      <NetworkProfileContactCard contactInfo={member.contactInfo} />

      {/* 4. Work Experience */}
      <NetworkProfileExperienceCard experiences={member.workExperience} />

      {/* 5. Education */}
      <NetworkProfileEducationCard education={member.education} />

      {/* 6. Skills */}
      <NetworkProfileSkillsCard skills={member.skills || []} />

      {/* 7. Projects */}
      <NetworkProfileProjectsCard projects={member.projects} />

      {/* 8. Languages */}
      <NetworkProfileLanguagesCard languages={member.languages} />
    </NetworkProfileLayout>
  );
}
