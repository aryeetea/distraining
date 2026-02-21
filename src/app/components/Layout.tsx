import { Outlet } from 'react-router';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Rubik, sans-serif' }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
