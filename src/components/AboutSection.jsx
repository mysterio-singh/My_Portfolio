import React from "react";
import {
  GraduationCap,
  MapPin,
  Dumbbell,
  FileDown,
  Sparkles,
  HeartHandshake
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-wrapper"
      aria-label="About Sahil Singh"
      style={{ position: "relative" }}
    >
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Identity &amp; Philosophy</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            The developer behind the code — academic foundations, technical drive, and disciplined personal principles.
          </p>
        </div>

        {/* Two-Column Grid: Authentic Portrait & Biography */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(2rem, 5vw, 4rem)",
            alignItems: "center"
          }}
        >
          {/* Authentic Portrait Display */}
          <div
            style={{
              position: "relative",
              maxWidth: "460px",
              margin: "0 auto",
              width: "100%"
            }}
          >
            {/* Ambient Red Glow behind Portrait */}
            <div
              style={{
                position: "absolute",
                inset: "-15px",
                background: "radial-gradient(circle at center, rgba(229, 9, 20, 0.25) 0%, transparent 70%)",
                borderRadius: "var(--radius-lg)",
                filter: "blur(30px)",
                zIndex: 0
              }}
            />

            {/* Portrait Frame */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(229, 9, 20, 0.4)",
                backgroundColor: "#111114",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.9)"
              }}
            >
              <img
                src={personalInfo.portrait.primary}
                alt="Sahil Singh Authentic Portrait"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "50% 20%",
                  filter: "contrast(110%) brightness(95%)"
                }}
              />

              {/* Bottom Vignette Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.2) 40%, transparent 80%)",
                  pointerEvents: "none"
                }}
              />

              {/* Bottom Badge inside Portrait */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  right: "1.25rem",
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-red)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.2rem"
                  }}
                >
                  Undergraduate &bull; Class of 2027
                </div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF" }}>
                  Sahil Singh
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  Gorakhpur, Uttar Pradesh, India
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content & Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em"
              }}
            >
              Passionate about building scalable digital solutions &amp; purposeful web architecture.
            </h3>

            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              I’m Sahil Singh, a Computer Science undergraduate interested in full-stack web development and software engineering. I enjoy building practical web experiences, exploring new technologies and turning ideas into useful digital products. My learning journey includes web development, backend concepts and Python programming. I’m looking for opportunities to contribute to real projects, collaborate with a team and continue growing as a developer.
            </p>

            {/* Quick Metrics Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem"
              }}
            >
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <GraduationCap size={16} style={{ color: "var(--accent-red)" }} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    EDUCATION
                  </span>
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                  B.Tech Computer Science
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  CDLU, Sirsa (2023–2027)
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <MapPin size={16} style={{ color: "var(--accent-red)" }} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    BASE LOCATION
                  </span>
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                  Gorakhpur, India
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  Uttar Pradesh
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <Sparkles size={16} style={{ color: "var(--accent-red)" }} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    SPECIALIZATION
                  </span>
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                  MERN Full-Stack
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  React, Node, Mongo, Python
                </div>
              </div>

              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                  <HeartHandshake size={16} style={{ color: "var(--accent-red)" }} />
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}>
                    STATUS
                  </span>
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                  Internship Ready
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)" }}>
                  Available for SDE roles
                </div>
              </div>
            </div>

            {/* Beyond Code (Personal Interests) */}
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(229, 9, 20, 0.05)",
                border: "1px solid rgba(229, 9, 20, 0.2)",
                marginTop: "0.5rem"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "var(--accent-red)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  marginBottom: "0.5rem"
                }}
              >
                <Dumbbell size={16} />
                <span>{personalInfo.interests.title}: {personalInfo.interests.category}</span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                {personalInfo.interests.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
              <a
                href={personalInfo.resume.path}
                download={personalInfo.resume.filename}
                className="btn-primary"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedinIcon size={16} style={{ color: "var(--accent-red)" }} />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={16} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
