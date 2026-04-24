export function StatCard({ value, label, detail }) {
  return (
    <article className="stat-card">
      <p className="stat-value">{value}</p>
      <p className="stat-label">{label}</p>
      <p className="muted">{detail}</p>
    </article>
  );
}
