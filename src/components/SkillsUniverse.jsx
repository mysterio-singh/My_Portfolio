import React, { useState } from "react";
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  ExternalLink,
  Layers
} from "lucide-react";
import { skills, skillCategories } from "../data/skills";
import { projects } from "../data/projects";

export function SkillsUniverse({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "frontend":
        return <Code2 size={16} />;
      case "backend":
        return <Server size={16} />;
      case "databases":
        return <Database size={16} />;
      case "tools":
        return <Terminal size={16} />;
      case "foundations":
      default:
        return <Cpu size={16} />;
    }
  };

  return (
    <section
      id="skills"
      className="section-wrapper"
      aria-label="Technical Skills and Core Competencies"
      style={{ position: "relative" }}
    >
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Engineering Arsenal</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Verified technologies, frameworks, and Computer Science foundations categorized by practical application. Click any skill to inspect linked projects.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter skills by technical domain"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "1rem",
            marginBottom: "2rem"
          }}
          className="hide-scrollbar"
        >
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSkill(null);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: isSelected ? 600 : 500,
                  whiteSpace: "nowrap",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  backgroundColor: isSelected
                    ? "var(--accent-red)"
                    : "rgba(255, 255, 255, 0.05)",
                  color: isSelected ? "#FFFFFF" : "var(--text-secondary)",
                  border: isSelected
                    ? "1px solid var(--accent-red)"
                    : "1px solid var(--border-subtle)",
                  boxShadow: isSelected
                    ? "0 0 15px var(--accent-red-glow)"
                    : "none"
                }}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem"
          }}
        >
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;
            const isLearning = skill.status === "learning";

            return (
              <button
                key={skill.name}
                onClick={() =>
                  setSelectedSkill(isSelected ? null : skill)
                }
                className="skill-card"
                style={{
                  backgroundColor: isSelected
                    ? "var(--bg-card-active)"
                    : "var(--bg-card)",
                  border: isSelected
                    ? "2px solid var(--accent-red)"
                    : "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all var(--transition-normal)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: isSelected
                    ? "0 0 25px rgba(229, 9, 20, 0.25)"
                    : "var(--shadow-sm)"
                }}
              >
                {/* Top Status & Category */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    marginBottom: "0.75rem"
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontFamily: "var(--font-mono)",
                      color: isLearning ? "#F59E0B" : "var(--accent-red)",
                      backgroundColor: isLearning
                        ? "rgba(245, 158, 11, 0.12)"
                        : "rgba(229, 9, 20, 0.12)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "var(--radius-full)",
                      border: isLearning
                        ? "1px solid rgba(245, 158, 11, 0.3)"
                        : "1px solid rgba(229, 9, 20, 0.3)",
                      fontWeight: 700,
                      textTransform: "uppercase"
                    }}
                  >
                    {isLearning ? "Active Learning" : skill.experienceLevel}
                  </span>

                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "capitalize",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.4rem"
                  }}
                >
                  {skill.name}
                </h3>

                {/* Short Technical Description */}
                <p
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginBottom: "1rem",
                    flexGrow: 1
                  }}
                >
                  {skill.description}
                </p>

                {/* Project Links Footnote */}
                {skill.relatedProjectIds.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.75rem",
                      color: "var(--accent-red)",
                      fontFamily: "var(--font-mono)",
                      marginTop: "auto"
                    }}
                  >
                    <Layers size={12} />
                    <span>Applied in {skill.relatedProjectIds.length} project(s)</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Skill Project Details Drawer (if skill selected) */}
        {selectedSkill && (
          <div
            style={{
              padding: "1.5rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "rgba(20, 20, 24, 0.95)",
              border: "1px solid var(--accent-red)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(229, 9, 20, 0.2)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "1rem"
              }}
            >
              <div>
                <span className="section-tag" style={{ marginBottom: "0.25rem" }}>
                  Selected Skill Deep Dive
                </span>
                <h3 style={{ fontSize: "1.5rem", color: "#FFFFFF" }}>
                  {selectedSkill.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--text-muted)",
                  textDecoration: "underline",
                  cursor: "pointer"
                }}
              >
                Close Details
              </button>
            </div>

            <p style={{ color: "var(--text-secondary)", marginBottom: "1.25rem", fontSize: "0.9375rem" }}>
              {selectedSkill.description}
            </p>

            {selectedSkill.relatedProjectIds.length > 0 ? (
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.75rem"
                  }}
                >
                  Verified Real-World Projects Using {selectedSkill.name}:
                </div>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  {selectedSkill.relatedProjectIds.map((pId) => {
                    const matchedProj = projects.find((p) => p.id === pId);
                    if (!matchedProj) return null;
                    return (
                      <button
                        key={pId}
                        onClick={() => onSelectProject(pId)}
                        className="btn-secondary"
                        style={{
                          fontSize: "0.8125rem",
                          padding: "0.5rem 1rem",
                          cursor: "pointer"
                        }}
                      >
                        <Layers size={14} style={{ color: "var(--accent-red)" }} />
                        <span>Inspect {matchedProj.title}</span>
                        <ExternalLink size={12} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <p style={{ fontSize: "0.8125rem", color: "var(--text-muted)", margin: 0 }}>
                This technology is part of Sahil's academic CS coursework, algorithmic practice, and technical training.
              </p>
            )}
          </div>
        )}
      </div>

      <style>{`
        .skill-card:hover {
          border-color: rgba(229, 9, 20, 0.5) !important;
          background-color: var(--bg-card-hover) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
