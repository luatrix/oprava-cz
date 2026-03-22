import React from 'react';
import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">Dokonalá Oprava</span>
      </div>
      <nav className="flex items-center gap-6 text-base font-medium text-gray-700">
        <Link to="/" className="hover:text-blue-600">Úvodní stránka</Link>
        <Link to="/oprava-pracek-praha" className="hover:text-blue-600">Pračky</Link>
        <Link to="/oprava-mycek-praha" className="hover:text-blue-600">Myčky</Link>
        <Link to="/oprava-susicek-praha" className="hover:text-blue-600">Sušičky</Link>
        <a href="/#pricing" className="hover:text-blue-600">Cena</a>
        <a href="/#contact" className="hover:text-blue-600">Kontakt</a>
      </nav>
    </header>
  );
}
