"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="experience-grid">
          {/* Left Column: Heading */}
          <div className="heading-col">
            <span className="section-tag">003 / Experience</span>
            <h2 className="section-title-editorial">
              Where I&apos;ve
              <br />
              <span className="italic-accent">built</span>
            </h2>
          </div>

          {/* Right Column: Roles Timeline */}
          <div className="roles-col">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="role-card">
                <div className="role-header">
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="role-meta">
                    <span className="company-name">{exp.company}</span>
                    <span className="separator">/</span>
                    <span className="period-text">{exp.period}</span>
                  </div>
                </div>
                <p className="role-description">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          padding: 110px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .experience-grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 60px;
          align-items: flex-start;
        }

        .heading-col {
          display: flex;
          flex-direction: column;
        }

        .roles-col {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .role-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding-bottom: 36px;
        }

        .role-card:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .role-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .role-title {
          font-size: 1.35rem;
          font-weight: 300;
          color: #ffffff;
          letter-spacing: -0.01em;
        }

        .role-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.775rem;
          letter-spacing: 0.08em;
          color: var(--muted-foreground);
        }

        .company-name {
          color: var(--primary);
        }

        .separator {
          color: rgba(255, 255, 255, 0.2);
        }

        .period-text {
          color: var(--muted-foreground);
        }

        .role-description {
          font-size: 0.95rem;
          color: var(--muted-foreground);
          line-height: 1.7;
          font-weight: 300;
        }

        @media (max-width: 860px) {
          .experience-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  );
}
