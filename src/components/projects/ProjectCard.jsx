import { useTranslation } from 'react-i18next';
import { Tag } from '@/components/common/Tag';
import { localizedValue } from '@/lib/localized';

export function ProjectCard({ project, language: languageOverride }) {
  const { t, i18n } = useTranslation();
  const language = languageOverride || i18n.resolvedLanguage || i18n.language;
  const links = project.links ?? [];

  return (
    <article className="project-card">
      <p className="project-category">{localizedValue(project.category, language)}</p>
      <h3>{localizedValue(project.title, language)}</h3>
      <p className="muted">{localizedValue(project.description, language)}</p>

      <ul className="bullet-list">
        {localizedValue(project.highlights, language).map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="tag-group">
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>

      {(project.liveDemo || project.githubUrl || links.length > 0) && (
        <div className="project-links">
          {project.liveDemo && (
            <a
              className="button button-primary"
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver sitio en vivo"
            >
              {t('projectLinks.live')}
            </a>
          )}

          {project.githubUrl && (
            <a
              className="button button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver código en GitHub"
            >
              {t('projectLinks.code')}
            </a>
          )}

          {links.map((link) => (
            <a
              key={link.href}
              className={`button ${link.primary ? 'button-primary' : 'button-secondary'}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={localizedValue(link.label, language)}
            >
              {localizedValue(link.label, language)}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
