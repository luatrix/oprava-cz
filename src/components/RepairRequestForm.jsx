import React, { useState } from 'react';

export default function RepairRequestForm({ submittedMessageClassName = 'md:col-span-2' }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {submitted && (
        <div className={`${submittedMessageClassName} text-center text-green-700 font-semibold text-lg mb-6`}>
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
          <label className="block text-gray-700 mb-1">Jméno</label>
          <input
            name="name"
            type="text"
            placeholder="vaše jméno"
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-1">Telefon</label>
          <input
            name="phone"
            type="text"
            placeholder="Váš telefon"
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="@"
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-1">Adresa</label>
          <input
            name="Address"
            type="text"
            placeholder="Ulice, město"
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-1">Typ domácího spotřebiče</label>
          <select
            name="type"
            required
            onInvalid={(e) => e.target.setCustomValidity('Prosím, vyberte typ spotřebiče.')}
            onInput={(e) => e.target.setCustomValidity('')}
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Vyberte typ --</option>
            <option value="pračka">pračka</option>
            <option value="myčka">myčka</option>
            <option value="sušička">sušička</option>
          </select>
        </div>

        <div className="md:col-span-1">
          <label className="block text-gray-700 mb-1">Značka</label>
          <input
            name="brand"
            type="text"
            placeholder="např. Bosch, LG..."
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 mb-1">Popis problému</label>
          <textarea
            name="Problem description"
            rows={4}
            placeholder="popis problému"
            className="w-full p-3 rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 px-8 rounded-xl shadow transition"
          >
            Objednat opravu ještě dnes
          </button>
        </div>
      </form>
    </>
  );
}
