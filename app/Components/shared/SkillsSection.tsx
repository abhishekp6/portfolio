import { AiTool, SkillGroup } from '../../types';

interface SkillsSectionProps {
  groups: SkillGroup[];
  aiTools?: AiTool[];
  tokenUsage?: string;
}

export function SkillsSection({ groups, aiTools, tokenUsage }: SkillsSectionProps) {
  return (
    <section className="section skills-band" id="skills">
      <div className="container">
        <div className="skills-head">
          <h2>Skills</h2>
          <p>The tools I reach for, organised by where they live in the stack.</p>
        </div>
        <div className="skills-stack">
          {groups.map(group => (
            <div key={group.label} className="skill-row">
              <span className="skill-label">{group.label}</span>
              <div className="skill-pills">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}

          {aiTools && (
            <div className="skill-row ai-row">
              <span className="skill-label">AI Workflow</span>
              <div className="ai-tools">
                <div className="skill-pills">
                  {aiTools.map(tool => (
                    <span key={tool.name} className={`ai-pill ${tool.active ? 'ai-pill-active' : 'ai-pill-inactive'}`}>
                      <span className="ai-dot" />
                      {tool.name}
                    </span>
                  ))}
                </div>
                {tokenUsage && (
                  <span className="ai-stat">{tokenUsage}</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
