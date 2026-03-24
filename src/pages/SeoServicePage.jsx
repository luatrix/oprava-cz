import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';
import RepairRequestForm from '../components/RepairRequestForm';

export default function SeoServicePage({ title, lead, paragraphOne, paragraphTwo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      <SiteHeader />

      <main className="pt-32 pb-16 px-6">
        <section className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">{title}</h1>
          <p className="text-lg text-gray-700 mb-4">{lead}</p>
          <p className="text-lg text-gray-700 mb-4">{paragraphOne}</p>
          <p className="text-lg text-gray-700 mb-8">{paragraphTwo}</p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow transition"
          >
            <FaPhoneAlt />
            Zavolejte: +420 730 520 302
          </button>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Zavřít formulář"
            className="absolute inset-0 bg-black/45"
            onClick={() => setIsModalOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Formulář pro objednání opravy"
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#f7fafc] shadow-2xl border border-blue-100 p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Zavřít"
              className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FaTimes />
            </button>

            <div className="text-center mb-8 pr-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">Zavolejte nám nebo odešlete poptávku</h2>
              <p className="mt-4 text-base sm:text-lg text-gray-700 font-medium">
                📞 <span className="text-blue-600 font-semibold">+420 730 520 302</span> &nbsp;
                (můžete psát i na <strong>WhatsApp</strong>)
              </p>
            </div>

            <RepairRequestForm submittedMessageClassName="md:col-span-2" />
          </div>
        </div>
      )}

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
