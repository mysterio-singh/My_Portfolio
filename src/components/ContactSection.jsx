import React, { useState } from "react";
import {
  Copy,
  Check,
  Send,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="section-wrapper"
      aria-label="Contact Sahil Singh"
      style={{ position: "relative" }}
    >
      <div className="cinematic-container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem auto" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>
            Direct Communications
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-description" style={{ margin: "0 auto" }}>
            Actively seeking software development internship opportunities and engineering collaborations. Reach out directly via email or connect across verified professional channels.
          </p>
        </div>

        {/* Contact Hub Card */}
        <div
          style={{
            maxWidth: "840px",
            margin: "0 auto",
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(229, 9, 20, 0.12)",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle Ambient Red Glow */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "400px",
              height: "200px",
              background: "radial-gradient(ellipse at center, rgba(229, 9, 20, 0.15) 0%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none"
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              zIndex: 1
            }}
          >
            {/* Direct Email Action Box */}
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                backgroundColor: "rgba(10, 10, 12, 0.8)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "1.75rem",
                marginBottom: "2rem"
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem"
                }}
              >
                PRIMARY INBOX
              </div>

              <div
                style={{
                  fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-mono)",
                  wordBreak: "break-all",
                  marginBottom: "1.25rem"
                }}
              >
                {personalInfo.email}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  flexWrap: "wrap"
                }}
              >
                <a
                  href={`mailto:${personalInfo.email}?subject=Software%20Development%20Internship%20Inquiry%20-%20Sahil%20Singh`}
                  className="btn-primary"
                  style={{ padding: "0.75rem 1.5rem", fontSize: "0.875rem" }}
                >
                  <Send size={15} />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{
                    padding: "0.75rem 1.25rem",
                    fontSize: "0.875rem",
                    cursor: "pointer"
                  }}
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={15} style={{ color: "#10B981" }} />
                      <span style={{ color: "#10B981" }}>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Professional Links Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
                width: "100%",
                maxWidth: "600px",
                marginBottom: "2rem"
              }}
            >
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "1rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  color: "#FFFFFF",
                  transition: "all var(--transition-normal)",
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "rgba(229, 9, 20, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent-red)",
                    flexShrink: 0
                  }}
                >
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>LinkedIn</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Professional Network
                  </div>
                </div>
                <ExternalLink size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
              </a>

              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  padding: "1rem",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  color: "#FFFFFF",
                  transition: "all var(--transition-normal)",
                  textAlign: "left"
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                    flexShrink: 0
                  }}
                >
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700 }}>GitHub</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                    Code Repositories
                  </div>
                </div>
                <ExternalLink size={14} style={{ marginLeft: "auto", color: "var(--text-muted)" }} />
              </a>
            </div>

            {/* Availability Notice */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                fontSize: "0.8125rem",
                color: "#10B981"
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 8px #10B981"
                }}
              />
              <span>Currently seeking software engineering internships &bull; Typical reply within 24 hours</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-channel-card:hover {
          border-color: var(--accent-red) !important;
          background-color: var(--bg-card-hover) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
