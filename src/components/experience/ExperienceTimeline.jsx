import { experience } from '@/data/experience';
import { Tag } from '@/components/common/Tag';

const chronologicalExperience = [...experience].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
);

export function ExperienceTimeline() {
  return (
    <div className="timeline">
      {chronologicalExperience.map((item) => (
        <article className="timeline-card" key={`${item.company}-${item.role}`}>
          <div className="timeline-meta">
            <p className="timeline-period">{item.period}</p>
          </div>

          <div className="timeline-body">
            <div className="timeline-title">
              <div className="timeline-dot" />
              <h3>{item.role}</h3>
            </div>
            <p className="timeline-company">{item.company}</p>
            <p className="muted">{item.summary}</p>

            <ul className="bullet-list">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>

            <div className="tag-group">
              {item.stack.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
