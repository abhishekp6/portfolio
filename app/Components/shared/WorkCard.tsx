'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WorkProject } from '../../types';
import { ArrowRightIcon, ChevronDownIcon, ArrowUpRightIcon } from '../icons';

/* ── SVG thumbnails ─────────────────────────────────────── */
function ThumbJarvis() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="292" height="152" rx="8" fill="#fff" stroke="#e5e7eb"/>
      <rect x="28" y="28" width="100" height="8" rx="2" fill="#111"/>
      <rect x="28" y="42" width="64" height="5" rx="1.5" fill="#9ca3af"/>
      {/* Quiz cards */}
      <rect x="28" y="60" width="124" height="64" rx="8" fill="#f5f5f5"/>
      <rect x="40" y="72" width="60" height="5" rx="1.5" fill="#6b7280"/>
      <rect x="40" y="83" width="88" height="8" rx="2" fill="#111"/>
      <rect x="40" y="97" width="56" height="16" rx="4" fill="#111"/>
      <rect x="104" y="97" width="32" height="16" rx="4" fill="#e5e7eb"/>
      <rect x="168" y="60" width="124" height="64" rx="8" fill="#101010"/>
      <rect x="180" y="72" width="44" height="5" rx="1.5" fill="#a1a1aa"/>
      <rect x="180" y="83" width="80" height="8" rx="2" fill="#fff"/>
      <rect x="180" y="97" width="20" height="4" rx="1" fill="#34d399"/>
      <rect x="206" y="97" width="20" height="4" rx="1" fill="#3a3a3a"/>
      <rect x="232" y="97" width="20" height="4" rx="1" fill="#3a3a3a"/>
      {/* Progress bar */}
      <rect x="28" y="136" width="264" height="6" rx="3" fill="#f3f4f6"/>
      <rect x="28" y="136" width="132" height="6" rx="3" fill="#111"/>
      <rect x="148" y="148" width="24" height="8" rx="4" fill="#f5f5f5"/>
      <rect x="284" y="134" width="8" height="8" rx="2" fill="#e5e7eb"/>
    </svg>
  );
}

function ThumbDockerOllama() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="292" height="152" rx="8" fill="#101010"/>
      <circle cx="28" cy="28" r="3" fill="#3a3a3a"/>
      <circle cx="38" cy="28" r="3" fill="#3a3a3a"/>
      <circle cx="48" cy="28" r="3" fill="#3a3a3a"/>
      <text x="160" y="32" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="#6b7280">ollama-docker - zsh</text>
      <text x="28" y="60" fontFamily="monospace" fontSize="11" fill="#34d399">$</text>
      <text x="42" y="60" fontFamily="monospace" fontSize="11" fill="#fff">docker compose up</text>
      <text x="28" y="78" fontFamily="monospace" fontSize="10" fill="#a1a1aa">✓ network created</text>
      <text x="28" y="92" fontFamily="monospace" fontSize="10" fill="#a1a1aa">✓ volume: ollama_data mounted</text>
      <text x="28" y="106" fontFamily="monospace" fontSize="10" fill="#a1a1aa">✓ ollama running on :11434</text>
      <text x="28" y="128" fontFamily="monospace" fontSize="11" fill="#34d399">$</text>
      <text x="42" y="128" fontFamily="monospace" fontSize="11" fill="#fff">curl /api/generate</text>
      <text x="28" y="146" fontFamily="monospace" fontSize="10" fill="#34d399">  200 OK · model: llama3 · 312ms</text>
      <text x="28" y="160" fontFamily="monospace" fontSize="11" fill="#34d399">$</text>
      <rect x="38" y="152" width="6" height="10" fill="#fff"/>
    </svg>
  );
}

