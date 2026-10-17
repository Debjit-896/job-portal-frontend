import { useState } from 'react';
import { ProfileLayout } from '../../../components/layouts/userLayout/profile';
import {
  ProfileHeaderCard,
  ProfileAboutMeCard,
  ProfileBasicInfoCard,
  ProfileWorkExperienceCard,
  ProfileEducationCard,
  ProfileSkillsCard,
  ProfileProjectsCard,
  ProfileAdditionalInfoCard,
  ProfilePublicNoticeBanner,
  EditProfileModal,
} from '../../../components/feed/userFeed/profile';

export default function UserProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editSection, setEditSection] = useState('all');

  // Complete profile state matching the screenshot
  const [profile, setProfile] = useState({
    name: 'Debjit Pal',
    isVerified: true,
    headline: 'Full Stack Developer | Java & Web Technologies',
    location: 'Kolkata, West Bengal, India',
    age: 21,
    email: 'debjitpal123@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    shortBio:
      'Passionate about building web applications and solving real-world problems. I love learning new technologies and contributing to impactful projects.',
    about:
      'I am a Full Stack Developer with a strong interest in building scalable web applications. I have hands-on experience with React, Next.js, Node.js, Express.js, PHP, Laravel and Spring Boot. I am always eager to learn new technologies and improve my skills to grow in the tech industry.',
    basicInfo: {
      fullName: 'Debjit Pal',
      email: 'debjitpal123@gmail.com',
      phone: '+91 98765 43210',
      dob: '15 May 2005',
      age: 21,
      gender: 'Male',
      location: 'Kolkata, West Bengal, India',
      linkedin: 'linkedin.com/in/debjitpal',
      github: 'github.com/debjitpal',
      portfolio: 'https://debjitpal.dev',
    },
    workExperience: [
      {
        id: 'brandingguruji',
        companyName: 'BrandingGuruji LLP',
        role: 'Freelance Full Stack Developer',
        duration: 'Apr 2026 – Present (6 months)',
        skills: ['React', 'Next.js', 'Node.js', 'Express.js', 'Angular'],
        company: {
          id: 'brandingguruji',
          name: 'BrandingGuruji LLP',
          iconBg: '#18181B',
          iconText: 'B',
        },
      },
      {
        id: 'cloudwind',
        companyName: 'CloudWind Technologies LLP',
        role: 'Junior Web Developer',
        duration: 'Mar 2026 – Apr 2026 (1 month)',
        skills: ['PHP', 'Laravel', 'React', 'PostgreSQL'],
        company: {
          id: 'cloudwind',
          name: 'CloudWind Technologies LLP',
          isCloudWind: true,
        },
      },
    ],
    education: [
      {
        id: 'polytechnic',
        institution: 'Acharyya Prafulla Chandra Roy Polytechnic',
        degree: 'Diploma in Computer Science & Engineering',
        period: '2022 – 2025',
        location: 'Kolkata, West Bengal, India',
      },
    ],
    skills: [
      'Java',
      'Spring Boot',
      'React',
      'Next.js',
      'Node.js',
      'PHP',
      'Laravel',
      'MySQL',
      'PostgreSQL',
      'Git',
      'Docker',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
    ],
    projects: [
      {
        id: 'jobnova',
        title: 'JobNova AI',
        description: 'AI powered job portal with Spring Boot + React',
        tags: ['Spring Boot', 'React', 'MySQL', 'Docker'],
        isCloud: true,
      },
      {
        id: 'nexkart',
        title: 'NexKart',
        description: 'E-commerce platform with Spring Boot',
        tags: ['Java', 'PostgreSQL', 'React', 'Docker'],
        isCloud: false,
      },
    ],
    languages: 'English (Fluent), Bengali (Native)',
    interests: 'Coding, Tech News, Gaming, Travel',
    achievements: 'Winner - College Hackathon 2024',
  });

  const handleOpenEdit = (section = 'all') => {
    setEditSection(section);
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <ProfileLayout activeMenu="view-profile">
      {/* 1. Header Card: Avatar, Name, Verified Badge, Age, Location, Edit Profile Button */}
      <ProfileHeaderCard
        profile={profile}
        onEdit={() => handleOpenEdit('header')}
      />

      {/* 2. About Me */}
      <ProfileAboutMeCard
        about={profile.about}
        onEdit={() => handleOpenEdit('about')}
      />

      {/* 3. Basic Information (Grid with 2 columns) */}
      <ProfileBasicInfoCard
        basicInfo={profile.basicInfo}
        onEdit={() => handleOpenEdit('basic')}
      />

      {/* 4. Work Experience (Timeline with skills tags) */}
      <ProfileWorkExperienceCard
        experiences={profile.workExperience}
        onEdit={() => handleOpenEdit('experience')}
      />

      {/* 5. Education */}
      <ProfileEducationCard
        education={profile.education}
        onEdit={() => handleOpenEdit('education')}
      />

      {/* 6. Skills */}
      <ProfileSkillsCard
        skills={profile.skills}
        onEdit={() => handleOpenEdit('skills')}
      />

      {/* 7. Projects */}
      <ProfileProjectsCard
        projects={profile.projects}
        onEdit={() => handleOpenEdit('projects')}
        onViewAll={() => console.log('View all projects')}
      />

      {/* 8. Languages, Interests, Achievements */}
      <ProfileAdditionalInfoCard
        languages={profile.languages}
        interests={profile.interests}
        achievements={profile.achievements}
        onEditLanguages={() => handleOpenEdit('languages')}
        onEditInterests={() => handleOpenEdit('interests')}
        onEditAchievements={() => handleOpenEdit('achievements')}
      />

      {/* 9. Public Notice Banner at bottom */}
      <ProfilePublicNoticeBanner />

      {/* Edit Profile Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        initialData={profile}
        onSave={handleSaveProfile}
        section={editSection}
      />
    </ProfileLayout>
  );
}
