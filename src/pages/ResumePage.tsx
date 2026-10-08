import { useTranslation } from 'react-i18next';
import { professionalProfile as profile } from '@/data/professionalProfile';
import { siteConfig } from '@/config/site';
import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import '@/styles/resume.css';

export function ResumePage() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage === 'en' ? 'en' : 'es';
  const en = language === 'en';
  const linkLabels: Record<string, string> = { portfolio: en ? 'Portfolio' : 'Portafolio', linkedin: 'LinkedIn', github: 'GitHub', x: 'X' };
  useDocumentTitle(en ? 'Professional CV' : 'CV profesional');

  return (
    <div className="container resume-page">
      <div className="resume-toolbar">
        <p className="section-eyebrow">{en ? 'Professional profile' : 'Perfil profesional'}</p>
        <a className="button" href={publicAsset(siteConfig.resumeDownloads[language])} download>
          {en ? 'Download PDF' : 'Descargar PDF'}
        </a>
      </div>
      <article className="resume-document">
        <header className="resume-heading">
          <h1>{profile.name}</h1>
          <p className="resume-title">{localizedValue(profile.title, language)}</p>
          <p>{localizedValue(profile.location, language)} · <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <div className="resume-links">
            {Object.entries(profile.links).map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{linkLabels[label]}</a>)}
          </div>
        </header>
        <section>
          <h2>{en ? 'Professional Summary' : 'Resumen profesional'}</h2>
          <p>{localizedValue(profile.summary, language)}</p>
        </section>
        <section>
          <h2>{en ? 'Technical Skills' : 'Competencias técnicas'}</h2>
          <dl className="resume-skills">
            {profile.skills.map((skill) => <div key={skill.label.en}><dt>{localizedValue(skill.label, language)}</dt><dd>{skill.items}</dd></div>)}
          </dl>
        </section>
        <section>
          <h2>{en ? 'Professional Experience' : 'Experiencia profesional'}</h2>
          {profile.experience.map((item) => (
            <div className="resume-entry" key={item.startDate}>
              <div className="resume-entry-heading">
                <h3>{localizedValue(item.role, language)}</h3>
                <span>{localizedValue(item.period, language)}</span>
              </div>
              <p className="resume-company">{item.company}</p>
              <ul>{localizedValue(item.achievements, language).map((text) => <li key={text}>{text}</li>)}</ul>
            </div>
          ))}
        </section>
        <section>
          <h2>{en ? 'Selected Projects' : 'Proyectos destacados'}</h2>
          {profile.projects.map((project) => <div className="resume-entry" key={project.name}><h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a></h3><p>{localizedValue(project.description, language)}</p></div>)}
        </section>
        <section>
          <h2>{en ? 'Education' : 'Educación'}</h2>
          {profile.education.map((item) => <div className="resume-entry" key={item.institution}><h3>{localizedValue(item.degree, language)}</h3><p>{item.institution} · {item.period}</p></div>)}
        </section>
        <section><h2>{en ? 'Certifications' : 'Certificaciones'}</h2><p>{localizedValue(profile.credentials, language)}</p></section>
        <section><h2>{en ? 'Languages' : 'Idiomas'}</h2><p>{localizedValue(profile.languages, language)}</p></section>
      </article>
    </div>
  );
}
