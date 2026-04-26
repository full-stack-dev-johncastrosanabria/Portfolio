import type { ProfileStat } from '@/types';

export function StatCard({ value, label, detail }: ProfileStat) {
  return (
    <article className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
      <p className="muted">{detail}</p>
    </article>
  );
}
