import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  FolderGit2,
  Trophy,
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  FileText,
  Calendar,
  MapPin,
  CheckCircle2,
  X,
} from 'lucide-react';
import { ProfileLayout } from '../components/layouts/userLayout/profile';
import SectionCard from '../components/common/userCommon/SectionCard';
import CompanyLogo from '../components/feed/userFeed/companies/CompanyLogo';
import { AddProfileModal, EditProfileModal } from '../components/profile/modals';
import {
  UserProfile,
  ProfileSection,
  ModalMode,
  WorkExperience,
  Education,
  Certification,
  Project,
  Achievement,
} from '../types/profile';
import { getStoredProfile, saveStoredProfile } from '../constants/initialProfileData';
import { useToast } from '../components/common/toast';

type DetailSectionKey = 'experience' | 'education' | 'certifications' | 'projects' | 'achievements';

const SECTION_CONFIG: Record<
  DetailSectionKey,
  {
    profileSection: ProfileSection;
    title: string;
    singular: string;
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    description: string;
  }
> = {
  experience: {
    profileSection: 'experience',
    title: 'Work Experience',
    singular: 'Experience',
    icon: Briefcase,
    iconBg: 'bg-blue-50 border-blue-200',
    iconColor: 'text-[#1463F3]',
    description: 'All your career history, professional roles, and employment milestones.',
  },
  education: {
    profileSection: 'education',
    title: 'Education',
    singular: 'Education',
    icon: GraduationCap,
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600',
    description: 'All academic credentials, institutions, degrees, and educational background.',
  },
  certifications: {
    profileSection: 'certifications',
    title: 'Licenses & Certifications',
    singular: 'Certification',
    icon: Award,
    iconBg: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    description: 'All verified professional certifications, technical licenses, and credentials.',
  },
  projects: {
    profileSection: 'projects',
    title: 'Projects',
    singular: 'Project',
    icon: FolderGit2,
    iconBg: 'bg-indigo-50 border-indigo-200',
    iconColor: 'text-indigo-600',
    description: 'All personal, open-source, and commercial projects you have contributed to.',
  },
  achievements: {
    profileSection: 'achievements',
    title: 'Honors & Achievements',
    singular: 'Achievement',
    icon: Trophy,
    iconBg: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    description: 'All awards, honors, hackathon recognitions, and personal accomplishments.',
  },
};

