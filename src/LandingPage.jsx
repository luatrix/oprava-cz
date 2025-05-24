import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import washingMachine from './assets/washing-machine.png'; 
import repairGuy from './assets/repair-man.png'; // добавь своё изображение сюда

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      {/* Topbar */}
<header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Dokonala Oprava</span>
        </div>
        <nav className="flex items-center gap-6 text-base font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600">Úvodní stránka</a>
          <a href="#pricing" className="hover:text-blue-600">Cena</a>
          <a href="#contact" className="hover:text-blue-600">Kontakt</a>
        </nav>
      </header>

      {/* Hero Section */}
<section className="relative overflow-hidden min-h-screen pt-28">
<div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 pt-32 pb-20 gap-10">
          {/* Text block */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              OPRAVUJEME<br />
              PRAČKY,<br />
              MYČKY,<br />
              SUŠIČKY<br />
              PO CELÉ PRAZE A OKOLÍ
            </h1>
            <p className="text-gray-700 text-lg flex items-center gap-2 mb-8">
              <FaPhoneAlt className="text-blue-600" />
              +420 730 520 302
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
  <a
    href="#contact"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow transition"
  >
    OBJEDNAT OPRAVU
  </a>
  <a
    href="#pricing"
    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold shadow transition"
  >
    ZJISTIT CENY
  </a>
</div>

          </div>

          {/* Image */}
          <div className="relative">
          <img
  src={washingMachine}
  alt="Domácí spotřebiče"
  className="w-full max-w-lg lg:max-w-xl mx-auto drop-shadow-lg"
/>

          </div>

        </div>

        {/* Decorative shape */}
        {/* Decorative SVG divider */}
<div className="w-full overflow-hidden leading-[0] -mt-10">
  <svg
    className="relative block w-[calc(100%+1.3px)] h-[80px]"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
  >
    <path
      d="M321.39 56.26C211.25 70.9 105.52 107.94 0 105.84V0h1200v112.54c-96.62 6.27-196.35-22.23-284.29-42.3C790.1 42.26 695.91 5.89 599.45 1.96c-103.31-4.13-208.68 34.72-278.06 54.3z"
      fill="#ffffff"
    ></path>
  </svg>
</div>

      </section>

      {/* Offer Section */}
<section
  className="bg-gradient-to-b from-[#f4f7fa] to-[#e9f1f9] py-16 px-6"
  id="offer"
>

  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
      Co nabízíme
    </h2>

    {/* Карточки */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">⚡ Rychlá a kvalitní oprava</h3>
        <p className="text-gray-600 text-base">Oprava ve stejný nebo následující den.</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">🔧 Profesionální servis</h3>
        <p className="text-gray-600 text-base">Zkušení technici a výměna dílů dle potřeby.</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">🛡 Záruka na práci</h3>
        <p className="text-gray-600 text-base">Garantujeme kvalitu každé opravy.</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">🏠 Pro firmy i domácnosti</h3>
        <p className="text-gray-600 text-base">Vyjíždíme za fyzickými i právnickými osobami.</p>
      </div>
    </div>

    {/* Текстовый блок */}
    {/* Расширенный текстовый блок с изображением */}
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white rounded-xl p-8 shadow-md">
  {/* Картинка слева */}
  <div className="w-full">
    <img
      src={repairGuy}
      alt="Technik opravuje spotřebič"
      className="w-full h-auto rounded-xl object-cover"
    />
  </div>

  {/* Текст справа */}
  <div className="text-gray-800 text-lg leading-relaxed">
    <h3 className="text-2xl font-bold mb-4 text-gray-900">
      Opravujeme rychle a s důvěrou
    </h3>
    <p className="mb-4">
      Už více než <strong>5 let</strong> pomáháme domácnostem v celé Praze obnovit funkčnost jejich praček, myček a sušiček.
      Rozumíme, jak důležité je mít funkční domácí spotřebiče, a proto se snažíme vyjíždět <strong>ještě tentýž den</strong>.
    </p>
    <p className="mb-4">
      Naše práce je postavena na zkušenostech, poctivosti a jasné komunikaci. Zakládáme si na tom, aby každý zákazník rozuměl, co se opravuje a proč.
    </p>
    <p>
      Objednejte si servis s jistotou — bez skrytých poplatků, s <strong>garancí na provedenou práci</strong> a úsměvem technika, který vám opravdu chce pomoct.
    </p>
  </div>
</div>

  </div>
</section>

{/* Contact Section */}
<section
  id="contact"
  className="bg-gradient-to-b from-[#dbeafe] to-[#bfdbfe] py-20 px-4"
>

  <div className="max-w-3xl mx-auto bg-[#f7fafc] p-10 rounded-2xl shadow-xl">
    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
      Pošlete nám zprávu
    </h2>

    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Имя */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Jméno</label>
        <input
          type="text"
          placeholder="vaše jméno"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Телефон */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Telefon</label>
        <input
          type="text"
          placeholder="Váš telefon"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="@"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Адрес */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Adresa</label>
        <input
          type="text"
          placeholder="Ulice, město"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Тип устройства */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Typ domácího spotřebiče</label>
        <select className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>pračka</option>
          <option>myčka</option>
          <option>sušička</option>
          <option>lednice</option>
        </select>
      </div>

      {/* Бренд */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Značka</label>
        <input
          type="text"
          placeholder="např. Bosch, LG..."
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Проблема */}
      <div className="md:col-span-2">
        <label className="block text-gray-700 mb-1">Popis problému</label>
        <textarea
          rows={4}
          placeholder="popis problému"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      {/* Кнопка */}
      <div className="md:col-span-2 text-center mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-8 rounded-xl shadow transition"
        >
          Odeslat požadavek
        </button>
      </div>
    </form>
  </div>
</section>
{/* Footer */}
{/* Footer */}
<footer className="bg-gray-900 text-white text-center py-8">
  <div className="max-w-6xl mx-auto px-4">
    <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} alexkanonovich.cz</p>
    <p className="text-sm sm:text-base mt-1 opacity-75">Oprava domácích spotřebičů po celé Praze</p>
  </div>
</footer>



    </div>
  );
}
