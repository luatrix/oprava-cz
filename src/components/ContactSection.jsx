import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#d9eaff] via-[#e9f3ff] to-[#f7fbff]"
    >
      <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-7 sm:p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2237] leading-tight">
            Zavolejte nám nebo odešlete poptávku
          </h2>
          <p className="mt-4 text-lg text-[#35506e] font-medium">
            📞 <span className="text-[#1d67c2] font-semibold">+420 730 520 302</span> &nbsp;
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
              await fetch('https://formspree.io/f/mnndkdvl', {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' }
              });

              if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
                window.gtag('event', 'ads_conversion___1', {
                  event_category: 'conversion',
                  event_label: 'Dokonala Oprava - odeslani formulare',
                  value: 1
                });
              }

              setSubmitted(true);
              form.reset();
            } catch (err) {
              console.error('Chyba při odesílání formuláře:', err);
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-1">
            <label className="block text-[#35506e] mb-1 font-semibold">Jméno</label>
            <input
              name="name"
              type="text"
              placeholder="vaše jméno"
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-[#35506e] mb-1 font-semibold">Telefon</label>
            <input
              name="phone"
              type="text"
              placeholder="Váš telefon"
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-[#35506e] mb-1 font-semibold">Email</label>
            <input
              name="email"
              type="email"
              placeholder="@"
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-[#35506e] mb-1 font-semibold">Adresa</label>
            <input
              name="Address"
              type="text"
              placeholder="Ulice, město"
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            />
          </div>

          <div className="md:col-span-1">
            <label className="block text-[#35506e] mb-1 font-semibold">Typ domácího spotřebiče</label>
            <select
              name="type"
              required
              onInvalid={(e) => e.target.setCustomValidity('Prosím, vyberte typ spotřebiče.')}
              onInput={(e) => e.target.setCustomValidity('')}
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            >
              <option value="">-- Vyberte typ --</option>
              <option value="pračka">pračka</option>
              <option value="myčka">myčka</option>
              <option value="sušička">sušička</option>
            </select>
          </div>

          <div className="md:col-span-1">
            <label className="block text-[#35506e] mb-1 font-semibold">Značka</label>
            <input
              name="brand"
              type="text"
              placeholder="např. Bosch, LG..."
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[#35506e] mb-1 font-semibold">Popis problému</label>
            <textarea
              name="Problem description"
              rows={4}
              placeholder="popis problému"
              className="w-full p-3 rounded-xl border border-[#bfd4ee] bg-white focus:outline-none focus:ring-2 focus:ring-[#1d67c2]"
            />
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-[#1d67c2] hover:bg-[#134d95] text-white font-bold text-lg py-3 px-8 rounded-2xl shadow-lg shadow-[#1d67c2]/25 transition"
            >
              Objednat opravu ještě dnes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
