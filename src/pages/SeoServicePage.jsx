import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaPhoneAlt, FaTimes, FaTools } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';
import RepairRequestForm from '../components/RepairRequestForm';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { content } from '../seo/content';
import {
  businessJsonLd,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from '../seo/siteConfig';

export default function SeoServicePage({ service }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug, metaTitle, metaDescription, h1, lead, intro, body, commonFaults, faq, shortName } = service;

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
      <Seo
        title={metaTitle}
        description={metaDescription}
        path={slug}
        jsonLd={[
          businessJsonLd(),
          serviceJsonLd({ name: shortName, description: intro, slug }),
          faqJsonLd(faq),
          breadcrumbJsonLd([
            { name: 'Úvod', path: '/' },
            { name: shortName, path: slug },
          ]),
        ]}
      />
      <SiteHeader />

      <main className="pt-32 pb-16 px-6">
        <section className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow">
          <nav aria-label="Drobečková navigace" className="text-sm text-gray-500 mb-4">
            <a href="/" className="hover:text-blue-600">Úvod</a> <span className="mx-1">/</span>
            <span className="text-gray-700">{shortName}</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">{h1}</h1>
          <p className="text-xl text-gray-800 font-medium mb-6">{lead}</p>
          <p className="text-lg text-gray-700 mb-4">{intro}</p>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow transition mb-8"
          >
            <FaPhoneAlt />
            Zavolejte: +420 730 520 302
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nejčastější závady, které opravujeme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {commonFaults.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-blue-100 bg-[#f8fbff] px-4 py-3 text-gray-700 flex items-start gap-3"
              >
                <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jak probíhá oprava</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{body}</p>

          <div className="rounded-xl bg-[#f4f7fa] border border-blue-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FaTools className="text-blue-600" /> Značky, které opravujeme
            </h2>
            <p className="text-gray-700">{content.brands.join(', ')} a další.</p>
          </div>

          <div className="rounded-xl bg-white border border-blue-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Kam v Praze vyjíždíme</h2>
            <p className="text-gray-700">
              Výjezd po celé Praze je zdarma — {content.districts.join(', ')} a další lokality.
            </p>
          </div>
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

      <FaqSection heading="Časté dotazy k této službě" items={faq} />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
