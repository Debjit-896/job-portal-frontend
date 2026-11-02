import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from '../components/layouts/userLayout/profile';
import {
  HeaderCard,
  AboutMeCard,
  AnalyticsCard,
  BasicInfoCard,
  ExperienceCard,
  EducationCard,
  CertificationCard,
  SkillsCard,
  ProjectsCard,
  LanguagesCard,
  AchievementsCard,
  InterestsCard,
  ActivityCard,
  PublicNoticeBanner,
} from '../components/profile/cards';
import { AddProfileModal, EditProfileModal } from '../components/profile/modals';
import CreatePostModal from '../components/feed/userFeed/profile/CreatePostModal';
import {
  UserProfile,
  ProfileSection,
  ModalMode,
  WorkExperience,
  Education,
  Certification,
  Project,
  Language,
  Achievement,
} from '../types/profile';
import {
  getStoredActivities,
  saveStoredActivities,
} from '../constants/profileActivityData';
import {
  getStoredProfile,
  saveStoredProfile,
} from '../constants/initialProfileData';
import { useToast } from '../components/common/toast';

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = (useToast?.() as any) || { addToast: () => {} };

  // Profile State synchronized with initial / local storage
  const [profile, setProfile] = useState<UserProfile>(getStoredProfile);

  useEffect(() => {
    saveStoredProfile(profile);
  }, [profile]);

  // Dynamic Modal State (determines active section, mode, and payload data)
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: ModalMode;
    section: ProfileSection | null;
    data: any;
  }>({
    isOpen: false,
    mode: 'edit',
    section: null,
    data: null,
  });

  // Activity & Create Post
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [activities, setActivities] = useState(getStoredActivities);

  useEffect(() => {
    saveStoredActivities(activities);
  }, [activities]);

  // Open Common Add Modal
  const handleOpenAdd = (section: ProfileSection, initialData: any = null) => {
    setModalState({
      isOpen: true,
      mode: 'add',
      section,
      data: initialData,
    });
  };

  // Open Common Edit Modal
  const handleOpenEdit = (section: ProfileSection, itemData: any = null) => {
    let payload = itemData;

    // If no specific item passed, select default section payload
    if (!payload) {
      switch (section) {
        case 'header':
          payload = {
            name: profile.name,
            headline: profile.headline,
            location: profile.location,
            age: profile.age,
            email: profile.email,
            shortBio: profile.shortBio,
            avatar: profile.avatar,
          };
          break;
        case 'about':
          payload = profile.about;
          break;
        case 'basic':
          payload = profile.basicInfo;
          break;
        case 'skills':
          payload = profile.skills;
          break;
        case 'interests':
          payload = profile.interests;
          break;
        case 'experience':
          payload = profile.workExperience[0] || null;
          break;
        case 'education':
          payload = profile.education[0] || null;
          break;
        case 'certifications':
          payload = profile.certifications[0] || null;
          break;
        case 'projects':
          payload = profile.projects[0] || null;
          break;
        case 'languages':
          payload = profile.languages[0] || null;
          break;
        case 'achievements':
          payload = profile.achievements[0] || null;
          break;
        default:
          payload = null;
      }
    }

    setModalState({
      isOpen: true,
      mode: 'edit',
      section,
      data: payload,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false, section: null, data: null }));
  };

  // Common Save Handler for all sections and modes
  const handleSave = (savedData: any) => {
    const { section, mode } = modalState;

    setProfile((prev) => {
      const next = { ...prev };

      switch (section) {
        case 'header':
          next.name = savedData.name;
          next.headline = savedData.headline;
          next.location = savedData.location;
          next.age = savedData.age;
          next.email = savedData.email;
          next.shortBio = savedData.shortBio;
          next.avatar = savedData.avatar;
          next.basicInfo = {
            ...next.basicInfo,
            fullName: savedData.name,
            email: savedData.email,
            location: savedData.location,
            age: savedData.age,
          };
          break;

        case 'about':
          next.about = savedData;
          break;

        case 'basic':
          next.basicInfo = savedData;
          next.name = savedData.fullName;
          next.email = savedData.email;
          next.location = savedData.location;
          next.age = savedData.age;
          break;

        case 'experience': {
          const item = savedData as WorkExperience;
          if (mode === 'add') {
            next.workExperience = [item, ...next.workExperience];
          } else {
            next.workExperience = next.workExperience.map((exp) =>
              exp.id === item.id ? item : exp
            );
          }
          break;
        }

        case 'education': {
          const item = savedData as Education;
          if (mode === 'add') {
            next.education = [item, ...next.education];
          } else {
            next.education = next.education.map((edu) =>
              edu.id === item.id ? item : edu
            );
          }
          break;
        }

        case 'certifications': {
          const item = savedData as Certification;
          if (mode === 'add') {
            next.certifications = [item, ...next.certifications];
          } else {
            next.certifications = next.certifications.map((c) =>
              c.id === item.id ? item : c
            );
          }
          break;
        }

        case 'skills':
          next.skills = savedData;
          break;

        case 'projects': {
          const item = savedData as Project;
          if (mode === 'add') {
            next.projects = [item, ...next.projects];
          } else {
            next.projects = next.projects.map((p) =>
              p.id === item.id ? item : p
            );
          }
          break;
        }

        case 'languages': {
          const item = savedData as Language;
          if (mode === 'add') {
            next.languages = [...next.languages, item];
          } else {
            next.languages = next.languages.map((l) =>
              l.id === item.id ? item : l
            );
          }
          break;
        }

        case 'achievements': {
          const item = savedData as Achievement;
          if (mode === 'add') {
            next.achievements = [item, ...next.achievements];
          } else {
            next.achievements = next.achievements.map((a) =>
              a.id === item.id ? item : a
            );
          }
          break;
        }

        case 'interests':
          next.interests = savedData;
          break;
      }

      return next;
    });

    handleCloseModal();
    if (addToast) {
      addToast(
        `${mode === 'add' ? 'Added new' : 'Updated'} ${section || 'profile'} successfully!`,
        'success'
      );
    }
  };

  // Delete Handlers
  const handleDeleteExperience = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      workExperience: prev.workExperience.filter((e) => e.id !== id),
    }));
    if (addToast) addToast('Work experience entry removed', 'info');
  };

  const handleDeleteEducation = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
    if (addToast) addToast('Education record removed', 'info');
  };

  const handleDeleteCertification = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((c) => c.id !== id),
    }));
    if (addToast) addToast('Certification deleted', 'info');
  };

  const handleDeleteProject = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }));
    if (addToast) addToast('Project removed', 'info');
  };

  const handleDeleteLanguage = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      languages: prev.languages.filter((l) => l.id !== id),
    }));
    if (addToast) addToast('Language removed', 'info');
  };

  const handleDeleteAchievement = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((a) => a.id !== id),
    }));
    if (addToast) addToast('Achievement deleted', 'info');
  };

  const handleCreatePost = (newPost: any) => {
    setActivities((prev: any) => ({
      ...prev,
      posts: [newPost, ...prev.posts],
      documents: newPost.document
        ? [
            {
              id: 'doc-' + Date.now(),
              title: newPost.document.title,
              type: newPost.document.type,
              size: newPost.document.size,
              pages: 1,
              timestamp: 'Just now',
              url: '#',
            },
            ...prev.documents,
          ]
        : prev.documents,
    }));
    if (addToast) addToast('Post published successfully!', 'success');
  };

  return (
    <ProfileLayout activeMenu="view-profile">
      {/* 1. Header Card */}
      <HeaderCard
        profile={profile}
        onEdit={() => handleOpenEdit('header')}
      />

      {/* 2. Analytics Card (Profile Completion + Profile Viewers & Post Impressions Side-by-Side) */}
      <AnalyticsCard
        profile={profile}
        onCompleteSection={(sec) => handleOpenAdd(sec)}
        onNavigateActivity={() => navigate('/candidate/activity')}
      />

      {/* 3. About Me */}
      <AboutMeCard
        about={profile.about}
        onEdit={() => handleOpenEdit('about')}
      />

      {/* 3. Activity Card */}
      <ActivityCard
        activities={activities}
        onOpenCreatePost={() => setIsCreatePostModalOpen(true)}
        onViewAll={() => navigate('/candidate/activity')}
      />

      {/* 4. Basic Information */}
      <BasicInfoCard
        basicInfo={profile.basicInfo}
        onEdit={() => handleOpenEdit('basic')}
      />

      {/* 5. Work Experience */}
      <ExperienceCard
        experiences={profile.workExperience}
        onAdd={() => handleOpenAdd('experience')}
        onEdit={(item) => handleOpenEdit('experience', item)}
        onDelete={handleDeleteExperience}
        onShowAll={() => navigate('/candidate/profile/details/experience')}
      />

      {/* 6. Education */}
      <EducationCard
        education={profile.education}
        onAdd={() => handleOpenAdd('education')}
        onEdit={(item) => handleOpenEdit('education', item)}
        onDelete={handleDeleteEducation}
        onShowAll={() => navigate('/candidate/profile/details/education')}
      />

      {/* 7. Certifications */}
      <CertificationCard
        certifications={profile.certifications}
        onAdd={() => handleOpenAdd('certifications')}
        onEdit={(item) => handleOpenEdit('certifications', item)}
        onDelete={handleDeleteCertification}
        onShowAll={() => navigate('/candidate/profile/details/certifications')}
      />

      {/* 8. Skills */}
      <SkillsCard
        skills={profile.skills}
        onAdd={() => handleOpenAdd('skills')}
      />

      {/* 9. Projects */}
      <ProjectsCard
        projects={profile.projects}
        onAdd={() => handleOpenAdd('projects')}
        onEdit={(item) => handleOpenEdit('projects', item)}
        onDelete={handleDeleteProject}
        onShowAll={() => navigate('/candidate/profile/details/projects')}
      />

      {/* 10. Languages */}
      <LanguagesCard
        languages={profile.languages}
        onAdd={() => handleOpenAdd('languages')}
        onEdit={(item) => handleOpenEdit('languages', item)}
        onDelete={handleDeleteLanguage}
      />

      {/* 11. Achievements */}
      <AchievementsCard
        achievements={profile.achievements}
        onAdd={() => handleOpenAdd('achievements')}
        onEdit={(item) => handleOpenEdit('achievements', item)}
        onDelete={handleDeleteAchievement}
        onShowAll={() => navigate('/candidate/profile/details/achievements')}
      />

      {/* 12. Interests */}
      <InterestsCard
        interests={profile.interests}
        onAdd={() => handleOpenAdd('interests')}
      />

      {/* 13. Public Notice Banner */}
      <PublicNoticeBanner />

      {/* Common Reusable Add Modal */}
      <AddProfileModal
        isOpen={modalState.isOpen && modalState.mode === 'add'}
        onClose={handleCloseModal}
        section={modalState.section}
        initialData={modalState.data}
        onSave={handleSave}
      />

      {/* Common Reusable Edit Modal */}
      <EditProfileModal
        isOpen={modalState.isOpen && modalState.mode === 'edit'}
        onClose={handleCloseModal}
        section={modalState.section}
        initialData={modalState.data}
        onSave={handleSave}
      />

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostModalOpen}
        onClose={() => setIsCreatePostModalOpen(false)}
        user={{
          name: profile.name,
          headline: profile.headline,
          avatar: profile.avatar,
        }}
        onPost={handleCreatePost}
      />
    </ProfileLayout>
  );
};

export default ProfilePage;

