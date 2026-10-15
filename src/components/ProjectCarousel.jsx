import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { projects, projectCategories } from "../data/projects";

export function ProjectCarousel({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const scrollContainerRef = useRef(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All Projects") return true;
    if (selectedCategory === "Featured Projects") return project.featured;
    return project.category === selectedCategory;
  });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      const targetScroll =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="projects"
      className="section-wrapper"
      aria-label="Featured Projects Catalog"
      style={{ position: "relative" }}
    >
      <div className="cinematic-container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "2rem"
          }}
        >
          <div className="section-tag">Cinematic Showcase</div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem"
            }}
          >
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-description">
                Explore verified full-stack applications, interactive prototypes, and active learning systems engineered with clean architectures and modern technologies.
              </p>
            </div>

            {/* Carousel Navigation Chevrons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll projects carousel left"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)"
                }}
                className="chevron-btn"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll("right")}
                aria-label="Scroll projects carousel right"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)"
                }}
                className="chevron-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            overflowX: "auto",
            paddingBottom: "1rem",
            marginBottom: "1.5rem"
          }}
          className="hide-scrollbar"
        >
          {projectCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                style={{
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
                {cat}
              </button>
            );
          })}
        </div>

        {/* Horizontal Carousel Rail */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          aria-label="Projects list"
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gridAutoColumns: "clamp(290px, 32vw, 380px)",
            gap: "1.5rem",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "1.5rem",
            paddingTop: "0.5rem"
          }}
          className="hide-scrollbar"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                scrollSnapAlign: "start",
                height: "100%"
              }}
            >
              <ProjectCard project={project} onOpenModal={onOpenModal} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .chevron-btn:hover {
          border-color: var(--accent-red) !important;
          background-color: var(--bg-card-hover) !important;
          color: var(--accent-red) !important;
        }
      `}</style>
    </section>
  );
}
