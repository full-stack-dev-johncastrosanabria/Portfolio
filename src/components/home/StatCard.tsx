import type { ProfileStat } from '@/types';
import { localizedValue } from '@/lib/localized';

interface StatCardProps extends ProfileStat {
  language: string;
}

export function StatCard({ value, label, detail, language }: StatCardProps) {
  return (
    <article className="stat-card">
      <p className="stat-value">{localizedValue(value, language)}</p>
      <p className="stat-label">{localizedValue(label, language)}</p>
      <p className="muted">{localizedValue(detail, language)}</p>
    </article>
  );
}
