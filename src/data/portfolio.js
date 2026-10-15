/**
 * Master Portfolio Data for Sahil Singh
 * Centralized source of truth for personal information, social links,
 * education, and global configurations.
 */

export const personalInfo = {
  name: "Sahil Singh",
  title: "MERN Stack Developer | Aspiring Software Engineer",
  tagline: "Building practical web experiences through thoughtful development, clean interfaces and continuous learning.",
  careerObjective: "Seeking software development internship opportunities to contribute to real-world applications and grow as a software engineer.",
  location: "Gorakhpur, Uttar Pradesh, India",
  email: "sahilsingh36700gmail.com", // Configurable mailto link
  displayEmail: "sahilsingh53.work@gmail.com",
  phone: null, // Phone hidden per privacy guidelines
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Chaudhary Devi Lal University (CDLU), Sirsa",
    period: "August 2023 – June 2027",
    expectedGraduation: 2027,
    status: "Undergraduate (3rd Year)"
  },
  social: {
    github: "https://github.com/mysterio-singh",
    linkedin: "https://www.linkedin.com/in/sahil-singh-a02186261/",
    twitter: "https://x.com/SahilSi68697311",
    instagram: "https://www.instagram.com/sahil_.singh53"
  },
  resume: {
    path: "public/sahilresumee (1).pdf",
    available: true,
    lastUpdated: "October 2026",
    filename: "Sahil_Singh_Resume.pdf"
  },
  portrait: {
    primary: "/images/portrait/sahil-portrait.jpg",
    formal: "/images/portrait/sahil-profile-formal.jpg",
    cutout: "/images/portrait/sahil-cutout.png",
    alt: "Sahil Singh - MERN Stack Developer"
  },
  interests: {
    title: "Beyond Code",
    category: "Fitness & Content Creation",
    description: "Passionate fitness enthusiast with 50+ fitness motivation reels created. Applying the same discipline, progressive overload, and patience from the gym into mastering software engineering and clean code.",
    instagram: "https://www.instagram.com/sahil_.singh53"
  }
};

export const browsingProfiles = [
  {
    id: "recruiter",
    name: "Recruiter",
    badge: "Quick Overview",
    role: "Hiring Manager / Recruiter",
    description: "Fast-track access to career objective, featured projects, verified skills, downloadable resume, and direct contact options.",
    avatarBg: "linear-gradient(135deg, #E50914, #831010)",
    accentColor: "#E50914",
    initialSection: "hero",
    priorities: ["Resume Download", "Core MERN Projects", "Skill Matrix", "Internship Availability"],
    recommendedPath: "Hero → Featured Projects → Skills → Resume"
  },
  {
    id: "developer",
    name: "Developer",
    badge: "Technical Depth",
    role: "Peer Engineer / Tech Lead",
    description: "Deep dive into full-stack architecture, database models, GitHub commits, tech stacks, and simulated developer terminal.",
    avatarBg: "linear-gradient(135deg, #1f2937, #111827)",
    accentColor: "#3B82F6",
    initialSection: "projects",
    priorities: ["Architecture Breakdown", "Unfazed Full-Stack MVP", "Developer Terminal", "Code Repositories"],
    recommendedPath: "Terminal → Projects → Unfazed Case Study → Skills"
  },
  {
    id: "explorer",
    name: "Explorer",
    badge: "Full Story",
    role: "Curious Visitor",
    description: "Complete visual narrative including education, learning milestones, certifications, personal interests, and all works.",
    avatarBg: "linear-gradient(135deg, #7c2d12, #451a03)",
    accentColor: "#F59E0B",
    initialSection: "about",
    priorities: ["Education & Milestones", "Personal Story", "Certifications", "Beyond Code / Fitness"],
    recommendedPath: "Cinematic Journey → About Me → Certifications → Projects"
  }
];
