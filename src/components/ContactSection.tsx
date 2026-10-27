"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Send, MapPin, Clock, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger user mail client with pre-filled content
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Musa,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;

    window.open(mailtoUrl, "_blank");
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Let&apos;s Build Together</span>
          <h2 className="section-title">Initiate Contact</h2>
          <p className="section-desc">
            Whether you have a software engineering role, distributed system architecture to design, or a consulting project in mind — let&apos;s connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Info Card */}
          <div className="contact-info-card glass-card">
            <h3 className="card-headline">Direct Channels</h3>
            <p className="card-sub">
              Fastest response via email. I typically respond within 24 hours.
            </p>

            <div className="email-display-box">
              <div className="email-row">
                <Mail size={18} className="text-emerald" />
                <span className="email-text">{PORTFOLIO_DATA.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-btn"
                aria-label="Copy Email address"
              >
                {copied ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="meta-details">
              <div className="meta-item">
                <MapPin size={16} className="text-cyan" />
                <span>Nairobi, Kenya (UTC +3)</span>
              </div>
              <div className="meta-item">
                <Clock size={16} className="text-emerald" />
                <span>Available for Remote Global & Local Contracting</span>
              </div>
            </div>

            <div className="social-links-title">Social Profiles & Code:</div>
            <div className="social-buttons">
              <a
                href={PORTFOLIO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} className="text-cyan" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PORTFOLIO_DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Twitter / X Profile"
              >
                <TwitterXIcon size={16} />
                <span>Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="contact-form-card glass-card">
            <h3 className="card-headline">Send a Direct Message</h3>
            <p className="card-sub">
              Fill out the details below and it will compose a formatted message directly to Musa Maxwell.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name" className="input-label">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="form-input"
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email" className="input-label">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="subject" className="input-label">Subject</label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Software Engineering Role / Project Inquiry"
                  className="form-input"
                />
              </div>

              <div className="input-group">
                <label htmlFor="message" className="input-label">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or open role..."
                  className="form-input form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                <Send size={16} />
                <span>Dispatch Email Message</span>
              </button>

              {sentSuccess && (
                <div className="success-msg">
                  <Check size={16} className="text-emerald" />
                  <span>Email client triggered! Thank you for reaching out.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .contact-info-card,
        .contact-form-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .card-headline {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
        }

        .card-sub {
          font-size: 0.925rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .email-display-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          margin-bottom: 24px;
        }

        .email-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .email-text {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          color: #f1f5f9;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          transition: all var(--transition-fast);
        }

        .copy-btn:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: var(--border-emerald);
          color: #fff;
        }

        .meta-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .social-links-title {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
        }

        .social-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .social-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-label {
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-secondary);
        }

        .form-input {
          padding: 12px 14px;
          background: rgba(0, 0, 0, 0.35);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus {
          border-color: var(--accent-emerald);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
        }

        .form-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-submit-btn {
          margin-top: 6px;
          width: 100%;
        }

        .success-msg {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--border-emerald);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: var(--accent-emerald-bright);
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }
        .text-cyan {
          color: var(--accent-cyan-bright);
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
