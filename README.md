# Sahil Singh — Cinematic Developer Portfolio

A premium, Netflix-inspired cinematic portfolio engineered for **Sahil Singh** (MERN Stack Developer & Aspiring Software Engineer). Designed with dark aesthetics, subtle red ambient accents, interactive browsing personas, rich project case studies, and an in-browser simulated developer terminal.

![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20Vite%20%7C%20Tailwind%20%7C%20Framer%20Motion-E50914)
![License](https://img.shields.io/badge/Status-Production%20Ready-green)

---

## 🎬 Key Features

1. **Cinematic Opening & Name Reveal**:
   - Immersive dark introductory screen with authentic portrait canvas.
   - "Enter Experience" trigger with accessible "Skip to Profiles" for recruiters.
   - Absolutely zero background audio or unwanted sound effects.

2. **"Who's Watching?" Profile Selector**:
   - **Recruiter Mode**: Prioritizes career objective, featured MERN projects, verified skills, and resume downloads.
   - **Developer Mode**: Highlights technical architectures, Unfazed full-stack MVP, GitHub repositories, and developer CLI.
   - **Explorer Mode**: Walks through university education at CDLU, certified Internshala training, certifications, and the "Beyond Code" fitness journey.
   - Easy switching anytime via the navigation bar pill.

3. **Featured Projects & Horizontal Carousels**:
   - **Unfazed (Mental Healthcare & Practice Platform)**: Full-stack MVP case study with 4 authentic screenshots (Landing, Therapists Directory, Register, Login).
   - **Ecommerce Web (Vyrox)**: Modern responsive sportswear and footwear storefront prototype.
   - **Learning Management System (LMS)**: Django, Python, and MySQL project clearly marked *In Progress* with planned vs implemented architecture.

4. **Project Case Study Modals**:
   - Screenshot gallery with interactive thumbnail switcher.
   - Problem & solution analysis, confirmed feature checklist, tech stack, challenges, and lessons learned.
   - Honest link handling: GitHub and Live Demo buttons render only when real URLs are configured (no dead or fake buttons).

5. **My Journey & Interactive Skills Universe**:
   - Vertical cinematic timeline with illuminated red nodes covering CDLU B.Tech CS, Internshala Python training, and project milestones.
   - Categorized skills (Frontend, Backend, Databases, Programming, Tools, Foundations) distinguishing established proficiencies from active learning areas (Django).
   - Clicking a skill dynamically reveals associated real-world projects.

6. **Interactive Simulated Developer Terminal**:
   - Built-in CLI accessible via the navbar pill or keyboard shortcut (`~` or `` ` ``).
   - Supports safe simulated commands: `help`, `about`, `projects`, `skills`, `journey`, `contact`, `resume`, `mode [recruiter|developer|explorer]`, `clear`, `exit`.
   - Command history navigation with Arrow Up/Down.
   - Completely client-side and secure (no arbitrary code evaluation or shell execution).

7. **Resume & Certifications**:
   - Direct download and browser view of official resume (`/resume.pdf`).
   - Verified credentials including Tata GenAI Powered Data Analytics simulation, Web Development internship, and Python training.

8. **Contact & Accessibility**:
   - One-click copy email button with instant confirmation.
   - Direct `mailto:` action and verified LinkedIn, GitHub, X/Twitter, and Instagram links.
   - Full keyboard accessibility, modal focus trapping, Escape key support, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Animation & Transitions**: Modern CSS Variables + Hardware-accelerated transitions
- **Deployment Target**: Vercel, Netlify, or GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9 or higher)

### Installation

```bash
# Clone or navigate into the project directory
cd myprofile

# Install dependencies
npm install
```

### Development Server

```bash
# Start Vite development server
npm run dev
```

Visit `http://localhost:3000/` (or the port displayed in your terminal).

### Production Build

```bash
# Compile and optimize for production
npm run build

# Preview the local production build
npm run preview
```

---

## 📁 Project Architecture

```
myprofile/
├── public/
│   ├── favicon.svg
│   ├── resume.pdf                       # Official resume file (220KB)
│   └── images/
│       ├── portrait/
│       │   ├── sahil-portrait.jpg       # Authentic portrait of Sahil Singh
│       │   ├── sahil-profile-formal.jpg # Formal alternative portrait
│       │   └── sahil-cutout.png         # Transparent cutout portrait
│       ├── unfazed/
│       │   ├── unfazed-home.png         # Authentic landing page screenshot
│       │   ├── unfazed-therapists.png   # Featured therapists directory
│       │   ├── unfazed-register.png     # Therapist registration modal
│       │   └── unfazed-login.png        # Workspace login modal
│       └── posters/
│           ├── ecommerce-hero.png       # Vyrox hero showcase
│           ├── ecommerce-shoe.jpg       # Product showcase
│           └── lms-poster.svg           # Django LMS architectural poster
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutSection.jsx             # About Me with portrait & fitness story
│   │   ├── BrandIcons.jsx               # Pixel-perfect GitHub, LinkedIn, Twitter, Instagram SVGs
│   │   ├── ContactSection.jsx           # Direct email & social hub
│   │   ├── DeveloperTerminal.jsx        # Simulated interactive CLI
│   │   ├── Footer.jsx                   # Brand mark, back-to-top, copyright
│   │   ├── HeroSection.jsx              # Cinematic hero with dark overlays
│   │   ├── IntroScreen.jsx              # Opening sequence with name reveal
│   │   ├── JourneyTimeline.jsx          # Vertical milestone timeline
│   │   ├── Navbar.jsx                   # Sticky nav with mode switcher & terminal trigger
│   │   ├── ProfileSelector.jsx          # "Who's Watching?" modal
│   │   ├── ProjectCard.jsx              # Netflix-style project card
│   │   ├── ProjectCarousel.jsx          # Horizontal carousel with category filters
│   │   ├── ProjectModal.jsx             # Case study modal with gallery & features
│   │   ├── ResumeSection.jsx            # Resume download & certification cards
│   │   └── SkillsUniverse.jsx           # Interactive categorized skill matrix
│   ├── data/
│   │   ├── portfolio.js                 # Personal details, education, social URLs
│   │   ├── projects.js                  # Centralized project data & links
│   │   ├── skills.js                    # Skills, categories, and project associations
│   │   ├── journey.js                   # Timeline milestones
│   │   └── certifications.js            # Verified certifications
│   ├── hooks/
│   │   ├── useReducedMotion.js          # Accessibility media query hook
│   │   └── useScrollSpy.js              # Active section detector for navbar
│   ├── styles/
│   │   ├── global.css                   # Theme variables, typography, reset
│   │   └── animations.css               # Film grain, glow spotlights, vignettes
│   ├── App.jsx                          # Main app container & flow coordinator
│   ├── index.css                        # Entry stylesheet
│   └── main.jsx                         # React root entry
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔧 Content Customization & Updates

All personal data, links, projects, and skills are decoupled from UI components in `src/data/`:

### 1. Adding GitHub & Live Demo Links
Open `src/data/projects.js` and locate the target project:
```javascript
{
  id: "unfazed",
  title: "Unfazed",
  // ...
  repositoryUrl: "https://github.com/mysterio-singh/unfazed", // Add your repo URL here
  liveDemoUrl: "https://unfazed-practice.vercel.app",         // Add your deployed URL here
}
```
*Note: If `liveDemoUrl` is `null`, the UI displays a clean "Demo soon" notice. If `repositoryUrl` is `null`, the button is cleanly omitted to prevent dead clicks.*

### 2. Adding a New Project
In `src/data/projects.js`, simply append a new object to the `projects` array:
```javascript
{
  id: "my-new-app",
  title: "My New Application",
  subtitle: "Brief subtitle",
  category: "Full-Stack Development",
  status: "Active MVP",
  statusType: "success",
  featured: true,
  year: "2026",
  role: "Full-Stack Developer",
  description: "One-sentence overview.",
  longDescription: "Detailed breakdown of the application.",
  problem: "What problem does this solve?",
  solution: "How does the architecture solve it?",
  technologies: ["React.js", "Node.js", "MongoDB"],
  implementedFeatures: ["Feature 1", "Feature 2"],
  plannedFeatures: ["Feature 3"],
  image: "/images/posters/my-app.png",
  gallery: [{ src: "/images/posters/my-app.png", caption: "Main dashboard" }],
  repositoryUrl: "https://github.com/mysterio-singh/my-new-app",
  liveDemoUrl: null
}
```
Save your screenshots in `public/images/posters/` and the project will automatically appear in the carousel, case study modal, and terminal!

### 3. Replacing the Profile Portrait
Place your updated portrait in `public/images/portrait/` and verify the path in `src/data/portfolio.js`:
```javascript
portrait: {
  primary: "/images/portrait/sahil-portrait.jpg",
  alt: "Sahil Singh - MERN Stack Developer"
}
```

### 4. Updating the Resume PDF
Whenever you update your resume, replace `public/resume.pdf` with your new PDF file. The "Download Resume" buttons across the Navbar, Hero, About, and Resume sections will immediately point to the new file without requiring any code edits.

---

## 🚢 Deploying to Vercel

The portfolio is pre-configured for instant zero-configuration deployment to [Vercel](https://vercel.com):

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete cinematic developer portfolio"
   git branch -M main
   git remote add origin https://github.com/mysterio-singh/cinematic-portfolio.git
   git push -u origin main
   ```
2. **Deploy on Vercel**:
   - Log into [Vercel](https://vercel.com).
   - Click **Add New** → **Project**.
   - Select your repository (`cinematic-portfolio`).
   - Framework Preset: **Vite** (auto-detected).
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**.

---

## 🔒 Verification & Quality Checklist

- [x] **Vite Development Server**: Verified on `http://localhost:3000/`.
- [x] **Production Build**: `npm run build` passes with zero errors and optimal chunk sizes.
- [x] **Code Linter**: `npm run lint` passes with 0 errors and 0 warnings.
- [x] **Cinematic Intro**: Name reveal animation, "Enter Experience", and "Skip to Profiles" working.
- [x] **Who's Watching?**: 3 interactive profiles (Recruiter, Developer, Explorer) adjusting emphasis.
- [x] **Authentic Assets**: Real portrait, 4 authentic Unfazed screenshots, and 220KB resume PDF confirmed.
- [x] **Zero Audio**: Strictly silent experience with no autoplay sound.
- [x] **Developer CLI**: Full keyboard navigation, `help`, `projects`, `skills`, `journey`, `mode`, and `clear` commands working.
- [x] **Accessibility**: ARIA labels, semantic landmark elements, modal focus trap, Escape key handling, and `prefers-reduced-motion` support.
