import React from "react";
import { ExternalLink, Eye, Clock } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

export function ProjectCard({ project, onOpenModal }) {
  const getBadgeClass = (statusType) => {
    switch (statusType) {
      case "success":
        return "badge-green";
      case "warning":
        return "badge-amber";
      case "info":
      default:
        return "badge-red";
    }
  };

  return (
    <article
      className="project-card"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenModal(project);
        }
      }}
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all var(--transition-normal)",
        height: "100%",
        position: "relative"
      }}
    >
      {/* Media / Poster Thumbnail Container */}
      <div
        className="card-media-wrapper"
        onClick={() => onOpenModal(project)}
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%", // 16:9 Aspect Ratio
          backgroundColor: "#111111",
          cursor: "pointer",
          overflow: "hidden"
        }}
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/images/posters/lms-poster.svg";
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            transition: "transform var(--transition-smooth), filter var(--transition-smooth)"
          }}
          className="card-image"
        />

        {/* Gradient Overlay for Title Legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(24, 24, 24, 0.95) 0%, rgba(24, 24, 24, 0.2) 60%, transparent 100%)",
            pointerEvents: "none"
          }}
        />

        {/* Top Badges Bar */}
        <div
          style={{
            position: "absolute",
            top: "0.85rem",
            left: "0.85rem",
            right: "0.85rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 2,
            gap: "0.5rem"
          }}
        >
          <span className={`badge ${getBadgeClass(project.statusType)}`}>
            {project.status}
          </span>

          <span
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-mono)",
              color: "#FFFFFF",
              backgroundColor: "rgba(0, 0, 0, 0.65)",
              padding: "0.2rem 0.5rem",
              borderRadius: "var(--radius-xs)",
              backdropFilter: "blur(4px)"
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Hover Quick Preview Action */}
        <div
          className="quick-view-overlay"
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity var(--transition-normal)",
            zIndex: 3
          }}
        >
          <span
            className="btn-primary"
            style={{
              padding: "0.6rem 1.2rem",
              fontSize: "0.8125rem",
              pointerEvents: "none"
            }}
          >
            <Eye size={15} />
            <span>View Case Study</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          <h3
            onClick={() => onOpenModal(project)}
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#FFFFFF",
              cursor: "pointer",
              transition: "color var(--transition-fast)"
            }}
            className="card-title-hover"
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: "0.8125rem",
              color: "var(--accent-red)",
              fontFamily: "var(--font-mono)",
              marginTop: "0.15rem"
            }}
          >
            {project.subtitle}
          </p>
        </div>

        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.5,
            marginBottom: "1rem",
            flexGrow: 1
          }}
        >
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            marginBottom: "1.25rem"
          }}
        >
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#E2E8F0",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                padding: "0.2rem 0.55rem",
                borderRadius: "var(--radius-xs)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
                padding: "0.2rem 0.4rem"
              }}
            >
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Bottom Actions Cluster */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "0.85rem",
            borderTop: "1px solid var(--border-subtle)",
            gap: "0.75rem"
          }}
        >
          <button
            onClick={() => onOpenModal(project)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "var(--accent-red)",
              cursor: "pointer"
            }}
          >
            <span>Case Study</span>
            <Eye size={14} />
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Real GitHub Repository Button (Rendered only when configured) */}
            {project.repositoryUrl ? (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.65rem",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  fontSize: "0.75rem",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  transition: "all var(--transition-fast)"
                }}
                className="repo-link"
              >
                <GithubIcon size={13} />
                <span>Code</span>
              </a>
            ) : null}

            {/* Real Live Demo Button (Rendered only when configured, else non-clickable coming soon) */}
            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Deployed Application"
                aria-label={`View live demo of ${project.title}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.35rem 0.65rem",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: "var(--accent-red)",
                  fontSize: "0.75rem",
                  color: "#FFFFFF",
                  fontWeight: 600
                }}
              >
                <ExternalLink size={13} />
                <span>Live Demo</span>
              </a>
            ) : (
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)"
                }}
                title="Live deployment will be linked once live URL is verified"
              >
                <Clock size={12} />
                <span>Demo soon</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          transform: translateY(-5px);
          border-color: rgba(229, 9, 20, 0.4);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(229, 9, 20, 0.15);
        }
        .project-card:hover .card-image {
          transform: scale(1.05);
        }
        .project-card:hover .quick-view-overlay {
          opacity: 1;
        }
        .card-title-hover:hover {
          color: var(--accent-red) !important;
        }
        .repo-link:hover {
          border-color: var(--accent-red) !important;
          background-color: rgba(229, 9, 20, 0.15) !important;
        }
      `}</style>
    </article>
  );
}
