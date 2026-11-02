import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Code,
  FolderGit2,
  Globe2,
  Trophy,
  User,
  Info,
  Heart,
  LucideIcon,
} from 'lucide-react';
import { ProfileSection, ModalMode } from '../../../types/profile';
import {
  ExperienceForm,
  EducationForm,
  CertificationForm,
  SkillsForm,
  ProjectsForm,
  LanguagesForm,
  AchievementsForm,
  HeaderForm,
  AboutMeForm,
  BasicInfoForm,
  InterestsForm,
} from '../forms';

export interface SectionMeta {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  maxWidth?: string;
}

export function getSectionModalMeta(
  section: ProfileSection | string,
  mode: ModalMode
): SectionMeta {
  const isAdd = mode === 'add';

  switch (section) {
    case 'experience':
      return {
        title: isAdd ? 'Add Work Experience' : 'Edit Work Experience',
        subtitle: isAdd
          ? 'Add a new position, company role, and skills utilized'
          : 'Modify your role, company name, duration, and skills',
        icon: Briefcase,
      };

    case 'education':
      return {
        title: isAdd ? 'Add Education' : 'Edit Education',
        subtitle: isAdd
          ? 'Add your college, degree, diploma, or certificate'
          : 'Update institution, degree, and study period',
        icon: GraduationCap,
      };

    case 'certifications':
      return {
        title: isAdd ? 'Add Certification' : 'Edit Certification',
        subtitle: isAdd
          ? 'Upload a license, certificate, or credential with verification'
          : 'Update certificate details or replace uploaded document',
        icon: Award,
      };

    case 'skills':
      return {
        title: isAdd ? 'Add Skills' : 'Edit Skills',
        subtitle: 'Highlight your technical proficiencies, frameworks, and tools',
        icon: Code,
        maxWidth: 'max-w-lg',
      };

    case 'projects':
      return {
        title: isAdd ? 'Add Project' : 'Edit Project',
        subtitle: isAdd
          ? 'Showcase a new codebase, deployed application, or product'
          : 'Update project title, description, tags, and status',
        icon: FolderGit2,
      };

    case 'languages':
      return {
        title: isAdd ? 'Add Language' : 'Edit Language',
        subtitle: isAdd
          ? 'Add a language you speak and choose your proficiency'
          : 'Update language name and proficiency level',
        icon: Globe2,
        maxWidth: 'max-w-lg',
      };

    case 'achievements':
      return {
        title: isAdd ? 'Add Achievement' : 'Edit Achievement',
        subtitle: isAdd
          ? 'Upload hackathon awards, honors, or certificates with photos/files'
          : 'Update achievement details, link, or attachment file',
        icon: Trophy,
      };

    case 'header':
      return {
        title: 'Edit Profile Header',
        subtitle: 'Update your photo, headline, location, and short bio',
        icon: User,
        maxWidth: 'max-w-lg',
      };

    case 'about':
      return {
        title: 'Edit About Me',
        subtitle: 'Share your background, passions, and career aspirations',
        icon: User,
        maxWidth: 'max-w-lg',
      };

    case 'basic':
      return {
        title: 'Edit Basic Information',
        subtitle: 'Personal contact information, dates, and social links',
        icon: Info,
      };

    case 'interests':
      return {
        title: 'Edit Interests',
        subtitle: 'Personal topics, hobbies, and activities you enjoy',
        icon: Heart,
        maxWidth: 'max-w-lg',
      };

    default:
      return {
        title: isAdd ? 'Add Item' : 'Edit Details',
        subtitle: 'Provide or modify your candidate profile information',
        icon: User,
      };
  }
}

export interface ProfileFormRendererProps {
  section: ProfileSection | string;
  mode: ModalMode;
  data?: any;
  onSave: (savedData: any) => void;
  onCancel: () => void;
}

export const ProfileFormRenderer: React.FC<ProfileFormRendererProps> = ({
  section,
  mode,
  data,
  onSave,
  onCancel,
}) => {
  switch (section) {
    case 'experience':
      return (
        <ExperienceForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'education':
      return (
        <EducationForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'certifications':
      return (
        <CertificationForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'skills':
      return (
        <SkillsForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'projects':
      return (
        <ProjectsForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'languages':
      return (
        <LanguagesForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'achievements':
      return (
        <AchievementsForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'header':
      return (
        <HeaderForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'about':
      return (
        <AboutMeForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'basic':
      return (
        <BasicInfoForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    case 'interests':
      return (
        <InterestsForm
          initialData={data}
          mode={mode}
          onSave={onSave}
          onCancel={onCancel}
        />
      );

    default:
      return (
        <div className="py-6 text-center text-slate-500 text-xs">
          No form registered for section "{section}".
        </div>
      );
  }
};

export default ProfileFormRenderer;

