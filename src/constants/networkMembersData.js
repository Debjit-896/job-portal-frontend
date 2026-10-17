export const networkMembersData = {
  'rahul-saha': {
    id: 'rahul-saha',
    name: 'Rahul Saha',
    isVerified: true,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    headline: 'Software Developer | React | Next.js | Node.js',
    location: 'Kolkata, West Bengal, India',
    age: 21,
    email: 'debjitpal123@gmail.com',
    shortBio:
      'Passionate about building web applications and solving real-world problems. I love learning new technologies and contributing to impactful projects.',
    tags: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript'],
    about:
      'I am a Full Stack Developer with a strong interest in building scalable web applications. I have hands-on experience with React, Next.js, Node.js, Express.js, PHP, Laravel and Spring Boot. I am always eager to learn new technologies and improve my skills to grow in the tech industry.',
    contactInfo: {
      email: 'debjitpal123@gmail.com',
      phone: '+91 98765 43210',
      location: 'Kolkata, West Bengal, India',
      linkedin: 'linkedin.com/in/debjitpal',
      github: 'github.com/debjitpal',
      portfolio: 'https://debjitpal.dev',
    },
    workExperience: [
      {
        id: 1,
        role: 'Software Developer',
        company: 'TechNova Solutions Pvt. Ltd.',
        duration: 'Jan 2024 – Present (2 years 9 months)',
        description:
          'Working on full-stack web applications using React, Next.js, Node.js and MongoDB. Responsible for building new features, fixing bugs and improving performance.',
        isTechNova: true,
      },
      {
        id: 2,
        role: 'Junior Web Developer',
        company: 'WebCraft Studio',
        duration: 'Jul 2022 – Dec 2023 (1 year 6 months)',
        description:
          'Developed responsive websites and web applications using HTML, CSS, JavaScript, React and PHP. Worked closely with the design team to deliver user-friendly interfaces.',
        isWebCraft: true,
      },
    ],
    education: [
      {
        id: 1,
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
    skillsCategories: [
      {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
      },
      {
        category: 'Backend',
        skills: ['Node.js', 'Express.js', 'Java', 'Spring Boot'],
      },
      {
        category: 'Database',
        skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      },
      {
        category: 'Tools & Others',
        skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux'],
      },
    ],
    projects: [
      {
        id: 1,
        title: 'JobNova AI',
        description: 'AI powered job portal with resume generation and smart matching.',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        iconType: 'briefcase',
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        description: 'Full stack e-commerce application with payment integration.',
        tags: ['Next.js', 'Express.js', 'PostgreSQL', 'Razorpay'],
        iconType: 'cart',
      },
    ],
    languages: [
      { language: 'English', proficiency: 'Fluent' },
      { language: 'Hindi', proficiency: 'Fluent' },
      { language: 'Bengali', proficiency: 'Native' },
    ],
  },

  'rohit-sharma': {
    id: 'rohit-sharma',
    name: 'Rohit Sharma',
    isVerified: true,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    headline: 'Frontend Developer | React & Next.js',
    location: 'Kolkata, West Bengal, India',
    age: 23,
    email: 'rohit.sharma@example.com',
    shortBio: 'Building fluid, responsive web interfaces and design systems.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    about: 'Experienced in developing performant React web applications with smooth UI/UX.',
    contactInfo: {
      email: 'rohit.sharma@example.com',
      phone: '+91 98765 11223',
      location: 'Kolkata, West Bengal, India',
      linkedin: 'linkedin.com/in/rohitsharma',
      github: 'github.com/rohitsharma',
      portfolio: 'https://rohitsharma.dev',
    },
    workExperience: [
      {
        id: 1,
        role: 'Frontend Developer',
        company: 'TechNova Solutions Pvt. Ltd.',
        duration: 'May 2023 – Present',
        description: 'Leading front-end development and design system implementation.',
        isTechNova: true,
      },
    ],
    education: [
      {
        id: 1,
        institution: 'Heritage Institute of Technology',
        degree: 'B.Tech in Computer Science',
        period: '2019 – 2023',
        location: 'Kolkata, West Bengal, India',
      },
    ],
    skillsCategories: [
      { category: 'Frontend', skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
      { category: 'Tools & Others', skills: ['Git', 'Vite', 'Figma'] },
    ],
    projects: [
      {
        id: 1,
        title: 'Design System Hub',
        description: 'Component library with accessibility and dark mode.',
        tags: ['React', 'Tailwind CSS', 'Storybook'],
        iconType: 'briefcase',
      },
    ],
    languages: [
      { language: 'English', proficiency: 'Fluent' },
      { language: 'Hindi', proficiency: 'Native' },
    ],
  },
};

export const getNetworkMemberById = (id) => {
  if (!id) return networkMembersData['rahul-saha'];
  const key = id.toLowerCase().replace(/\s+/g, '-');
  if (networkMembersData[key]) {
    return networkMembersData[key];
  }
  // Fallback with name formatted
  const formattedName = id
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    ...networkMembersData['rahul-saha'],
    id: key,
    name: formattedName,
  };
};
