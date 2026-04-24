import { Link } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';
import { profileStats, skillGroups } from '@/data/skills';
import { SectionTitle } from '@/components/common/SectionTitle';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { SkillGroupCard } from '@/components/home/SkillGroupCard';
import { StatCard } from '@/components/home/StatCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function HomePage() {
  useDocumentTitle('Portafolio | Full Stack .NET Developer');

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-eyebrow">Portafolio Full Stack .NET</p>
            <h1>{siteConfig.author}</h1>
            <p className="hero-role">{siteConfig.role}</p>
            <p className="hero-copy">{siteConfig.headline}</p>

            <div className="hero-actions">
              <a className="button" href="#proyectos">
                {siteConfig.ctaPrimary}
              </a>
              <Link className="button button-secondary" to="/blog">
                {siteConfig.ctaSecondary}
              </Link>
            </div>
          </div>

          <aside className="hero-card hero-profile-card">
            <div className="hero-profile-media">
              <img src="/profile-john.png" alt="John Castro en oficina" />
            </div>

            <div className="hero-profile-copy">
              <p className="hero-card-label">Perfil</p>
              <h2>Backend sólido, frontend moderno y delivery continuo</h2>
              <p className="hero-profile-text">
                Experiencia construyendo soluciones empresariales con C#, ASP.NET Core, React,
                Vue, SQL Server y Azure DevOps, con enfoque en arquitectura limpia,
                mantenibilidad e integración.
              </p>

              <ul className="bullet-list hero-bullet-list">
                <li>APIs REST y seguridad con JWT</li>
                <li>Frontend con React, Vue y Blazor</li>
                <li>SQL Server, Oracle e integraciones</li>
                <li>CI/CD y despliegues con Azure DevOps</li>
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
            eyebrow="Stack principal"
            title="Tecnologías y fortalezas con las que construyo"
            description="Mi perfil está orientado a desarrollo de software empresarial, desde la capa backend hasta la interfaz y la entrega continua."
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
            eyebrow="Experiencia"
            title="Trayectoria en orden cronológico"
            description="El recorrido muestra cómo evolucionó mi perfil desde desarrollo y prácticas técnicas hasta software engineering full stack y visión de arquitectura aplicada al negocio."
          />
          <ExperienceTimeline />
        </div>
      </section>

      <section className="section" id="proyectos">
        <div className="container">
          <SectionTitle
            eyebrow="Proyectos"
            title="Trabajo representativo en backend, full stack y DevOps"
            description="Casos que refuerzan mi perfil como desarrollador .NET con visión integral de arquitectura, frontend, datos y delivery."
          />

          <div className="card-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-accent">
        <div className="container cta-panel">
          <div>
            <p className="section-eyebrow">Blog técnico</p>
            <h2>Notas sobre .NET, arquitectura y desarrollo full stack</h2>
            <p className="section-description">
              Mantén el blog como soporte a tu marca técnica: artículos breves sobre APIs, Clean Architecture, React y DevOps ayudan a reforzar tu perfil frente a reclutadores.
            </p>
          </div>

          <Link className="button" to="/blog">
            Ir al blog
          </Link>
        </div>
      </section>
    </>
  );
}
