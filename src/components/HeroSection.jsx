import React from "react";
import {
  ArrowRight,
  FileDown,
  MapPin,
  GraduationCap,
  Layers,
  Terminal
} from "lucide-react";
import { personalInfo, browsingProfiles } from "../data/portfolio";

export function HeroSection({ activeProfileId, onOpenTerminal }) {
  const activeProfile =
    browsingProfiles.find((p) => p.id === activeProfileId) || browsingProfiles[0];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-section"
      aria-label="Sahil Singh Introduction"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "90px",
        paddingBottom: "50px",
        backgroundColor: "var(--bg-primary)",
        overflow: "hidden"
      }}
    >
      {/* Top Ambient Glow Spotlight */}
      <div className="glow-spotlight-top" />
      <div className="glow-spotlight-right" />

      {/* Background Cinematic Portrait Canvas */}
      <div
        className="hero-portrait-canvas"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "clamp(340px, 50vw, 750px)",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.85
        }}
      >
        {/* Layer 1: The Authentic Portrait */}
        <img
          src={personalInfo.portrait.primary}
          alt={personalInfo.portrait.alt}
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 25%",
            filter: "grayscale(100%) contrast(115%) brightness(40%)",
            transition: "transform 1.2s ease-out"
          }}
        />

        {/* Gradient Overlays for Seamless Dark Vignette Integration */}
        {/* Left Fade into Pure Black */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #080808 0%, rgba(8, 8, 8, 0.8) 35%, transparent 70%)"
          }}
        />
        {/* Bottom Fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, #080808 0%, transparent 60%)"
          }}
        />
        {/* Top Fade */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, #080808 0%, transparent 30%)"
          }}
        />
        {/* Red Tint Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 60% 40%, rgba(229, 9, 20, 0.15) 0%, transparent 60%)"
          }}
        />
      </div>

      <div className="cinematic-container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
        <div style={{ maxWidth: "720px" }}>
          {/* Active Mode Notice Banner */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.35rem 0.85rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(229, 9, 20, 0.12)",
              border: "1px solid rgba(229, 9, 20, 0.3)",
              marginBottom: "1.25rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--text-primary)"
            }}
          >
            <span className="pulse-indicator" />
            <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>
              {activeProfile.name.toUpperCase()} MODE:
            </span>
            <span style={{ color: "var(--text-secondary)" }}>
              {activeProfile.badge}
            </span>
          </div>

          {/* Super Headline */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.8125rem, 1.5vw, 0.9375rem)",
              color: "var(--text-secondary)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "0.5rem"
            }}
          >
            MERN Stack Developer &bull; Aspiring Software Engineer
          </div>

          {/* Main Name Heading */}
          <h1
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5.25rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#FFFFFF",
              marginBottom: "1.25rem"
            }}
          >
            Sahil <span style={{ color: "var(--accent-red)" }}>Singh</span>
          </h1>

          {/* Career Objective / Internship Seeking Banner */}
          <div
            style={{
              padding: "0.85rem 1.15rem",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              borderLeft: "3px solid var(--accent-red)",
              marginBottom: "1.5rem",
              backdropFilter: "blur(8px)"
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                color: "var(--accent-red)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.25rem",
                fontWeight: 700
              }}
            >
              Career Objective &amp; Availability
            </div>
            <p
              style={{
                color: "#E2E8F0",
                fontSize: "clamp(0.9375rem, 1.4vw, 1.0625rem)",
                lineHeight: 1.5,
                margin: 0
              }}
            >
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Tagline / Intro Description */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: "640px"
            }}
          >
            Computer Science undergraduate at CDLU building practical full-stack digital products.
            Currently exploring scalable web architectures, backend engineering, and intuitive interfaces with React, Node.js, and Python.
          </p>

          {/* Call to Action Cluster */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem"
            }}
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="btn-primary"
              style={{ padding: "0.9rem 1.85rem" }}
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <a
              href={personalInfo.resume.path}
              download={personalInfo.resume.filename}
              className="btn-secondary"
              style={{ padding: "0.9rem 1.6rem" }}
              title="Download Sahil Singh Resume (PDF)"
            >
              <FileDown size={16} style={{ color: "var(--accent-red)" }} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="btn-ghost"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "0.85rem 1.25rem",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8125rem"
              }}
            >
              <Terminal size={14} style={{ color: "var(--accent-red)" }} />
              <span>Launch Terminal [~]</span>
            </button>
          </div>

          {/* Quick Verified Highlights Strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(0.75rem, 2vw, 1.5rem)",
              flexWrap: "wrap",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <GraduationCap size={16} style={{ color: "var(--accent-red)" }} />
              <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                B.Tech CS (CDLU '27)
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Layers size={16} style={{ color: "var(--accent-red)" }} />
              <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                MERN Stack &amp; Full-Stack
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <MapPin size={16} style={{ color: "var(--accent-red)" }} />
              <span style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                Gorakhpur, UP, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
