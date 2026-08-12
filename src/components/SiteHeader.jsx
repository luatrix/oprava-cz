import React, { useEffect, useState } from 'react';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { trackedPhoneProps } from '../utils/analytics';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navItems = [
    { to: '/', label: 'Úvodní stránka' },
    { to: '/oprava-pracek-praha', label: 'Pračky' },
    { to: '/oprava-mycek-praha', label: 'Myčky' },
    { to: '/oprava-susicek-praha', label: 'Sušičky' },
    { to: '/#pricing', label: 'Cena' },
    { to: '/#contact', label: 'Kontakt' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <img src="/logo192.png" alt="Dokonalá Oprava" width="40" height="40" className="h-9 w-9 shrink-0 rounded-lg object-cover" />
          <span className="truncate text-base font-black text-slate-950 sm:text-lg">Dokonalá Oprava</span>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-expanded={menuOpen}
          aria-controls="mobile-site-nav"
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ))}
          <a {...trackedPhoneProps('header')} className="inline-flex items-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-white shadow-sm hover:bg-blue-800">
            <FaPhoneAlt aria-hidden="true" /> 730 520 302
          </a>
        </nav>
      </div>

      {menuOpen && <div className="lg:hidden fixed inset-0 top-[64px] bg-black/30" aria-hidden="true" />}

      <nav
        id="mobile-site-nav"
        className={`lg:hidden fixed left-0 right-0 top-[64px] bg-white border-t border-gray-100 px-4 sm:px-6 pb-6 shadow-xl transition-all ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="pt-4 grid gap-2 text-base font-semibold text-gray-700">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.to}`}
              to={item.to}
              className="rounded-xl px-4 py-3 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
