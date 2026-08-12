import React from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaClipboardCheck,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaTools,
  FaWhatsapp,
  FaWrench,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import repairGuy from './assets/repair-man.webp';
import SiteHeader from './components/SiteHeader';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import FaqSection from './components/FaqSection';
import Seo from './components/Seo';
import { content } from './seo/content';
import { businessJsonLd, faqJsonLd } from './seo/siteConfig';
import { trackedPhoneProps, trackedWhatsAppProps } from './utils/analytics';

const services = [
  {
    title: 'Oprava praček Praha',
    path: '/oprava-pracek-praha',
    text: 'Pračka nevypouští, netočí bubnem, nehřeje nebo hlásí chybu.',
    faults: ['čerpadla a filtry', 'řemeny a ložiska', 'ohřev a elektronika'],
  },
  {
    title: 'Oprava myček Praha',
    path: '/oprava-mycek-praha',
    text: 'Myčka nenapouští, nevypouští, nemyje dočista nebo z ní teče voda.',
    faults: ['čerpadla a ventily', 'ohřev vody', 'Aquastop a elektronika'],
  },
  {
    title: 'Oprava sušiček Praha',
    path: '/oprava-susicek-praha',
    text: 'Sušička nesuší, nehřeje, netočí bubnem nebo hlásí plnou nádržku.',
    faults: ['topná tělesa', 'řemeny a senzory', 'kondenzátor a čerpadlo'],
  },
];

const process = [
  {
    icon: FaPhoneAlt,
    title: 'Popíšete závadu',
    text: 'Sdělíte nám typ a značku spotřebiče, problém a adresu v Praze.',
  },
  {
    icon: FaSearch,
    title: 'Technik zjistí příčinu',
    text: 'Spotřebič zkontroluje přímo u vás doma a navrhne vhodné řešení.',
  },
  {
    icon: FaClipboardCheck,
    title: 'Cenu schválíte předem',
    text: 'Oprava začne až po odsouhlasení ceny. Rozhodnutí je vždy na vás.',
  },
  {
    icon: FaWrench,
    title: 'Opravíme a ručíme za práci',
    text: 'Na provedenou práci i vyměněné díly poskytujeme záruku.',
  },
];

const proofPoints = [
  'Více než 5 let zkušeností s opravami domácích spotřebičů',
  'Výjezd technika po celé Praze zdarma',
  'Diagnostika zdarma při provedené opravě',
  'Přesnou cenu odsouhlasíte před zahájením práce',
];

