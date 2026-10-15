import React, { useState, useEffect, useRef } from "react";
import {
  Terminal as TerminalIcon,
  X
} from "lucide-react";
import { personalInfo, browsingProfiles } from "../data/portfolio";
import { projects } from "../data/projects";
import { journeyMilestones } from "../data/journey";

export function DeveloperTerminal({ isOpen, onClose, activeProfileId, onChangeProfile }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      content: `Welcome to Sahil Singh's Simulated Developer Terminal v1.0.0
Type "help" to view available commands. Use Arrow Up/Down for history.`
    }
  ]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [commandList, setCommandList] = useState([]);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Save to command list for up/down navigation
    setCommandList((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    // Record user input entry
    const newEntry = { type: "input", content: `sahil@dev:~$ ${cmdText}` };

    let responseEntry = null;

    switch (trimmed) {
      case "help":
        responseEntry = {
          type: "output",
          content: `Available Commands:
  help      - Display this list of simulated commands
  about     - Overview of Sahil Singh, education, and career objective
  projects  - Inspect verified projects (Unfazed, Vyrox, LMS)
  skills    - List core competencies across frontend, backend, & tools
  journey   - Display chronological timeline milestones
  contact   - Display email, GitHub, and LinkedIn links
  resume    - Show resume PDF details and direct link
  mode      - Show active browsing profile (Recruiter / Developer / Explorer)
  mode recruiter - Switch to Recruiter mode
  mode developer - Switch to Developer mode
  mode explorer  - Switch to Explorer mode
  clear     - Clear terminal session history
  exit      - Close the simulated terminal`
        };
        break;

      case "about":
        responseEntry = {
          type: "output",
          content: `Sahil Singh — MERN Stack Developer | Aspiring Software Engineer
Location: ${personalInfo.location}
Education: ${personalInfo.education.degree} (${personalInfo.education.institution}, ${personalInfo.education.period})
Career Objective: ${personalInfo.careerObjective}
Philosophy: Building practical web experiences through thoughtful development, clean interfaces and continuous learning.`
        };
        break;

      case "projects":
        responseEntry = {
          type: "output",
          content: projects
            .map(
              (p, idx) =>
                `[${idx + 1}] ${p.title} (${p.status})
    Category: ${p.category}
    Tech: ${p.technologies.join(", ")}
    Scope: ${p.description}
    Repo: ${p.repositoryUrl || "Not yet linked"} | Demo: ${p.liveDemoUrl || "Demo coming soon"}`
            )
            .join("\n\n")
        };
        break;

      case "skills":
        responseEntry = {
          type: "output",
          content: `Technical Skills Matrix:
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js, Tailwind CSS
- Backend: Node.js, Express.js, REST APIs, Django (Active Learning)
- Databases: MongoDB, SQL, Relational Database Design
- Languages: Python (Certified), C++, C
- Tools: Git, GitHub, VS Code, Linux/Unix CLI
- Foundations: Data Structures & Algorithms, OOP, System Problem Solving`
        };
        break;

      case "journey":
        responseEntry = {
          type: "output",
          content: journeyMilestones
            .map(
              (m) =>
                `● ${m.period} — ${m.title}
   ${m.subtitle}
   ${m.description}`
            )
            .join("\n\n")
        };
        break;

      case "contact":
        responseEntry = {
          type: "output",
          content: `Contact Channels:
- Email:    ${personalInfo.email}
- GitHub:   ${personalInfo.social.github}
- LinkedIn: ${personalInfo.social.linkedin}
- Twitter:  ${personalInfo.social.twitter}
- Status:   Actively seeking Software Engineering Internships`
        };
        break;

      case "resume":
        responseEntry = {
          type: "output",
          content: `Resume File: ${personalInfo.resume.filename}
Path: ${personalInfo.resume.path}
Status: Available for instant download via website UI or direct link.`
        };
        break;

      case "mode":
      case "whoami": {
        const p = browsingProfiles.find((b) => b.id === activeProfileId);
        responseEntry = {
          type: "output",
          content: `Current Browsing Mode: ${p?.name || "Recruiter"}
Perspective: ${p?.description || ""}
To switch modes, type: "mode recruiter", "mode developer", or "mode explorer".`
        };
        break;
      }

      case "mode recruiter":
        onChangeProfile("recruiter");
        responseEntry = {
          type: "output",
          content: `Switched browsing mode to: RECRUITER MODE.`
        };
        break;

      case "mode developer":
        onChangeProfile("developer");
        responseEntry = {
          type: "output",
          content: `Switched browsing mode to: DEVELOPER MODE.`
        };
        break;

      case "mode explorer":
        onChangeProfile("explorer");
        responseEntry = {
          type: "output",
          content: `Switched browsing mode to: EXPLORER MODE.`
        };
        break;

      case "clear":
      case "cls":
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        responseEntry = {
          type: "error",
          content: `Command not recognized: "${cmdText}". Type "help" to see available commands.`
        };
    }

    setHistory((prev) => [...prev, newEntry, responseEntry]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIdx =
        commandIndex === -1 ? commandList.length - 1 : Math.max(0, commandIndex - 1);
      setCommandIndex(nextIdx);
      setInputVal(commandList[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex === -1) return;
      const nextIdx = commandIndex + 1;
      if (nextIdx >= commandList.length) {
        setCommandIndex(-1);
        setInputVal("");
      } else {
        setCommandIndex(nextIdx);
        setInputVal(commandList[nextIdx] || "");
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <div
      className="terminal-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terminal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9600,
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMaximized ? "0" : "clamp(0.75rem, 3vw, 2rem)"
      }}
    >
      <div
        className="terminal-window"
        style={{
          width: "100%",
          maxWidth: isMaximized ? "100vw" : "860px",
          height: isMaximized ? "100vh" : "560px",
          backgroundColor: "#0d0d11",
          border: isMaximized ? "none" : "1px solid rgba(229, 9, 20, 0.4)",
          borderRadius: isMaximized ? "0" : "var(--radius-md)",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95), 0 0 35px rgba(229, 9, 20, 0.2)",
          overflow: "hidden",
          fontFamily: "var(--font-mono)"
        }}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            height: "44px",
            backgroundColor: "#16161d",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1rem",
            userSelect: "none"
          }}
        >
          {/* Window Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={onClose}
              title="Close terminal"
              aria-label="Close terminal"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#E50914",
                cursor: "pointer"
              }}
            />
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              title={isMaximized ? "Restore window" : "Maximize window"}
              aria-label={isMaximized ? "Restore terminal window" : "Maximize terminal window"}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#F59E0B",
                cursor: "pointer"
              }}
            />
            <button
              onClick={() => setHistory([])}
              title="Clear screen"
              aria-label="Clear screen"
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#10B981",
                cursor: "pointer"
              }}
            />
          </div>

          {/* Window Title */}
          <div
            id="terminal-title"
            style={{
              fontSize: "0.8125rem",
              color: "var(--text-secondary)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}
          >
            <TerminalIcon size={14} style={{ color: "var(--accent-red)" }} />
            <span>sahil@portfolio: ~ (bash / simulated)</span>
          </div>

          {/* Quick Helper Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={() => handleCommand("help")}
              title="Help"
              aria-label="Show help"
              style={{
                fontSize: "0.75rem",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "0.2rem 0.5rem"
              }}
            >
              help
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              style={{ color: "var(--text-muted)", cursor: "pointer", padding: "0.2rem" }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          onClick={() => inputRef.current?.focus()}
          style={{
            flexGrow: 1,
            padding: "1.25rem",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            fontSize: "0.875rem",
            color: "#E2E8F0",
            lineHeight: 1.6
          }}
        >
          {history.map((entry, idx) => {
            if (entry.type === "system") {
              return (
                <div
                  key={idx}
                  style={{
                    color: "var(--accent-red)",
                    whiteSpace: "pre-wrap",
                    paddingBottom: "0.5rem",
                    borderBottom: "1px dashed rgba(229, 9, 20, 0.3)"
                  }}
                >
                  {entry.content}
                </div>
              );
            }
            if (entry.type === "input") {
              return (
                <div key={idx} style={{ color: "#38BDF8", fontWeight: 600 }}>
                  {entry.content}
                </div>
              );
            }
            if (entry.type === "error") {
              return (
                <div key={idx} style={{ color: "#F87171", whiteSpace: "pre-wrap" }}>
                  {entry.content}
                </div>
              );
            }
            return (
              <div key={idx} style={{ color: "#CBD5E1", whiteSpace: "pre-wrap" }}>
                {entry.content}
              </div>
            );
          })}

          {/* Active Command Input Line */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>
              sahil@dev:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Terminal command prompt"
              autoComplete="off"
              spellCheck="false"
              style={{
                flexGrow: 1,
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                color: "#FFFFFF",
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                caretColor: "var(--accent-red)"
              }}
            />
          </div>
          <div ref={bottomRef} />
        </div>

        {/* Bottom Helper Bar */}
        <div
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#121218",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
            fontSize: "0.75rem",
            color: "var(--text-muted)"
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <span>Quick:</span>
            <button onClick={() => handleCommand("about")} style={{ color: "var(--accent-red)", cursor: "pointer" }}>about</button>
            <button onClick={() => handleCommand("projects")} style={{ color: "var(--accent-red)", cursor: "pointer" }}>projects</button>
            <button onClick={() => handleCommand("skills")} style={{ color: "var(--accent-red)", cursor: "pointer" }}>skills</button>
            <button onClick={() => handleCommand("journey")} style={{ color: "var(--accent-red)", cursor: "pointer" }}>journey</button>
            <button onClick={() => handleCommand("contact")} style={{ color: "var(--accent-red)", cursor: "pointer" }}>contact</button>
          </div>
          <div>Press [ESC] to exit</div>
        </div>
      </div>
    </div>
  );
}
