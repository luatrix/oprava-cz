import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import RepairRequestForm from './RepairRequestForm';
import { trackedPhoneProps, trackedWhatsAppProps } from '../utils/analytics';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-blue-50 to-blue-100 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-xl lg:grid-cols-[0.75fr_1.25fr]">
        <div className="bg-blue-700 p-7 text-white sm:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-100">Objednání opravy</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Domluvte si návštěvu technika
          </h2>
          <p className="mt-4 leading-relaxed text-blue-50">Popište spotřebič a závadu. Pro domluvu konkrétního termínu vás kontaktujeme.</p>
          <div className="mt-8 space-y-3">
            <a {...trackedPhoneProps('contact_panel')} className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 font-bold text-blue-800 hover:bg-blue-50"><FaPhoneAlt aria-hidden="true" /> +420 730 520 302</a>
            <a {...trackedWhatsAppProps('contact_panel')} className="flex items-center gap-3 rounded-xl bg-emerald-600 px-5 py-4 font-bold hover:bg-emerald-500"><FaWhatsapp className="text-xl" aria-hidden="true" /> Napsat na WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-blue-100">Objednávky denně 7:00–22:00<br />Servis: Po–Pá 7:00–19:00, So 7:00–16:00</p>
        </div>
        <div className="p-7 sm:p-10">
          <h3 className="mb-2 text-2xl font-extrabold text-slate-950">Nezávazná poptávka</h3>
          <p className="mb-7 text-slate-600">Povinný je pouze telefon, typ spotřebiče a popis problému.</p>
          <RepairRequestForm />
        </div>
      </div>
    </section>
  );
}