export default function LandingPage() {
  const { trustBlock, brands, districts } = content;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20 md:pb-0">
      <Seo
        title={content.home.metaTitle}
        description={content.home.metaDescription}
        path="/"
        jsonLd={[businessJsonLd(), faqJsonLd(content.home.faq)]}
      />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-sky-100 pt-24 sm:pt-28" aria-labelledby="hero-title">
          <div className="absolute inset-0 hero-grid opacity-30" aria-hidden="true" />
          <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
                <FaMapMarkerAlt aria-hidden="true" /> Servis u zákazníka po celé Praze
              </p>
              <h1 id="hero-title" className="text-4xl font-black leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Oprava praček, myček a sušiček v Praze
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                Technik přijede k vám domů, zjistí závadu a cenu sdělí předem. Výjezd po Praze je zdarma a na provedenou práci dostanete záruku.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {proofPoints.map((point) => (
                  <p key={point} className="flex items-start gap-3 text-sm font-semibold text-slate-800 sm:text-base">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{point}</span>
                  </p>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  {...trackedPhoneProps('hero')}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 text-lg font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                >
                  <FaPhoneAlt aria-hidden="true" /> Zavolat +420 730 520 302
                </a>
                <a
                  {...trackedWhatsAppProps('hero')}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-emerald-200 bg-white px-7 py-4 text-lg font-bold text-emerald-700 shadow-sm transition hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
                >
                  <FaWhatsapp className="text-2xl text-emerald-600" aria-hidden="true" /> Napsat na WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-600">Objednávky přijímáme denně 7:00–22:00. Konkrétní dostupný termín si potvrdíme společně.</p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
              <div className="absolute inset-x-12 bottom-3 h-24 rounded-full bg-blue-400/30 blur-3xl" aria-hidden="true" />
              <img
                src={repairGuy}
                alt="Technik při opravě pračky u zákazníka v Praze"
                width="720"
                height="720"
                fetchPriority="high"
                className="relative mx-auto h-auto w-full max-w-[520px] drop-shadow-2xl"
              />
              <div className="relative -mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/95 text-center shadow-2xl backdrop-blur sm:-mt-12">
                <div className="px-2 py-4 sm:px-4">
                  <strong className="block text-xl text-blue-700 sm:text-2xl">0 Kč</strong>
                  <span className="text-xs font-medium text-slate-600 sm:text-sm">výjezd po Praze</span>
                </div>
                <div className="border-x border-slate-200 px-2 py-4 sm:px-4">
                  <strong className="block text-xl text-blue-700 sm:text-2xl">5+ let</strong>
                  <span className="text-xs font-medium text-slate-600 sm:text-sm">zkušeností</span>
                </div>
                <div className="px-2 py-4 sm:px-4">
                  <strong className="block text-xl text-blue-700 sm:text-2xl">Záruka</strong>
                  <span className="text-xs font-medium text-slate-600 sm:text-sm">na práci a díly</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20" id="services" aria-labelledby="services-title">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Servis domácích spotřebičů</p>
              <h2 id="services-title" className="section-title">Co v Praze opravujeme</h2>
              <p className="section-lead">Specializujeme se na tři nejčastěji používané domácí spotřebiče. Oprava probíhá přímo u vás, bez převážení do servisu.</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.path} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                    <FaTools aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-700">
                    {service.faults.map((fault) => (
                      <li key={fault} className="flex items-center gap-2">
                        <FaCheckCircle className="shrink-0 text-emerald-500" aria-hidden="true" /> {fault}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.path} className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700 hover:text-blue-900">
                    Závady a informace <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20" id="process" aria-labelledby="process-title">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="section-kicker">Bez nepříjemných překvapení</p>
                <h2 id="process-title" className="section-title text-left">Jak probíhá oprava</h2>
                <p className="section-lead text-left">Od prvního kontaktu přes diagnostiku až po odsouhlasenou opravu. Víte, co se bude dít a kolik zaplatíte.</p>
                <a {...trackedPhoneProps('process')} className="mt-7 inline-flex items-center gap-3 rounded-xl bg-slate-950 px-6 py-3.5 font-bold text-white hover:bg-blue-700">
                  <FaPhoneAlt aria-hidden="true" /> Domluvit návštěvu
                </a>
              </div>
              <ol className="grid gap-4 sm:grid-cols-2">
                {process.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl text-white"><Icon aria-hidden="true" /></span>
                        <span className="text-4xl font-black text-slate-100">0{index + 1}</span>
                      </div>
                      <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{step.text}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-blue-700 px-5 py-16 text-white sm:px-8 sm:py-20" id="pricing" aria-labelledby="pricing-title">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-200">Jasné podmínky předem</p>
              <h2 id="pricing-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Kolik stojí oprava spotřebiče</h2>
              <p className="mt-4 text-lg leading-relaxed text-blue-100">Konečná cena závisí na závadě a potřebném dílu. Technik vám ji sdělí dříve, než začne opravovat.</p>
            </div>

            <div className="mt-10 grid overflow-hidden rounded-2xl bg-white text-slate-950 shadow-2xl md:grid-cols-3">
              <div className="p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Výjezd technika</p>
                <p className="mt-2 text-4xl font-black text-blue-700">zdarma</p>
                <p className="mt-2 text-sm text-slate-600">Po celé Praze</p>
              </div>
              <div className="border-y border-slate-200 p-7 sm:p-9 md:border-x md:border-y-0">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Diagnostika</p>
                <p className="mt-2 text-4xl font-black text-blue-700">od 500 Kč</p>
                <p className="mt-2 text-sm text-slate-600">Při provedené opravě zdarma</p>
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Běžná oprava</p>
                <p className="mt-2 text-4xl font-black text-blue-700">800–2000 Kč</p>
                <p className="mt-2 text-sm text-slate-600">Podle závady a náročnosti</p>
              </div>
            </div>
            <p className="mt-5 text-center text-sm text-blue-100">Náhradní díly a nestandardní práce mohou cenu změnit. Nic neprovedeme bez vašeho souhlasu.</p>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20" id="trust" aria-labelledby="trust-title">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-kicker">Důvody, které lze ověřit</p>
              <h2 id="trust-title" className="section-title">{trustBlock.heading}</h2>
              <p className="section-lead">{trustBlock.note}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {trustBlock.points.map((point, index) => (
                <article key={point.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    {index === 3 ? <FaShieldAlt aria-hidden="true" /> : <FaCheckCircle aria-hidden="true" />}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold">{point.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-600">{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20" id="coverage" aria-labelledby="coverage-title">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="section-kicker">Praha a okolí</p>
              <h2 id="coverage-title" className="section-title text-left">Výjezd po celé Praze zdarma</h2>
              <p className="section-lead text-left">Sídlíme ve Strašnicích na Praze 10 a obsluhujeme městské části i okolní čtvrti.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {districts.map((district) => (
                  <span key={district} className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-900">{district}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-7 text-slate-950 shadow-sm sm:p-9">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">Značky spotřebičů</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Opravujeme běžné i prémiové značky</h2>
              <p className="mt-4 leading-relaxed text-slate-600">Servisujeme starší modely i spotřebiče s moderní elektronikou.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span key={brand} className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-950">{brand}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-50 px-5 py-14 text-slate-950 sm:px-8" aria-labelledby="direct-cta-title">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">Máte porouchaný spotřebič?</p>
              <h2 id="direct-cta-title" className="mt-2 text-3xl font-black">Popište závadu a domluvte si termín</h2>
              <p className="mt-2 text-slate-600">Telefonicky, přes WhatsApp nebo formulářem níže.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a {...trackedPhoneProps('pre_faq_cta')} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500"><FaPhoneAlt aria-hidden="true" /> Zavolat</a>
              <a {...trackedWhatsAppProps('pre_faq_cta')} className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-bold hover:bg-emerald-500"><FaWhatsapp className="text-xl" aria-hidden="true" /> WhatsApp</a>
            </div>
          </div>
        </section>

        <FaqSection heading="Časté dotazy před objednáním opravy" items={content.home.faq} />
        <ContactSection />
      </main>

      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white p-2 shadow-[0_-8px_30px_rgba(15,23,42,0.14)] md:hidden" aria-label="Rychlý kontakt">
        <a {...trackedPhoneProps('mobile_sticky')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-l-xl bg-blue-700 px-3 font-bold text-white"><FaPhoneAlt aria-hidden="true" /> Zavolat</a>
        <a {...trackedWhatsAppProps('mobile_sticky')} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-r-xl bg-emerald-600 px-3 font-bold text-white"><FaWhatsapp className="text-xl" aria-hidden="true" /> WhatsApp</a>
      </div>
    </div>
  );
}
