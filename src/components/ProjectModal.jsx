import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  BookOpen
} from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export function ProjectModal({ project, onClose }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Focus the close button on mount
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Keyboard escape key listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Prevent body scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!project) return null;

  const currentGallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [{ src: project.image, caption: project.title }];

  const activeImage = currentGallery[activeImageIndex] || currentGallery[0];

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9500,
        backgroundColor: "rgba(0, 0, 0, 0.88)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(0.75rem, 3vw, 2rem)",
        overflowY: "auto"
      }}
    >
      <div
        ref={modalRef}
        className="modal-content"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          width: "100%",
          maxWidth: "960px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 40px rgba(229, 9, 20, 0.15)"
        }}
      >
        {/* Floating Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project case study modal"
          style={{
            position: "sticky",
            top: "1rem",
            float: "right",
            marginRight: "1rem",
            zIndex: 10,
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all var(--transition-fast)",
            backdropFilter: "blur(6px)"
          }}
          className="modal-close-btn"
        >
          <X size={20} />
        </button>

        {/* Gallery / Main Preview Display */}
        <div style={{ backgroundColor: "#0c0c0e", borderBottom: "1px solid var(--border-subtle)" }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxHeight: "440px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              backgroundColor: "#050507"
            }}
          >
            <img
              src={activeImage.src}
              alt={activeImage.caption || project.title}
              style={{
                width: "100%",
                maxHeight: "440px",
                objectFit: "contain",
                display: "block"
              }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/images/posters/lms-poster.svg";
              }}
            />
          </div>

          {/* Caption Bar */}
          {activeImage.caption && (
            <div
              style={{
                padding: "0.6rem 1.25rem",
                backgroundColor: "rgba(0,0,0,0.4)",
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-mono)",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)"
              }}
            >
              {activeImage.caption}
            </div>
          )}

          {/* Thumbnail Strip (if multiple screenshots) */}
          {currentGallery.length > 1 && (
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                padding: "0.75rem 1.25rem",
                overflowX: "auto",
                backgroundColor: "rgba(10, 10, 10, 0.7)"
              }}
              className="hide-scrollbar"
            >
              {currentGallery.map((img, idx) => {
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View screenshot ${idx + 1}`}
                    style={{
                      width: "80px",
                      height: "50px",
                      borderRadius: "var(--radius-xs)",
                      overflow: "hidden",
                      border: isActive
                        ? "2px solid var(--accent-red)"
                        : "1px solid rgba(255, 255, 255, 0.15)",
                      padding: 0,
                      cursor: "pointer",
                      flexShrink: 0,
                      opacity: isActive ? 1 : 0.6,
                      transition: "all var(--transition-fast)"
                    }}
                  >
                    <img
                      src={img.src}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div style={{ padding: "clamp(1.25rem, 3vw, 2.25rem)" }}>
          {/* Header Metadata */}
          <div style={{ marginBottom: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginBottom: "0.5rem"
              }}
            >
              <span className="badge badge-red">{project.category}</span>
              <span className="badge badge-gray">{project.status}</span>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {project.year} &bull; {project.role}
              </span>
            </div>

            <h2
              id="modal-project-title"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em"
              }}
            >
              {project.title}
            </h2>
            <div
              style={{
                fontSize: "1rem",
                color: "var(--accent-red)",
                fontFamily: "var(--font-mono)",
                marginTop: "0.25rem"
              }}
            >
              {project.subtitle}
            </div>
          </div>

          {/* Action Links Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              paddingBottom: "1.5rem",
              marginBottom: "1.75rem",
              borderBottom: "1px solid var(--border-subtle)"
            }}
          >
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "0.75rem 1.4rem", fontSize: "0.875rem" }}
              >
                <GithubIcon size={16} />
                <span>View GitHub Repository</span>
              </a>
            ) : null}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: "0.75rem 1.4rem", fontSize: "0.875rem" }}
              >
                <ExternalLink size={16} />
                <span>Launch Live Application</span>
              </a>
            ) : (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.7rem 1.2rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "var(--text-muted)",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-mono)"
                }}
              >
                <Clock size={14} />
                <span>Live deployment URL will be added upon domain release</span>
              </div>
            )}
          </div>

          {/* Detailed Overview */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFF",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <BookOpen size={18} style={{ color: "var(--accent-red)" }} />
              <span>Project Overview</span>
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Problem & Solution (if specified) */}
          {(project.problem || project.solution) && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
                marginBottom: "2rem"
              }}
            >
              {project.problem && (
                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--accent-red)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                      fontWeight: 700
                    }}
                  >
                    The Problem
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    {project.problem}
                  </p>
                </div>
              )}

              {project.solution && (
                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "#10B981",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem",
                      fontWeight: 700
                    }}
                  >
                    The Architecture Solution
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Implemented Features vs Planned Features */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFF",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <CheckCircle2 size={18} style={{ color: "var(--accent-red)" }} />
              <span>Confirmed Implemented Features</span>
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "0.75rem",
                marginBottom: "1.5rem"
              }}
            >
              {project.implementedFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.625rem",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <CheckCircle2 size={15} style={{ color: "#10B981", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.875rem", color: "#E2E8F0", lineHeight: 1.5 }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Planned Features (Roadmap) */}
            {project.plannedFeatures && project.plannedFeatures.length > 0 && (
              <div
                style={{
                  padding: "1rem 1.25rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(245, 158, 11, 0.06)",
                  border: "1px solid rgba(245, 158, 11, 0.2)"
                }}
              >
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#F59E0B",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  }}
                >
                  <Clock size={14} />
                  <span>Planned Roadmap Features:</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: "1.25rem", color: "var(--text-secondary)", fontSize: "0.8125rem" }}>
                  {project.plannedFeatures.map((pFeat, idx) => (
                    <li key={idx} style={{ marginBottom: "0.25rem" }}>
                      {pFeat}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Verified Technologies */}
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.125rem",
                color: "#FFFFFF",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <Layers size={18} style={{ color: "var(--accent-red)" }} />
              <span>Technology Stack</span>
            </h3>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: "0.4rem 0.85rem",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "rgba(229, 9, 20, 0.1)",
                    border: "1px solid rgba(229, 9, 20, 0.25)",
                    color: "#FFFFFF",
                    fontSize: "0.8125rem",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges & Lessons Learned */}
          {(project.challenges || project.lessonsLearned) && (
            <div
              style={{
                padding: "1.25rem",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border-subtle)"
              }}
            >
              {project.challenges && (
                <div style={{ marginBottom: "1rem" }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.25rem"
                    }}
                  >
                    Key Engineering Challenge
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.lessonsLearned && (
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.25rem"
                    }}
                  >
                    Lessons Learned &amp; Practical Takeaway
                  </div>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                    {project.lessonsLearned}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .modal-close-btn:hover {
          background-color: var(--accent-red) !important;
          border-color: var(--accent-red) !important;
          transform: rotate(90deg);
        }
      `}</style>
    </div>
  );
}
