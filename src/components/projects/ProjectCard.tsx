import { useTranslation } from 'react-i18next';
import { Tag } from '@/components/common/Tag';
import { projectTranslations } from '@/data/projectTranslations';
import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  language?: string;
}

type ProjectLinkIconName = 'app-store' | 'play-store' | 'demo' | 'site' | 'code' | 'external';

function getProjectLinkIcon(label: string, href: string): ProjectLinkIconName {
  const normalizedLabel = label.toLowerCase();
  const normalizedHref = href.toLowerCase();

  if (normalizedLabel.includes('app store') || normalizedHref.includes('apps.apple.com')) {
    return 'app-store';
  }

  if (normalizedLabel.includes('google play') || normalizedHref.includes('play.google.com')) {
    return 'play-store';
  }

  return 'external';
}

function getLiveDemoIcon(label: string, href: string): ProjectLinkIconName {
  const normalizedLabel = label.toLowerCase();
  const normalizedHref = href.toLowerCase();

  if (
    normalizedLabel.includes('demo') ||
    normalizedHref.includes('youtube.com') ||
    normalizedHref.includes('youtu.be')
  ) {
    return 'demo';
  }

  return 'site';
}

function ProjectLinkIcon({ name }: { name: ProjectLinkIconName }) {
  if (name === 'app-store') {
    return <img src={publicAsset('app-store-mark.svg')} alt="" aria-hidden="true" />;
  }

  if (name === 'play-store') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#ffffff" />
        <path d="M7.1 5.3c-.4.2-.7.6-.7 1.2v11c0 .6.3 1 .7 1.2l6-6.7-6-6.7Z" fill="#3bccff" />
        <path d="m13.9 11.1 2.1-2.4-7.6-4.2c-.4-.2-.8-.1-1.1.1l6.6 6.5Z" fill="#00d87f" />
        <path d="m13.9 12.9-6.6 6.5c.3.2.8.3 1.1.1l7.6-4.2-2.1-2.4Z" fill="#ff3d48" />
        <path d="m16.7 9.1 2.2 1.2c1 .5 1 1.9 0 2.4l-2.2 1.2-2.5-1.9 2.5-2.9Z" fill="#ffcd2e" />
      </svg>
    );
  }

  if (name === 'demo') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.4" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="m10.5 8.8 5.1 3.2-5.1 3.2V8.8Z" />
      </svg>
    );
  }

  if (name === 'site') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4.7 9h14.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path d="M10.2 14h4.9m0 0-2-2m2 2-2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  if (name === 'code') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M4.7 9h14.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path d="m10 13-2 2 2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="m14 13 2 2-2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 7h8.6v8.6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
      <path d="m16.2 7.4-9 9" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  );
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
              className={`button button-primary ${getLiveDemoIcon(liveDemoLabel, project.liveDemo) === 'site' ? 'button-site' : 'button-demo'}`}
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              title={liveDemoLabel}
            >
              <span className="button-icon" aria-hidden="true">
                <ProjectLinkIcon name={getLiveDemoIcon(liveDemoLabel, project.liveDemo)} />
              </span>
              <span>{liveDemoLabel}</span>
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
              <span className="button-icon" aria-hidden="true">
                <ProjectLinkIcon name="code" />
              </span>
              <span>{t('projectLinks.code')}</span>
            </a>
          )}

          {links.map((link) => {
            const label = localizedValue(link.label, language);

            return (
              <a
                key={link.href}
                className={`button ${link.primary ? 'button-primary' : 'button-secondary'}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
              >
                <span className="button-icon" aria-hidden="true">
                  <ProjectLinkIcon name={getProjectLinkIcon(label, link.href)} />
                </span>
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      )}
    </article>
  );
}
