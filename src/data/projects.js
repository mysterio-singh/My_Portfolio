/**
 * Projects Data for Sahil Singh's Portfolio
 * Centralized list of projects with accurate descriptions, screenshots,
 * technology stacks, and optional repository/demo URLs.
 * 
 * Rules:
 * - Never provide fake URLs. If repositoryUrl or liveDemoUrl is null, the UI hides or disables the action.
 * - Accurately label In-Progress vs Implemented features.
 */

export const projects = [
  {
    id: "unfazed",
    title: "Unfazed",
    subtitle: "Mental Healthcare & Practice Platform",
    category: "Full-Stack Development",
    status: "Active MVP",
    statusType: "success", // success | warning | info
    featured: true,
    year: "2026",
    role: "Full-Stack Developer",
    description: "A specialized mental health web platform designed to streamline therapist discovery, patient scheduling, private practice workflows, and client-therapist communication.",
    longDescription: "Unfazed addresses the friction between therapy seekers and mental wellness practitioners. It offers clients a clean, reassuring interface to discover verified specialists, select sessions, and access a dedicated client portal. For practitioners, it provides a comprehensive backend workspace to manage client records, session schedules, clinical notes, and billing records.",
    problem: "Therapy seekers often face confusing directories, opaque pricing, and fragmented booking processes. Concurrently, independent practitioners struggle with scattered communication across multiple disconnected tools (email, messaging apps, manual calendars).",
    solution: "A unified platform featuring role-based portals for clients and therapists, instant session discovery, secure client authentication, and integrated clinical record management.",
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Socket.io",
      "Tailwind CSS"
    ],
    architecture: {
      frontend: "Vite + React single-page app with protected routing, context-driven auth state, and dynamic therapist profiles.",
      backend: "Node.js & Express RESTful API with MongoDB/Mongoose data models for clients, therapists, notes, leads, packages, and sessions.",
      realtime: "Socket.io integration for instant client-therapist chat and reminder scheduler."
    },
    implementedFeatures: [
      "Dark navy responsive landing page with clear value propositions and therapy journey breakdown",
      "Therapist directory with specialty tags, experience badges, and individual profile views",
      "Dedicated Client Portal entry point with session tracking",
      "Dual-role authentication: Separate registration and login workflows for clients and therapists",
      "Session booking flow with date, time slot, and specialist selection",
      "Therapist dashboard supporting client rosters, session schedules, and clinical notes management",
      "Package entitlements and automated session reminder scheduling"
    ],
    plannedFeatures: [
      "Integrated end-to-end encrypted video consultation rooms",
      "Direct payment gateway integration for automated billing and invoices",
      "Prescription and clinical assessment report downloads"
    ],
    image: "/images/unfazed/unfazed-home.png",
    gallery: [
      {
        src: "/images/unfazed/unfazed-home.png",
        caption: "Unfazed Landing Page — Mental healthcare interface with journey stages and client portal trigger"
      },
      {
        src: "/images/unfazed/unfazed-therapists.png",
        caption: "Therapist Discovery & Directory — Verified specialist cards and private practice call-to-action"
      },
      {
        src: "/images/unfazed/unfazed-register.png",
        caption: "Practitioner Onboarding — Clean registration form for therapist account creation"
      },
      {
        src: "/images/unfazed/unfazed-login.png",
        caption: "Secure Authentication — Focused login portal for private practice workspace"
      }
    ],
    repositoryUrl: "https://github.com/mysterio-singh", // Configured GitHub profile / repository
    liveDemoUrl: null, // Owner will add deployed URL later; UI displays graceful "Demo coming soon"
    challenges: "Designing an interface that balances medical-grade professionalism with an inviting, calm user experience, while coordinating dual-role authorization between clients and practitioners.",
    lessonsLearned: "Mastered full-stack state coordination with React and Express, structured modular MongoDB schemas for scheduling, and implemented robust token-based route guards."
  },
  {
    id: "ecommerce-web",
    title: "Ecommerce Web (Vyrox)",
    subtitle: "Modern Performance Apparel & Footwear Store",
    category: "Frontend Projects",
    status: "Completed Prototype",
    statusType: "info",
    featured: true,
    year: "2025",
    role: "Frontend Developer",
    description: "A fast, responsive sportswear e-commerce storefront with dynamic product showcase, real-time cart state management, and streamlined checkout UI.",
    longDescription: "Vyrox is an athletic footwear and apparel storefront built to explore responsive product catalogs, interactive product viewing, and lightweight cart state persistence. It emphasizes sleek typography, high-contrast imagery, and smooth touch interactions.",
    problem: "Many modern e-commerce storefronts suffer from heavy bundle sizes, slow image rendering, and cluttered checkout flows that reduce conversion.",
    solution: "A lightweight, mobile-first frontend with rapid product filtering, instant modal previews, responsive quantity adjustments, and clean order summaries.",
    technologies: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Web Design",
      "DOM Manipulation"
    ],
    architecture: {
      frontend: "Semantic HTML5 and Tailwind CSS utility styling with modular JavaScript for interactive cart calculation, responsive drawer menus, and dynamic product filtering."
    },
    implementedFeatures: [
      "Hero presentation featuring high-contrast product imagery and bold typography",
      "Responsive product showcase with category filtering and price indicators",
      "Interactive shopping cart with item quantity increment/decrement and price recalculation",
      "Mobile navigation drawer with smooth open/close toggles",
      "Product preview card with feature highlights and sizing selections"
    ],
    plannedFeatures: [
      "Stripe payment gateway integration",
      "Persistent user wishlist via browser LocalStorage / backend account sync",
      "Customer reviews and star rating breakdown"
    ],
    image: "/images/posters/ecommerce-hero.png",
    gallery: [
      {
        src: "/images/posters/ecommerce-hero.png",
        caption: "Vyrox Athletic Footwear Showcase — High performance product visual layout"
      },
      {
        src: "/images/posters/ecommerce-shoe.jpg",
        caption: "Product Detail View — Ergonomic design and feature presentation"
      }
    ],
    repositoryUrl: null, // To be linked by owner
    liveDemoUrl: null,   // To be linked by owner; UI displays graceful "Demo coming soon"
    challenges: "Ensuring sub-second layout rendering across mobile viewports while keeping product imagery crisp without layout shift.",
    lessonsLearned: "Deepened practical understanding of CSS Grid, Flexbox, touch-friendly tap targets, and reactive UI updates without third-party frameworks."
  },
  {
    id: "lms-system",
    title: "Learning Management System (LMS)",
    subtitle: "Web-Based Course & Curriculum Platform",
    category: "Learning / In Progress",
    status: "In Progress",
    statusType: "warning",
    featured: true,
    year: "2026",
    role: "Backend & Full-Stack Learner",
    description: "A structured educational web platform built with Django and Python, designed for curriculum management, dynamic course delivery, and role-based user tracking.",
    longDescription: "Listed as an active development project in Sahil's resume, this LMS explores relational database modeling and MVC architecture through Python and the Django framework. The platform focuses on course organization, student enrollment flows, and relational database schema design with MySQL.",
    problem: "Educational institutions require clean, modular software to organize courses, manage multi-tier instructor/student permissions, and deliver structured multimedia content without cumbersome software bloat.",
    solution: "A robust Django ORM-backed platform that handles course entities, modular lesson modules, secure user profiles, and administrative CRUD operations.",
    technologies: [
      "Python",
      "Django",
      "Django ORM",
      "MySQL",
      "HTML5",
      "CSS3",
      "Bootstrap"
    ],
    architecture: {
      backend: "Django MVC/MVT framework utilizing Django ORM for relational queries, user authentication system, and administrative panel.",
      database: "MySQL relational schema with foreign key relationships connecting Users, Courses, Modules, and Enrollment records."
    },
    implementedFeatures: [
      "Relational database schema design in MySQL for courses, instructors, and student enrollments",
      "Django ORM model definitions and automated schema migrations",
      "Course and module CRUD operations configured via Django Admin",
      "Basic user registration, authentication, and role assignment structure",
      "Responsive student dashboard layout using HTML5 and CSS3"
    ],
    plannedFeatures: [
      "Student progress percentage tracking and milestone completion badges",
      "Interactive quiz engine with automated grading",
      "Video lecture embedding and downloadable resource attachments",
      "Discussion forums for student-instructor Q&A"
    ],
    image: "/images/posters/lms-poster.svg", // SVG poster fallback
    gallery: [
      {
        src: "/images/posters/lms-poster.svg",
        caption: "LMS Architecture & Schema — In-progress Python/Django course management system"
      }
    ],
    repositoryUrl: null, // Will be linked when repository is ready
    liveDemoUrl: null,   // In progress project
    challenges: "Architecting normalized relational schemas to prevent data duplication between multi-instructor courses and independent student rosters.",
    lessonsLearned: "Gained hands-on proficiency with Django's Model-View-Template architecture, ORM queries, and relational database migrations."
  }
];

export const projectCategories = [
  "All Projects",
  "Featured Projects",
  "Full-Stack Development",
  "Frontend Projects",
  "Learning / In Progress"
];
