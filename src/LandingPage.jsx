import React from 'react';
import { FaCheckCircle, FaPhoneAlt, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import repairGuy from './assets/repair-man.png';
import washingMachine from './assets/washing-machine.png';
import SiteHeader from './components/SiteHeader';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';

const benefits = [
  '⚡ Rychlá oprava – přijedeme ještě dnes nebo zítra',
  '🔧 Zkušený technik – opravy všech značek',
  '🛡 Záruka na opravu – jistota kvality',
  '🏠 Opravy u vás doma – bez nutnosti odvozu'
];

const serviceDetails = [
  {
    title: 'Oprava praček Praha',
    subtitle: 'Oprava praček v Praze a okolí – rychlá a spolehlivá služba',
    textOne: 'U nás provádíme opravy praček všech značek přímo u vás doma.',
    textTwo: 'Ve většině případů je spotřebič opraven ještě tentýž den.',
    textThree: 'Výjezd po Praze je vždy zdarma a diagnostika není účtována, pokud opravu provedeme.',
    cta: 'Zavolejte a domluvte si rychlý termín ještě dnes!',
    path: '/oprava-pracek-praha'
  },
  {
    title: 'Oprava myček Praha',
    subtitle: 'Oprava myček nádobí v Praze a okolí – rychlý a spolehlivý servis',
    textOne: 'U nás provádíme servis myček všech značek a opravíme poruchu přímo u vás doma.',
    textTwo: 'Výjezd zdarma po celé Praze a žádné skryté poplatky.',
    textThree: '',
    cta: 'Objednejte si servis a my se postaráme, aby vaše myčka fungovala co nejdříve.',
    path: '/oprava-mycek-praha'
  },
  {
    title: 'Oprava sušiček Praha',
    subtitle: 'Oprava sušiček v Praze a okolí – profesionální tým',
    textOne: 'U nás zajistíme rychlou a spolehlivou opravu sušiček přímo u vás doma.',
    textTwo: 'Férové ceny, zkušenosti z více než 5 let a výjezd po Praze vždy zdarma.',
    textThree: '',
    cta: 'Zavolejte ještě dnes a nechte nás vyřešit problém rychle a bez starostí.',
    path: '/oprava-susicek-praha'
  }
];

const trustItems = [
  'Rychlý příjezd',
  'Férové ceny',
  'Zkušenosti',
  'Záruka na práci'
];

const reviews = [
  {
    author: 'Petr',
    city: 'Praha',
    text: 'Petr, Praha: Skvělý servis, přijeli ještě ten den.'
  },
  {
    author: 'Jana',
    city: 'Praha',
    text: 'Jana, Praha: Oprava rychlá a bez problémů.'
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
            <p className="text-xl text-gray-700 mb-5">
              Rychlý servis do 24 hodin. Opravy všech značek. Férové ceny bez skrytých poplatků.
            </p>
            <p className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 font-semibold mb-6">
              Rychlá oprava
            </p>
            <p className="text-gray-700 text-3xl flex items-center gap-3 mb-10 font-semibold">
              <FaPhoneAlt className="text-blue-600 text-4xl" />
              +420 730 520 302
            </p>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-white rounded-xl p-7 shadow border border-blue-100 hover:shadow-md transition">
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">{benefit}</p>
              </div>
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
            <p className="mb-4">
              Už více než 5 let pomáháme domácnostem v Praze obnovit funkčnost jejich spotřebičů.
            </p>
            <p>
              Naší prioritou je rychlost, kvalita a férový přístup ke každému zákazníkovi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Služby</h2>
          <p className="text-center text-gray-600 mb-10">servis spotřebičů Praha</p>
          <div className="grid grid-cols-1 gap-6">
            {serviceDetails.map((service) => (
              <article key={`${service.title}-${service.path}`} className="bg-white rounded-xl p-7 shadow border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-lg font-semibold text-gray-800 mb-4">{service.subtitle}</p>
                <p className="text-gray-700 mb-2">{service.textOne}</p>
                <p className="text-gray-700 mb-2">{service.textTwo}</p>
                {service.textThree ? <p className="text-gray-700 mb-2">{service.textThree}</p> : null}
                <p className="text-gray-700 mb-4">📞 {service.cta}</p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Otevřít stránku
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Kolik stojí oprava?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-2 bg-blue-600 text-white p-7 rounded-2xl shadow-lg">
              <p className="text-sm uppercase tracking-wide text-blue-100 mb-2">Orientační cena</p>
              <p className="text-3xl font-extrabold leading-tight">800 – 2000 Kč</p>
              <p className="text-blue-100 mt-3">Cena opravy se obvykle pohybuje mezi 800 – 2000 Kč.</p>
            </div>
            <div className="lg:col-span-3 bg-[#f4f7fa] p-6 rounded-2xl shadow border border-blue-100">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700 font-semibold">Diagnostika zdarma při opravě</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                  <p className="text-gray-700 font-semibold">Výjezd po Praze zdarma</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow border border-blue-100 text-center">
              <h3 className="font-semibold text-lg text-gray-800">stav zařízení</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-blue-100 text-center">
              <h3 className="font-semibold text-lg text-gray-800">typ závady</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow border border-blue-100 text-center">
              <h3 className="font-semibold text-lg text-gray-800">přístup k zařízení</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-16 px-6" id="trust">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Proč právě my</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustItems.map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow border border-blue-100 flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1 shrink-0" />
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6" id="reviews">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <article key={review.text} className="bg-[#f4f7fa] p-6 rounded-xl shadow border border-blue-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.city}</p>
                    </div>
                  </div>
                  <FaQuoteLeft className="text-blue-200 text-2xl" />
                </div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={`${review.author}-${index}`} />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
