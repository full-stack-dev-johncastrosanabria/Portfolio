import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';
import type { Certification } from '@/types';

interface CertificationCardProps {
  certification: Certification;
  language: string;
}

export function CertificationCard({ certification, language }: CertificationCardProps) {
  return (
    <article className={certification.featured ? 'cert-card cert-card-featured' : 'cert-card'}>
      {certification.image ? (
        <button
          className="cert-media"
          type="button"
          aria-haspopup="dialog"
          aria-label={`${language === 'en' ? 'View certificate' : 'Ver certificado'}: ${localizedValue(certification.title, language)}`}
          onClick={() => {
            window.dispatchEvent(
              new CustomEvent('open-certificate-modal', {
                detail: {
                  image: publicAsset(certification.image || ''),
                  title: localizedValue(certification.title, language),
                },
              }),
            );
          }}
        >
          <img
            src={publicAsset(certification.image)}
            alt={localizedValue(certification.title, language)}
            loading="lazy"
          />
          <span>{language === 'en' ? 'View certificate' : 'Ver certificado'}</span>
        </button>
      ) : null}

      <div className="cert-content">
        <div>
          <p className="cert-category">{localizedValue(certification.category, language)}</p>
          <h3>{localizedValue(certification.title, language)}</h3>
          <p className="cert-issuer">{certification.issuer}</p>
        </div>

        <dl className="cert-meta">
          <div>
            <dt>{language === 'en' ? 'Issued' : 'Emitido'}</dt>
            <dd>{localizedValue(certification.issuedAt, language)}</dd>
          </div>

          {certification.credentialId ? (
            <div>
              <dt>{language === 'en' ? 'Credential ID' : 'ID de credencial'}</dt>
              <dd>{certification.credentialId}</dd>
            </div>
          ) : null}

          {certification.certificationNumber ? (
            <div>
              <dt>{language === 'en' ? 'Certification number' : 'Número de certificación'}</dt>
              <dd>{certification.certificationNumber}</dd>
            </div>
          ) : null}

          {certification.status ? (
            <div>
              <dt>{language === 'en' ? 'Status' : 'Estado'}</dt>
              <dd>{localizedValue(certification.status, language)}</dd>
            </div>
          ) : null}

          {certification.hours ? (
            <div>
              <dt>{language === 'en' ? 'Duration' : 'Duración'}</dt>
              <dd>{certification.hours}</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  );
}
