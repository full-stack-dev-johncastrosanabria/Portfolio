import { NavLink } from 'react-router-dom';
import { siteConfig } from '@/config/site';

const navigationLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/blog', label: 'Blog' },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <NavLink className="brand" to="/">
          <span className="brand-mark brand-avatar">
            <img src="/profile-john.png" alt="Foto de John Castro" />
          </span>
          <span>
            <strong>{siteConfig.author}</strong>
            <span className="brand-subtitle">{siteConfig.role}</span>
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
        </nav>
      </div>
    </header>
  );
}
