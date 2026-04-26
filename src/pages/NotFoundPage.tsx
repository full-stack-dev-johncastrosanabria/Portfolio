import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Portafolio | Página no encontrada');
  const { t } = useTranslation();

  return (
    <section className="section">
      <div className="container empty-state">
        <h1>404</h1>
        <p>{t('notFound.description')}</p>
        <Link className="button" to="/">
          {t('notFound.button')}
        </Link>
      </div>
    </section>
  );
}
