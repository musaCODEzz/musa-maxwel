"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

export default function WorkSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="work-section">
      <div className="container">
        {/* Top Header Row */}
        <div className="work-header-row">
          <div>
            <span className="section-tag">002 / Work</span>
            <h2 className="section-title-editorial">
              Selected
              <br />
              <span className="italic-accent">projects</span>
            </h2>
          </div>
          <span className="work-counter">
            {PORTFOLIO_DATA.projects.length} Projects
          </span>
        </div>

        {/* Editorial Projects Rows */}
        <div className="projects-list">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const isHovered = hoveredIdx === idx;
            const targetLink = project.liveUrl || project.githubUrl;

            return (
              <div
                key={project.title}
                className="project-row"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="project-grid">
                  {/* Number */}
                  <div className="col-num">
                    <span className="num-text">{project.number}</span>
                  </div>

                  {/* Title & Live Status */}
                  <div className="col-title">
                    <a
                      href={targetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`title-link ${isHovered ? "hovered" : ""}`}
                    >
                      {project.title}
                    </a>
                    {project.liveUrl && (
                      <span className="live-tag">Live</span>
                    )}
                  </div>

                  {/* Description & Tags */}
                  <div className="col-desc">
                    <p className="project-summary">{project.description}</p>
                    <div className="tags-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Secondary links if both live & code exist */}
                    <div className="links-row">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sub-link"
                        >
                          Live App →
                        </a>
                      )}
                      {project.apiDocsUrl && (
                        <a
                          href={project.apiDocsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sub-link"
                        >
                          Swagger Docs →
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sub-link"
                      >
                        GitHub Code →
                      </a>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="col-arrow">
                    <a
                      href={targetLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`arrow-icon ${isHovered ? "arrow-hovered" : ""}`}
                      aria-label={`View ${project.title}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3 13L13 3M13 3H7M13 3V9"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .work-section {
          padding: 110px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .work-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 16px;
        }

        .work-counter {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }

        .projects-list {
          display: flex;
          flex-direction: column;
        }

        .project-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 40px 0;
          transition: background-color 0.2s ease;
        }

        .project-row:hover {
          background-color: rgba(255, 255, 255, 0.015);
        }

        .project-grid {
          display: grid;
          grid-template-columns: 48px 4fr 6fr 48px;
          gap: 32px;
          align-items: flex-start;
        }

        .col-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--muted-foreground);
          padding-top: 4px;
        }

        .col-title {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-start;
        }

        .title-link {
          font-size: clamp(1.4rem, 2.5vw, 1.85rem);
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .title-link.hovered {
          color: var(--primary);
        }

        .live-tag {
          font-family: var(--font-mono);
          font-size: 0.675rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary);
          padding: 2px 8px;
          border: 1px solid rgba(212, 245, 68, 0.25);
          border-radius: 2px;
        }

        .col-desc {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .project-summary {
          font-size: 0.95rem;
          color: var(--muted-foreground);
          line-height: 1.65;
          font-weight: 300;
        }

        .tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-chip {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          color: var(--muted-foreground);
          padding: 4px 10px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2px;
        }

        .links-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 4px;
        }

        .sub-link {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }

        .sub-link:hover {
          color: var(--primary);
        }

        .col-arrow {
          display: flex;
          justify-content: flex-end;
          padding-top: 4px;
        }

        .arrow-icon {
          color: var(--muted-foreground);
          transition: transform 0.2s ease, color 0.2s ease;
          display: inline-block;
        }

        .arrow-icon.arrow-hovered {
          transform: translate(3px, -3px);
          color: var(--primary);
        }

        @media (max-width: 860px) {
          .project-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .col-arrow {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
