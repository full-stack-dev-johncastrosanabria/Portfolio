import { useTranslation } from 'react-i18next';
import { Tag } from '@/components/common/Tag';
import { projectTranslations } from '@/data/projectTranslations';
import { localizedValue } from '@/lib/localized';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  language?: string;
}

export function ProjectCard({ project, language: languageOverride }: ProjectCardProps) {
  const { t, i18n } = useTranslation();
  const language = languageOverride || i18n.resolvedLanguage || i18n.language;
  const links = project.links ?? [];
  const translation = language === 'en' ? projectTranslations[project.id] : undefined;
  const title = translation?.title ?? project.title;
  const category = translation?.category ?? project.category;
  const description = translation?.description ?? project.description;
  const highlights = translation?.highlights ?? project.highlights;
  const liveDemoLabel = project.liveDemoLabel
    ? localizedValue(project.liveDemoLabel, language)
    : t('projectLinks.live');

  return (
    <article className="project-card">
      <p className="project-category">{localizedValue(category, language)}</p>
      <h3>{localizedValue(title, language)}</h3>
      <p className="muted">{localizedValue(description, language)}</p>

      <ul className="bullet-list">
        {localizedValue(highlights, language).map((highlight) => (
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
              title={liveDemoLabel}
            >
              {liveDemoLabel}
            </a>
          )}

          {project.githubUrl && (
            <a
              className="button button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t('projectLinks.code')}
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
