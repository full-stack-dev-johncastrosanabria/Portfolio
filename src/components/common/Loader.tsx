interface LoaderProps {
  label?: string;
}

export function Loader({ label = 'Cargando contenido...' }: LoaderProps) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader-dot" />
      <p>{label}</p>
    </div>
  );
}
