"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Play, RefreshCw } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HistoryItem {
  id: string;
  command: string;
  output: string[] | React.ReactNode;
  time: string;
}

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: "init-1",
      command: "whoami",
      output: [
        "Musa Maxwell (@musaCODEzz) — Full-Stack Software Engineer",
        "Based in Nairobi, Kenya (+254)",
        "Core Philosophy: 'Talk less — Show me the code.'",
        "Systems: High-scale REST APIs, anti-fraud automotive platforms, developer platforms."
      ],
      time: "21:42:01"
    },
    {
      id: "init-2",
      command: "projects --featured",
      output: [
        "🛡️ AutoLog KE       -> Digital vehicle passport & anti-rollback odometer engine",
        "⚡ StackPulse       -> Developer publishing engine with OpenAPI Swagger UI (Live: blog-api-frontend-neon.vercel.app)",
        "🌐 Nexa Kenya       -> High-performance web platform (Live: nexa-kenya.vercel.app)",
        "💳 M-Pesa Gateway   -> Safaricom Daraja STK Push & settlement callback worker"
      ],
      time: "21:42:02"
    }
  ]);

  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const now = new Date().toLocaleTimeString();

    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let outputResult: string[] = [];

    switch (trimmed) {
      case "help":
        outputResult = [
          "Available terminal commands:",
          "  whoami               -> Engineer profile and focus areas",
          "  projects             -> List all repositories and hosted systems",
          "  projects --featured  -> List top featured platforms",
          "  tech-stack           -> Breakdown of languages, backend, databases, DevOps",
          "  autolog              -> Deep dive into AutoLog KE anti-clocking engine",
          "  stackpulse           -> Details on StackPulse + live endpoints",
          "  contact              -> Display email, LinkedIn, and Twitter links",
          "  curl stats           -> Live repository and code statistics",
          "  clear                -> Reset the console screen"
        ];
        break;

      case "whoami":
        outputResult = [
          "Name: Musa Maxwell (@musaCODEzz)",
          "Role: Full-Stack Software Engineer & Distributed Systems Builder",
          "Location: Nairobi, Kenya",
          "Status: Open to High-Impact Opportunities & Engineering Contracting",
          "Bio: Building bulletproof backends, anti-fraud systems, and reactive interfaces."
        ];
        break;

      case "projects":
      case "projects --featured":
        outputResult = [
          "=== FEATURED PRODUCTION SYSTEMS ===",
          "[1] AutoLog KE",
          "    Category: Automotive FinTech / Anti-Rollback Odometer Engine",
          "    Repo: https://github.com/musaCODEzz/autolog-backend",
          "",
          "[2] StackPulse (BLOG-API)",
          "    Category: Developer Publication Engine & OpenAPI Docs",
          "    Live Demo: https://blog-api-frontend-neon.vercel.app",
          "    Swagger UI: https://blog-api-backend-mh0s.onrender.com/api-docs",
          "",
          "[3] Nexa Kenya",
          "    Category: Modern Web App & Business Services Hub",
          "    Live Demo: https://nexa-kenya.vercel.app",
          "",
          "[4] M-Pesa DARAJA API Gateway",
          "    Category: Safaricom STK Push & Callback Processing Microservice",
          "    Repo: https://github.com/musaCODEzz/MPESA-DARAJA-API",
          "",
          "[5] Shop API & Personal Finance Manager & Voting DApp",
          "    Explore all 60+ repos on https://github.com/musaCODEzz"
        ];
        break;

      case "autolog":
        outputResult = [
          "--- AUTOLOG KE: VEHICLE PASSPORT & VERIFICATION ENGINE ---",
          "Problem: Used car fraud in East Africa via odometer rollback and falsified records.",
          "Solution: Digital vehicle passport with mathematical rollback curves and verified spare parts RFQ.",
          "Stack: TypeScript, Express, MongoDB, Vitest, Docker.",
          "Features: Masked plates (KD* ***P), Kenyan plate normalization, E.164 phone formats."
        ];
        break;

      case "stackpulse":
        outputResult = [
          "--- STACKPULSE DEVELOPER PLATFORM ---",
          "Architecture: React + TypeScript on Vercel, Express + Swagger on Render.",
          "Security: Dual JWT auth, Google OAuth 2.0, Resend transactional emails.",
          "Live URL: https://blog-api-frontend-neon.vercel.app",
          "Swagger Docs: https://blog-api-backend-mh0s.onrender.com/api-docs"
        ];
        break;

      case "tech-stack":
      case "skills":
        outputResult = [
          "LANGUAGES:     TypeScript, JavaScript (ES6+), Python, SQL, Solidity",
          "BACKEND:       Node.js, Express.js, REST API Architecture, OpenAPI/Swagger, FastAPI",
          "DATABASES:     PostgreSQL, MongoDB, Redis, SQLite",
          "FRONTEND:      React, Next.js (App Router), Modern CSS3, Vite, HTML5",
          "DEVOPS:        Docker, GitHub Actions, AWS, Linux, Vercel, Render",
          "TESTING/SEC:   Vitest, Jest, Dual JWT, OAuth 2.0, Helmet, Rate Limiting"
        ];
        break;

      case "contact":
        outputResult = [
          "Email:    musamaxwell15@gmail.com",
          "GitHub:   https://github.com/musaCODEzz",
          "LinkedIn: https://www.linkedin.com/in/musaCODEzz",
          "Twitter:  https://twitter.com/musaCODEzz"
        ];
        break;

      case "curl stats":
      case "stats":
        outputResult = [
          "HTTP/1.1 200 OK (16ms)",
          "X-Powered-By: GitHub-API-Engine",
          "",
          "GitHub User: musaCODEzz",
          "Total Public Repos: 60+",
          "Primary Languages: TypeScript, JavaScript, Python",
          "Active Streak: Continuing live daily commits",
          "Status: All systems operational"
        ];
        break;

      default:
        outputResult = [
          `bash: command not found: ${trimmed}`,
          "Type 'help' to inspect available system commands."
        ];
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: cmd,
        output: outputResult,
        time: now
      }
    ]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim()) {
      executeCommand(inputVal);
    }
  };

  const sampleCommands = [
    "whoami",
    "projects --featured",
    "tech-stack",
    "autolog",
    "stackpulse",
    "contact",
    "curl stats"
  ];

  return (
    <section id="terminal" className="terminal-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive CLI</span>
          <h2 className="section-title">Developer Console</h2>
          <p className="section-desc">
            Directly probe my systems, architecture decisions, and codebase via this embedded shell.
          </p>
        </div>

        {/* Quick run chips */}
        <div className="chips-wrapper">
          <span className="chips-label">Quick Commands:</span>
          {sampleCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="chip-btn"
            >
              <Play size={10} className="text-emerald" />
              <span>{cmd}</span>
            </button>
          ))}
          <button onClick={() => executeCommand("clear")} className="chip-btn chip-clear">
            <RefreshCw size={10} />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window">
          {/* Window Chrome Header */}
          <div className="terminal-header">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title">
              <TerminalIcon size={14} className="text-emerald" />
              <span>musa@nairobi: ~/engineering-vault (zsh)</span>
            </div>
            <div className="header-meta">UTF-8</div>
          </div>

          {/* Terminal Screen Body */}
          <div className="terminal-body" ref={terminalBodyRef}>
            <div className="terminal-welcome">
              Welcome to Musa Maxwell&apos;s Engineering Shell (v2.6.4). <br />
              Type <span className="text-cyan font-bold">help</span> to view all commands.
            </div>

            {history.map((item) => (
              <div key={item.id} className="terminal-record">
                <div className="record-cmd-line">
                  <span className="cmd-prompt">musa@code:~$</span>
                  <span className="cmd-text">{item.command}</span>
                  <span className="cmd-time">{item.time}</span>
                </div>
                <div className="record-output">
                  {Array.isArray(item.output) ? (
                    item.output.map((line, i) => (
                      <div key={i} className="output-line">
                        {line}
                      </div>
                    ))
                  ) : (
                    <div>{item.output}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <form onSubmit={handleSubmit} className="terminal-input-form">
              <span className="cmd-prompt">musa@code:~$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. whoami, projects, help)..."
                className="terminal-input"
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="input-submit-btn" aria-label="Execute command">
                <CornerDownLeft size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .terminal-section {
          padding: 80px 0;
          position: relative;
        }

        .chips-wrapper {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 18px;
          justify-content: center;
        }

        .chips-label {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .chip-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .chip-btn:hover {
          background: rgba(16, 185, 129, 0.12);
          border-color: var(--border-emerald);
          color: #fff;
          transform: translateY(-1px);
        }

        .chip-clear:hover {
          background: rgba(239, 68, 68, 0.12);
          border-color: rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }

        .terminal-window {
          max-width: 950px;
          margin: 0 auto;
          background: #090c14;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(16, 185, 129, 0.08);
          overflow: hidden;
        }

        .terminal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 18px;
          background: #0d121f;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .window-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red {
          background: #ef4444;
        }
        .dot-yellow {
          background: #f59e0b;
        }
        .dot-green {
          background: #10b981;
        }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.825rem;
          color: var(--text-secondary);
        }

        .header-meta {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .terminal-body {
          padding: 24px;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          min-height: 380px;
          max-height: 480px;
          overflow-y: auto;
          color: #e2e8f0;
          line-height: 1.6;
        }

        .terminal-welcome {
          color: var(--text-muted);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
        }

        .terminal-record {
          margin-bottom: 18px;
        }

        .record-cmd-line {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .cmd-prompt {
          color: var(--accent-emerald-bright);
          font-weight: 600;
        }

        .cmd-text {
          color: #fff;
          font-weight: 500;
        }

        .cmd-time {
          margin-left: auto;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .record-output {
          padding-left: 12px;
          border-left: 2px solid rgba(16, 185, 129, 0.25);
          color: #94a3b8;
        }

        .output-line {
          word-break: break-word;
        }

        .terminal-input-form {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
        }

        .terminal-input {
          flex: 1;
          background: transparent;
          border: none;
          color: #f8fafc;
          font-family: var(--font-mono);
          font-size: 0.9rem;
          outline: none;
        }

        .terminal-input::placeholder {
          color: #475569;
        }

        .input-submit-btn {
          color: var(--text-muted);
          transition: color var(--transition-fast);
          padding: 4px;
        }

        .input-submit-btn:hover {
          color: var(--accent-emerald-bright);
        }

        .text-emerald {
          color: var(--accent-emerald-bright);
        }

        .text-cyan {
          color: var(--accent-cyan-bright);
        }

        .font-bold {
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .terminal-body {
            padding: 16px;
            font-size: 0.825rem;
            min-height: 320px;
          }
          .terminal-title {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}
