import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">Dokonalá Oprava</h3>
          <p className="text-sm opacity-75">Oprava domácích spotřebičů po celé Praze a okolí</p>
          <p className="text-sm mt-2 opacity-75">&copy; {new Date().getFullYear()} alexkanonovich.cz</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Informace</h4>
          <p className="text-sm">
            <strong>Telefon:</strong> <br />
            <a href="tel:+420730520302" className="text-blue-400 hover:underline">
              +420 730 520 302
            </a>
            <br />
            <span className="text-sm">(můžete psát i na <strong>WhatsApp</strong>)</span>
          </p>
          <p className="mt-4 text-sm">
            <strong>E-mail:</strong> <br />
            <a href="mailto:dokonalaoprava@gmail.com" className="text-blue-400 hover:underline">
              dokonalaoprava@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Adresa a pracovní doba</h4>
          <p className="text-sm">
            Černokostelecká 1806/123
            <br />
            100 00 Praha 10 – Strašnice
          </p>
          <p className="mt-2 text-sm">IČO: 19307896</p>

          <p className="mt-4 text-sm">
            <strong>Pracovní doba:</strong>
            <br />
            Po – Pá: 7.00 – 19.00
            <br />
            So: 7.00 – 16.00
          </p>
          <p className="mt-2 text-sm">
            <strong>Pro objednání opravy:</strong>
            <br />
            volejte kdykoliv mezi 7.00 – 22.00
          </p>
        </div>
      </div>
    </footer>
  );
}
