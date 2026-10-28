"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column: Big Headline */}
          <div className="contact-headline-col">
            <span className="section-tag">004 / Contact</span>
            <h2 className="headline-text">
              Let&apos;s build
              <br />
              <span className="italic-accent">something</span>
              <br />
              together<span className="dot-primary">.</span>
            </h2>
            <p className="contact-subtext">
              I&apos;m open to backend engineering roles, fullstack positions, and select engineering consulting engagements. If you&apos;re working on something interesting, let&apos;s talk.
            </p>
          </div>

          {/* Right Column: Channels & Socials */}
          <div className="contact-channels-col">
            {/* Email with copy */}
            <div className="channel-block">
              <span className="channel-label">Email</span>
              <button
                onClick={handleCopyEmail}
                className="channel-value-btn group"
                aria-label="Copy Email address"
              >
                <span>{PORTFOLIO_DATA.email}</span>
                <span className="copy-badge">
                  {copied ? "Copied!" : "Copy"}
                </span>
              </button>
            </div>

            {/* WhatsApp */}
            <div className="channel-block">
              <span className="channel-label">WhatsApp</span>
              <a
                href={PORTFOLIO_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-value-btn group"
              >
                <span>{PORTFOLIO_DATA.phone}</span>
                <span className="copy-badge">Message me ↗</span>
              </a>
            </div>

            {/* Location */}
            <div className="channel-block">
              <span className="channel-label">Location</span>
              <div className="channel-value-text">
                Nairobi, Kenya
              </div>
            </div>

            {/* Socials / Elsewhere */}
            <div className="channel-block elsewhere-block">
              <span className="channel-label">Elsewhere</span>
              <div className="social-links-row">
                {PORTFOLIO_DATA.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-anchor"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 120px 0 100px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 7fr 5fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-headline-col {
          display: flex;
          flex-direction: column;
        }

        .headline-text {
          font-size: clamp(2.75rem, 6.5vw, 5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .italic-accent {
          font-style: italic;
          font-weight: 300;
        }

        .dot-primary {
          color: var(--primary);
        }

        .contact-subtext {
          font-size: 1rem;
          color: var(--muted-foreground);
          line-height: 1.7;
          font-weight: 300;
          max-width: 480px;
          margin-top: 32px;
        }

        .contact-channels-col {
          display: flex;
          flex-direction: column;
          gap: 36px;
          padding-top: 20px;
        }

        .channel-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .channel-label {
          font-family: var(--font-mono);
          font-size: 0.725rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }

        .channel-value-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: clamp(1.2rem, 2vw, 1.6rem);
          font-weight: 300;
          color: #ffffff;
          transition: color 0.2s ease;
          text-align: left;
        }

        .channel-value-btn:hover {
          color: var(--primary);
        }

        .copy-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }

        .channel-value-btn:hover .copy-badge {
          color: var(--primary);
        }

        .channel-value-text {
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          font-weight: 300;
          color: #ffffff;
        }

        .elsewhere-block {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 24px;
        }

        .social-links-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .social-anchor {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted-foreground);
          transition: color 0.2s ease;
        }

        .social-anchor:hover {
          color: var(--primary);
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
