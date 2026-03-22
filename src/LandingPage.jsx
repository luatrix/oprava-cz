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
    <div className="min-h-screen section-shell">
      <SiteHeader />

      <section className="relative overflow-hidden min-h-screen pt-28 px-4 sm:px-6">
        <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#8ebdff]/40 blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-[#ffd887]/45 blur-3xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto pt-14 pb-20 gap-10 rise-in">
          <div className="glass-panel rounded-3xl p-7 sm:p-10">
            <p className="pulse-dot text-sm sm:text-base font-semibold text-[#1b5eb0] mb-4">Rychlá oprava</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0f2237] leading-tight mb-6">
              Oprava praček, myček a sušiček v Praze
            </h1>
            <p className="text-lg sm:text-xl text-[#395370] mb-6">
              Rychlý servis do 24 hodin. Opravy všech značek. Férové ceny bez skrytých poplatků.
            </p>
            <p className="text-[#26405e] text-2xl sm:text-3xl flex items-center gap-3 mb-8 font-semibold">
              <FaPhoneAlt className="text-[#1d67c2]" />
              +420 730 520 302
            </p>

            <a
              href="#contact"
              className="inline-block bg-[#1d67c2] hover:bg-[#134d95] text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg shadow-[#1d67c2]/25 transition"
            >
              Objednat opravu
            </a>
          </div>

          <div className="relative rise-in" style={{ animationDelay: '120ms' }}>
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#7eb1ff]/35 to-[#ffd57a]/35 blur-xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/70 shadow-2xl shadow-slate-400/35 bg-white/70">
              <img
                src={repairGuy}
                alt="Servisní technik opravuje pračku v Praze"
                className="w-full max-w-lg lg:max-w-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6" id="offer">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] text-center mb-12">Co nabízíme</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="soft-card rounded-2xl p-6 sm:p-7 rise-in"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-lg font-semibold text-[#1a3758]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6" id="about">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative rise-in">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#7eb1ff]/35 to-[#9ad8be]/35 blur-xl" />
            <img
              src={washingMachine}
              alt="Oprava domácích spotřebičů - pračky a sušičky"
              className="relative w-full h-auto rounded-3xl object-cover border border-white/70 shadow-xl"
            />
          </div>
          <div className="glass-panel rounded-3xl p-7 sm:p-10 rise-in" style={{ animationDelay: '80ms' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] mb-6">O nás</h2>
            <p className="mb-4 text-lg text-[#35506e]">
              Už více než 5 let pomáháme domácnostem v Praze obnovit funkčnost jejich spotřebičů.
            </p>
            <p className="text-lg text-[#35506e]">
              Naší prioritou je rychlost, kvalita a férový přístup ke každému zákazníkovi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white/55" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] text-center mb-12">Služby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceKeywords.map((service, index) => (
              <div
                key={service}
                className="soft-card rounded-2xl p-6 text-center bg-gradient-to-b from-white to-[#f3f8ff] rise-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <h3 className="text-xl font-semibold text-[#112946]">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6" id="pricing">
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-7 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] text-center mb-8">Kolik stojí oprava?</h2>
          <p className="text-center text-lg text-[#35506e] mb-10">
            Cena opravy se obvykle pohybuje mezi <span className="font-semibold text-[#1d67c2]">800 – 2000 Kč.</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="soft-card rounded-2xl p-6 bg-[#f3f8ff]">
              <p className="text-[#26405e] font-semibold">Diagnostika zdarma při opravě</p>
            </div>
            <div className="soft-card rounded-2xl p-6 bg-[#f3f8ff]">
              <p className="text-[#26405e] font-semibold">Výjezd po Praze zdarma</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="soft-card rounded-2xl p-5 bg-white">
              <h3 className="font-semibold text-lg text-[#163452]">stav zařízení</h3>
            </div>
            <div className="soft-card rounded-2xl p-5 bg-white">
              <h3 className="font-semibold text-lg text-[#163452]">typ závady</h3>
            </div>
            <div className="soft-card rounded-2xl p-5 bg-white">
              <h3 className="font-semibold text-lg text-[#163452]">přístup k zařízení</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-white/55" id="trust">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] text-center mb-10">Proč právě my</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustItems.map((item, index) => (
              <div
                key={item}
                className="soft-card rounded-2xl p-6 bg-gradient-to-b from-white to-[#f3f8ff] rise-in"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-lg font-semibold text-[#163452]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6" id="reviews">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] text-center mb-10">Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <blockquote className="soft-card rounded-2xl p-7 text-[#35506e] text-lg leading-relaxed">
              Petr, Praha: Skvělý servis, přijeli ještě ten den.
            </blockquote>
            <blockquote className="soft-card rounded-2xl p-7 text-[#35506e] text-lg leading-relaxed">
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
