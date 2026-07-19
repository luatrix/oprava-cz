import React from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Seo from '../components/Seo';
import { serviceList } from '../seo/content';

// Client-side fallback for unknown routes. The authoritative 404 (with a real
// HTTP 404 status) is served by Vercel via public/404.html; this keeps the SPA
// consistent and is marked noindex so it never competes in search.
export default function NotFound() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      <Seo
        title="Stránka nenalezena (404) | Dokonalá Oprava"
        description="Požadovaná stránka neexistuje. Vraťte se na hlavní stránku nebo si vyberte konkrétní opravu."
        path="/404"
        noindex
      />
      <SiteHeader />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto text-center bg-white rounded-2xl p-10 shadow">
          <p className="text-6xl font-extrabold text-blue-600 mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Tuto stránku se nepodařilo najít
          </h1>
          <p className="text-gray-700 mb-8">
            Stránka byla přesunuta nebo neexistuje. Zkuste přejít na hlavní stránku nebo si
            vyberte konkrétní službu.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition"
            >
              Hlavní stránka
            </Link>
            <a
              href="tel:+420730520302"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-semibold shadow transition"
            >
              Zavolat +420 730 520 302
            </a>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {serviceList.map((s) => (
              <Link
                key={s.slug}
                to={s.slug}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
