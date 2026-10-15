import React from "react";
import { Play, SkipForward, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export function IntroScreen({ onEnter, onSkip }) {
  const name = personalInfo.name.toUpperCase();
  const nameLetters = name.split("");

  return (
    <div
      className="intro-overlay"
      role="region"
      aria-label="Cinematic Welcome Experience"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        backgroundColor: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "1.5rem"
      }}
    >
      {/* Background Cinematic Gradient & Portrait Crop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 50% 35%, rgba(229, 9, 20, 0.15) 0%, rgba(8, 8, 8, 0.7) 60%, #080808 90%),
            url("${personalInfo.portrait.primary}")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          filter: "grayscale(100%) contrast(120%) brightness(35%)",
          transform: "scale(1.05)",
          transition: "transform 10s ease-out",
          pointerEvents: "none"
        }}
      />

      {/* Dark Vignette & Scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, #080808 85%)",
          pointerEvents: "none"
        }}
      />

      {/* Top Skip Button for Recruiter Usability */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          zIndex: 10
        }}
      >
        <button
          onClick={onSkip}
          className="btn-ghost"
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-secondary)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "0.5rem 1rem",
            borderRadius: "var(--radius-full)",
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(0,0,0,0.4)"
          }}
          aria-label="Skip cinematic introduction and open profile selector"
        >
          <span>Skip to Profiles</span>
          <SkipForward size={14} />
        </button>
      </div>

      {/* Main Content Reveal */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          maxWidth: "850px",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* Cinematic Monogram Mark */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 0.85rem",
            borderRadius: "var(--radius-full)",
            background: "rgba(229, 9, 20, 0.12)",
            border: "1px solid rgba(229, 9, 20, 0.3)",
            marginBottom: "1.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "var(--accent-red)",
            textTransform: "uppercase"
          }}
        >
          <Sparkles size={12} />
          <span>Cinematic Developer Portfolio</span>
        </div>

        {/* Dramatic Name Reveal */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.75rem, 8vw, 6rem)",
            fontWeight: 900,
            letterSpacing: "0.08em",
            lineHeight: 1,
            color: "#FFFFFF",
            textShadow: "0 0 40px rgba(229, 9, 20, 0.4), 0 4px 20px rgba(0, 0, 0, 0.9)",
            marginBottom: "0.75rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {nameLetters.map((char, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                whiteSpace: char === " " ? "pre" : "normal",
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.04}s backwards`
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "var(--accent-red)",
            textTransform: "uppercase",
            marginBottom: "1.5rem"
          }}
        >
          MERN Stack Developer &bull; Aspiring Software Engineer
        </div>

        {/* Short Statement */}
        <p
          style={{
            fontSize: "clamp(0.9375rem, 1.6vw, 1.125rem)",
            color: "var(--text-secondary)",
            maxWidth: "600px",
            lineHeight: 1.6,
            marginBottom: "2.5rem"
          }}
        >
          {personalInfo.tagline}
        </p>

        {/* Primary Enter Action Button */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button
            onClick={onEnter}
            className="btn-primary"
            style={{
              fontSize: "1.0625rem",
              padding: "1rem 2.5rem",
              borderRadius: "var(--radius-sm)",
              letterSpacing: "0.08em",
              cursor: "pointer"
            }}
            autoFocus
          >
            <Play size={18} fill="#FFFFFF" />
            <span>Enter Experience</span>
          </button>
        </div>

        {/* Audio Note */}
        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em"
          }}
        >
          Silent cinematic environment &bull; No autoplay audio
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
