import { Tag } from '@/components/common/Tag';
import type { SkillGroup } from '@/types';

export function SkillGroupCard({ title, description, items }: SkillGroup) {
  return (
    <article className="skill-card">
      <h3>{title}</h3>
      <p className="muted">{description}</p>
      <div className="tag-group">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
