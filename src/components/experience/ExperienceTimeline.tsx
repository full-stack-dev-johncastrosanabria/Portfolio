import { useTranslation } from 'react-i18next';
import { experience } from '@/data/experience';
import { Tag } from '@/components/common/Tag';
import { localizedValue } from '@/lib/localized';

const chronologicalExperience = [...experience].sort(
  (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
);

export function ExperienceTimeline() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  return (
    <div className="timeline">
      {chronologicalExperience.map((item) => (
        <article className="timeline-card" key={`${item.company}-${localizedValue(item.role, 'es')}`}>
          <div className="timeline-meta">
            <p className="timeline-period">{localizedValue(item.period, language)}</p>
          </div>

          <div className="timeline-body">
            <div className="timeline-title">
              <div className="timeline-dot" />
              <h3>{localizedValue(item.role, language)}</h3>
            </div>
            <p className="timeline-company">{item.company}</p>
            <p className="muted">{localizedValue(item.summary, language)}</p>

            <ul className="bullet-list">
              {localizedValue(item.achievements, language).map((achievement) => (
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
