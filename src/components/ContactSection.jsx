import React from 'react';
import RepairRequestForm from './RepairRequestForm';

export default function ContactSection() {
  return (
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
        <RepairRequestForm />
      </div>
    </section>
  );
}
