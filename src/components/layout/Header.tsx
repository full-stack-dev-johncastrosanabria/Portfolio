import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '@/config/site';
import { useTheme } from '@/hooks/useTheme';
import { publicAsset } from '@/lib/assets';
import { localizedValue } from '@/lib/localized';

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const language = i18n.resolvedLanguage || i18n.language;
  const navigationLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/blog', label: t('nav.blog') },
  ];

  function toggleLanguage() {
    const nextLanguage = language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nextLanguage);
    localStorage.setItem('portfolio-language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  }

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <NavLink className="brand" to="/">
          <span className="brand-mark brand-avatar">
            <img src={publicAsset('profile-john.png')} alt="Foto de John Castro" />
          </span>
          <span>
            <strong>{siteConfig.author}</strong>
            <span className="brand-subtitle">
              {localizedValue(siteConfig.roleLocalized, language)}
            </span>
          </span>
        </NavLink>

        <nav className="nav-links" aria-label="Principal">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={t('nav.language')}
            title={t('nav.language')}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            className="icon-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={t('nav.theme')}
            title={t('nav.theme')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
