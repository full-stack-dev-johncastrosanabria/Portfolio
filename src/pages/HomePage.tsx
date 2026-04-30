import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';
import { certifications } from '@/data/certifications';
import { projects } from '@/data/projects';
import { profileStats, skillGroups } from '@/data/skills';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { CertificationCard } from '@/components/home/CertificationCard';
import { CertificateModal } from '@/components/home/CertificateModal';
import { HeroIcon } from '@/components/home/HeroIcon';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SkillGroupCard } from '@/components/home/SkillGroupCard';
import { StatCard } from '@/components/home/StatCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';

export function HomePage() {
  useDocumentTitle('Portafolio | Ingeniero de software full-stack');
  const { t, i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const heroBullets = t('hero.bullets', { returnObjects: true }) as string[];

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
              <a className="button hero-button hero-button-primary" href="#proyectos">
                <span className="hero-button-icon" aria-hidden="true">
                  <HeroIcon name="folder" />
                </span>
                <span>{localizedValue(siteConfig.ctaPrimaryLocalized, language)}</span>
              </a>
              <Link className="button hero-button hero-button-secondary" to="/blog">
                <span className="hero-button-icon" aria-hidden="true">
                  <HeroIcon name="document" />
                </span>
                <span>{localizedValue(siteConfig.ctaSecondaryLocalized, language)}</span>
              </Link>
              <details className="resume-download">
                <summary className="button hero-button hero-button-secondary">
                  <span className="hero-button-icon" aria-hidden="true">
                    <HeroIcon name="download" />
                  </span>
                  <span>{t('hero.resumeButton')}</span>
                </summary>
                <div className="resume-options" aria-label={t('hero.resumeQuestion')}>
                  <span>{t('hero.resumeQuestion')}</span>
                  <a
                    href={publicAsset(siteConfig.resumeDownloads.es)}
                    download="John_Castro_Sanabria_CV_ES.pdf"
                  >
                    {t('hero.resumeSpanish')}
                  </a>
                  <a
                    href={publicAsset(siteConfig.resumeDownloads.en)}
                    download="John_Castro_Sanabria_CV_EN.pdf"
                  >
                    {t('hero.resumeEnglish')}
                  </a>
                </div>
              </details>
            </div>

            <div className="hero-social-actions" aria-label="Canales profesionales">
              <a
                className="button button-youtube"
                href={siteConfig.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon button-icon-youtube" aria-hidden="true">
                  <HeroIcon name="youtube" />
                </span>
                <span className="button-label">{localizedValue(siteConfig.ctaYouTubeLocalized, language)}</span>
              </a>
              <a
                className="button button-github"
                href={siteConfig.githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="button-icon button-icon-github" aria-hidden="true">
                  <HeroIcon name="github" />
                </span>
                <span className="button-label">{localizedValue(siteConfig.ctaGitHubLocalized, language)}</span>
              </a>
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
                {heroBullets.map((item) => (
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
            <StatCard
              key={localizedValue(item.label, 'es')}
              value={item.value}
              label={item.label}
              detail={item.detail}
              language={language}
            />
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
              <SkillGroupCard key={localizedValue(group.title, 'es')} {...group} language={language} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow={t('sections.certificationsEyebrow')}
            title={t('sections.certificationsTitle')}
            description={t('sections.certificationsDescription')}
          />

          <div className="certifications-grid">
            {certifications.map((certification) => (
              <CertificationCard
                key={certification.id}
                certification={certification}
                language={language}
              />
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
      <CertificateModal />
    </>
  );
}
