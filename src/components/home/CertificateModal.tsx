import { useEffect, useState } from 'react';

interface CertificateModalState {
  image: string;
  title: string;
}

export function CertificateModal() {
  const [certificate, setCertificate] = useState<CertificateModalState | null>(null);

  useEffect(() => {
    const openModal = (event: Event) => {
      const { detail } = event as CustomEvent<CertificateModalState>;
      setCertificate(detail);
    };

    window.addEventListener('open-certificate-modal', openModal);
    return () => window.removeEventListener('open-certificate-modal', openModal);
  }, []);

  useEffect(() => {
    if (!certificate) {
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCertificate(null);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [certificate]);

  if (!certificate) {
    return null;
  }

  return (
    <div
      className="cert-modal-backdrop"
      role="presentation"
      onClick={() => setCertificate(null)}
    >
      <section
        className="cert-modal"
        role="dialog"
        aria-modal="true"
        aria-label={certificate.title}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="cert-modal-header">
          <h2>{certificate.title}</h2>
          <button type="button" onClick={() => setCertificate(null)} aria-label="Cerrar">
            ×
          </button>
        </header>
        <div className="cert-modal-media">
          <img src={certificate.image} alt={certificate.title} />
        </div>
      </section>
    </div>
  );
}