export const ProfileDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { section: routeSection } = useParams<{ section?: string }>();
  const { addToast } = (useToast?.() as any) || { addToast: () => {} };

  // Profile data synchronized with localStorage
  const [profile, setProfile] = useState<UserProfile>(getStoredProfile);

  // Active section normalization
  const normalizedKey: DetailSectionKey = (
    routeSection && ['experience', 'education', 'certifications', 'projects', 'achievements'].includes(routeSection)
      ? routeSection
      : 'experience'
  ) as DetailSectionKey;

  const [activeKey, setActiveKey] = useState<DetailSectionKey>(normalizedKey);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Lock background scroll when image lightbox is open
  useBodyScrollLock(Boolean(previewImage));

  // Keep activeKey in sync if routeSection changes
  useEffect(() => {
    if (routeSection && ['experience', 'education', 'certifications', 'projects', 'achievements'].includes(routeSection)) {
      setActiveKey(routeSection as DetailSectionKey);
    }
  }, [routeSection]);

  // Persist profile updates
  useEffect(() => {
    saveStoredProfile(profile);
  }, [profile]);

  // Common Modal State
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

  const handleOpenAdd = () => {
    const config = SECTION_CONFIG[activeKey];
    setModalState({
      isOpen: true,
      mode: 'add',
      section: config.profileSection,
      data: null,
    });
  };

  const handleOpenEdit = (itemData: any) => {
    const config = SECTION_CONFIG[activeKey];
    setModalState({
      isOpen: true,
      mode: 'edit',
      section: config.profileSection,
      data: itemData,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false, section: null, data: null }));
  };

  // Save handler for adding and editing
  const handleSave = (savedData: any) => {
    const { section, mode } = modalState;

    setProfile((prev) => {
      const next = { ...prev };

      switch (section) {
        case 'experience': {
          const item = savedData as WorkExperience;
          if (mode === 'add') {
            next.workExperience = [item, ...next.workExperience];
          } else {
            next.workExperience = next.workExperience.map((e) => (e.id === item.id ? item : e));
          }
          break;
        }

        case 'education': {
          const item = savedData as Education;
          if (mode === 'add') {
            next.education = [item, ...next.education];
          } else {
            next.education = next.education.map((e) => (e.id === item.id ? item : e));
          }
          break;
        }

        case 'certifications': {
          const item = savedData as Certification;
          if (mode === 'add') {
            next.certifications = [item, ...next.certifications];
          } else {
            next.certifications = next.certifications.map((c) => (c.id === item.id ? item : c));
          }
          break;
        }

        case 'projects': {
          const item = savedData as Project;
          if (mode === 'add') {
            next.projects = [item, ...next.projects];
          } else {
            next.projects = next.projects.map((p) => (p.id === item.id ? item : p));
          }
          break;
        }

        case 'achievements': {
          const item = savedData as Achievement;
          if (mode === 'add') {
            next.achievements = [item, ...next.achievements];
          } else {
            next.achievements = next.achievements.map((a) => (a.id === item.id ? item : a));
          }
          break;
        }
      }

      return next;
    });

    handleCloseModal();
    if (addToast) {
      addToast(
        `${mode === 'add' ? 'Added new' : 'Updated'} ${SECTION_CONFIG[activeKey].singular} successfully!`,
        'success'
      );
    }
  };

  // Delete handlers
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

  const handleDeleteAchievement = (id: string) => {
    setProfile((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((a) => a.id !== id),
    }));
    if (addToast) addToast('Achievement deleted', 'info');
  };

  const currentConfig = SECTION_CONFIG[activeKey];
  const CurrentIcon = currentConfig.icon;

  const getSectionCount = (key: DetailSectionKey) => {
    switch (key) {
      case 'experience':
        return profile.workExperience?.length || 0;
      case 'education':
        return profile.education?.length || 0;
      case 'certifications':
        return profile.certifications?.length || 0;
      case 'projects':
        return profile.projects?.length || 0;
      case 'achievements':
        return profile.achievements?.length || 0;
    }
  };

  const currentCount = getSectionCount(activeKey);

  const switchSection = (key: DetailSectionKey) => {
    setActiveKey(key);
    navigate(`/candidate/profile/details/${key}`, { replace: true });
  };

  return (
    <ProfileLayout activeMenu="view-profile">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <button
          type="button"
          onClick={() => navigate('/candidate/profile')}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-[12.5px] font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] rounded-xl hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
        >
          <ArrowLeft size={15} className="text-[#64748B]" />
          <span>Back to Profile</span>
        </button>

        <div className="text-[12px] font-medium text-[#64748B] hidden sm:block">
          Candidate Profile <span className="mx-1 text-[#CBD5E1]">/</span> Details{' '}
          <span className="mx-1 text-[#CBD5E1]">/</span>{' '}
          <span className="text-[#0F172A] font-semibold">{currentConfig.title}</span>
        </div>
      </div>

      {/* Main Header Card */}
      <SectionCard className="p-5 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px] mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0 ${currentConfig.iconBg}`}
            >
              <CurrentIcon size={22} className={currentConfig.iconColor} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-[18px] sm:text-[20px] font-bold text-[#0F172A] leading-tight">
                  {currentConfig.title}
                </h1>
                <span className="text-[11.5px] font-bold text-[#1463F3] bg-[#EFF6FF] px-2.5 py-0.5 rounded-full border border-[#BFDBFE]">
                  {currentCount} {currentCount === 1 ? 'record' : 'records'}
                </span>
              </div>
              <p className="text-[12.5px] text-[#64748B] mt-0.5 leading-relaxed">
                {currentConfig.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleOpenAdd}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#1463F3] hover:bg-[#0F52CC] text-white text-[12.5px] font-semibold rounded-xl shadow-xs transition-colors shrink-0 cursor-pointer"
          >
            <Plus size={15} />
            <span>Add {currentConfig.singular}</span>
          </button>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-[#F1F5F9] overflow-x-auto pb-1 scrollbar-none">
          {(Object.keys(SECTION_CONFIG) as DetailSectionKey[]).map((key) => {
            const config = SECTION_CONFIG[key];
            const TabIcon = config.icon;
            const count = getSectionCount(key);
            const isActive = activeKey === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => switchSection(key)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[12px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1463F3] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <TabIcon size={14} className={isActive ? 'text-white' : 'text-[#64748B]'} />
                <span>{config.title}</span>
                <span
                  className={`text-[10.5px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-[#475569]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </SectionCard>

      {/* Item List Container */}
      <SectionCard className="p-5 sm:p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
        {/* Empty State */}
        {currentCount === 0 && (
          <div className="py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <CurrentIcon size={36} className="mx-auto text-slate-300 mb-2" />
            <h3 className="text-[14px] font-bold text-[#0F172A]">
              No {currentConfig.title.toLowerCase()} added yet
            </h3>
            <p className="text-[12px] text-[#64748B] mt-1 max-w-sm mx-auto">
              Showcase your background by adding your first {currentConfig.singular.toLowerCase()}.
            </p>
            <button
              type="button"
              onClick={handleOpenAdd}
              className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1463F3] text-white text-[12px] font-semibold rounded-xl hover:bg-[#0F52CC] transition-colors cursor-pointer"
            >
              <Plus size={14} />
              <span>Add {currentConfig.singular}</span>
            </button>
          </div>
        )}

        {/* 1. Work Experience List */}
        {activeKey === 'experience' && profile.workExperience.length > 0 && (
          <div className="flex flex-col divide-y divide-[#F1F5F9]">
            {profile.workExperience.map((exp, idx) => (
              <div
                key={exp.id || idx}
                className={`py-5 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group`}
              >
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="shrink-0 bg-white rounded-xl shadow-xs border border-[#E2E8F0] p-1">
                    <CompanyLogo company={exp.company} size={42} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[14.5px] font-bold text-[#0F172A] leading-tight">
                        {exp.role}
                      </h3>
                      <span className="text-[11.5px] font-medium text-[#64748B]">at</span>
                      <span className="text-[13.5px] font-semibold text-[#1E293B]">
                        {exp.companyName}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[12px] text-[#64748B] mt-1.5">
                      <Calendar size={13} className="text-[#94A3B8]" />
                      <span>{exp.duration}</span>
                    </div>

                    {exp.skills && exp.skills.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap mt-3">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(exp)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit Position"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteExperience(exp.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Position"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Education List */}
        {activeKey === 'education' && profile.education.length > 0 && (
          <div className="flex flex-col divide-y divide-[#F1F5F9]">
            {profile.education.map((edu, idx) => (
              <div
                key={edu.id || idx}
                className={`py-5 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group`}
              >
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1463F3] shrink-0">
                    <GraduationCap size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14.5px] font-bold text-[#0F172A] leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-[13px] font-medium text-[#475569] mt-0.5">
                      {edu.institution}
                    </p>

                    <div className="flex items-center gap-2 text-[12px] text-[#64748B] mt-1.5 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#94A3B8]" />
                        {edu.period}
                      </span>
                      {edu.location && (
                        <>
                          <span>&bull;</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-[#94A3B8]" />
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(edu)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit Education"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteEducation(edu.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Education"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Certifications List */}
        {activeKey === 'certifications' && profile.certifications.length > 0 && (
          <div className="flex flex-col divide-y divide-[#F1F5F9]">
            {profile.certifications.map((cert, idx) => (
              <div
                key={cert.id || idx}
                className={`py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start justify-between gap-4 group`}
              >
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  {cert.certificateUrl ? (
                    <img
                      src={cert.certificateUrl}
                      alt={cert.title}
                      onClick={() => setPreviewImage(cert.certificateUrl || null)}
                      className="w-12 h-12 rounded-xl object-cover border border-[#E2E8F0] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                      <Award size={20} />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[14.5px] font-bold text-[#0F172A] leading-tight">
                        {cert.title}
                      </h3>
                      {cert.isVerified && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                          <CheckCircle2 size={11} />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>

                    <p className="text-[13px] font-medium text-[#475569] mt-0.5">
                      {cert.issuer}
                    </p>

                    <div className="flex items-center gap-2 text-[12px] text-[#64748B] mt-1.5 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#94A3B8]" />
                        Issued {cert.issueDate}
                      </span>
                      {cert.expiryDate && (
                        <>
                          <span>&bull;</span>
                          <span>Expires {cert.expiryDate}</span>
                        </>
                      )}
                      {cert.credentialId && (
                        <>
                          <span>&bull;</span>
                          <span className="font-mono text-[11.5px] text-[#475569]">
                            ID: {cert.credentialId}
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                      {cert.fileName && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[11.5px] text-[#334155] font-medium">
                          <FileText size={13} className="text-[#1463F3]" />
                          <span className="truncate max-w-[220px]">{cert.fileName}</span>
                        </div>
                      )}

                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline"
                        >
                          <span>Show credential</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 self-end sm:self-start pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(cert)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit Certificate"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteCertification(cert.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Certificate"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. Projects List */}
        {activeKey === 'projects' && profile.projects.length > 0 && (
          <div className="flex flex-col divide-y divide-[#F1F5F9]">
            {profile.projects.map((proj, idx) => (
              <div
                key={proj.id || idx}
                className={`py-5 first:pt-0 last:pb-0 flex items-start justify-between gap-4 group`}
              >
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <FolderGit2 size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[14.5px] font-bold text-[#0F172A] leading-tight">
                        {proj.title}
                      </h3>
                      {proj.isCloud && (
                        <span className="text-[11px] font-medium text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                          Cloud Architecture
                        </span>
                      )}
                    </div>

                    <p className="text-[12.5px] text-[#475569] mt-1.5 leading-relaxed">
                      {proj.description}
                    </p>

                    {proj.tags && proj.tags.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap mt-3">
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-0.5 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(proj)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit Project"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteProject(proj.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Project"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 5. Achievements List */}
        {activeKey === 'achievements' && profile.achievements.length > 0 && (
          <div className="flex flex-col divide-y divide-[#F1F5F9]">
            {profile.achievements.map((item, idx) => (
              <div
                key={item.id || idx}
                className={`py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start justify-between gap-4 group`}
              >
                <div className="flex items-start gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                    <Trophy size={20} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[14.5px] font-bold text-[#0F172A] leading-tight">
                      {item.title}
                    </h3>
                    {item.issuer && (
                      <p className="text-[13px] font-medium text-[#475569] mt-0.5">
                        {item.issuer}
                      </p>
                    )}

                    {item.date && (
                      <div className="flex items-center gap-1 text-[12px] text-[#64748B] mt-1.5">
                        <Calendar size={13} className="text-[#94A3B8]" />
                        <span>{item.date}</span>
                      </div>
                    )}

                    {item.description && (
                      <p className="text-[12.5px] text-[#475569] mt-2 leading-relaxed whitespace-pre-line">
                        {item.description}
                      </p>
                    )}

                    {/* Attachments & Photo */}
                    <div className="flex items-center gap-3 mt-3 flex-wrap">
                      {item.fileName && (
                        <a
                          href={item.fileUrl || '#'}
                          download={item.fileName}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-[#CBD5E1] text-[11.5px] text-[#334155] font-medium hover:border-[#1463F3] transition-colors"
                        >
                          <FileText size={13} className="text-[#1463F3]" />
                          <span className="truncate max-w-[220px]">{item.fileName}</span>
                        </a>
                      )}

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[#1463F3] hover:underline"
                        >
                          <span>View Announcement / Certificate</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                    {item.photo && (
                      <div className="mt-3">
                        <img
                          src={item.photo}
                          alt={item.title}
                          onClick={() => setPreviewImage(item.photo || null)}
                          className="h-28 max-w-[240px] rounded-xl object-cover border border-[#E2E8F0] shadow-xs cursor-pointer hover:opacity-95 transition-opacity"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 self-end sm:self-start pt-0.5">
                  <button
                    type="button"
                    onClick={() => handleOpenEdit(item)}
                    className="p-1.5 text-slate-400 hover:text-[#1463F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Edit Achievement"
                  >
                    <Edit2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteAchievement(item.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    title="Delete Achievement"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionCard>

      {/* Reusable Common Add Modal */}
      <AddProfileModal
        isOpen={modalState.isOpen && modalState.mode === 'add'}
        onClose={handleCloseModal}
        section={modalState.section}
        initialData={modalState.data}
        onSave={handleSave}
      />

      {/* Reusable Common Edit Modal */}
      <EditProfileModal
        isOpen={modalState.isOpen && modalState.mode === 'edit'}
        onClose={handleCloseModal}
        section={modalState.section}
        initialData={modalState.data}
        onSave={handleSave}
      />

      {/* Lightbox Photo Preview Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs cursor-pointer animate-in fade-in duration-150"
        >
          <div className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setPreviewImage(null)}
              className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors z-10 cursor-pointer"
            >
              <X size={18} />
            </button>
            <img
              src={previewImage}
              alt="Full preview"
              className="max-h-[85vh] max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </ProfileLayout>
  );
};

export default ProfileDetailsPage;