function ThumbPerfTable() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="292" height="152" rx="8" fill="#fff" stroke="#e5e7eb"/>
      {/* Toolbar */}
      <rect x="28" y="28" width="140" height="20" rx="4" fill="#f5f5f5" stroke="#e5e7eb" strokeWidth="0.5"/>
      <rect x="36" y="34" width="8" height="8" rx="1" fill="#9ca3af"/>
      <rect x="50" y="36" width="60" height="4" rx="1" fill="#d1d5db"/>
      <rect x="230" y="28" width="60" height="20" rx="4" fill="#111"/>
      <rect x="242" y="34" width="36" height="8" rx="2" fill="#fff" opacity="0.3"/>
      {/* Table header */}
      <rect x="28" y="58" width="264" height="18" rx="0" fill="#f9fafb"/>
      <rect x="28" y="58" width="264" height="1" fill="#e5e7eb"/>
      <rect x="28" y="75" width="264" height="1" fill="#e5e7eb"/>
      {[36,48,80,160,220].map((x, i) => <rect key={i} x={x} y={64} width={[44,24,60,44,36][i]} height="4" rx="1" fill="#9ca3af"/>)}
      {/* Rows */}
      {[0,1,2,3,4].map(row => (
        <g key={row}>
          <rect x="28" y={76 + row * 16} width="264" height="16" fill={row % 2 === 0 ? "#fff" : "#fafafa"}/>
          <rect x="28" y={92 + row * 16} width="264" height="1" fill="#f3f4f6"/>
          {[36,48,80,160,220].map((x, i) => <rect key={i} x={x} y={80 + row * 16} width={[36,20,48,36,28][i]} height="4" rx="1" fill={row === 2 && i === 0 ? "#111" : "#d1d5db"}/>)}
        </g>
      ))}
    </svg>
  );
}

function ThumbLearnest() {
  return (
    <svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="14" y="14" width="292" height="152" rx="8" fill="#fff" stroke="#e5e7eb"/>
      {/* Sidebar */}
      <rect x="14" y="14" width="80" height="152" rx="8" fill="#f5f5f5"/>
      <rect x="24" y="30" width="52" height="6" rx="2" fill="#111"/>
      <rect x="24" y="48" width="56" height="7" rx="2" fill="#111"/>
      <rect x="24" y="62" width="44" height="4" rx="1.5" fill="#9ca3af"/>
      <rect x="24" y="74" width="48" height="4" rx="1.5" fill="#9ca3af"/>
      <rect x="24" y="86" width="40" height="4" rx="1.5" fill="#9ca3af"/>
      <rect x="24" y="100" width="52" height="4" rx="1.5" fill="#9ca3af"/>
      {/* Video player */}
      <rect x="106" y="28" width="184" height="96" rx="6" fill="#101010"/>
      <polygon points="182,68 202,76 182,84" fill="#fff" opacity="0.85"/>
      {/* Course info */}
      <rect x="106" y="134" width="120" height="6" rx="2" fill="#111"/>
      <rect x="106" y="146" width="80" height="4" rx="1.5" fill="#9ca3af"/>
      <rect x="240" y="132" width="50" height="20" rx="4" fill="#111"/>
    </svg>
  );
}

const THUMBS: Record<string, () => React.ReactElement> = {
  "Jarvis": ThumbJarvis,
  "Dockerized Ollama": ThumbDockerOllama,
  "React Performant Table": ThumbPerfTable,
  "Learnest": ThumbLearnest,
};

interface WorkCardProps {
  project: WorkProject;
}

export function WorkCard({ project }: WorkCardProps) {
  const [open, setOpen] = useState(false);
  const Thumb = THUMBS[project.title];

  return (
    <div
      className={`work-card ${open ? 'is-open' : ''}`}
      onClick={() => setOpen(o => !o)}
    >
      <div className="thumb">
        {Thumb ? <Thumb /> : <div style={{ width: '100%', height: '100%', background: 'var(--surface-card)' }} />}
      </div>

      <div className="body">
        <div className="row1">
          <div>
            <h3>{project.title}</h3>
            <span className="role">{project.role}</span>
          </div>
          <span className="year">{project.year}</span>
        </div>

        <p>{project.body}</p>

        <div className="impact" aria-hidden={!open}>
          <span className="impact-label">Impact</span>
          <span className="impact-body">{project.impact}</span>
        </div>

        <div className="row-bottom">
          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {project.links?.map(link => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--font-mono)', borderBottom: 'none', display: 'inline-flex', alignItems: 'center', gap: 3 }}
              >
                {link.label} <ArrowUpRightIcon size={11} />
              </a>
            ))}
            <span className="expand">
              {open ? 'Hide' : 'More'}
              {open ? <ChevronDownIcon size={14} /> : <ArrowRightIcon size={14} />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
