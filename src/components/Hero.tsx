"use client";

import React, { useState } from "react";
import { ArrowRight, Terminal, Copy, Check, Sparkles, ExternalLink, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Availability Badge */}
        <div className="hero-badge-wrap">
          <div className="badge-status">
            <span className="status-dot"></span>
            <span>{PORTFOLIO_DATA.status}</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="hero-title">
          Engineering Resilient Web Systems, <br />
          <span className="gradient-text">Scalable APIs & Automotive Tech</span>
        </h1>

        {/* Subtitle / Philosophy */}
        <p className="hero-lead">
          <span className="quote-tag">“Talk less — Show me the code.”</span> <br />
          I’m <span className="highlight-text">{PORTFOLIO_DATA.name}</span> (@{PORTFOLIO_DATA.handle}), a Full-Stack Software Engineer based in Nairobi. 
          I design anti-fraud vehicle platforms, developer-first APIs with interactive OpenAPI suites, 
          and production web applications engineered for speed, durability, and seamless scale.
        </p>

        {/* Action Buttons */}
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            <span>Explore Hosted Projects</span>
            <ArrowRight size={18} />
          </a>

          <a href="#terminal" className="btn-secondary">
            <Terminal size={18} />
            <span>Interactive Terminal</span>
          </a>

          <button onClick={handleCopyEmail} className="btn-secondary" aria-label="Copy Email">
            {copied ? <Check size={18} className="text-emerald" /> : <Copy size={18} />}
            <span>{copied ? "Email Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="metrics-grid">
          {PORTFOLIO_DATA.metrics.map((item, idx) => (
            <div key={idx} className="metric-card">
              <span className="metric-val">{item.value}</span>
              <span className="metric-label">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Live System Ticker */}
        <div className="system-ticker">
          <div className="ticker-label">
            <Sparkles size={14} className="text-cyan" />
            <span>LIVE SYSTEMS</span>
          </div>
          <div className="ticker-items">
            <a href="https://blog-api-frontend-neon.vercel.app/" target="_blank" rel="noopener noreferrer" className="ticker-item">
              <span className="dot-live"></span>
              <span>StackPulse Platform</span>
              <ExternalLink size={12} />
            </a>
            <span className="ticker-separator">/</span>
            <a href="https://nexa-kenya.vercel.app/" target="_blank" rel="noopener noreferrer" className="ticker-item">
              <span className="dot-live"></span>
              <span>Nexa Kenya</span>
              <ExternalLink size={12} />
            </a>
            <span className="ticker-separator">/</span>
            <a href="https://blog-api-backend-mh0s.onrender.com/api-docs" target="_blank" rel="noopener noreferrer" className="ticker-item">
              <span className="dot-live"></span>
              <span>StackPulse OpenAPI Swagger</span>
              <ExternalLink size={12} />
            </a>
            <span className="ticker-separator">/</span>
            <a href="https://github.com/musaCODEzz/autolog-backend" target="_blank" rel="noopener noreferrer" className="ticker-item">
              <span className="dot-code"></span>
              <span>AutoLog KE Anti-Clocking Engine</span>
              <Code2 size={12} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding: 80px 0 60px 0;
          position: relative;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge-wrap {
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.04em;
          margin-bottom: 24px;
          max-width: 950px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #34d399 0%, #38bdf8 50%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-lead {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 760px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .quote-tag {
          color: #f1f5f9;
          font-family: var(--font-mono);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .highlight-text {
          color: #fff;
          font-weight: 600;
        }

        .hero-ctas {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        .text-cyan {
          color: var(--accent-cyan-bright);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 900px;
          margin-bottom: 40px;
        }

        .metric-card {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(12px);
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .metric-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .metric-val {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-family: var(--font-mono);
          letter-spacing: -0.02em;
        }

        .metric-label {
          font-size: 0.775rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }

        .system-ticker {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 18px;
          background: rgba(11, 17, 30, 0.7);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          backdrop-filter: blur(10px);
          max-width: 950px;
          overflow-x: auto;
          white-space: nowrap;
        }

        .ticker-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-cyan-bright);
        }

        .ticker-items {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .ticker-item:hover {
          color: #fff;
        }

        .dot-live {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 6px #10b981;
        }

        .dot-code {
          width: 6px;
          height: 6px;
          background: #38bdf8;
          border-radius: 50%;
        }

        .ticker-separator {
          color: var(--border-subtle);
        }

        @media (max-width: 900px) {
          .hero-title {
            font-size: 2.75rem;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-lead {
            font-size: 1.05rem;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
