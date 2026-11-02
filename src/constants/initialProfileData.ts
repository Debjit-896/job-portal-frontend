import { UserProfile } from '../types/profile';

export const INITIAL_PROFILE_DATA: UserProfile = {
  name: 'Debjit Pal',
  isVerified: true,
  headline: 'Full Stack Developer | Java & Web Technologies',
  location: 'Kolkata, West Bengal, India',
  age: 21,
  email: 'debjitpal123@gmail.com',
  avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
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
    {
      id: 'technova',
      companyName: 'TechNova Solutions',
      role: 'Software Engineer Intern',
      duration: 'Dec 2025 – Feb 2026 (3 months)',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
      company: {
        id: 'technova',
        name: 'TechNova Solutions',
        iconBg: '#0F284E',
        iconText: 'T',
      },
    },
    {
      id: 'apexweb',
      companyName: 'Apex Web Studio',
      role: 'Frontend Development Intern',
      duration: 'Jun 2025 – Sep 2025 (4 months)',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      company: {
        id: 'apexweb',
        name: 'Apex Web Studio',
        iconBg: '#059669',
        iconText: 'A',
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
    {
      id: 'secondary',
      institution: 'Barasat High School',
      degree: 'Higher Secondary (Science Stream - WBBSE)',
      period: '2020 – 2022',
      location: 'Kolkata, West Bengal, India',
    },
    {
      id: 'webdev-academy',
      institution: 'Web Development Career Academy',
      degree: 'Full Stack Engineering Specialization',
      period: '2024 – 2025',
      location: 'Online / Remote',
    },
    {
      id: 'secondary-school',
      institution: 'St. Xavier’s High School',
      degree: 'Secondary School Certificate (Class X)',
      period: '2010 – 2020',
      location: 'Kolkata, West Bengal, India',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services (AWS)',
      issueDate: 'Jan 2025',
      expiryDate: 'Jan 2028',
      credentialId: 'AWS-8924021',
      credentialUrl: 'https://aws.amazon.com/verification',
      fileName: 'aws-certified-solutions-architect.pdf',
      certificateUrl:
        'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=400&q=80',
      isVerified: true,
    },
    {
      id: 'cert-2',
      title: 'Meta Full-Stack Developer Professional Certificate',
      issuer: 'Meta / Coursera',
      issueDate: 'Aug 2024',
      expiryDate: 'No Expiration',
      credentialId: 'META-FS-99120',
      credentialUrl: 'https://coursera.org/verify/meta-fs',
      fileName: 'meta-fullstack-certificate.pdf',
      certificateUrl:
        'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=400&q=80',
      isVerified: true,
    },
    {
      id: 'cert-3',
      title: 'Oracle Certified Professional: Java SE 17 Developer',
      issuer: 'Oracle University',
      issueDate: 'May 2024',
      expiryDate: 'No Expiration',
      credentialId: 'OCP-JAVA-839210',
      credentialUrl: 'https://catalog-education.oracle.com',
      fileName: 'oracle-java-ocp-cert.pdf',
      isVerified: true,
    },
    {
      id: 'cert-4',
      title: 'Docker Certified Associate (DCA)',
      issuer: 'Docker Inc.',
      issueDate: 'Nov 2024',
      expiryDate: 'Nov 2027',
      credentialId: 'DCA-449102',
      credentialUrl: 'https://docker.com/certification',
      fileName: 'docker-certified-associate.pdf',
      isVerified: true,
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
      description: 'AI powered job portal with Spring Boot + React and automated resume parsing',
      tags: ['Spring Boot', 'React', 'MySQL', 'Docker'],
      isCloud: true,
    },
    {
      id: 'nexkart',
      title: 'NexKart',
      description: 'E-commerce platform with microservices architecture and payment gateways',
      tags: ['Java', 'PostgreSQL', 'React', 'Docker'],
      isCloud: false,
    },
    {
      id: 'devpulse',
      title: 'DevPulse Developer Community',
      description: 'Real-time collaborative developer discussion and code sharing platform',
      tags: ['Next.js', 'Node.js', 'Socket.io', 'Tailwind CSS'],
      isCloud: true,
    },
    {
      id: 'cloudvault',
      title: 'CloudVault Secure File Storage',
      description: 'End-to-end encrypted cloud storage with AWS S3 and Spring Security',
      tags: ['Java', 'AWS S3', 'Spring Security', 'React'],
      isCloud: true,
    },
  ],
  languages: [
    { id: 'lang-1', language: 'English', proficiency: 'Full Professional Proficiency' },
    { id: 'lang-2', language: 'Bengali', proficiency: 'Native or Bilingual Proficiency' },
    { id: 'lang-3', language: 'Hindi', proficiency: 'Professional Working Proficiency' },
  ],
  achievements: [
    {
      id: 'achieve-1',
      title: 'Winner - National College Hackathon 2024',
      issuer: 'State Tech & Innovation Council',
      date: 'Oct 2024',
      description:
        'Secured 1st place among 120+ teams nationwide for developing an AI-assisted job matching and evaluation portal using Spring Boot and React.',
      photo:
        'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=600&q=80',
      fileName: 'hackathon_winner_certificate.pdf',
      fileUrl: '#',
      link: 'https://hackathon.techfest.org/winners/2024',
    },
    {
      id: 'achieve-2',
      title: 'Dean’s Honor List for Academic Excellence',
      issuer: 'Acharyya Prafulla Chandra Roy Polytechnic',
      date: '2023 – 2024',
      description:
        'Awarded top departmental rank in Computer Science & Engineering for outstanding academic performance across all semesters.',
      photo: null,
      fileName: 'deans_honor_award.pdf',
      fileUrl: '#',
      link: '',
    },
    {
      id: 'achieve-3',
      title: 'Best Open Source Contributor 2024',
      issuer: 'Kolkata Dev Community',
      date: 'Aug 2024',
      description:
        'Recognized for contributing core features to open-source developer tooling and mentoring junior web developers.',
      photo:
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
      fileName: 'opensource_contributor_award.pdf',
      fileUrl: '#',
      link: 'https://github.com/debjitpal',
    },
    {
      id: 'achieve-4',
      title: 'Finalist - Smart Bengal Coding Challenge',
      issuer: 'Department of Information Technology, WB',
      date: 'Dec 2023',
      description:
        'Selected among the top 10 finalists out of 2,000+ applicants for solving distributed systems and concurrency challenges.',
      photo: null,
      fileName: 'coding_challenge_finalist.pdf',
      fileUrl: '#',
      link: '',
    },
  ],
  interests: 'Coding, Tech News, Gaming, Travel, Artificial Intelligence, System Design',
};

const PROFILE_STORAGE_KEY = 'agy_candidate_profile_data';

export function getStoredProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (!raw) return INITIAL_PROFILE_DATA;
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse stored profile:', err);
    return INITIAL_PROFILE_DATA;
  }
}

export function saveStoredProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save profile:', err);
  }
}

