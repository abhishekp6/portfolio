'use client';

import {
  WORK_PROJECTS,
  EXPERIENCE,
  EDUCATION,
  SKILL_GROUPS,
  AI_TOOLS,
  AI_TOKEN_USAGE,
  ARTICLES,
  CERTIFICATIONS,
} from '../constants';
import { WorkCard } from './shared/WorkCard';
import { ExperienceSection } from './shared/ExperienceSection';
import { EducationSection } from './shared/EducationSection';
import { SkillsSection } from './shared/SkillsSection';
import { WritingSection } from './shared/WritingSection';
function CertificationsSection() {
  return (
    <section className="section certs-band" id="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <p className="head-sub" style={{ marginTop: 8 }}>
          AWS and Google Cloud certifications.
        </p>
        <div className="certs-grid">
          {CERTIFICATIONS.map(cert => (
            <div key={cert.src} className="cert-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cert.src} alt={cert.alt} />
              <span className="cert-label">{cert.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Body = () => {
  return (
    <>
      {/* ── Selected Work ── */}
      <section className="section work-band" id="work">
        <div className="container">
          <div className="work-head">
            <div>
              <h2>Selected work</h2>
              <p className="head-sub">Projects I&apos;ve built, personal and open source.</p>
            </div>
            <span className="meta">2022 - present</span>
          </div>
          <div className="work-grid">
            {WORK_PROJECTS.map(project => (
              <WorkCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ExperienceSection entries={EXPERIENCE} />
      <EducationSection entries={EDUCATION} />
      <SkillsSection groups={SKILL_GROUPS} aiTools={AI_TOOLS} tokenUsage={AI_TOKEN_USAGE} />
      <WritingSection articles={ARTICLES} />
      <CertificationsSection />
    </>
  );
};

export default Body;
