"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="grid-background"></div>

      <div className="container hero-content">
        {/* Availability Badge */}
        <div className="hero-status-row">
          <div className="status-indicator-pill">
            <span className="status-dot-green"></span>
            <span>{PORTFOLIO_DATA.status}</span>
          </div>
        </div>

        {/* Big Display Name */}
        <h1 className="hero-headline">
          Musa
          <br />
          <span className="italic-accent">Maxwell</span>
          <span className="dot-primary">.</span>
        </h1>

        {/* Subtitle & Story */}
        <div className="hero-bio-row">
          <p className="hero-role-title">
            Fullstack Engineer
            <br />
            & Systems Builder
          </p>
          <p className="hero-desc">
            {PORTFOLIO_DATA.bioHeadline}
          </p>
        </div>

        {/* Clean, Non-Glowing Buttons */}
        <div className="hero-actions">
          <a href="#projects" className="btn-solid">
            <span>View my work</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>

          <a href="#contact" className="btn-outline">
            Get in touch
          </a>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hero-stats-row">
          {PORTFOLIO_DATA.stats.map((item) => (
            <div key={item.label} className="stat-col">
              <div className="stat-number">{item.n}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: 140px;
          padding-bottom: 70px;
          position: relative;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-status-row {
          margin-bottom: 28px;
        }

        .hero-headline {
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: #ffffff;
          margin-bottom: 32px;
        }

        .italic-accent {
          font-style: italic;
          font-weight: 300;
        }

        .dot-primary {
          color: var(--primary);
        }

        .hero-bio-row {
          display: flex;
          align-items: flex-end;
          gap: 48px;
          margin-bottom: 40px;
          max-width: 820px;
        }

        .hero-role-title {
          font-size: clamp(1.25rem, 2.5vw, 1.65rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.35;
          color: var(--muted-foreground);
          flex-shrink: 0;
          max-width: 260px;
        }

        .hero-desc {
          font-size: 0.95rem;
          color: var(--muted-foreground);
          line-height: 1.7;
          font-weight: 300;
          max-width: 480px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }

        .hero-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          width: 100%;
          max-width: 580px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .stat-col {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 300;
          color: var(--primary);
          line-height: 1.1;
        }

        .stat-label {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          margin-top: 6px;
        }

        @media (max-width: 768px) {
          .hero-bio-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .hero-stats-row {
            gap: 20px;
          }
          .stat-number {
            font-size: 1.85rem;
          }
        }
      `}</style>
    </section>
  );
}
