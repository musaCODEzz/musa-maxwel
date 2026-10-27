"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, FileText, CheckCircle2, Shield, Layers } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="modal-category">{project.categoryLabel}</span>
            <h3 className="modal-title">{project.title}</h3>
            <p className="modal-tagline">{project.tagline}</p>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="modal-body">
          {/* Overview */}
          <div className="modal-section">
            <h4 className="section-label">
              <Shield size={16} className="text-emerald" />
              <span>System Overview</span>
            </h4>
            <p className="section-text">{project.description}</p>
          </div>

          {/* Technical Architecture & Highlights */}
          <div className="modal-section">
            <h4 className="section-label">
              <Layers size={16} className="text-cyan" />
              <span>Architectural Highlights</span>
            </h4>
            <ul className="highlight-list">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="highlight-item">
                  <CheckCircle2 size={16} className="text-emerald flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <h4 className="section-label">
              <span>Technologies Deployed</span>
            </h4>
            <div className="tech-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Launch Live App</span>
              <ExternalLink size={16} />
            </a>
          )}

          {project.apiDocsUrl && (
            <a
              href={project.apiDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FileText size={16} className="text-cyan" />
              <span>Swagger API Docs</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(3, 7, 18, 0.82);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-card {
          width: 100%;
          max-width: 680px;
          background: #0d121f;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-xl);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(16, 185, 129, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          max-height: 90vh;
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 24px 28px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: #090d17;
        }

        .modal-category {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-emerald-bright);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .modal-tagline {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .close-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          color: #fff;
        }

        .modal-body {
          padding: 24px 28px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #e2e8f0;
          margin-bottom: 10px;
        }

        .section-text {
          font-size: 0.975rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .highlight-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.925rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        .text-cyan {
          color: var(--accent-cyan-bright);
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: #94a3b8;
        }

        .modal-footer {
          padding: 18px 28px;
          background: #090d17;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .modal-header,
          .modal-body,
          .modal-footer {
            padding: 16px 20px;
          }
          .modal-footer {
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>
    </div>
  );
}
