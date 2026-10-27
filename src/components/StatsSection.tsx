"use client";

import React from "react";
import { GitCommit, Star, GitFork, ArrowUpRight, Flame, Code } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function StatsSection() {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Engineering Velocity</span>
          <h2 className="section-title">GitHub Activity & Real-Time Stats</h2>
          <p className="section-desc">
            Direct telemetry from my GitHub account (@musaCODEzz) showcasing commits, language distributions, and continuous delivery.
          </p>
        </div>

        {/* Live Counters */}
        <div className="stats-counter-bar">
          <div className="counter-item">
            <div className="counter-icon-wrap bg-emerald">
              <Code size={18} className="text-emerald" />
            </div>
            <div className="counter-text">
              <span className="counter-number">60+</span>
              <span className="counter-title">Public Repositories</span>
            </div>
          </div>

          <div className="counter-item">
            <div className="counter-icon-wrap bg-cyan">
              <GitCommit size={18} className="text-cyan" />
            </div>
            <div className="counter-text">
              <span className="counter-number">Production</span>
              <span className="counter-title">Vercel & Render Hosted</span>
            </div>
          </div>

          <div className="counter-item">
            <div className="counter-icon-wrap bg-indigo">
              <Flame size={18} className="text-indigo" />
            </div>
            <div className="counter-text">
              <span className="counter-number">Active</span>
              <span className="counter-title">Continuous Shipping</span>
            </div>
          </div>

          <div className="counter-item">
            <div className="counter-icon-wrap bg-purple">
              <Star size={18} className="text-purple" />
            </div>
            <div className="counter-text">
              <span className="counter-number">Open Source</span>
              <span className="counter-title">Public Architecture</span>
            </div>
          </div>
        </div>

        {/* Dynamic GitHub SVG Cards */}
        <div className="github-cards-grid">
          {/* Card 1: Main Stats */}
          <div className="stats-card glass-card">
            <div className="stats-card-header">
              <div className="header-left">
                <GitCommit size={16} className="text-emerald" />
                <span className="header-title">GitHub Contribution Overview</span>
              </div>
              <a
                href="https://github.com/musaCODEzz"
                target="_blank"
                rel="noopener noreferrer"
                className="view-gh-link"
              >
                <span>Profile</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
            <div className="svg-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=musaCODEzz&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&border_radius=8"
                alt="Musa Maxwell GitHub Stats"
                className="stats-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 2: Top Languages */}
          <div className="stats-card glass-card">
            <div className="stats-card-header">
              <div className="header-left">
                <Code size={16} className="text-cyan" />
                <span className="header-title">Language Distribution</span>
              </div>
              <span className="header-badge">TypeScript / JS / Py</span>
            </div>
            <div className="svg-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=musaCODEzz&layout=compact&langs_count=7&theme=tokyonight&hide_border=true&border_radius=8"
                alt="Musa Maxwell Top Languages"
                className="stats-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 3: Streak Stats */}
          <div className="stats-card glass-card full-width">
            <div className="stats-card-header">
              <div className="header-left">
                <Flame size={16} className="text-emerald" />
                <span className="header-title">Commit Streak & Engineering Momentum</span>
              </div>
              <span className="header-badge">Live Streak</span>
            </div>
            <div className="svg-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://streak-stats.demolab.com/?user=musaCODEzz&theme=tokyonight&hide_border=true&border_radius=8"
                alt="Musa Maxwell GitHub Streak"
                className="stats-img streak-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          padding: 80px 0;
          position: relative;
        }

        .stats-counter-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .counter-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          background: rgba(14, 20, 34, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          backdrop-filter: blur(12px);
        }

        .counter-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .bg-emerald {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--border-emerald);
        }

        .bg-cyan {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid var(--border-cyan);
        }

        .bg-indigo {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .bg-purple {
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .counter-text {
          display: flex;
          flex-direction: column;
        }

        .counter-number {
          font-family: var(--font-mono);
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
        }

        .counter-title {
          font-size: 0.775rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .github-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .stats-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .full-width {
          grid-column: 1 / -1;
        }

        .stats-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
        }

        .view-gh-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          color: var(--accent-cyan-bright);
          font-family: var(--font-mono);
        }

        .view-gh-link:hover {
          text-decoration: underline;
        }

        .header-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .svg-container {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: var(--radius-md);
          min-height: 160px;
        }

        .stats-img {
          width: 100%;
          max-width: 100%;
          height: auto;
          display: block;
        }

        .streak-img {
          max-width: 600px;
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
        .text-purple {
          color: #c084fc;
        }

        @media (max-width: 860px) {
          .stats-counter-bar {
            grid-template-columns: repeat(2, 1fr);
          }
          .github-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 540px) {
          .stats-counter-bar {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
