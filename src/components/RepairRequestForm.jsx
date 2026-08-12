import React, { useState } from 'react';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { trackConversion } from '../utils/analytics';

export default function RepairRequestForm({ submittedMessageClassName = 'md:col-span-2' }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('page', typeof window !== 'undefined' ? window.location.href : '');

    try {
      const response = await fetch('https://formspree.io/f/mnndkdvl', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);

      trackConversion('form_submit_success', {
        appliance_type: formData.get('type'),
        placement: 'contact_form',
      });

      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'ads_conversion___1', {
          event_category: 'conversion',
          event_label: 'Dokonala Oprava - odeslani formulare',
          value: 1,
        });
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      trackConversion('form_submit_error', { placement: 'contact_form' });
      setStatus('error');
    }
  };

  const fieldClass = 'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100';

  return (
    <>
      <div className={`${submittedMessageClassName} ${status === 'success' ? 'block' : 'hidden'} rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center text-emerald-900`} role="status" aria-live="polite">
        <FaCheckCircle className="mx-auto mb-2 text-2xl text-emerald-600" aria-hidden="true" />
        <strong className="block text-lg">Poptávka byla odeslána.</strong>
        <span className="text-sm">Ozveme se na uvedený telefon nebo e-mail.</span>
      </div>

      <div className={`${submittedMessageClassName} ${status === 'error' ? 'block' : 'hidden'} rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-800`} role="alert" aria-live="assertive">
        Odeslání se nezdařilo. Zavolejte prosím na <a href="tel:+420730520302" className="font-bold underline">+420 730 520 302</a> nebo to zkuste znovu.
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2" aria-label="Poptávka opravy spotřebiče">
        <div>
          <label htmlFor="repair-name" className="mb-1.5 block text-sm font-bold text-slate-700">Jméno</label>
          <input id="repair-name" name="name" type="text" autoComplete="name" placeholder="Vaše jméno" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="repair-phone" className="mb-1.5 block text-sm font-bold text-slate-700">Telefon <span className="text-red-600">*</span></label>
          <input id="repair-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required placeholder="např. 777 123 456" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="repair-type" className="mb-1.5 block text-sm font-bold text-slate-700">Spotřebič <span className="text-red-600">*</span></label>
          <select id="repair-type" name="type" required className={fieldClass} defaultValue="">
            <option value="" disabled>Vyberte spotřebič</option>
            <option value="pračka">Pračka</option>
            <option value="myčka">Myčka</option>
            <option value="sušička">Sušička</option>
          </select>
        </div>

        <div>
          <label htmlFor="repair-brand" className="mb-1.5 block text-sm font-bold text-slate-700">Značka</label>
          <input id="repair-brand" name="brand" type="text" placeholder="např. Bosch, LG, Miele" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="repair-address" className="mb-1.5 block text-sm font-bold text-slate-700">Městská část / adresa</label>
          <input id="repair-address" name="address" type="text" autoComplete="street-address" placeholder="např. Praha 6 – Dejvice" className={fieldClass} />
        </div>

        <div>
          <label htmlFor="repair-email" className="mb-1.5 block text-sm font-bold text-slate-700">E-mail</label>
          <input id="repair-email" name="email" type="email" autoComplete="email" placeholder="vas@email.cz" className={fieldClass} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="repair-problem" className="mb-1.5 block text-sm font-bold text-slate-700">Co spotřebič dělá? <span className="text-red-600">*</span></label>
          <textarea id="repair-problem" name="problem" rows={4} required placeholder="Popište závadu, chybový kód nebo neobvyklý zvuk. Čím více informací, tím lépe se připravíme." className={fieldClass} />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="repair-company">Firma</label>
          <input id="repair-company" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
        </div>

        <div className="md:col-span-2">
          <button type="submit" disabled={status === 'submitting'} className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-7 py-4 text-lg font-extrabold text-white shadow-lg transition hover:bg-blue-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 disabled:cursor-wait disabled:opacity-70 sm:w-auto">
            <FaPaperPlane aria-hidden="true" /> {status === 'submitting' ? 'Odesílám…' : 'Odeslat nezávaznou poptávku'}
          </button>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">Odesláním souhlasíte s použitím zadaných údajů pouze pro vyřízení této poptávky.</p>
        </div>
      </form>
    </>
  );
}
