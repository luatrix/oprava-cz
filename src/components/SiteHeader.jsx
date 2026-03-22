import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 px-4 sm:px-6 pt-3">
      <div className="max-w-7xl mx-auto rounded-2xl glass-panel flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="h-9 w-9 rounded-lg" />
          <span className="font-bold text-lg text-[#10243b]">Dokonalá Oprava</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm md:text-base font-semibold text-[#35506e]">
          <Link to="/" className="hover:text-[#1d67c2] transition">Úvodní stránka</Link>
          <a href="/#pricing" className="hover:text-[#1d67c2] transition">Cena</a>
          <a href="/#contact" className="hover:text-[#1d67c2] transition">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
