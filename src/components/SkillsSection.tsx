"use client";

import React, { useState } from "react";
import { Code2, Server, Database, Layout, Cloud, ShieldCheck, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 size={20} className="text-emerald" />;
      case 1:
        return <Server size={20} className="text-cyan" />;
      case 2:
        return <Database size={20} className="text-indigo" />;
      case 3:
        return <Layout size={20} className="text-emerald" />;
      case 4:
        return <Cloud size={20} className="text-cyan" />;
      case 5:
        return <ShieldCheck size={20} className="text-indigo" />;
      default:
        return <Terminal size={20} className="text-emerald" />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Toolbelt</span>
          <h2 className="section-title">Skills & Architectural Competencies</h2>
          <p className="section-desc">
            Technologies, frameworks, and patterns I leverage daily to construct production systems and robust APIs.
          </p>
        </div>

        <div className="skills-grid">
          {PORTFOLIO_DATA.skills.map((cat, idx) => (
            <div
              key={cat.title}
              className="skill-card glass-card"
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="card-top">
                <div className="category-icon-wrap">{getCategoryIcon(idx)}</div>
                <div className="category-info">
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 80px 0;
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-card {
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .category-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          flex-shrink: 0;
        }

        .category-info {
          display: flex;
          flex-direction: column;
        }

        .category-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .category-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-chip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 0.825rem;
          transition: all var(--transition-fast);
        }

        .skill-chip:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateX(4px);
        }

        .skill-name {
          color: #e2e8f0;
          font-weight: 500;
        }

        .skill-level {
          font-size: 0.725rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        .text-cyan {
          color: var(--accent-cyan-bright);
        }

        .text-indigo {
          color: #818cf8;
        }

        @media (max-width: 960px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
