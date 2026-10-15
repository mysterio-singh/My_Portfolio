import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Terminal,
  FileDown,
  Users,
  ChevronDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { personalInfo, browsingProfiles } from "../data/portfolio";

export function Navbar({
  activeSection,
  activeProfileId,
  onChangeProfile,
  onOpenTerminal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeProfile =
    browsingProfiles.find((p) => p.id === activeProfileId) || browsingProfiles[0];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "My Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="cinematic-navbar"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 8000,
          height: "72px",
          display: "flex",
          alignItems: "center",
          transition: "background-color var(--transition-normal), backdrop-filter var(--transition-normal), border-color var(--transition-normal)",
          backgroundColor: isScrolled ? "rgba(8, 8, 8, 0.92)" : "rgba(8, 8, 8, 0.4)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(6px)",
          borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent"
        }}
      >
        <div
          className="cinematic-container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none"
            }}
            aria-label="Sahil Singh Home"
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "var(--radius-xs)",
                backgroundColor: "var(--accent-red)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "1rem",
                color: "#FFFFFF",
                boxShadow: "0 0 15px var(--accent-red-glow)",
                fontFamily: "var(--font-display)"
              }}
            >
              S
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.125rem",
                letterSpacing: "0.06em",
                color: "#FFFFFF"
              }}
            >
              SAHIL <span style={{ color: "var(--accent-red)" }}>SINGH</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.75rem"
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                    position: "relative",
                    padding: "0.5rem 0",
                    transition: "color var(--transition-fast)"
                  }}
                  className="nav-link-item"
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--accent-red)",
                        borderRadius: "2px",
                        boxShadow: "0 0 8px var(--accent-red)"
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem"
            }}
          >
            {/* Profile Mode Indicator / Switcher */}
            <button
              onClick={onChangeProfile}
              className="profile-switcher-pill"
              title="Click to switch browsing profile (Recruiter / Developer / Explorer)"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.75rem",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-full)",
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all var(--transition-fast)"
              }}
            >
              <Users size={13} style={{ color: "var(--accent-red)" }} />
              <span className="profile-label">Mode: {activeProfile.name}</span>
              <ChevronDown size={12} color="var(--text-muted)" />
            </button>

            {/* Developer Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="terminal-pill-btn"
              title="Open Interactive Simulated Terminal (Shortcut: ~)"
              aria-label="Open Simulated Developer Terminal"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                border: "1px solid rgba(229, 9, 20, 0.35)",
                borderRadius: "var(--radius-sm)",
                color: "#FFFFFF",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                cursor: "pointer",
                transition: "all var(--transition-fast)"
              }}
            >
              <Terminal size={13} style={{ color: "var(--accent-red)" }} />
              <span className="terminal-label">CLI</span>
            </button>

            {/* Resume Button */}
            <a
              href={personalInfo.resume.path}
              download={personalInfo.resume.filename}
              className="btn-primary resume-nav-btn"
              style={{
                fontSize: "0.75rem",
                padding: "0.45rem 0.9rem",
                borderRadius: "var(--radius-sm)",
                display: "none"
              }}
              title="Download Verified Resume PDF"
            >
              <FileDown size={13} />
              <span>Resume</span>
            </a>

            {/* GitHub Link */}
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahil Singh GitHub Profile"
              style={{
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                padding: "0.4rem",
                borderRadius: "var(--radius-xs)",
                transition: "color var(--transition-fast)"
              }}
              className="icon-link"
            >
              <GithubIcon size={18} />
            </a>

            {/* LinkedIn Link */}
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sahil Singh LinkedIn Profile"
              style={{
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                padding: "0.4rem",
                borderRadius: "var(--radius-xs)",
                transition: "color var(--transition-fast)"
              }}
              className="icon-link"
            >
              <LinkedinIcon size={18} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                padding: "0.4rem",
                cursor: "pointer"
              }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(8, 8, 8, 0.98)",
            backdropFilter: "blur(20px)",
            zIndex: 7999,
            display: "flex",
            flexDirection: "column",
            padding: "2rem 1.5rem",
            gap: "1.25rem",
            overflowY: "auto"
          }}
        >
          {/* Active Mode Notice */}
          <div
            style={{
              padding: "0.75rem 1rem",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "rgba(229, 9, 20, 0.1)",
              border: "1px solid rgba(229, 9, 20, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                ACTIVE BROWSING MODE
              </div>
              <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#FFFFFF" }}>
                {activeProfile.name} Mode
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onChangeProfile();
              }}
              style={{
                fontSize: "0.75rem",
                color: "var(--accent-red)",
                fontWeight: 600,
                textDecoration: "underline",
                cursor: "pointer"
              }}
            >
              Change
            </button>
          </div>

          {/* Links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    color: isActive ? "var(--accent-red)" : "#FFFFFF",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.06)"
                  }}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile Terminal & Resume Actions */}
          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <Terminal size={16} style={{ color: "var(--accent-red)" }} />
              <span>Open Developer Terminal</span>
            </button>

            <a
              href={personalInfo.resume.path}
              download={personalInfo.resume.filename}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <FileDown size={16} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .resume-nav-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        .nav-link-item:hover {
          color: #FFFFFF !important;
        }
        .icon-link:hover {
          color: var(--accent-red) !important;
        }
        .profile-switcher-pill:hover {
          border-color: var(--accent-red) !important;
          background-color: rgba(229, 9, 20, 0.12) !important;
        }
        .terminal-pill-btn:hover {
          border-color: var(--accent-red) !important;
          box-shadow: 0 0 10px rgba(229, 9, 20, 0.3) !important;
        }
      `}</style>
    </>
  );
}
