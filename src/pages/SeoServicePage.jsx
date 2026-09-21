import React from 'react';
import { FaCheckCircle, FaClipboardCheck, FaPhoneAlt, FaTools, FaWhatsapp } from 'react-icons/fa';
import SiteHeader from '../components/SiteHeader';
import ContactSection from '../components/ContactSection';
import SiteFooter from '../components/SiteFooter';
import FaqSection from '../components/FaqSection';
import Seo from '../components/Seo';
import { content } from '../seo/content';
import { trackedOrderProps, trackedPhoneProps, trackedWhatsAppProps } from '../utils/analytics';
import {
  businessJsonLd,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from '../seo/siteConfig';

export default function SeoServicePage({ service }) {
  const { slug, metaTitle, metaDescription, h1, lead, intro, body, commonFaults, faq, shortName } = service;

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

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              {...trackedOrderProps('service_hero')}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow transition hover:bg-blue-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              <FaClipboardCheck aria-hidden="true" /> Objednat opravu
            </a>
            <a
              {...trackedPhoneProps('service_hero')}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white px-6 py-3 text-lg font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              <FaPhoneAlt aria-hidden="true" /> Zavolat
            </a>
            <a
              {...trackedWhatsAppProps('service_hero')}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-white px-6 py-3 text-lg font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
            >
              <FaWhatsapp className="text-2xl text-emerald-600" aria-hidden="true" /> Napsat na WhatsApp
            </a>
          </div>

          <p className="text-lg text-gray-700 mb-8">{intro}</p>

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

      <FaqSection heading="Časté dotazy k této službě" items={faq} />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
