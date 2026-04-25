import { Tag } from '@/components/common/Tag';

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>

      <ul className="bullet-list">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="tag-group">
        {project.technologies.map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>

      {(project.liveDemo || project.githubUrl) && (
        <div className="project-links">
          {project.liveDemo && (
            <a
              className="button button-primary"
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              title="Ver sitio en vivo"
            >
              Ver Sitio
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
              Ver Código
            </a>
          )}
        </div>
      )}
    </article>
  );
}
