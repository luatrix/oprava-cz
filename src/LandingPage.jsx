import React from 'react';
import { FaCheckCircle, FaPhoneAlt, FaQuoteLeft, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import washingMachine from './assets/washing-machine.png';
import repairGuy from './assets/repair-man.png';
import SiteHeader from './components/SiteHeader';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

const benefits = [
  {
    title: 'Rychlá a kvalitní oprava',
    description: 'Oprava ve stejný nebo následující den.'
  },
  {
    title: 'Profesionální servis',
    description: 'Zkušení technici a výměna dílů dle potřeby.'
  },
  {
    title: 'Záruka na práci',
    description: 'Garantujeme kvalitu každé opravy.'
  },
  {
    title: 'Pro firmy i domácnosti',
    description: 'Vyjíždíme za fyzickými i právnickými osobami.'
  }
];

const seoLinks = [
  { title: 'Oprava praček Praha', path: '/oprava-pracek-praha' },
  { title: 'Oprava myček Praha', path: '/oprava-mycek-praha' },
  { title: 'Oprava sušiček Praha', path: '/oprava-susicek-praha' }
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

const pricingFactors = ['stav zařízení', 'typ závady', 'přístup k zařízení'];

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-screen pt-16 sm:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 pt-8 sm:pt-14 pb-16 sm:pb-20 gap-10">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight sm:leading-[1.15] mb-5">
              Oprava praček, myček a sušiček
              <br />
              v Praze
            </h1>
            <p className="text-gray-700 text-lg sm:text-xl mb-5">Přijedeme ještě dnes • Rychlá oprava přímo u vás doma</p>
            <p className="text-gray-800 text-2xl sm:text-3xl flex items-center gap-3 mb-3 font-semibold">
              <FaPhoneAlt className="text-blue-600 text-3xl sm:text-4xl shrink-0" />
              +420 730 520 302
            </p>
            <p className="text-gray-700 mb-8">Volejte nebo napište na WhatsApp — odpovídáme rychle</p>

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

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow transition text-center"
              >
                Objednat opravu
              </Link>
              <Link
                to="/#pricing"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold shadow transition text-center"
              >
                Zjistit ceny
              </Link>
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {benefits.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {seoLinks.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="bg-white rounded-xl px-5 py-4 shadow border border-blue-100 hover:border-blue-300 hover:shadow-md transition flex items-center gap-3"
              >
                <FaTools className="text-blue-600 shrink-0" />
                <span className="font-semibold text-gray-800">{item.title}</span>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white rounded-xl p-8 shadow-md">
            <div className="w-full">
              <img
                src={washingMachine}
                alt="Oprava domácích spotřebičů - pračky a sušičky"
                className="w-full h-auto rounded-xl object-cover drop-shadow-lg"
              />
            </div>
            <div className="text-gray-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">O nás</h3>
              <p className="mb-4">U nás pomáháme domácnostem v Praze rychle obnovit funkčnost jejich spotřebičů.</p>
              <p className="mb-4">Zjistíme problém a většinou opravíme zařízení ještě tentýž den.</p>
              <p className="font-semibold mb-3">Naše zásady:</p>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <span>Poctivost a jasná komunikace</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <span>Žádné skryté poplatky</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <span>Přístup s cílem opravdu pomoci</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Kolik obvykle stojí oprava?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-600 p-6 rounded-xl shadow text-white">
              <p className="text-sm uppercase text-blue-100 mb-2">Výjezd po Praze</p>
              <p className="text-3xl font-extrabold">vždy zdarma</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
              <p className="text-sm uppercase text-gray-500 mb-2">Diagnostika</p>
              <p className="text-3xl font-extrabold text-gray-900">od 500 Kč</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow border border-blue-100 mb-6 text-center">
            <p className="text-sm uppercase text-gray-500 mb-2">Běžná oprava</p>
            <p className="text-2xl font-bold text-gray-800">800 – 2000 Kč</p>
          </div>

          <div className="bg-[#f4f7fa] p-7 rounded-xl shadow border border-blue-100 text-gray-700">
            <p className="mb-4">Diagnostika není účtována v případě provedené opravy.</p>
            <p className="mb-5">Přesnou cenu vždy sdělíme před opravou. Žádné skryté poplatky, jen jasné a férové ceny.</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pricingFactors.map((factor) => (
                <div key={factor} className="bg-white border border-gray-100 rounded-lg px-4 py-3 text-center font-medium text-gray-700">
                  {factor}
                </div>
              ))}
            </div>
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
