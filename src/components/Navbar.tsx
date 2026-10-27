"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Brand */}
        <a href="#" className="brand">
          {PORTFOLIO_DATA.initials}
          <span className="dot-accent">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          {PORTFOLIO_DATA.nav.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hire-btn">
          Hire me
        </a>

        {/* Mobile Hamburger */}
        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`bar ${menuOpen ? "bar-1-open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "bar-2-open" : ""}`}></span>
          <span className={`bar ${menuOpen ? "bar-3-open" : ""}`}></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-drawer">
          {PORTFOLIO_DATA.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            onClick={() => setMenuOpen(false)}
            className="mobile-hire"
          >
            Hire me
          </a>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background-color 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background-color: rgba(8, 8, 8, 0.92);
          backdrop-filter: blur(12px);
          border-bottom-color: rgba(255, 255, 255, 0.06);
        }

        .navbar-container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 24px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          font-size: 1.25rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          color: #fff;
        }

        .dot-accent {
          color: var(--primary);
        }

        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }

        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .hire-btn {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 8px 18px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border-radius: 2px;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .hire-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .mobile-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
        }

        .bar {
          display: block;
          width: 24px;
          height: 1px;
          background: #ffffff;
          transition: all 0.25s ease;
        }

        .bar-1-open {
          transform: rotate(45deg) translateY(8px);
        }
        .bar-2-open {
          opacity: 0;
        }
        .bar-3-open {
          transform: rotate(-45deg) translateY(-8px);
        }

        .mobile-drawer {
          display: none;
          background-color: #080808;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 20px 24px;
        }

        .mobile-link {
          display: block;
          padding: 12px 0;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .mobile-link:hover {
          color: #fff;
        }

        .mobile-hire {
          display: inline-block;
          margin-top: 16px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .nav-links,
          .hire-btn {
            display: none;
          }
          .mobile-btn {
            display: flex;
          }
          .mobile-drawer {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
