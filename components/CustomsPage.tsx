
import React from 'react';
import { FileText, Shield, Globe, ArrowRight, CheckCircle, ClipboardList, FileCheck, Truck } from 'lucide-react';

interface CustomsPageProps {
  lang: 'EN' | 'NL';
  onQuote: () => void;
}

const CustomsPage: React.FC<CustomsPageProps> = ({ lang, onQuote }) => {
  const isEN = lang === 'EN';

  const services = [
    {
      icon: <Globe className="w-7 h-7" />,
      title: isEN ? 'United Kingdom (Post-Brexit)' : 'Verenigd Koninkrijk (Post-Brexit)',
      body: isEN
        ? "We've cleared UK freight since the first day after Brexit. Full import/export declarations, DAP/DDP/DAT incoterms, bonded warehouse coordination. No delays at Felixstowe or Dover."
        : 'We regelen VK-vracht al sinds de eerste dag na Brexit. Volledige in- en uitvoerdeclaraties, DAP/DDP/DAT incoterms, coördinatie van douane-entrepots. Geen vertragingen bij Felixstowe of Dover.',
      bullets: isEN
        ? ['Import & export declarations', 'DAP, DDP, DAT incoterms', 'Felixstowe & Dover covered', 'Bonded warehouse coordination']
        : ['In- en uitvoerdeclaraties', 'DAP, DDP, DAT incoterms', 'Felixstowe & Dover gedekt', 'Douane-entrepot coördinatie'],
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: isEN ? 'Norway (Non-EU / EEA)' : 'Noorwegen (Niet-EU / EER)',
      body: isEN
        ? 'Regular consolidation runs Rotterdam–Oslo. We handle EEA customs formalities end-to-end so your cargo crosses without surprises.'
        : 'Regelmatige consolidatieritjes Rotterdam–Oslo. Wij regelen EER-douaneformaliteiten van begin tot eind zodat uw lading zonder verrassingen de grens oversteekt.',
      bullets: isEN
        ? ['EEA customs formalities', 'Regular consolidation runs', 'End-to-end from Rotterdam', 'Cost-efficient groupage']
        : ['EER-douaneformaliteiten', 'Regelmatige consolidatieritjes', 'Van begin tot eind vanuit Rotterdam', 'Kostenefficiënte groupage'],
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: isEN ? 'Onward EU Transit' : 'Onward EU Transit',
      body: isEN
        ? 'T1/T2 transit documents for cargo continuing across EU member states. AEO Full authorization means fast-track processing, less waiting, no costly detentions.'
        : 'T1/T2-transitdocumenten voor lading die de EU-lidstaten doorkruist. AEO Volledige autorisatie betekent versnelde verwerking, minder wachten, geen kostbare ophouding.',
      bullets: isEN
        ? ['T1 / T2 transit documents', 'AEO Full authorization', 'Fast-track at every border', 'All EU member states']
        : ['T1/T2-transitdocumenten', 'AEO Volledige autorisatie', 'Versnelde verwerking aan elke grens', 'Alle EU-lidstaten'],
    },
  ];

  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: isEN ? 'Share your shipment details' : 'Deel uw verzendgegevens',
      desc: isEN
        ? 'Tell us origin, destination, commodity, and incoterms. We advise the most efficient customs route.'
        : 'Vertel ons de herkomst, bestemming, goederen en incoterms. Wij adviseren de meest efficiënte douaneroute.',
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: isEN ? 'We prepare all documents' : 'Wij bereiden alle documenten voor',
      desc: isEN
        ? 'CMR, bill of lading, customs declaration, T1/T2. Everything handled in Rotterdam before departure.'
        : 'CMR, cognossement, douaneaangifte, T1/T2. Alles geregeld in Rotterdam vóór vertrek.',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: isEN ? 'Cargo clears, you receive updates' : 'Lading klaar, u ontvangt updates',
      desc: isEN
        ? 'Real-time status at every border crossing. Your dedicated Rotterdam contact is always reachable.'
        : 'Realtime status bij elke grensovergang. Uw vaste Rotterdam-contactpersoon is altijd bereikbaar.',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">

      {/* Hero */}
      <div className="relative bg-navy overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eu-yellow text-navy text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-eu-yellow/20">
            <Shield className="w-4 h-4" /> {isEN ? 'AEO Certified Customs Broker' : 'AEO Gecertificeerd Douaneagent'}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-[0.95]">
            {isEN ? 'Customs.' : 'Douane.'}<br />
            <span className="text-eu-yellow">{isEN ? 'Handled.' : 'Geregeld.'}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mt-6">
            {isEN
              ? 'AEO-certified from Rotterdam. UK, Norway, and EU. We manage every declaration, every document, at every border.'
              : 'AEO-gecertificeerd vanuit Rotterdam. VK, Noorwegen en EU. Wij regelen elke declaratie, elk document, aan elke grens.'}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-eu-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-navy/20">
            {[
              { val: '35+', label: isEN ? 'Years Experience' : 'Jaar Ervaring' },
              { val: 'AEO Full', label: isEN ? 'Authorization Level' : 'Autorisatieniveau' },
              { val: '3', label: isEN ? 'Jurisdictions Covered' : 'Jurisdicties Gedekt' },
            ].map((stat, i) => (
              <div key={i} className="py-6 px-4 text-center">
                <p className="text-2xl md:text-3xl font-black text-navy">{stat.val}</p>
                <p className="text-[11px] font-bold text-navy/70 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services — 3 horizontal rows */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-black text-eu-yellow uppercase tracking-widest">
              {isEN ? 'What We Cover' : 'Wat Wij Regelen'}
            </span>
            <h2 className="text-4xl font-black text-navy mt-2">
              {isEN ? 'Three Borders. One Partner.' : 'Drie Grenzen. Eén Partner.'}
            </h2>
          </div>
          <div className="space-y-6">
            {services.map((svc, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-8 p-8 md:p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-eu-yellow/40 transition-colors"
              >
                <div className="flex-shrink-0 flex items-start gap-4 md:w-80">
                  <div className="p-3 bg-navy rounded-xl text-eu-yellow flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-navy leading-tight">{svc.title}</h3>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">{svc.body}</p>
                  </div>
                </div>
                <div className="md:border-l border-slate-200 md:pl-8 flex-1">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {svc.bullets.map((b, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-eu-yellow flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-black text-eu-yellow uppercase tracking-widest">
              {isEN ? 'How It Works' : 'Hoe Het Werkt'}
            </span>
            <h2 className="text-4xl font-black text-navy mt-2">
              {isEN ? 'Three Steps to Clear.' : 'Drie Stappen om te Klaren.'}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="text-3xl font-black text-eu-yellow/30 w-8 flex-shrink-0 leading-none">{i + 1}</div>
                <div className="p-3 bg-navy rounded-xl text-eu-yellow flex-shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1 border-l border-slate-200 pl-6">
                  <h4 className="text-xl font-black text-navy mb-2">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-12 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eu-yellow/10 text-eu-yellow text-xs font-black uppercase tracking-widest mb-4">
                <Shield className="w-3 h-3" /> AEO Full
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
                {isEN ? 'Get a customs quote in 90 minutes.' : 'Ontvang een douaneofferte binnen 90 minuten.'}
              </h2>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                {isEN
                  ? 'No hidden fees. No delays. Our AEO certification means fast-track processing at every border crossing.'
                  : 'Geen verborgen kosten. Geen vertragingen. Onze AEO-certificering betekent versnelde verwerking aan elke grensovergang.'}
              </p>
            </div>
            <button
              onClick={onQuote}
              className="flex-shrink-0 flex items-center gap-3 bg-eu-yellow hover:bg-yellow-500 text-navy px-8 py-4 rounded-xl font-black transition-all shadow-xl shadow-eu-yellow/20 group whitespace-nowrap"
            >
              {isEN ? 'Request Customs Quote' : 'Douaneofferte Aanvragen'}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomsPage;
