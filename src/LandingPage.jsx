import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
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

const serviceKeywords = [
  'Oprava praček Praha',
  'Oprava myček Praha',
  'Oprava sušiček Praha',
  'Servis domácích spotřebičů Praha'
];

const trustItems = [
  '✔ Rychlý příjezd',
  '✔ Férové ceny',
  '✔ Zkušenosti',
  '✔ Záruka na práci'
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

            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow transition"
            >
              Objednat opravu
            </a>
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

      <section className="bg-gradient-to-b from-[#f4f7fa] to-[#e9f1f9] py-20 px-6" id="offer">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Co nabízíme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white rounded-2xl p-7 shadow border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white to-[#f5f9ff] rounded-3xl p-6 sm:p-10 shadow-md border border-blue-100">
          <div>
            <img
              src={washingMachine}
              alt="Oprava domácích spotřebičů - pračky a sušičky"
              className="w-full h-auto rounded-2xl object-cover drop-shadow-lg"
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

      <section className="bg-[#f8fbff] py-20 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Služby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceKeywords.map((service) => (
              <div
                key={service}
                className="bg-white rounded-2xl p-7 shadow border border-blue-100 text-center hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6" id="pricing">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#f7fbff] to-white rounded-3xl p-6 sm:p-10 shadow-md border border-blue-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Kolik stojí oprava?</h2>
          <p className="text-center text-lg text-gray-700 mb-10">
            Cena opravy se obvykle pohybuje mezi <span className="font-semibold text-blue-600">800 – 2000 Kč.</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-gray-700 font-semibold">Diagnostika zdarma při opravě</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <p className="text-gray-700 font-semibold">Výjezd po Praze zdarma</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">stav zařízení</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">typ závady</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-800">přístup k zařízení</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fbff] py-20 px-6" id="trust">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Proč právě my</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustItems.map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow border border-blue-100 hover:shadow-md hover:-translate-y-1 transition"
              >
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6" id="reviews">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="bg-gradient-to-b from-white to-[#f4f9ff] p-7 rounded-2xl shadow border border-blue-100 text-gray-700 leading-relaxed">
              Petr, Praha: Skvělý servis, přijeli ještě ten den.
            </blockquote>
            <blockquote className="bg-gradient-to-b from-white to-[#f4f9ff] p-7 rounded-2xl shadow border border-blue-100 text-gray-700 leading-relaxed">
              Jana, Praha: Oprava rychlá a bez problémů.
            </blockquote>
          </div>
        </div>
      </section>

      <ContactSection />
      <SiteFooter />
    </div>
  );
}
