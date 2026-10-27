"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <Terminal size={18} className="text-emerald" />
          </div>
          <span className="logo-text">
            musa<span className="logo-highlight">@code</span>:~$
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <Link href="#projects" className="nav-link">Projects</Link>
          <Link href="#terminal" className="nav-link">Terminal</Link>
          <Link href="#skills" className="nav-link">Skills</Link>
          <Link href="#stats" className="nav-link">Activity</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
        </nav>

        {/* Right CTA */}
        <div className="header-actions">
          <div className="status-pill desktop-only">
            <span className="status-dot"></span>
            <span>Open to Roles</span>
          </div>

          <a
            href={PORTFOLIO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
            <span className="desktop-only">musaCODEzz</span>
            <ArrowUpRight size={14} className="desktop-only" />
          </a>

          {/* Mobile hamburger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <Link
              href="#projects"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#terminal"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terminal Console
            </Link>
            <Link
              href="#skills"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills & Architecture
            </Link>
            <Link
              href="#stats"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub Analytics
            </Link>
            <Link
              href="#contact"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="mobile-status-pill">
              <span className="status-dot"></span>
              <span>Available for High-Impact Roles</span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .header {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(7, 9, 14, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--border-emerald);
          border-radius: var(--radius-sm);
        }

        .logo-highlight {
          color: var(--accent-emerald-bright);
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-link {
          font-size: 0.925rem;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
          font-weight: 500;
        }

        .nav-link:hover {
          color: #fff;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--border-emerald);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--accent-emerald-bright);
          font-family: var(--font-mono);
        }

        .btn-github {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .btn-github:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--border-cyan);
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          color: var(--text-primary);
        }

        .mobile-menu {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
          padding: 20px 24px;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        .mobile-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 8px 14px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid var(--border-emerald);
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          color: var(--accent-emerald-bright);
        }

        @media (max-width: 860px) {
          .desktop-nav,
          .desktop-only {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
