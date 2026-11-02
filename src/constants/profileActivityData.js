export const INITIAL_ACTIVITIES = {
  posts: [
    {
      id: 'post-1',
      content:
        'Just launched JobNova AI! 🚀 Built with Spring Boot 3, React 19, and Tailwind CSS. Would love to get feedback from fellow developers and engineering leads in the community! #FullStack #React #SpringBoot #Career',
      photo:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
      document: null,
      visibility: 'Anyone',
      commentPermission: 'Anyone',
      author: {
        name: 'Debjit Pal',
        headline: 'Full Stack Developer | Java & Web Technologies',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      timeAgo: '2 days ago',
      likesCount: 34,
      commentsCount: 6,
      isLiked: false,
    },
    {
      id: 'post-2',
      content:
        'Delighted to announce that I have completed the Meta Full-Stack Professional Certification. Onward and upward! 💻✨ Deep dived into advanced state management, REST APIs, and responsive design systems.',
      photo: null,
      document: null,
      visibility: 'Anyone',
      commentPermission: 'Anyone',
      author: {
        name: 'Debjit Pal',
        headline: 'Full Stack Developer | Java & Web Technologies',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      timeAgo: '1 week ago',
      likesCount: 58,
      commentsCount: 12,
      isLiked: true,
    },
    {
      id: 'post-3',
      content:
        'Sharing my thoughts on architecture patterns in modern web applications. What do you prefer for mid-to-large scalable applications: Monolith with Spring Boot or Event-Driven Microservices? Let me know your thoughts!',
      photo: null,
      document: null,
      visibility: 'Anyone',
      commentPermission: 'Anyone',
      author: {
        name: 'Debjit Pal',
        headline: 'Full Stack Developer | Java & Web Technologies',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      },
      timeAgo: '2 weeks ago',
      likesCount: 21,
      commentsCount: 9,
      isLiked: false,
    },
  ],
  comments: [
    {
      id: 'cmt-1',
      targetPost: 'Building Scalable Microservices with Spring Boot by Rajesh Verma',
      commentText:
        'Spot on! Using Spring Cloud Config with Eureka makes service discovery effortless in distributed setups.',
      timestamp: '3 days ago',
      likes: 9,
      isLiked: false,
    },
    {
      id: 'cmt-2',
      targetPost: 'Next.js 15 Server Actions Deep Dive by Priya Das',
      commentText:
        'Really loved the comparison with traditional REST endpoints. Clean, concise, and easy to follow!',
      timestamp: '5 days ago',
      likes: 4,
      isLiked: false,
    },
    {
      id: 'cmt-3',
      targetPost: 'Top 10 System Design Tips for Mid-Level Engineers by Amit Kumar',
      commentText:
        'Caching at the database layer vs CDN caching was well articulated. Redis cluster strategies made total sense.',
      timestamp: '2 weeks ago',
      likes: 11,
      isLiked: true,
    },
  ],
  documents: [
    {
      id: 'doc-1',
      title: 'Debjit_Pal_FullStack_Resume_2026.pdf',
      type: 'PDF',
      size: '1.8 MB',
      pages: 2,
      timestamp: 'Uploaded 4 days ago',
      url: '#',
    },
    {
      id: 'doc-2',
      title: 'JobNova_AI_Architecture_Whitepaper.pdf',
      type: 'PDF',
      size: '4.2 MB',
      pages: 14,
      timestamp: 'Uploaded 2 weeks ago',
      url: '#',
    },
    {
      id: 'doc-3',
      title: 'Spring_Boot_Microservices_Cheatsheet.docx',
      type: 'DOCX',
      size: '850 KB',
      pages: 5,
      timestamp: 'Uploaded 3 weeks ago',
      url: '#',
    },
  ],
};

const STORAGE_KEY = 'agy_candidate_activities';

export function getStoredActivities() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_ACTIVITIES;
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse stored activities:', err);
    return INITIAL_ACTIVITIES;
  }
}

export function saveStoredActivities(activities) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
  } catch (err) {
    console.error('Failed to save activities:', err);
  }
}

