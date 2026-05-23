'use client';

import { useEffect, useState } from 'react';
import { GlobeIcon, MailIcon, ArrowRightIcon } from './icons';

const TERMINAL_LINES = [
  { kind: "prompt", text: "whoami" },
  { kind: "out",    text: "abhishek · software engineer" },
  { kind: "prompt", text: "cat stack.json | jq ." },
  { kind: "out",    text: "{" },
  { kind: "out",    text: '  "frontend":  ["TypeScript", "React", "Next.js"],' },
  { kind: "out",    text: '  "backend":   ["Node.js", "REST APIs"],' },
  { kind: "out",    text: '  "infra":     ["Docker", "AWS", "Kafka"]' },
  { kind: "out",    text: "}" },
  { kind: "prompt", text: "ls work/" },
  { kind: "out",    text: "jarvis/   dockerized-ollama/   react-performant-table/   learnest/" },
  { kind: "prompt", text: "" },
];

function HeroTerminal() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n >= TERMINAL_LINES.length) return;
    const id = setTimeout(() => setN(x => x + 1), n < 2 ? 350 : 230);
    return () => clearTimeout(id);
  }, [n]);

  return (
    <div className="terminal">
      <div className="chrome">
        <div className="lights"><span /><span /><span /></div>
        <span className="filename">
          <span className="dot" />~/work - zsh
        </span>
        <span className="filename-aux">80×24</span>
      </div>
      <div className="body">
        {TERMINAL_LINES.slice(0, n).map((line, i) => (
          <div key={i} className={`line ${line.kind}`}>
            {line.kind === "prompt" ? (
              <>
                <span className="ps">abhishek@dev</span>
                <span className="ps-sep">~/work</span>
                <span className="ps-tip">$</span>
                <span>{line.text}</span>
                {i === n - 1 && line.text === "" && <span className="cursor" />}
              </>
            ) : (
              <span className="out">{line.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <section className="section hero-section">
      <div className="container">
        <div className="hero hero-grid">
          <div>
            {/* <div className="status-chip">
              <span className="status-dot" />
              <span>Open to new opportunities</span>
            </div> */}

            <h1>Full-stack engineer, building for the web.</h1>

            <p className="sub">
              Hi, I&apos;m Abhishek, a software engineer from India with five years shipping
              production systems in TypeScript, React, and Node.js. Currently building gamification at Nykaa.
            </p>

            <div className="actions">
              <a className="btn btn-primary" href="#work">
                See my work <ArrowRightIcon size={16} />
              </a>
              <a
                className="btn btn-secondary"
                href="https://www.linkedin.com/in/abhishekp6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="meta-row">
              <span className="meta-item">
                <GlobeIcon size={14} /> Gurugram, India · UTC+5:30
              </span>
              <span className="meta-divider">·</span>
              <span className="meta-item">
                <MailIcon size={14} />
                <a
                  href="mailto:abhishek.cse.edu@gmail.com"
                  style={{ borderBottom: 'none', color: 'var(--muted)' }}
                >
                  abhishek.cse.edu@gmail.com
                </a>
              </span>
            </div>
          </div>

          <div className="hero-artifact">
            <HeroTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
