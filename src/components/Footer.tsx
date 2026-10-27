"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-root">
      <div className="container footer-content">
        <div className="footer-left">
          © 2026 {PORTFOLIO_DATA.name}. Built with Next.js & deployed on Vercel.
        </div>

        <div className="footer-right">
          <span className="footer-note">Designed & engineered with clarity</span>
          <span className="footer-sep">/</span>
          <button onClick={scrollToTop} className="back-top-btn" aria-label="Scroll back to top">
            Back to top ↑
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer-root {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 36px 0;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted-foreground);
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-left {
          letter-spacing: 0.05em;
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-sep {
          color: rgba(255, 255, 255, 0.15);
        }

        .back-top-btn {
          color: var(--muted-foreground);
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
        }

        .back-top-btn:hover {
          color: var(--primary);
        }

        @media (max-width: 640px) {
          .footer-content {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
