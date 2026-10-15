import React from "react";
import {
  FileDown,
  Award,
  CheckCircle2,
  Calendar,
  Building,
  ExternalLink
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { certifications } from "../data/certifications";

export function ResumeSection() {
  return (
    <section
      id="resume"
      className="section-wrapper"
      aria-label="Sahil Singh Resume and Certifications"
      style={{ position: "relative" }}
    >
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Credentials &amp; Verification</div>
          <h2 className="section-title">Resume &amp; Certifications</h2>
          <p className="section-description">
            Download the official resume curriculum vitae and inspect verified technical simulations, certified development workshops, and academic credentials.
          </p>
        </div>

        {/* Top Banner: Resume Download Card */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-accent)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(1.5rem, 4vw, 2.5rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3.5rem",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(229, 9, 20, 0.15)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle Ambient Red Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "250px",
              height: "250px",
              background: "radial-gradient(circle, rgba(229, 9, 20, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none"
            }}
          />

          <div style={{ maxWidth: "600px", position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--accent-red)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
                fontWeight: 700
              }}
            >
              <CheckCircle2 size={14} />
              <span>Verified PDF Document Available</span>
            </div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "0.5rem" }}>
              Official Curriculum Vitae (PDF)
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9375rem", lineHeight: 1.6, margin: 0 }}>
              Comprehensive document containing academic records from CDLU, certified Internshala training, verified technical stack, and software development projects.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
            <a
              href={personalInfo.resume.path}
              download={personalInfo.resume.filename}
              className="btn-primary"
              style={{ padding: "1rem 2rem", fontSize: "0.9375rem" }}
            >
              <FileDown size={18} />
              <span>Download Resume PDF</span>
            </a>

            <a
              href={personalInfo.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: "1rem 1.5rem", fontSize: "0.9375rem" }}
            >
              <ExternalLink size={16} />
              <span>View in Browser</span>
            </a>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3
            style={{
              fontSize: "1.375rem",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <Award size={20} style={{ color: "var(--accent-red)" }} />
            <span>Verified Certifications &amp; Job Simulations</span>
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="cert-card"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all var(--transition-normal)",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                  }}
                >
                  <span className="badge badge-red">
                    {cert.badge}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)"
                    }}
                  >
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h4
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.35rem"
                  }}
                >
                  {cert.title}
                </h4>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.8125rem",
                    color: "var(--accent-red)",
                    fontFamily: "var(--font-mono)",
                    marginBottom: "0.75rem"
                  }}
                >
                  <Building size={13} />
                  <span>{cert.issuer}</span>
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                    marginBottom: "1.25rem",
                    flexGrow: 1
                  }}
                >
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border-subtle)"
                  }}
                >
                  {cert.skillsLearned.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: "#CBD5E1",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "var(--radius-xs)"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cert-card:hover {
          border-color: rgba(229, 9, 20, 0.4) !important;
          background-color: var(--bg-card-hover) !important;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7) !important;
        }
      `}</style>
    </section>
  );
}
