"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AboutSection() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Heading */}
          <div className="about-heading-col">
            <span className="section-tag">{about.tag}</span>
            <h2 className="section-title-editorial">
              {about.headingLine1}
              <br />
              <span className="italic-accent">{about.headingLine2}</span>
            </h2>
          </div>

          {/* Right Column: Narrative + Skills */}
          <div className="about-content-col">
            <div className="narrative-paragraphs">
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="about-text">
                  {p}
                </p>
              ))}
            </div>

            {/* Skills breakdown */}
            <div className="skills-divider">
              <div className="skills-matrix">
                {about.skills.map((group) => (
                  <div key={group.category} className="skill-cat-col">
                    <h3 className="skill-cat-title">{group.category}</h3>
                    <ul className="skill-items-list">
                      {group.items.map((skill) => (
                        <li key={skill} className="skill-item">
                          <span className="skill-bullet"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 110px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 60px;
          align-items: flex-start;
        }

        .about-heading-col {
          display: flex;
          flex-direction: column;
        }

        .about-content-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .narrative-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-text {
          font-size: 1.05rem;
          color: var(--muted-foreground);
          line-height: 1.75;
          font-weight: 300;
        }

        .skills-divider {
          padding-top: 36px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: 16px;
        }

        .skills-matrix {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 36px;
        }

        .skill-cat-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .skill-cat-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--primary);
          font-weight: 500;
        }

        .skill-items-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--muted-foreground);
          font-weight: 300;
        }

        .skill-bullet {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: var(--muted-foreground);
          flex-shrink: 0;
        }

        @media (max-width: 860px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .skills-matrix {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </section>
  );
}
