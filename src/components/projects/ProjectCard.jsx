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

      {project.liveDemo && (
        <div className="project-links">
          <a 
            className="button button-primary" 
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver sitio en vivo"
          >
            Ver Sitio
          </a>
        </div>
      )}
    </article>
  );
}

