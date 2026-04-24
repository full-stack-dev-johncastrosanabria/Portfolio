import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Portafolio | Página no encontrada');

  return (
    <section className="section">
      <div className="container empty-state">
        <h1>404</h1>
        <p>La página que buscas no existe.</p>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
