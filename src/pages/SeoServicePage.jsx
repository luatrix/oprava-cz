import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';

export default function SeoServicePage({ title, lead, paragraphOne, paragraphTwo }) {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      <SiteHeader />

      <main className="pt-32 pb-16 px-6">
        <section className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{title}</h1>
          <p className="text-lg text-gray-700 mb-4">{lead}</p>
          <p className="text-lg text-gray-700 mb-4">{paragraphOne}</p>
          <p className="text-lg text-gray-700 mb-8">{paragraphTwo}</p>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow transition"
          >
            <FaPhoneAlt />
            Zavolejte: +420 730 520 302
          </Link>
        </section>
      </main>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
