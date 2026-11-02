export interface ProfileBasicInfo {
  fullName: string;
  email: string;
  phone?: string;
  dob?: string;
  age?: number;
  gender?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface WorkExperienceCompany {
  id?: string;
  name?: string;
  iconBg?: string;
  iconText?: string;
  isCloudWind?: boolean;
}

export interface WorkExperience {
  id: string;
  companyName: string;
  role: string;
  duration: string;
  skills?: string[];
  company?: WorkExperienceCompany;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  fileName?: string;
  certificateUrl?: string;
  isVerified?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  isCloud?: boolean;
}

export interface Language {
  id: string;
  language: string;
  proficiency: string;
}

export interface Achievement {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  description?: string;
  photo?: string | null;
  fileName?: string | null;
  fileUrl?: string | null;
  link?: string;
}

export interface UserProfile {
  name: string;
  isVerified: boolean;
  headline: string;
  location: string;
  age: number;
  email: string;
  avatar: string;
  shortBio: string;
  about: string;
  basicInfo: ProfileBasicInfo;
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  skills: string[];
  projects: Project[];
  languages: Language[];
  achievements: Achievement[];
  interests: string;
}

export type ProfileSection =
  | 'header'
  | 'about'
  | 'basic'
  | 'experience'
  | 'education'
  | 'certifications'
  | 'skills'
  | 'projects'
  | 'languages'
  | 'achievements'
  | 'interests';

export type ModalMode = 'add' | 'edit';

export interface FormProps<T = any> {
  initialData?: T;
  mode: ModalMode;
  onSave: (data: T) => void;
  onCancel: () => void;
}

