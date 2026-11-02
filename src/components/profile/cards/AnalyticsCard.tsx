import React, { useState } from 'react';
import { useBodyScrollLock } from '../../../hooks/useBodyScrollLock';
import {
  BarChart3,
  Eye,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Lock,
  ChevronRight,
  ChevronDown,
  X,
  UserCheck,
  Plus,
} from 'lucide-react';
import SectionCard from '../../common/userCommon/SectionCard';
import { UserProfile, ProfileSection } from '../../../types/profile';

export interface AnalyticsCardProps {
  profile: UserProfile;
  onCompleteSection?: (section: ProfileSection) => void;
  onNavigateActivity?: () => void;
  customProfileViews?: number;
  customPostImpressions?: number;
}

interface CompletionTask {
  id: string;
  title: string;
  section: ProfileSection;
  weight: number;
  isDone: boolean;
  hint: string;
}

export const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  profile,
  onCompleteSection,
  onNavigateActivity,
  customProfileViews = 248,
  customPostImpressions = 1842,
}) => {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [isViewersModalOpen, setIsViewersModalOpen] = useState(false);

  // Lock background scroll when viewers modal is open
  useBodyScrollLock(isViewersModalOpen);

  // Dynamic Profile Completion calculation
  const tasks: CompletionTask[] = [
    {
      id: 'avatar',
      title: 'Profile Photo',
      section: 'header',
      weight: 10,
      isDone: Boolean(profile.avatar && profile.avatar.trim().length > 0),
      hint: 'Add a professional portrait to be recognized.',
    },
    {
      id: 'headline',
      title: 'Professional Headline',
      section: 'header',
      weight: 10,
      isDone: Boolean(profile.headline && profile.headline.trim().length > 0),
      hint: 'Highlight your primary expertise and role.',
    },
    {
      id: 'about',
      title: 'About Me Summary',
      section: 'about',
      weight: 15,
      isDone: Boolean(profile.about && profile.about.trim().length >= 25),
      hint: 'Introduce your career story and tech focus.',
    },
    {
      id: 'basic',
      title: 'Basic Contact & Info',
      section: 'basic',
      weight: 10,
      isDone: Boolean(
        profile.basicInfo?.fullName &&
          profile.basicInfo?.email &&
          profile.basicInfo?.location
      ),
      hint: 'Provide email, location and links for recruiters.',
    },
    {
      id: 'experience',
      title: 'Work Experience',
      section: 'experience',
      weight: 15,
      isDone: Boolean(profile.workExperience && profile.workExperience.length > 0),
      hint: 'Add your current and previous job roles.',
    },
    {
      id: 'education',
      title: 'Education',
      section: 'education',
      weight: 15,
      isDone: Boolean(profile.education && profile.education.length > 0),
      hint: 'List your degrees, colleges, and certifications.',
    },
    {
      id: 'skills',
      title: 'Skills (Min. 3)',
      section: 'skills',
      weight: 10,
      isDone: Boolean(profile.skills && profile.skills.length >= 3),
      hint: 'Add core tools, languages and libraries.',
    },
    {
      id: 'certifications',
      title: 'Certifications or Projects',
      section: 'certifications',
      weight: 10,
      isDone: Boolean(
        (profile.certifications && profile.certifications.length > 0) ||
          (profile.projects && profile.projects.length > 0)
      ),
      hint: 'Showcase verified credentials or portfolio projects.',
    },
    {
      id: 'languages',
      title: 'Languages or Achievements',
      section: 'languages',
      weight: 5,
      isDone: Boolean(
        (profile.languages && profile.languages.length > 0) ||
          (profile.achievements && profile.achievements.length > 0)
      ),
      hint: 'Demonstrate multilingual proficiency or awards.',
    },
  ];

  const earnedWeight = tasks.filter((t) => t.isDone).reduce((sum, t) => sum + t.weight, 0);
  const completionPercentage = Math.min(100, Math.max(0, earnedWeight));

  const completedCount = tasks.filter((t) => t.isDone).length;
  const firstPendingTask = tasks.find((t) => !t.isDone);

  // Profile strength label & color
  let strengthLabel = 'Beginner';
  let strengthBadgeBg = 'bg-amber-50 text-amber-700 border-amber-200';
  if (completionPercentage >= 90) {
    strengthLabel = 'All-Star';
    strengthBadgeBg = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (completionPercentage >= 60) {
    strengthLabel = 'Intermediate';
    strengthBadgeBg = 'bg-blue-50 text-[#1463F3] border-blue-200';
  }

  // Mock profile viewers for the interactive modal
  const mockViewers = [
    {
      id: 'v1',
      name: 'Sarah Jenkins',
      role: 'Senior Technical Recruiter',
      company: 'Google',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      time: '2 hours ago',
    },
    {
      id: 'v2',
      name: 'Michael Chen',
      role: 'Head of Engineering',
      company: 'Stripe',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      time: '1 day ago',
    },
    {
      id: 'v3',
      name: 'Priya Sharma',
      role: 'Talent Acquisition Partner',
      company: 'Microsoft',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      time: '2 days ago',
    },
    {
      id: 'v4',
      name: 'David Miller',
      role: 'Staff Solutions Architect',
      company: 'Amazon Web Services',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      time: '3 days ago',
    },
  ];

  return (
    <SectionCard className="p-5 sm:p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-[16px]">
      {/* 1. Header with 'Private to you' pill */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F1F5F9] flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <BarChart3 size={17} className="text-[#1463F3]" />
          <h2 className="text-[15px] font-bold text-[#0F172A] tracking-tight">Analytics</h2>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#64748B] bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
            <Lock size={10} className="text-[#94A3B8]" />
            <span>Private to you</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#64748B]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Real-time updates</span>
        </div>
      </div>

      {/* 2. Side-by-Side: Profile Strength, Profile Viewers, Post Impression (3-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Item 1: Profile Strength (Circular Chart from demo screenshot) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#1463F3] hover:shadow-sm transition-all flex flex-col justify-between relative overflow-hidden group">
          <div>
            {/* Top row: Icon + Strength Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1463F3] group-hover:scale-105 transition-transform">
                <Sparkles size={19} />
              </div>

              <span
                className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full border ${strengthBadgeBg}`}
              >
                {strengthLabel}
              </span>
            </div>

            {/* Circular Pie Chart + Numbers Row */}
            <div className="flex items-center gap-3.5 my-1">
              {/* Circular Completion Pie Chart (Styled after uploaded demo screenshot) */}
              <div
                className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm overflow-hidden"
                style={{
                  background: `conic-gradient(#1463F3 0% ${completionPercentage}%, #FFFDF5 ${completionPercentage}% 100%)`,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span
                    className="text-[15px] sm:text-[16px] font-black tracking-tight text-[#0F172A]"
                    style={{
                      textShadow:
                        '0 0 5px rgba(255, 255, 255, 0.98), 0 0 10px rgba(255, 255, 255, 0.95), 0 1px 2px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {completionPercentage}%
                  </span>
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#0F172A] leading-tight">
                  Profile Strength
                </h3>
                <span className="text-[11.5px] font-semibold text-[#1463F3]">
                  {completedCount} of {tasks.length} completed
                </span>
                <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-1">
                  {completionPercentage === 100
                    ? 'All-star profile ready'
                    : firstPendingTask
                    ? `Next: ${firstPendingTask.title}`
                    : 'Complete profile'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[12px] font-semibold">
            {firstPendingTask && onCompleteSection ? (
              <button
                type="button"
                onClick={() => onCompleteSection(firstPendingTask.section)}
                className="text-[#1463F3] hover:underline flex items-center gap-1 bg-transparent border-0 cursor-pointer"
              >
                <Plus size={13} />
                <span>Add {firstPendingTask.title}</span>
              </button>
            ) : (
              <span className="text-emerald-600 flex items-center gap-1 text-[11.5px]">
                <CheckCircle2 size={13} />
                <span>Fully completed</span>
              </span>
            )}

            <button
              type="button"
              onClick={() => setIsChecklistOpen((prev) => !prev)}
              className="text-[#64748B] hover:text-[#1463F3] text-[11.5px] flex items-center gap-0.5 bg-transparent border-0 cursor-pointer"
            >
              <span>{isChecklistOpen ? 'Hide' : 'Checklist'}</span>
              {isChecklistOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
            </button>
          </div>
        </div>

        {/* Item 2: Profile Viewers */}
        <div
          onClick={() => setIsViewersModalOpen(true)}
          className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-[#1463F3] hover:shadow-sm transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1463F3] group-hover:scale-105 transition-transform">
                <Eye size={19} />
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <ArrowUpRight size={12} />
                <span>+18.4%</span>
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-[26px] sm:text-[28px] font-extrabold text-[#0F172A] leading-tight">
                {customProfileViews.toLocaleString()}
              </span>
              <span className="text-[11.5px] font-medium text-[#64748B]">profile viewers</span>
            </div>

            <p className="text-[12px] text-[#64748B] mt-1 leading-relaxed">
              Past 7 days · Recruiter searches & direct candidate profile visits.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[#1463F3] text-[12px] font-semibold group-hover:underline">
            <span>View all viewers</span>
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Item 3: Post Impressions */}
        <div
          onClick={() => {
            if (onNavigateActivity) onNavigateActivity();
          }}
          className="group p-4 sm:p-5 rounded-2xl bg-white border border-[#E2E8F0] hover:border-indigo-400 hover:shadow-sm transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                <TrendingUp size={19} />
              </div>

              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <ArrowUpRight size={12} />
                <span>+34.6%</span>
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-[26px] sm:text-[28px] font-extrabold text-[#0F172A] leading-tight">
                {customPostImpressions.toLocaleString()}
              </span>
              <span className="text-[11.5px] font-medium text-[#64748B]">post impressions</span>
            </div>

            <p className="text-[12px] text-[#64748B] mt-1 leading-relaxed">
              Past 7 days · Total times your posts and documents were displayed.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F1F5F9] flex items-center justify-between text-indigo-600 text-[12px] font-semibold group-hover:underline">
            <span>View post activity</span>
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* 3. Expandable Profile Strength Checklist */}
      {isChecklistOpen && (
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl animate-in fade-in duration-150">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
            <h4 className="text-[13px] font-bold text-[#0F172A]">
              Profile Completion Checklist ({completedCount}/{tasks.length})
            </h4>
            <button
              type="button"
              onClick={() => setIsChecklistOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-[11.5px] flex items-center gap-1 cursor-pointer"
            >
              <X size={14} />
              <span>Close</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => {
                  if (!task.isDone && onCompleteSection) {
                    onCompleteSection(task.section);
                  }
                }}
                className={`p-2.5 rounded-xl border flex items-start gap-2.5 transition-all ${
                  task.isDone
                    ? 'bg-white border-emerald-200'
                    : 'bg-white border-slate-200 hover:border-[#1463F3] hover:shadow-xs cursor-pointer'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {task.isDone ? (
                    <CheckCircle2 size={16} className="text-emerald-500 fill-emerald-50" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-300" />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[12px] font-bold ${
                        task.isDone ? 'text-slate-800 line-through opacity-80' : 'text-[#0F172A]'
                      }`}
                    >
                      {task.title}
                    </span>
                    <span className="text-[10.5px] font-semibold text-[#64748B]">
                      +{task.weight}%
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748B] line-clamp-1 mt-0.5">{task.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Interactive Profile Viewers Modal */}
      {isViewersModalOpen && (
        <div
          onClick={() => setIsViewersModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] max-w-lg w-full overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1463F3] flex items-center justify-center border border-blue-100">
                  <Eye size={18} />
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A]">
                    Profile Viewers ({customProfileViews})
                  </h3>
                  <p className="text-[11.5px] text-[#64748B]">
                    Past 7 days · Private to you
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsViewersModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Viewers List */}
            <div className="p-5 max-h-[60vh] overflow-y-auto divide-y divide-[#F1F5F9]">
              {mockViewers.map((viewer) => (
                <div key={viewer.id} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={viewer.avatar}
                      alt={viewer.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <h4 className="text-[13px] font-bold text-[#0F172A] truncate">
                        {viewer.name}
                      </h4>
                      <p className="text-[11.5px] text-[#475569] truncate">
                        {viewer.role} &bull;{' '}
                        <span className="font-semibold text-[#0F172A]">{viewer.company}</span>
                      </p>
                      <span className="text-[10.5px] text-[#94A3B8]">{viewer.time}</span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1463F3] bg-[#EFF6FF] border border-[#BFDBFE] px-2.5 py-1 rounded-lg shrink-0">
                    <UserCheck size={12} />
                    <span>Viewed</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-[#F1F5F9] flex items-center justify-between">
              <span className="text-[11.5px] text-[#64748B]">
                Viewers can only see your public profile.
              </span>
              <button
                type="button"
                onClick={() => setIsViewersModalOpen(false)}
                className="px-4 py-1.5 bg-[#1463F3] hover:bg-[#0F52CC] text-white text-[12px] font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionCard>
  );
};

export default AnalyticsCard;
