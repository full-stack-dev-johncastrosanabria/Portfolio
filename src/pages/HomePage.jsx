import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';
import { profileStats, skillGroups } from '@/data/skills';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SkillGroupCard } from '@/components/home/SkillGroupCard';
import { StatCard } from '@/components/home/StatCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';

export function HomePage() {
  useDocumentTitle('Portafolio | Full Stack .NET Developer');
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-eyebrow">{t('hero.eyebrow')}</p>
            <h1>{siteConfig.author}</h1>
            <p className="hero-role">{localizedValue(siteConfig.roleLocalized, language)}</p>
            <p className="hero-copy">{localizedValue(siteConfig.headlineLocalized, language)}</p>

            <div className="hero-actions">
              <a className="button" href="#proyectos">
                {localizedValue(siteConfig.ctaPrimaryLocalized, language)}
              </a>
              <Link className="button button-secondary" to="/blog">
                {localizedValue(siteConfig.ctaSecondaryLocalized, language)}
              </Link>
            </div>
          </div>

          <aside className="hero-card hero-profile-card">
            <div className="hero-profile-media">
              <img src={publicAsset('profile-john.png')} alt="John Castro en oficina" />
            </div>

            <div className="hero-profile-copy">
              <p className="hero-card-label">{t('hero.profile')}</p>
              <h2>{t('hero.profileTitle')}</h2>
              <p className="hero-profile-text">{t('hero.profileText')}</p>

              <ul className="bullet-list hero-bullet-list">
                {t('hero.bullets', { returnObjects: true }).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-tight-top">
        <div className="container stats-grid">
          {profileStats.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} detail={item.detail} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={t('sections.stackEyebrow')}
            title={t('sections.stackTitle')}
            description={t('sections.stackDescription')}
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SkillGroupCard key={group.title} {...group} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={t('sections.experienceEyebrow')}
            title={t('sections.experienceTitle')}
            description={t('sections.experienceDescription')}
          />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="container">
          <SectionTitle
            eyebrow={t('sections.projectsEyebrow')}
            title={t('sections.projectsTitle')}
            description={t('sections.projectsDescription')}
          />

          <div className="card-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} language={language} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container cta-panel">
          <div>
            <p className="section-eyebrow">{t('sections.blogEyebrow')}</p>
            <h2>{t('sections.blogTitle')}</h2>
            <p className="section-description">{t('sections.blogDescription')}</p>
          </div>

          <Link className="button" to="/blog">
            {t('sections.blogButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
