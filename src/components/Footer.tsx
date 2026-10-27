"use client";

import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <Terminal size={16} className="text-emerald" />
            <span>musa@code:~$</span>
          </div>
          <p className="footer-tagline">
            “Talk less — Show me the code.” High-performance web applications, distributed APIs, and automotive systems.
          </p>
          <div className="footer-copyright">
            © 2026 {PORTFOLIO_DATA.name} (@{PORTFOLIO_DATA.handle}). Engineered for Vercel deployment.
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-nav">
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#terminal" className="footer-link">Terminal</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#stats" className="footer-link">Activity</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

          <div className="footer-bottom-row">
            <div className="system-pill">
              <span className="dot-live"></span>
              <span>All Systems Operational</span>
            </div>

            <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border-subtle);
          background: rgba(6, 8, 13, 0.95);
          padding: 60px 0 40px 0;
          margin-top: 60px;
        }

        .footer-inner {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
        }

        .footer-left {
          max-width: 460px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .footer-copyright {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-top: 8px;
        }

        .footer-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 24px;
        }

        .footer-nav {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-link {
          font-size: 0.875rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: #fff;
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .system-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 5px 12px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--border-emerald);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-emerald-bright);
        }

        .dot-live {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 6px #10b981;
        }

        .back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .back-to-top:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          transform: translateY(-2px);
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-right {
            align-items: flex-start;
            width: 100%;
          }
          .footer-bottom-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
