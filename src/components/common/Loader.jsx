export function Loader({ label = 'Cargando contenido...' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader-dot" />
      <p>{label}</p>
    </div>
  );
}
