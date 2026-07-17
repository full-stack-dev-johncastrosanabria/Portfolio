import { Outlet } from 'react-router-dom';
import { AnimatedBackground } from '@/components/layout/AnimatedBackground';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export function AppShell() {
  return (
    <div className="app-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <AnimatedBackground />
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
