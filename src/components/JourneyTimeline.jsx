import React from "react";
import {
  GraduationCap,
  Award,
  Code,
  Layers,
  Sparkles,
  ArrowUpRight,
  Calendar
} from "lucide-react";
import { journeyMilestones } from "../data/journey";

export function JourneyTimeline({ onSelectProject }) {
  const getIcon = (type) => {
    switch (type) {
      case "education":
        return <GraduationCap size={18} />;
      case "training":
        return <Award size={18} />;
      case "project":
        return <Layers size={18} />;
      case "certification":
        return <Sparkles size={18} />;
      default:
        return <Code size={18} />;
    }
  };

  return (
    <section
      id="journey"
      className="section-wrapper"
      aria-label="Sahil Singh Professional Journey & Milestones"
      style={{ position: "relative" }}
    >
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Chronological Trajectory</div>
          <h2 className="section-title">My Journey</h2>
          <p className="section-description">
            A milestone timeline detailing university education, certified professional training, hands-on full-stack engineering, and ongoing backend expansion.
          </p>
        </div>

        {/* Cinematic Vertical Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "880px",
            margin: "0 auto",
            padding: "1rem 0"
          }}
        >
          {/* Central Vertical Glowing Line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "24px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--accent-red) 0%, rgba(229, 9, 20, 0.4) 70%, transparent 100%)",
              boxShadow: "0 0 12px var(--accent-red-glow)"
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {journeyMilestones.map((milestone) => (
              <div
                key={milestone.id}
                className="timeline-item"
                style={{
                  position: "relative",
                  paddingLeft: "70px"
                }}
              >
                {/* Node Dot / Icon */}
                <div
                  style={{
                    position: "absolute",
                    left: "8px",
                    top: "4px",
                    width: "34px",
                    height: "34px",
                    borderRadius: "50%",
                    backgroundColor: "var(--bg-secondary)",
                    border: "2px solid var(--accent-red)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-red)",
                    boxShadow: "0 0 15px var(--accent-red-glow)",
                    zIndex: 2
                  }}
                  className="timeline-node"
                >
                  {getIcon(milestone.type)}
                </div>

                {/* Milestone Card */}
                <div
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                    transition: "all var(--transition-normal)"
                  }}
                  className="timeline-card"
                >
                  {/* Period & Status Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.5rem"
                    }}
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.8125rem",
                        color: "var(--accent-red)",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600
                      }}
                    >
                      <Calendar size={13} />
                      <span>{milestone.period}</span>
                    </div>

                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.2rem 0.6rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-mono)",
                        border: "1px solid rgba(255, 255, 255, 0.08)"
                      }}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "0.25rem"
                    }}
                  >
                    {milestone.title}
                  </h3>

                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      marginBottom: "0.85rem",
                      fontWeight: 500
                    }}
                  >
                    {milestone.subtitle}
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem"
                    }}
                  >
                    {milestone.description}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      gap: "0.4rem"
                    }}
                  >
                    {milestone.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          color: "#CBD5E1",
                          backgroundColor: "rgba(255, 255, 255, 0.04)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "var(--radius-xs)",
                          border: "1px solid rgba(255, 255, 255, 0.06)"
                        }}
                      >
                        {tag}
                      </span>
                    ))}

                    {/* Related Project Jump Link */}
                    {milestone.relatedProjectId && (
                      <button
                        onClick={() => onSelectProject(milestone.relatedProjectId)}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          fontWeight: 600,
                          color: "var(--accent-red)",
                          backgroundColor: "rgba(229, 9, 20, 0.1)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "var(--radius-xs)",
                          border: "1px solid rgba(229, 9, 20, 0.25)",
                          cursor: "pointer",
                          marginLeft: "auto"
                        }}
                      >
                        <span>Inspect Project</span>
                        <ArrowUpRight size={13} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-card:hover {
          border-color: rgba(229, 9, 20, 0.4) !important;
          background-color: var(--bg-card-hover) !important;
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6) !important;
        }
      `}</style>
    </section>
  );
}
