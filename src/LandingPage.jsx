import React from 'react';
import { FaCheckCircle, FaPhoneAlt, FaQuoteLeft, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import repairGuy from './assets/repair-man.png';
import washingMachine from './assets/washing-machine.png';
import SiteHeader from './components/SiteHeader';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

const offerItems = [
  {
    title: 'Oprava praček Praha',
    subtitle: 'Oprava praček v Praze a okolí – rychlá a spolehlivá služba',
    lines: [
      'U nás provádíme opravy praček všech značek přímo u vás doma.',
      'Ve většině případů je spotřebič opraven ještě tentýž den.',
      'Výjezd po Praze je vždy zdarma a diagnostika není účtována, pokud opravu provedeme.',
      '📞 Zavolejte a domluvte si rychlý termín ještě dnes!'
    ],
    path: '/oprava-pracek-praha'
  },
  {
    title: 'Oprava myček Praha',
    subtitle: 'Oprava myček nádobí v Praze a okolí – rychlý a spolehlivý servis',
    lines: [
      'U nás provádíme servis myček všech značek a opravíme poruchu přímo u vás doma.',
      'Výjezd zdarma po celé Praze a žádné skryté poplatky.',
      '📞 Objednejte si servis a my se postaráme, aby vaše myčka fungovala co nejdříve.'
    ],
    path: '/oprava-mycek-praha'
  },
  {
    title: 'Oprava sušiček Praha',
    subtitle: 'Oprava sušiček v Praze a okolí – profesionální tým',
    lines: [
      'U nás zajistíme rychlou a spolehlivou opravu sušiček přímo u vás doma.',
      'Férové ceny, zkušenosti z více než 5 let a výjezd po Praze vždy zdarma.',
      '📞 Zavolejte ještě dnes a nechte nás vyřešit problém rychle a bez starostí.'
    ],
    path: '/oprava-susicek-praha'
  }
];

const reviews = [
  {
    quote: '“Přijeli ještě tentýž den a oprava byla hotová za hodinu. Velmi doporučuji.”',
    author: 'Petr, Praha'
  },
  {
    quote: '“Férové jednání, spolehlivá oprava. Skvělá komunikace.”',
    author: 'Jana, Praha'
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-screen pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 pt-16 pb-20 gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-[1.2] mb-6">
              Oprava praček, myček a sušiček v Praze
            </h1>
            <p className="text-xl text-gray-700 mb-4">Přijedeme ještě dnes • Rychlá oprava přímo u vás doma</p>
            <p className="text-gray-700 text-3xl flex items-center gap-3 mb-3 font-semibold">
              <FaPhoneAlt className="text-blue-600 text-4xl" />
              +420 730 520 302
            </p>
            <p className="text-gray-700 mb-6">Volejte nebo napište na WhatsApp — odpovídáme rychle</p>

            <div className="space-y-2 mb-8 text-gray-800 font-medium">
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600 shrink-0" />
                <span>Více než 5 let zkušeností</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600 shrink-0" />
                <span>Férové ceny bez skrytých poplatků</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600 shrink-0" />
                <span>Opravy všech značek domácích spotřebičů</span>
              </p>
            </div>

            <Link
              to="/#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow transition"
            >
              Objednat opravu
            </Link>
          </div>

          <div className="relative">
            <img
              src={repairGuy}
              alt="Servisní technik opravuje pračku v Praze"
              className="w-full max-w-lg lg:max-w-xl mx-auto drop-shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#f4f7fa] to-[#e9f1f9] py-16 px-6" id="offer">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Co nabízíme</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Detailní přehled služeb pro hlavní kategorie oprav v Praze a okolí.
          </p>
          <div className="grid grid-cols-1 gap-6">
            {offerItems.map((item) => (
              <article key={item.title} className="bg-white rounded-2xl p-7 shadow border border-blue-100">
                <div className="flex items-start justify-between gap-6 mb-5">
                  <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 inline-flex items-center gap-2">
                  <FaTools className="text-blue-600" />
                  {item.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800">{item.subtitle}</p>
                  </div>
                  <div className="hidden sm:flex w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 items-center justify-center">
                    <FaTools className="text-blue-600 text-xl" />
                  </div>
                </div>
                <ul className="space-y-3">
                  {item.lines.map((line) => (
                    <li key={`${item.title}-${line}`} className="text-gray-700 flex items-start gap-3">
                      <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link to={item.path} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-5">
                  Otevřít stránku
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={washingMachine}
              alt="Oprava domácích spotřebičů - pračky a sušičky"
              className="w-full h-auto rounded-xl object-cover drop-shadow-lg"
            />
          </div>
          <div className="text-gray-800 text-lg leading-relaxed">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">O nás</h2>
            <div className="space-y-3 mb-5">
              <p className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                U nás pomáháme domácnostem v Praze rychle obnovit funkčnost jejich spotřebičů.
              </p>
              <p className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                Zjistíme problém a většinou opravíme zařízení ještě tentýž den.
              </p>
            </div>
            <p className="font-semibold mb-3">Naše zásady:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-white border border-blue-100 rounded-lg px-4 py-3 text-base">Poctivost a jasná komunikace</div>
              <div className="bg-white border border-blue-100 rounded-lg px-4 py-3 text-base">Žádné skryté poplatky</div>
              <div className="bg-white border border-blue-100 rounded-lg px-4 py-3 text-base">Přístup s cílem opravdu pomoci</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Služby</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-7 shadow border border-blue-100">
              <p className="text-gray-800 mb-4 font-semibold">Co u nás opravujeme:</p>
              <div className="space-y-3">
                <p className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-700">Pračky</p>
                <p className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-700">Myčky nádobí</p>
                <p className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 text-gray-700">Sušičky</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-7 shadow border border-blue-100">
              <p className="text-gray-700 mb-4">👉 Servis všech značek: Bosch, LG, Whirlpool, Samsung a další</p>
              <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 font-semibold">
                servis spotřebičů Praha
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Kolik obvykle stojí oprava?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
              <p className="text-sm uppercase text-gray-500 mb-2">Diagnostika</p>
              <p className="text-3xl font-extrabold text-gray-900">od 500 Kč</p>
            </div>
            <div className="bg-blue-600 p-6 rounded-xl shadow text-white">
              <p className="text-sm uppercase text-blue-100 mb-2">Běžná oprava</p>
              <p className="text-3xl font-extrabold">800 – 2000 Kč</p>
            </div>
          </div>
          <div className="bg-[#f4f7fa] p-7 rounded-xl shadow border border-blue-100 text-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <p className="bg-white border border-gray-100 rounded-lg px-4 py-3">Výjezd po Praze vždy zdarma</p>
              <p className="bg-white border border-gray-100 rounded-lg px-4 py-3">Diagnostika není účtována v případě provedené opravy</p>
            </div>
            <p className="mb-1">Přesnou cenu vždy sdělíme před opravou.</p>
            <p>Žádné skryté poplatky, jen jasné a férové ceny.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="reviews">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">Reference / Důvěra</h2>
          <p className="text-center text-gray-600 mb-10">Co o nás říkají zákazníci:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <article key={review.quote} className="bg-[#f4f7fa] p-7 rounded-xl shadow border border-blue-100">
                <FaQuoteLeft className="text-blue-300 text-2xl mb-3" />
                <p className="text-gray-700 text-lg leading-relaxed mb-4">{review.quote}</p>
                <p className="font-semibold text-gray-900">– {review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16 px-6" id="cta">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-7 shadow border border-blue-100 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Máte poruchu? Nečekejte.</h2>
          <p className="text-gray-700 mb-2">📞 Zavolejte: +420 730 520 302</p>
          <p className="text-gray-700 mb-4">👉 nebo napište na WhatsApp</p>
          <p className="text-gray-700">U nás se postaráme, aby vaše zařízení bylo funkční co nejrychleji.</p>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
