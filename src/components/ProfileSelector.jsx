import React from "react";
import { Briefcase, Code2, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { browsingProfiles } from "../data/portfolio";

export function ProfileSelector({ onSelectProfile, activeProfileId }) {
  const getIcon = (id) => {
    switch (id) {
      case "recruiter":
        return <Briefcase size={28} />;
      case "developer":
        return <Code2 size={28} />;
      case "explorer":
      default:
        return <Compass size={28} />;
    }
  };

  return (
    <div
      className="profile-selector-screen"
      role="region"
      aria-label="Profile Selection Screen"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 8500,
        backgroundColor: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(1rem, 4vw, 2.5rem)",
        overflowY: "auto"
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at center, rgba(229, 9, 20, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(60px)"
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1080px",
          width: "100%",
          textAlign: "center"
        }}
      >
        {/* Monogram / Header */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.8125rem",
            color: "var(--accent-red)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "0.75rem"
          }}
        >
          Viewing Experience
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            marginBottom: "0.75rem"
          }}
        >
          Who's Watching?
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)",
            maxWidth: "580px",
            margin: "0 auto 3rem auto",
            lineHeight: 1.6
          }}
        >
          Select a viewing profile to customize your portfolio journey. Each mode tailors content emphasis to your perspective.
        </p>

        {/* Profile Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem"
          }}
        >
          {browsingProfiles.map((profile) => {
            const isSelected = activeProfileId === profile.id;
            return (
              <button
                key={profile.id}
                onClick={() => onSelectProfile(profile.id)}
                className="profile-card"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: isSelected
                    ? "2px solid var(--accent-red)"
                    : "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "all var(--transition-normal)",
                  position: "relative",
                  boxShadow: isSelected
                    ? "0 0 30px rgba(229, 9, 20, 0.35)"
                    : "var(--shadow-sm)"
                }}
              >
                {/* Active check badge */}
                {isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      color: "var(--accent-red)"
                    }}
                  >
                    <CheckCircle2 size={20} />
                  </div>
                )}

                {/* Profile Avatar Box */}
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    borderRadius: "var(--radius-md)",
                    background: profile.avatarBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    marginBottom: "1.25rem",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                    transition: "transform var(--transition-normal)"
                  }}
                  className="profile-avatar"
                >
                  {getIcon(profile.id)}
                </div>

                {/* Mode Name */}
                <h3
                  style={{
                    fontSize: "1.375rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.25rem"
                  }}
                >
                  {profile.name}
                </h3>

                {/* Role Pill */}
                <div
                  style={{
                    display: "inline-block",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "var(--text-secondary)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "1rem"
                  }}
                >
                  {profile.role}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginBottom: "1.25rem",
                    flexGrow: 1
                  }}
                >
                  {profile.description}
                </p>

                {/* Priority Checklist */}
                <div
                  style={{
                    width: "100%",
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: "1rem",
                    marginBottom: "1.25rem",
                    textAlign: "left"
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "0.5rem"
                    }}
                  >
                    Prioritizes:
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem"
                    }}
                  >
                    {profile.priorities.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem"
                        }}
                      >
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            backgroundColor: "var(--accent-red)"
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Button */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: isSelected ? "var(--accent-red)" : "#FFFFFF",
                    marginTop: "auto"
                  }}
                >
                  <span>Select {profile.name} Mode</span>
                  <ArrowRight size={14} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer note & direct jump */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            color: "var(--text-muted)",
            fontSize: "0.8125rem"
          }}
        >
          <span>You can switch browsing modes at any time in the navigation bar.</span>
          <button
            onClick={() => onSelectProfile("recruiter")}
            style={{
              color: "var(--accent-red)",
              fontWeight: 600,
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            Default to Recruiter View
          </button>
        </div>
      </div>

      <style>{`
        .profile-card:hover {
          transform: translateY(-6px);
          border-color: rgba(229, 9, 20, 0.6) !important;
          background-color: var(--bg-card-hover) !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(229, 9, 20, 0.2) !important;
        }
        .profile-card:hover .profile-avatar {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
