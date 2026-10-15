/**
 * Skills Data for Sahil Singh
 * Categorized technical capabilities with accurate status (Established vs Learning)
 * and associations to real projects.
 * 
 * Rules:
 * - No fake percentage bars or arbitrary proficiency scores.
 * - Distinguish established vs active learning areas.
 */

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "programming", label: "Programming" },
  { id: "tools", label: "Tools & DevOps" },
  { id: "foundations", label: "CS Foundations" }
];

export const skills = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed"],
    description: "Component architecture, React Hooks, functional components, state management, and modern Vite setups."
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed", "ecommerce-web"],
    description: "Modern asynchronous JS, promises, async/await, DOM APIs, event handling, and closures."
  },
  {
    name: "HTML5",
    category: "frontend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed", "ecommerce-web", "lms-system"],
    description: "Semantic markup, accessibility foundations (ARIA), form validation, and responsive structure."
  },
  {
    name: "CSS3 / Modern CSS",
    category: "frontend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed", "ecommerce-web", "lms-system"],
    description: "Flexbox, CSS Grid, custom properties, responsive breakpoints, transitions, and keyframe animations."
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    status: "established",
    experienceLevel: "Practical Use",
    relatedProjectIds: ["unfazed", "ecommerce-web"],
    description: "Utility-first rapid prototyping, custom configuration, responsive variants, and dark theme support."
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed"],
    description: "Event-driven runtime, non-blocking I/O, npm package ecosystem, and asynchronous backend services."
  },
  {
    name: "Express.js",
    category: "backend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed"],
    description: "RESTful routing, custom middleware pipelines, authentication guards, and error handling."
  },
  {
    name: "REST APIs",
    category: "backend",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed"],
    description: "Endpoint architecture, standard HTTP status codes, JSON serialization, and request validation."
  },
  {
    name: "Django",
    category: "backend",
    status: "learning",
    experienceLevel: "Active Learning",
    relatedProjectIds: ["lms-system"],
    description: "Exploring Python web architecture, Django ORM, Model-View-Template design, and Django Admin."
  },

  // Databases
  {
    name: "MongoDB",
    category: "databases",
    status: "established",
    experienceLevel: "Core Competency",
    relatedProjectIds: ["unfazed"],
    description: "NoSQL document modeling, Mongoose schemas, collection indexing, and CRUD query aggregation."
  },
  {
    name: "SQL",
    category: "databases",
    status: "established",
    experienceLevel: "Practical Use",
    relatedProjectIds: ["lms-system"],
    description: "Relational queries, table joins, data integrity constraints, aggregation, and normalization."
  },
  {
    name: "Database Design",
    category: "databases",
    status: "established",
    experienceLevel: "Practical Use",
    relatedProjectIds: ["unfazed", "lms-system"],
    description: "Entity-Relationship modeling, relational vs document trade-offs, foreign key constraints."
  },

  // Programming Languages
  {
    name: "Python",
    category: "programming",
    status: "established",
    experienceLevel: "Certified / Training",
    relatedProjectIds: ["lms-system"],
    description: "Data handling, OOP principles, exception handling, modules, automation scripts, and Django foundations."
  },
  {
    name: "C++",
    category: "programming",
    status: "established",
    experienceLevel: "Academic Foundation",
    relatedProjectIds: [],
    description: "Standard Template Library (STL), memory management, pointers, and algorithmic problem solving."
  },
  {
    name: "C",
    category: "programming",
    status: "established",
    experienceLevel: "Academic Foundation",
    relatedProjectIds: [],
    description: "Low-level system programming concepts, structured coding, memory allocation, and pointers."
  },

  // Tools & Environment
  {
    name: "Git",
    category: "tools",
    status: "established",
    experienceLevel: "Daily Workflow",
    relatedProjectIds: ["unfazed", "ecommerce-web", "lms-system"],
    description: "Version control, branching workflows, merging, staging, and commit history management."
  },
  {
    name: "GitHub",
    category: "tools",
    status: "established",
    experienceLevel: "Daily Workflow",
    relatedProjectIds: ["unfazed"],
    description: "Remote repository hosting, issue tracking, project collaboration, and open-source contributions."
  },
  {
    name: "VS Code",
    category: "tools",
    status: "established",
    experienceLevel: "Primary Editor",
    relatedProjectIds: [],
    description: "Advanced debugging, workspace extensions, Git integration, and terminal productivity."
  },
  {
    name: "Linux / Unix CLI",
    category: "tools",
    status: "established",
    experienceLevel: "Practical Use",
    relatedProjectIds: [],
    description: "Bash commands, file permissions, process management, shell scripting, and remote server navigation."
  },

  // CS Foundations & Soft Skills
  {
    name: "Data Structures & Algorithms",
    category: "foundations",
    status: "established",
    experienceLevel: "Undergraduate Core",
    relatedProjectIds: [],
    description: "Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and time complexity analysis."
  },
  {
    name: "Object-Oriented Programming (OOP)",
    category: "foundations",
    status: "established",
    experienceLevel: "Core Principle",
    relatedProjectIds: ["unfazed", "lms-system"],
    description: "Encapsulation, inheritance, polymorphism, abstraction, and clean modular code design."
  },
  {
    name: "Analytical Thinking & Problem Solving",
    category: "foundations",
    status: "established",
    experienceLevel: "Core Strength",
    relatedProjectIds: [],
    description: "Breaking complex application requirements into clear, testable, and maintainable software components."
  },
  {
    name: "Team Collaboration & Communication",
    category: "foundations",
    status: "established",
    experienceLevel: "Professional Quality",
    relatedProjectIds: [],
    description: "Cross-functional pair programming, documentation, active listening, and constructive code reviews."
  }
];
