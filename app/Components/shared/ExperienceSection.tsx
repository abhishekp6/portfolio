import Link from 'next/link';
import { ExperienceEntry } from '../../types';
import { DownloadIcon } from '../icons';

interface ExperienceSectionProps {
  entries: ExperienceEntry[];
}

export function ExperienceSection({ entries }: ExperienceSectionProps) {
  return (
    <section className="section experience-band" id="experience">
      <div className="container">
        <div className="exp-grid">
          <div className="exp-intro">
            <h2>Experience</h2>
            <p>
              Five years of full-stack work. Currently at Nykaa building gamification,
              previously at Lumiq building insurance and fintech platforms.
            </p>
            <a href="#" className="resume-link">
              <DownloadIcon size={14} /> Resume (PDF)
            </a>
          </div>

          <ol className="exp-list">
            {entries.map((entry, i) => (
              <li key={i} className="exp-item">
                <span className="exp-rule" />
                <span className="exp-dot" style={{ background: entry.color }}>
                  {entry.initials}
                </span>
                <div className="exp-body">
                  <div className="exp-head">
                    <div>
                      <h3>{entry.role}</h3>
                      <span className="exp-co">
                        {entry.companyUrl ? (
                          <Link
                            href={entry.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{ borderBottom: 'none', color: 'var(--muted)' }}
                          >
                            {entry.company}
                          </Link>
                        ) : entry.company}
                        {' '}· {entry.location}
                      </span>
                    </div>
                    <span className="exp-date">{entry.period}</span>
                  </div>

                  <ul className="exp-bullets">
                    {entry.bullets.map((bullet, j) => (
                      <li key={j}>{bullet}</li>
                    ))}
                  </ul>

                  {entry.techStack && (
                    <div className="exp-tech">
                      {entry.techStack.map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
