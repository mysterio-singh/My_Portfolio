import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "./BrandIcons";
import { personalInfo } from "../data/portfolio";

const CURRENT_YEAR = 2026;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "My Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        position: "relative"
      }}
    >
      <div className="cinematic-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3rem"
          }}
        >
          {/* Brand & Tagline */}
          <div style={{ maxWidth: "380px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem"
              }}
            >
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: "var(--accent-red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 900,
                  fontSize: "0.875rem",
                  color: "#FFFFFF",
                  boxShadow: "0 0 12px var(--accent-red-glow)",
                  fontFamily: "var(--font-display)"
                }}
              >
                S
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  letterSpacing: "0.06em",
                  color: "#FFFFFF"
                }}
              >
                SAHIL <span style={{ color: "var(--accent-red)" }}>SINGH</span>
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              MERN Stack Developer &bull; Computer Science Undergraduate at CDLU. Dedicated to engineering robust web experiences with clean code.
            </p>
          </div>

          {/* Footer Quick Links */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(1rem, 2.5vw, 1.75rem)",
              flexWrap: "wrap"
            }}
            aria-label="Footer Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  transition: "color var(--transition-fast)"
                }}
                className="footer-nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                transition: "all var(--transition-fast)"
              }}
              className="social-footer-btn"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                transition: "all var(--transition-fast)"
              }}
              className="social-footer-btn"
            >
              <LinkedinIcon size={18} />
            </a>

            {personalInfo.social.twitter && (
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all var(--transition-fast)"
                }}
                className="social-footer-btn"
              >
                <TwitterIcon size={18} />
              </a>
            )}

            {personalInfo.social.instagram && (
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "var(--radius-xs)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  transition: "all var(--transition-fast)"
                }}
                className="social-footer-btn"
              >
                <InstagramIcon size={18} />
              </a>
            )}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: "var(--accent-red)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                cursor: "pointer",
                boxShadow: "0 0 15px var(--accent-red-glow)",
                transition: "all var(--transition-fast)"
              }}
              className="back-to-top-btn"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Tech Stack Notes */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)"
          }}
        >
          <div>
            &copy; {CURRENT_YEAR} Sahil Singh. All rights reserved.
          </div>
          <div>
            Crafted with React, Vite &bull; Designed for Recruiter Clarity &bull; Vercel Ready
          </div>
        </div>
      </div>

      <style>{`
        .footer-nav-link:hover {
          color: var(--accent-red) !important;
        }
        .social-footer-btn:hover {
          color: #FFFFFF !important;
          background-color: rgba(229, 9, 20, 0.2) !important;
          border-color: var(--accent-red) !important;
        }
        .back-to-top-btn:hover {
          transform: translateY(-3px);
          background-color: var(--accent-red-hover) !important;
        }
      `}</style>
    </footer>
  );
}
