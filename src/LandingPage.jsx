import React from 'react';
import { FaPhoneAlt, FaQuoteLeft } from 'react-icons/fa';
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
              <p>✔ Více než 5 let zkušeností</p>
              <p>✔ Férové ceny bez skrytých poplatků</p>
              <p>✔ Opravy všech značek domácích spotřebičů</p>
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
          <div className="grid grid-cols-1 gap-6">
            {offerItems.map((item) => (
              <article key={item.title} className="bg-white rounded-xl p-7 shadow border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">🔹 {item.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-4">{item.subtitle}</p>
                {item.lines.map((line) => (
                  <p key={`${item.title}-${line}`} className="text-gray-700 mb-2">{line}</p>
                ))}
                <Link to={item.path} className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 mt-2">
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
            <p className="mb-4">U nás pomáháme domácnostem v Praze rychle obnovit funkčnost jejich spotřebičů.</p>
            <p className="mb-4">Zjistíme problém a většinou opravíme zařízení ještě tentýž den.</p>
            <p className="font-semibold mb-2">Naše zásady:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Poctivost a jasná komunikace</li>
              <li>Žádné skryté poplatky</li>
              <li>Přístup s cílem opravdu pomoci</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Služby</h2>
          <div className="bg-white rounded-xl p-7 shadow border border-blue-100 max-w-3xl mx-auto">
            <p className="text-gray-800 mb-3 font-semibold">Co u nás opravujeme:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
              <li>Pračky</li>
              <li>Myčky nádobí</li>
              <li>Sušičky</li>
            </ul>
            <p className="text-gray-700">👉 Servis všech značek: Bosch, LG, Whirlpool, Samsung a další</p>
            <p className="text-gray-700 mt-3">servis spotřebičů Praha</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Kolik obvykle stojí oprava?</h2>
          <div className="bg-[#f4f7fa] p-7 rounded-xl shadow border border-blue-100 text-gray-700">
            <p className="mb-2">• Výjezd po Praze vždy zdarma</p>
            <p className="mb-2">• Diagnostika: od 500 Kč</p>
            <p className="mb-2">• Běžná oprava: 800 – 2000 Kč</p>
            <p className="mb-4">• Diagnostika není účtována v případě provedené opravy</p>
            <p>Přesnou cenu vždy sdělíme před opravou.</p>
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
              <article key={review.quote} className="bg-[#f4f7fa] p-6 rounded-xl shadow border border-blue-100">
                <FaQuoteLeft className="text-blue-300 text-2xl mb-3" />
                <p className="text-gray-700 leading-relaxed mb-4">{review.quote}</p>
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
