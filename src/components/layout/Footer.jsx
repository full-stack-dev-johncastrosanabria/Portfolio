import { siteConfig } from '@/config/site';
import { publicAsset } from '@/lib/assets';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img
            className="footer-brand-mark"
            src={publicAsset('brand-mark.svg')}
            alt="Logo personal de John Castro"
          />
          <div>
            <p className="footer-title">{siteConfig.author}</p>
            <p className="footer-copy">{siteConfig.description}</p>
          </div>
        </div>

        <div className="footer-links">
          {siteConfig.socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
