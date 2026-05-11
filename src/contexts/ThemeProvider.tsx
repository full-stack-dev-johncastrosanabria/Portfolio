import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeContext, type ThemeMode } from '@/contexts/theme';

const storageKey = 'portfolio-theme';

function getInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }

  // Por defecto, inicia en modo oscuro
  return 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
