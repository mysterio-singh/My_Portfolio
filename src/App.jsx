import React, { useState, useEffect } from "react";
import { IntroScreen } from "./components/IntroScreen";
import { ProfileSelector } from "./components/ProfileSelector";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProjectCarousel } from "./components/ProjectCarousel";
import { ProjectModal } from "./components/ProjectModal";
import { JourneyTimeline } from "./components/JourneyTimeline";
import { SkillsUniverse } from "./components/SkillsUniverse";
import { AboutSection } from "./components/AboutSection";
import { ResumeSection } from "./components/ResumeSection";
import { ContactSection } from "./components/ContactSection";
import { DeveloperTerminal } from "./components/DeveloperTerminal";
import { Footer } from "./components/Footer";

import { useScrollSpy } from "./hooks/useScrollSpy";
import { projects } from "./data/projects";

import "./styles/global.css";
import "./styles/animations.css";

export default function App() {
  // Opening flow states
  const [showIntro, setShowIntro] = useState(() => {
    // Check if session has already bypassed intro
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("sahil_portfolio_entered") !== "true";
    }
    return true;
  });

  const [showProfileSelector, setShowProfileSelector] = useState(false);
  const [activeProfileId, setActiveProfileId] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("sahil_active_profile") || "recruiter";
    }
    return "recruiter";
  });

  // Modal & Terminal states
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  // Active section tracking for navbar
  const sectionIds = ["home", "projects", "journey", "skills", "about", "resume", "contact"];
  const activeSection = useScrollSpy(sectionIds, 120);

  // Keyboard shortcut listener for developer terminal (~ or `)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Toggle terminal on grave accent / tilde key if not typing in an input
      if (
        (e.key === "`" || e.key === "~") &&
        e.target.tagName !== "INPUT" &&
        e.target.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const handleEnterIntro = () => {
    setShowIntro(false);
    setShowProfileSelector(true);
    sessionStorage.setItem("sahil_portfolio_entered", "true");
  };

  const handleSkipIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem("sahil_portfolio_entered", "true");
  };

  const handleSelectProfile = (profileId) => {
    setActiveProfileId(profileId);
    setShowProfileSelector(false);
    sessionStorage.setItem("sahil_active_profile", profileId);

    // If profile has an initial section, scroll to it smoothly
    if (profileId === "developer") {
      const projElem = document.getElementById("projects");
      if (projElem) projElem.scrollIntoView({ behavior: "smooth" });
    } else if (profileId === "explorer") {
      const aboutElem = document.getElementById("about");
      if (aboutElem) aboutElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectProjectById = (projectId) => {
    const target = projects.find((p) => p.id === projectId);
    if (target) {
      setSelectedProject(target);
    }
  };

  return (
    <div className="portfolio-app-root" style={{ position: "relative", minHeight: "100vh" }}>
      {/* Accessibility Skip Link */}
      <a href="#projects" className="skip-link">
        Skip to Featured Projects
      </a>

      {/* Subtle Cinema Grain Overlay */}
      <div className="cinema-grain" aria-hidden="true" />

      {/* Screen A: Cinematic Introduction */}
      {showIntro && (
        <IntroScreen
          onEnter={handleEnterIntro}
          onSkip={handleSkipIntro}
        />
      )}

      {/* Screen B: "Who's Watching?" Profile Selector */}
      {showProfileSelector && (
        <ProfileSelector
          activeProfileId={activeProfileId}
          onSelectProfile={handleSelectProfile}
        />
      )}

      {/* Main Experience Navbar */}
      <Navbar
        activeSection={activeSection}
        activeProfileId={activeProfileId}
        onChangeProfile={() => setShowProfileSelector(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Experience Content Sections */}
      <main id="main-content">
        {/* Screen C: Hero Section */}
        <HeroSection
          activeProfileId={activeProfileId}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* Screen D: Featured Projects Carousels */}
        <ProjectCarousel
          onOpenModal={(proj) => setSelectedProject(proj)}
        />

        {/* Screen E: My Journey Timeline */}
        <JourneyTimeline
          onSelectProject={handleSelectProjectById}
        />

        {/* Screen F: Interactive Skills Universe */}
        <SkillsUniverse
          onSelectProject={handleSelectProjectById}
        />

        {/* Screen G: About Me */}
        <AboutSection />

        {/* Screen H: Resume & Certifications */}
        <ResumeSection />

        {/* Screen I: Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Simulated Developer Terminal */}
      <DeveloperTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        activeProfileId={activeProfileId}
        onChangeProfile={(mode) => {
          setActiveProfileId(mode);
          sessionStorage.setItem("sahil_active_profile", mode);
        }}
      />
    </div>
  );
}
