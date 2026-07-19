import React from 'react';

// Native <details> keeps every answer in the DOM (crawler- and AI-readable)
// with zero JS. Pair with FAQPage JSON-LD on the page for rich results.
export default function FaqSection({ heading = 'Časté dotazy', items = [] }) {
  if (!items.length) return null;
  return (
    <section className="bg-white py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10">{heading}</h2>
        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.q}
              className="group bg-[#f4f7fa] rounded-xl border border-blue-100 px-5 py-4"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-gray-900 list-none">
                <span>{item.q}</span>
                <span className="text-blue-600 transition-transform group-open:rotate-45 text-2xl leading-none shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
