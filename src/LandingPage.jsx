import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import washingMachine from './assets/washing-machine.png'; 
import repairGuy from './assets/repair-man.png'; // добавь своё изображение сюда


export default function LandingPage() {
 const [submitted, setSubmitted] = useState(false);

  return (
    
    <div className="min-h-screen font-sans bg-gradient-to-br from-white to-[#f9fbfd]">
      {/* Topbar */}
<header className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Dokonalá Oprava</span>
        </div>
        <nav className="flex items-center gap-6 text-base font-medium text-gray-700">
<a href="#" className="hover:text-blue-600">Úvodní stránka</a>
          <a href="#pricing" className="hover:text-blue-600">Cena</a>
          <a href="#contact" className="hover:text-blue-600">Kontakt</a>
        </nav>
      </header>

      {/* Hero Section */}
<section className="relative overflow-hidden min-h-screen pt-28">
<div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 pt-18 pb-20 gap-10">
          {/* Text block */}
          <div>
<h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-[1.3] mb-6">
              OPRAVUJEME<br />
              PRAČKY,<br />
              MYČKY,<br />
              SUŠIČKY<br />
              PO CELÉ PRAZE A OKOLÍ
            </h1>
            <p className="text-gray-700 text-3xl flex items-center gap-3 mb-10 font-semibold">
  <FaPhoneAlt className="text-blue-600 text-4xl" />
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
  src={repairGuy}
  alt="Servisní technik opravuje pračku v Praze"
  className="w-full max-w-lg lg:max-w-xl mx-auto drop-shadow-lg"
/>

          </div>

        </div>

      </section>

      {/* Offer Section */}
<section className="bg-gradient-to-b from-[#f4f7fa] to-[#e9f1f9] py-16 px-6" id="offer">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">Co nabízíme</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">⚡ Rychlá a kvalitní oprava</h3>
              <p className="text-gray-600 text-base">Oprava ve stejný nebo následující den.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🔧 Profesionální servis</h3>
              <p className="text-gray-600 text-base">Zkušení technici a výměna dílů dle potřeby.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🛡 Záruka na práci</h3>
              <p className="text-gray-600 text-base">Garantujeme kvalitu každé opravy.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🏠 Pro firmy i domácnosti</h3>
              <p className="text-gray-600 text-base">Vyjíždíme za fyzickými i právnickými osobami.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white rounded-xl p-8 shadow-md">
            <div className="w-full">
              <img src={washingMachine} alt="Oprava domácích spotřebičů - pračky a sušičky" className="w-full h-auto rounded-xl object-cover drop-shadow-lg" />
            </div>
            <div className="text-gray-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Opravujeme rychle a s důvěrou</h3>
              <p className="mb-4">Už více než <strong>5 let</strong> pomáháme domácnostem v celé Praze obnovit funkčnost jejich praček, myček a sušiček. Rozumíme, jak důležité je mít funkční domácí spotřebiče, a proto se snažíme vyjíždět <strong>ještě tentýž den</strong>.</p>
              <p className="mb-4">Naše práce je postavena na zkušenostech, poctivosti a jasné komunikaci. Zakládáme si na tom, aby každý zákazník rozuměl, co se opravuje a proč.</p>
              <p className="mb-4">Specializujeme se na <strong>opravu praček</strong>, <strong> myček</strong> a <strong> sušiček v Praze a okolí</strong>. Nabízíme <strong>rychlý servis domácích spotřebičů</strong> pro značky <strong>Bosch</strong>, <strong>LG</strong>, <strong>Whirlpool</strong> atd.</p>
              <p>Objednejte si servis s jistotou — bez skrytých poplatků, s <strong>garancí na provedenou práci</strong> a úsměvem technika, který vám opravdu chce pomoct.</p>
            </div>
          </div>
        </div>
      </section>

{/* Contact Section */}
<section className="bg-white py-16 px-6" id="pricing">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">Kolik stojí oprava?</h2>
    
    <p className="text-center text-lg text-gray-700 mb-8">
      Obvykle cena opravy nepřesahuje <span className="font-semibold text-blue-600">800 – 2000 Kč</span>.
      Skutečná cena se však může lišit v závislosti na několika faktorech:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="bg-[#f4f7fa] p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">1. Věk a stav zařízení</h3>
        <p className="text-gray-600">Starší nebo opotřebované spotřebiče mohou vyžadovat dražší náhradní díly nebo složitější opravy.</p>
      </div>
      <div className="bg-[#f4f7fa] p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">2. Běžnost problému</h3>
        <p className="text-gray-600">Pokud je závada typická pro daný model, oprava může být levnější díky dostupným dílům a zkušenostem.</p>
      </div>
      <div className="bg-[#f4f7fa] p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">3. Region</h3>
        <p className="text-gray-600">Cena návštěvy technika se může mírně lišit podle lokality v Praze a okolí.</p>
      </div>
      <div className="bg-[#f4f7fa] p-6 rounded-xl shadow hover:shadow-md transition">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">4. Přístup k zařízení</h3>
        <p className="text-gray-600">Obtížně přístupná místa nebo nutnost demontáže mohou zvýšit čas i náklady na opravu.</p>
      </div>
    </div>
  </div>
</section>

<section
  id="contact"
  className="bg-gradient-to-b from-[#dbeafe] to-[#bfdbfe] py-20 px-4"
>

  <div className="max-w-3xl mx-auto bg-[#f7fafc] p-10 rounded-2xl shadow-xl">
    <div className="text-center mb-10">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug">
    Zavolejte nám nebo odešlete poptávku
  </h2>
  <p className="mt-4 text-lg text-gray-700 font-medium">
    📞 <span className="text-blue-600 font-semibold">+420 730 520 302</span> &nbsp;
    (můžete psát i na <strong>WhatsApp</strong>)
  </p>
</div>


{submitted && (
  <div className="md:col-span-2 text-center text-green-700 font-semibold text-lg mb-6">
    Děkujeme! Vaše zpráva byla úspěšně odeslána.
  </div>
)}

<form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      // 1. Отправляем данные на Formspree
      await fetch("https://formspree.io/f/mnndkdvl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      // 2. Шлём конверсию в Google Analytics с тем же именем, что у заказчика
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "ads_conversion___1", {
          event_category: "conversion",
          event_label: "Dokonala Oprava - odeslani formulare",
          value: 1
        });
      }

      // 3. Показываем сообщение и очищаем форму
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Chyba při odesílání formuláře:", err);
    }
  }}
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>


      {/* Имя */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Jméno</label>
        <input
          name = "name"
          type="text"
          placeholder="vaše jméno"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Телефон */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Telefon</label>
        <input
          name = "phone"
          type="text"
          placeholder="Váš telefon"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          name = "email"
          type="email"
          placeholder="@"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Адрес */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Adresa</label>
        <input
          name = "Address"
          type="text"
          placeholder="Ulice, město"
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Тип устройства */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Typ domácího spotřebiče</label>
      <select
  name="type"
  required
  onInvalid={(e) =>
    e.target.setCustomValidity("Prosím, vyberte typ spotřebiče.")
  }
  onInput={(e) => e.target.setCustomValidity("")}
  className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <option value="">-- Vyberte typ --</option>
  <option value="pračka">pračka</option>
  <option value="myčka">myčka</option>
  <option value="sušička">sušička</option>
</select>

      </div>

      {/* Бренд */}
      <div className="md:col-span-1">
        <label className="block text-gray-700 mb-1">Značka</label>
        <input
          name = "brand"
          type="text"
          placeholder="např. Bosch, LG..."
          className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Проблема */}
      <div className="md:col-span-2">
        <label className="block text-gray-700 mb-1">Popis problému</label>
        <textarea
          name = "Problem description"
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
<footer className="bg-gray-900 text-white py-12">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Брендинг */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Dokonalá Oprava</h3>
      <p className="text-sm opacity-75">Oprava domácích spotřebičů po celé Praze a okolí</p>
      <p className="text-sm mt-2 opacity-75">&copy; {new Date().getFullYear()} alexkanonovich.cz</p>
    </div>

    {/* Контакты */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Informace</h4>
      <p className="text-sm">
        <strong>Telefon:</strong> <br />
        <a href="tel:+420730520302" className="text-blue-400 hover:underline">
          +420 730 520 302
        </a><br />
        <span className="text-sm">(můžete psát i na <strong>WhatsApp</strong>)</span>
      </p>
      <p className="mt-4 text-sm">
        <strong>E-mail:</strong> <br />
        <a href="mailto:dokonalaoprava@gmail.com" className="text-blue-400 hover:underline">
          dokonalaoprava@gmail.com
        </a>
      </p>
    </div>

    {/* Адрес и график */}
    <div>
      <h4 className="text-lg font-semibold mb-3">Adresa a pracovní doba</h4>
      <p className="text-sm">
        Černokostelecká 1806/123<br />
        100 00 Praha 10 – Strašnice
      </p>
      <p className="mt-2 text-sm">IČO: 19307896</p>

      <p className="mt-4 text-sm">
        <strong>Pracovní doba:</strong><br />
        Po – Pá: 9.00 – 18.00<br />
        So: 9.00 – 14.00
      </p>
      <p className="mt-2 text-sm">
        <strong>Pro objednání opravy:</strong><br />
        volejte kdykoliv mezi 10.00 – 22.00
      </p>
    </div>
  </div>
</footer>




    </div>
  );
}
