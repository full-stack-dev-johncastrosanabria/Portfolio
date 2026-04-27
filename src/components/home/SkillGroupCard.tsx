import { Tag } from '@/components/common/Tag';
import type { SkillGroup } from '@/types';
import { localizedValue } from '@/lib/localized';

interface SkillGroupCardProps extends SkillGroup {
  language: string;
}

export function SkillGroupCard({ title, description, items, language }: SkillGroupCardProps) {
  const localizedItems = localizedValue(items, language);

  return (
    <article className="skill-card">
      <h3>{localizedValue(title, language)}</h3>
      <p className="muted">{localizedValue(description, language)}</p>
      <div className="tag-group">
        {localizedItems.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
