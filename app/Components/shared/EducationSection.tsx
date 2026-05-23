import { EducationEntry } from '../../types';

interface EducationSectionProps {
  entries: EducationEntry[];
}

export function EducationSection({ entries }: EducationSectionProps) {
  return (
    <section className="section education-band" id="education">
      <div className="container">
        <div className="edu-grid">
          <div className="edu-intro">
            <h2>Education</h2>
            <p>Computer science background, with a focus on systems and problem-solving.</p>
          </div>
          <ol className="edu-list">
            {entries.map((entry, i) => (
              <li key={i} className="edu-item">
                <span className="edu-dot" style={{ background: entry.color }}>
                  {entry.initials}
                </span>
                <div className="edu-body">
                  <div className="edu-head">
                    <div>
                      <h3>{entry.school}</h3>
                      <span className="edu-degree">{entry.degree}</span>
                    </div>
                    <div className="edu-meta">
                      <span className="edu-date">{entry.period}</span>
                      <span className="edu-loc">{entry.location}</span>
                    </div>
                  </div>
                  <p className="edu-notes">{entry.notes}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
