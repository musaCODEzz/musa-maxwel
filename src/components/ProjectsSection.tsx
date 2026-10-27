"use client";

import React, { useState } from "react";
import { ExternalLink, FileText, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Backend & APIs" },
    { id: "web3", label: "Web3 & Systems" }
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    if (activeFilter === "fullstack") return project.category === "fullstack";
    if (activeFilter === "backend") return project.category === "backend";
    if (activeFilter === "web3") return project.category === "web3" || project.category === "tools";
    return true;
  });

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Production Work</span>
          <h2 className="section-title">Engineered Systems & Projects</h2>
          <p className="section-desc">
            A curated showcase of deployed applications, anti-fraud engines, and high-performance backend microservices.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="filter-nav">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`filter-btn ${activeFilter === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => {
            const isLive = project.status === "Live Production";
            return (
              <div key={project.id} className="project-card glass-card">
                {/* Card Top Meta */}
                <div className="card-meta">
                  <span className="category-pill">{project.categoryLabel}</span>
                  <div className={`status-badge ${isLive ? "status-live" : "status-oss"}`}>
                    <span className="status-indicator"></span>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                {/* Description */}
                <p className="project-desc">{project.description}</p>

                {/* Key Feature Bullets */}
                <div className="project-features">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="feature-item">
                      <ShieldCheck size={14} className="text-emerald flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="tech-badge-container">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions Bar */}
                <div className="card-actions">
                  <div className="action-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn live-btn"
                        title="View Live App"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.apiDocsUrl && (
                      <a
                        href={project.apiDocsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn swagger-btn"
                        title="View OpenAPI / Swagger Documentation"
                      >
                        <FileText size={15} />
                        <span>Swagger UI</span>
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn github-btn"
                      title="View GitHub Repository"
                    >
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="deep-dive-btn"
                    title="Deep Dive into Architecture"
                  >
                    <span>Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style jsx>{`
        .projects-section {
          padding: 80px 0;
          position: relative;
        }

        .filter-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-btn {
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-btn.active {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--border-emerald);
          color: var(--accent-emerald-bright);
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .project-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .category-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan-bright);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 500;
          font-family: var(--font-mono);
        }

        .status-live {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: var(--accent-emerald-bright);
        }

        .status-oss {
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: #38bdf8;
        }

        .status-indicator {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .project-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .project-tagline {
          font-size: 0.925rem;
          color: var(--accent-cyan-bright);
          margin-bottom: 14px;
          font-weight: 500;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 18px;
        }

        .project-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
          padding: 12px;
          background: rgba(0, 0, 0, 0.25);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.45;
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        .tech-badge-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
          margin-top: auto;
        }

        .tech-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          color: #94a3b8;
        }

        .card-actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          gap: 12px;
        }

        .action-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: var(--radius-md);
          font-size: 0.825rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .live-btn {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid var(--border-emerald);
          color: var(--accent-emerald-bright);
        }

        .live-btn:hover {
          background: rgba(16, 185, 129, 0.3);
          transform: translateY(-1px);
        }

        .swagger-btn {
          background: rgba(133, 234, 45, 0.12);
          border: 1px solid rgba(133, 234, 45, 0.3);
          color: #85ea2d;
        }

        .swagger-btn:hover {
          background: rgba(133, 234, 45, 0.25);
          transform: translateY(-1px);
        }

        .github-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .github-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transform: translateY(-1px);
        }

        .deep-dive-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text-muted);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          padding: 6px 8px;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .deep-dive-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
