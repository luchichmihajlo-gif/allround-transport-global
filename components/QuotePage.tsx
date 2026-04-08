
import React, { useState, useRef } from 'react';
import { Send, CheckCircle, Shield, Clock, MapPin, Package, User, Building2, Phone, Mail, ArrowRight } from 'lucide-react';

interface QuotePageProps {
  lang: 'EN' | 'NL';
  onNavigate?: (page: string) => void;
}

const COMPANY_EMAIL = 'info@allround-transport.nl';

const QuotePage: React.FC<QuotePageProps> = ({ lang, onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = formRef.current;
    if (!form) return;

    const name    = (form.querySelector('[name="full_name"]')  as HTMLInputElement)?.value  || '';
    const company = (form.querySelector('[name="company"]')    as HTMLInputElement)?.value  || '';
    const email   = (form.querySelector('[name="email"]')      as HTMLInputElement)?.value  || '';
    const phone   = (form.querySelector('[name="phone"]')      as HTMLInputElement)?.value  || '';
    const origin  = (form.querySelector('[name="origin"]')     as HTMLInputElement)?.value  || '';
    const dest    = (form.querySelector('[name="destination"]') as HTMLInputElement)?.value || '';
    const type    = (form.querySelector('[name="cargo_type"]') as HTMLSelectElement)?.value || '';
    const weight  = (form.querySelector('[name="weight"]')     as HTMLInputElement)?.value  || '';
    const volume  = (form.querySelector('[name="volume"]')     as HTMLInputElement)?.value  || '';
    const message = (form.querySelector('[name="message"]')    as HTMLTextAreaElement)?.value || '';

    const subject = encodeURIComponent(`[Quote Request] ${origin || 'Origin'} → ${dest || 'Destination'} | ${name}`);

    const body = encodeURIComponent(
`NEW QUOTE REQUEST - Allround Transport
=======================================

CONTACT INFORMATION
-------------------
Name:     ${name}
Company:  ${company || 'N/A'}
Email:    ${email}
Phone:    ${phone}

SHIPMENT DETAILS
----------------
Origin:       ${origin}
Destination:  ${dest}

CARGO INFORMATION
-----------------
Cargo type:   ${type}
Weight (kg):  ${weight || 'N/A'}
Volume (m³):  ${volume || 'N/A'}

ADDITIONAL REQUIREMENTS
-----------------------
${message || '(none)'}

---
Submitted via allround-transport.nl
`
    );

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      window.open(`mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`, '_blank');
    }, 600);
  };

  /* ── Success state ── */
  if (submitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-500" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-black text-navy mb-4">
            {lang === 'EN' ? 'Quote Request Ready!' : 'Offerteaanvraag Klaar!'}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            {lang === 'EN'
              ? 'Your email client has opened with all details pre-filled. Press Send to deliver your request to our team. We respond within 90 minutes during business hours.'
              : 'Uw e-mailclient is geopend met alle gegevens vooraf ingevuld. Druk op Verzenden om uw aanvraag naar ons team te sturen. Wij reageren binnen 90 minuten.'}
          </p>
          <div className="bg-slate-50 rounded-2xl p-4 mb-8 text-sm text-slate-600 flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-eu-yellow flex-shrink-0" aria-hidden="true" />
            {lang === 'EN' ? 'Sending to:' : 'Verzenden naar:'} <strong>{COMPANY_EMAIL}</strong>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setSubmitted(false)}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-navy py-4 rounded-xl font-bold transition-all"
            >
              {lang === 'EN' ? 'New Quote' : 'Nieuwe Offerte'}
            </button>
            {onNavigate && (
              <button
                onClick={() => onNavigate('home')}
                className="flex-1 bg-navy hover:bg-slate-800 text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                {lang === 'EN' ? 'Back to Home' : 'Terug naar Home'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left: Info */}
          <aside className="lg:w-1/3">
            <h1 className="text-4xl font-black text-navy mb-4 leading-tight">
              {lang === 'EN' ? 'Get Your' : 'Ontvang Uw'} <br />
              <span className="text-eu-yellow">{lang === 'EN' ? 'Custom Quote' : 'Offerte op Maat'}</span>
            </h1>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              {lang === 'EN'
                ? "Fill in your details and we'll send a competitive international freight quote to your inbox within 90 minutes."
                : 'Vul uw gegevens in en wij sturen u binnen 90 minuten een scherpe internationale transportofferte.'}
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: <Clock className="w-6 h-6 text-eu-yellow" />, title: lang === 'EN' ? 'Fast Response' : 'Snelle Reactie', sub: lang === 'EN' ? 'Reply within 90 minutes during business hours.' : 'Reactie binnen 90 minuten tijdens kantooruren.' },
                { icon: <Shield className="w-6 h-6 text-eu-yellow" />, title: lang === 'EN' ? 'AEO Certified' : 'AEO Gecertificeerd', sub: lang === 'EN' ? 'Compliant, secure handling for all shipments.' : 'Conforme, veilige afhandeling voor alle zendingen.' },
                { icon: <MapPin className="w-6 h-6 text-eu-yellow" />, title: lang === 'EN' ? '38+ Destinations' : '38+ Bestemmingen', sub: lang === 'EN' ? 'Direct lines from Rotterdam across Europe.' : 'Directe lijnen vanuit Rotterdam door Europa.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex-shrink-0" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy">{item.title}</h3>
                    <p className="text-sm text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-navy rounded-3xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10" aria-hidden="true">
                <Building2 className="w-24 h-24" />
              </div>
              <p className="text-xs font-bold text-eu-yellow uppercase tracking-widest mb-4">
                {lang === 'EN' ? 'Contact Us Directly' : 'Direct Contact'}
              </p>
              <a href="tel:+31102956333" className="flex items-center gap-2 text-white hover:text-eu-yellow transition-colors mb-3 font-semibold" aria-label="Call Allround Transport">
                <Phone className="w-4 h-4 text-eu-yellow" aria-hidden="true" /> +31 (0)10 295 63 33
              </a>
              <a href="mailto:info@allround-transport.nl" className="flex items-center gap-2 text-white hover:text-eu-yellow transition-colors font-semibold text-sm" aria-label="Email Allround Transport">
                <Mail className="w-4 h-4 text-eu-yellow" aria-hidden="true" /> info@allround-transport.nl
              </a>
            </div>
          </aside>

          {/* Right: Form */}
          <section className="lg:w-2/3" aria-label={lang === 'EN' ? 'Quote request form' : 'Offerteaanvraagformulier'}>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/80 border border-slate-100">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8" noValidate>

                {/* Contact */}
                <fieldset>
                  <legend className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-eu-yellow" aria-hidden="true" />
                    {lang === 'EN' ? 'Contact Information' : 'Contactgegevens'}
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full_name" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Full Name *' : 'Volledige Naam *'}</label>
                      <input id="full_name" name="full_name" required type="text" autoComplete="name" aria-required="true"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Company' : 'Bedrijf'}</label>
                      <input id="company" name="company" type="text" autoComplete="organization"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Email Address *' : 'E-mailadres *'}</label>
                      <input id="email" name="email" required type="email" autoComplete="email" aria-required="true"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Phone Number *' : 'Telefoonnummer *'}</label>
                      <input id="phone" name="phone" required type="tel" autoComplete="tel" aria-required="true"
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                    </div>
                  </div>
                </fieldset>

                {/* Shipment */}
                <fieldset className="pt-8 border-t border-slate-100">
                  <legend className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-eu-yellow" aria-hidden="true" />
                    {lang === 'EN' ? 'Shipment Details' : 'Verzendgegevens'}
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="origin" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Origin (City / Country) *' : 'Herkomst (Stad / Land) *'}</label>
                      <input id="origin" name="origin" required type="text" aria-required="true"
                        placeholder={lang === 'EN' ? 'e.g. Rotterdam, NL' : 'bijv. Rotterdam, NL'}
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="destination" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Destination (City / Country) *' : 'Bestemming (Stad / Land) *'}</label>
                      <input id="destination" name="destination" required type="text" aria-required="true"
                        placeholder={lang === 'EN' ? 'e.g. Stockholm, SE' : 'bijv. Stockholm, SE'}
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                    </div>
                  </div>
                </fieldset>

                {/* Cargo */}
                <fieldset className="pt-8 border-t border-slate-100">
                  <legend className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
                    <Package className="w-5 h-5 text-eu-yellow" aria-hidden="true" />
                    {lang === 'EN' ? 'Cargo Information' : 'Lading Informatie'}
                  </legend>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="cargo_type" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Cargo Type' : 'Type Lading'}</label>
                        <select id="cargo_type" name="cargo_type"
                          className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all">
                          <option value="General Cargo">{lang === 'EN' ? 'General Cargo' : 'Algemene Lading'}</option>
                          <option value="Steel Coils">{lang === 'EN' ? 'Steel Coils' : 'Staalrollen'}</option>
                          <option value="Temperature Controlled">{lang === 'EN' ? 'Temperature Controlled' : 'Gekoeld Transport'}</option>
                          <option value="Oversized / Special">{lang === 'EN' ? 'Oversized / Special' : 'Oversized / Speciaal'}</option>
                          <option value="Personal Effects">{lang === 'EN' ? 'Personal Effects / Moving' : 'Persoonlijke Goederen'}</option>
                          <option value="ADR Hazardous">{lang === 'EN' ? 'ADR Hazardous Goods' : 'ADR Gevaarlijke Stoffen'}</option>
                          <option value="Sea Freight FCL">Sea Freight (FCL)</option>
                          <option value="Sea Freight LCL">Sea Freight (LCL)</option>
                          <option value="Air Freight">{lang === 'EN' ? 'Air Freight' : 'Luchtvracht'}</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="weight" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Weight (kg)' : 'Gewicht (kg)'}</label>
                        <input id="weight" name="weight" type="number" min="1" placeholder="e.g. 5000"
                          className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="volume" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Volume (m³)' : 'Volume (m³)'}</label>
                        <input id="volume" name="volume" type="number" min="0.1" step="0.1" placeholder="e.g. 20"
                          className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase">{lang === 'EN' ? 'Message / Special Requirements' : 'Bericht / Speciale Wensen'}</label>
                      <textarea id="message" name="message" rows={4}
                        placeholder={lang === 'EN' ? 'Describe any special requirements, preferred collection dates, or additional info…' : 'Beschrijf speciale wensen, voorkeursdatums of aanvullende informatie…'}
                        className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-eu-yellow focus:outline-none transition-all resize-none" />
                    </div>
                  </div>
                </fieldset>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={sending}
                    aria-label={lang === 'EN' ? 'Send freight quote request to Allround Transport' : 'Offerteaanvraag versturen naar Allround Transport'}
                    className="w-full bg-eu-yellow hover:bg-yellow-500 disabled:opacity-70 text-navy py-5 rounded-2xl font-black text-lg shadow-xl shadow-yellow-500/20 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
                  >
                    {sending
                      ? (lang === 'EN' ? 'Preparing your email…' : 'E-mail wordt voorbereid…')
                      : (<><Send className="w-6 h-6" aria-hidden="true" /> {lang === 'EN' ? 'Send Quote Request' : 'Offerteaanvraag Versturen'}</>)
                    }
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-3">
                    {lang === 'EN'
                      ? 'This opens your email client pre-filled. Just press Send to reach info@allround-transport.nl'
                      : 'Uw e-mailclient wordt vooraf ingevuld geopend. Druk op Verzenden om info@allround-transport.nl te bereiken'}
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default QuotePage;
