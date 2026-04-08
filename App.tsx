
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantage from './components/Advantage';
import TruckPullSlider from './components/TruckPullSlider';
import DestinationsPage from './components/DestinationsPage';
import CountryPage from './components/CountryPage';
import OtherServicesPage from './components/OtherServicesPage';
import CustomsPage from './components/CustomsPage';
import RoadTransportPage from './components/RoadTransportPage';
import CoilTransportPage from './components/CoilTransportPage';
import IndividualPage from './components/IndividualPage';
import QuotePage from './components/QuotePage';
import { CountryData } from './constants';
import { translations } from './translations';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Shield, Award, CheckCircle, Printer, ArrowRight, ClipboardList, FileCheck, Truck as TruckIcon, Cog } from 'lucide-react';

// Per-page SEO: update document title, meta description and canonical
const SEO_META: Record<string, { en: { title: string; desc: string }; nl: { title: string; desc: string } }> = {
  home: {
    en: { title: 'Allround Transport | International Freight from Rotterdam', desc: 'AEO-certified freight forwarder in Rotterdam. Road, sea, air & coil transport across Europe. Customs clearance UK & Norway. Quote in 90 minutes.' },
    nl: { title: 'Allround Transport | Internationaal Transport vanuit Rotterdam', desc: 'AEO-gecertificeerde expediteur in Rotterdam. Weg-, zee-, lucht- en coiltransport door Europa. Douane VK & Noorwegen. Offerte binnen 90 minuten.' },
  },
  'road-transport': {
    en: { title: 'Road Transport Europe | Allround Transport Rotterdam', desc: 'European road freight from Rotterdam: FTL, LTL, groupage and speed freight. 10+ truck types including coiltrailers. Daily departures to all EU destinations.' },
    nl: { title: 'Wegtransport Europa | Allround Transport Rotterdam', desc: 'Europees wegtransport vanuit Rotterdam: FTL, LTL, groupage en speed freight. 10+ vrachttypes inclusief coiltrailers. Dagelijkse vertrekken naar alle EU-bestemmingen.' },
  },
  destinations: {
    en: { title: 'Freight Destinations Across Europe | Allround Transport', desc: 'Allround Transport serves 38+ European countries from Rotterdam. Find transit times, logistics hubs, and direct freight routes for your shipment.' },
    nl: { title: 'Vrachtbestemmingen door Europa | Allround Transport', desc: 'Allround Transport bedient 38+ Europese landen vanuit Rotterdam. Vind transittijden, logistieke hubs en directe vrachtroutes voor uw zending.' },
  },
  customs: {
    en: { title: 'Customs Clearance UK, Norway & EU | Allround Transport', desc: 'AEO-certified customs brokerage for UK post-Brexit, Norway and EU transit. T1/T2 documents, DAP/DDP incoterms, fast-track at every border.' },
    nl: { title: 'Douaneafhandeling VK, Noorwegen & EU | Allround Transport', desc: 'AEO-gecertificeerde douanediensten voor VK post-Brexit, Noorwegen en EU-transit. T1/T2-documenten, DAP/DDP incoterms, versneld aan elke grens.' },
  },
  'other-services': {
    en: { title: 'Sea Freight & Air Freight | Allround Transport Rotterdam', desc: 'FCL and LCL sea freight plus express air cargo from Rotterdam worldwide. Door-to-door service, real-time tracking, full documentation included.' },
    nl: { title: 'Zeevracht & Luchtvracht | Allround Transport Rotterdam', desc: 'FCL en LCL zeevracht plus express luchtvracht vanuit Rotterdam wereldwijd. Deur-tot-deur, realtime tracking, volledige documentatie inbegrepen.' },
  },
  'coil-transport': {
    en: { title: 'Coil Transport Europe | Steel & Automotive Freight | Allround', desc: 'Specialized coiltrailer transport for steel and automotive industry across Europe. Daily routes, reinforced fleet, EN 12642-XL certified. Based in Rotterdam.' },
    nl: { title: 'Coiltransport Europa | Staal & Automotive | Allround Transport', desc: 'Gespecialiseerd coiltrailertransport voor staal- en automotive-industrie door Europa. Dagelijkse routes, versterkte vloot, EN 12642-XL gecertificeerd.' },
  },
  'emergency-shipments': {
    en: { title: 'Emergency & Speed Freight | Allround Transport Rotterdam', desc: '24/7 emergency freight from Rotterdam. Speed freight services across Europe with same-day dispatch. Call our emergency desk for urgent shipments.' },
    nl: { title: 'Spoedzendingen & Speed Freight | Allround Transport Rotterdam', desc: '24/7 spoedvracht vanuit Rotterdam. Speed freight door heel Europa met same-day verzending. Bel onze spoedbalie voor urgente zendingen.' },
  },
  individual: {
    en: { title: 'International Moving Services | Allround Transport Rotterdam', desc: 'International relocation for private individuals from Rotterdam. House removals to Italy, Spain, France & beyond. Competitive rates, no language barriers.' },
    nl: { title: 'Internationale Verhuisservice | Allround Transport Rotterdam', desc: 'Internationale verhuizing voor particulieren vanuit Rotterdam. Naar Italië, Spanje, Frankrijk en verder. Scherpe tarieven, geen taalbarrières.' },
  },
  quote: {
    en: { title: 'Request a Freight Quote | Allround Transport Rotterdam', desc: 'Get a competitive international freight quote within 90 minutes. Road, sea, air and coil transport from Rotterdam to 38+ European countries.' },
    nl: { title: 'Vrachtofferte Aanvragen | Allround Transport Rotterdam', desc: 'Ontvang binnen 90 minuten een scherpe internationale vrachtofferte. Weg-, zee-, lucht- en coiltransport vanuit Rotterdam naar 38+ Europese landen.' },
  },
};

function usePageSEO(page: string, lang: 'EN' | 'NL') {
  useEffect(() => {
    const key = page === 'country' ? 'destinations' : page;
    const meta = SEO_META[key]?.[lang === 'EN' ? 'en' : 'nl'] || SEO_META.home.en;

    // Update title
    document.title = meta.title;

    // Update or create description meta
    let descTag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descTag) { descTag = document.createElement('meta'); descTag.setAttribute('name', 'description'); document.head.appendChild(descTag); }
    descTag.setAttribute('content', meta.desc);

    // Update OG tags
    const setOG = (prop: string, val: string) => {
      let tag = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute('property', prop); document.head.appendChild(tag); }
      tag.setAttribute('content', val);
    };
    setOG('og:title', meta.title);
    setOG('og:description', meta.desc);

    // Update canonical
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) { canon = document.createElement('link'); canon.setAttribute('rel', 'canonical'); document.head.appendChild(canon); }
    const slug = key === 'home' ? '' : `/${key}`;
    canon.setAttribute('href', `https://www.allround-transport.nl${slug}`);
  }, [page, lang]);
}

// Scroll reveal: re-runs on every page navigation
function usePageReveal(page: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const timeout = setTimeout(() => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
        observer.observe(el);
      });
    }, 80);
    return () => { clearTimeout(timeout); observer.disconnect(); };
  }, [page]);
}

const LOGO_URL = "https://ci3.googleusercontent.com/meips/ADKq_Nalh8vh5ihyLRpmTeanZoUpOAAY76sBg2-Kv_pVpxa3MxMsCbNILJOocgiFOXAsiO1cgyU8ud-VBEXiO4Q3LKWiSoVLQWnAwky1-AGvz_DmC_KM8xf1czEr2TFzRQ9S1HkblgQYSJDmJ0PaDqUQjXUCTb8Ox4mRWw9cuziq-o2EKu0Uzw=s0-d-e1-ft#https://www.evofenedexbedrijvengids.nl/site/allround-transport-wegtransport/$File/allround-transport-intro.png";
const HARBOR_WORKING_VIDEO = "https://cdn.pixabay.com/video/2016/09/21/5361-183755255_large.mp4";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);
  const [lang, setLang] = useState<'EN' | 'NL'>('EN');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  usePageReveal(currentPage);
  usePageSEO(currentPage, lang);

  const t = translations[lang];

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const selectCountry = (country: CountryData) => {
    setSelectedCountry(country);
    setCurrentPage('country');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'destinations':
        return <DestinationsPage onSelectCountry={selectCountry} lang={lang} />;
      case 'country':
        return selectedCountry ? (
          <CountryPage 
            country={selectedCountry} 
            onBack={() => navigateTo('destinations')} 
            onQuote={() => navigateTo('quote')}
            lang={lang} 
          />
        ) : (
          <DestinationsPage onSelectCountry={selectCountry} lang={lang} />
        );
      case 'other-services':
        return <OtherServicesPage lang={lang} onQuote={() => navigateTo('quote')} />;
      case 'customs':
        return <CustomsPage lang={lang} onQuote={() => navigateTo('quote')} />;
      case 'road-transport':
        return <RoadTransportPage onNavigate={navigateTo} lang={lang} />;
      case 'coil-transport':
        return <CoilTransportPage onBack={() => navigateTo('road-transport')} onQuote={() => navigateTo('quote')} lang={lang} />;
      case 'individual':
        return <IndividualPage lang={lang} onQuote={() => navigateTo('quote')} />;
      case 'quote':
        return <QuotePage lang={lang} onNavigate={navigateTo} />;
      case 'home':
      default:
        return (
          <>
            <Hero lang={lang} onQuote={() => navigateTo('quote')} onDestinations={() => navigateTo('destinations')} />

            {/* 4 Questions Strip */}
            <section className="bg-navy border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
                  {(t.home.questions as Array<{q: string; a: string}>).map((item, i) => (
                    <div key={i} className="px-8 py-10">
                      <p className="text-eu-yellow font-black text-xs uppercase tracking-widest mb-3">{item.q}</p>
                      <p className="text-white/80 text-base leading-relaxed">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top row: image left + title right */}
                <div className="flex flex-col lg:flex-row gap-16 items-start mb-12">
                  <div className="lg:w-1/2 reveal-left">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                      alt="Planning process"
                      className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
                    />
                  </div>
                  <div className="lg:w-1/2 pt-4 reveal-right">
                    <span className="text-xs font-black text-eu-yellow uppercase tracking-widest">
                      {lang === 'EN' ? 'How It Works' : 'Hoe Het Werkt'}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black text-navy mt-3 mb-6">
                      {lang === 'EN' ? 'Process' : 'Proces'}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md">
                      {lang === 'EN'
                        ? 'From first contact to final delivery. A clear, simple process with no surprises.'
                        : 'Van eerste contact tot uiteindelijke levering. Een helder, eenvoudig proces zonder verrassingen.'}
                    </p>
                    <button
                      onClick={() => navigateTo('quote')}
                      className="inline-flex items-center gap-3 bg-eu-yellow hover:bg-yellow-500 text-navy px-8 py-4 rounded-xl font-black transition-all shadow-lg group"
                    >
                      {lang === 'EN' ? 'Request a Quote' : 'Offerte Aanvragen'}
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* 3 Step Cards */}
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: <ClipboardList className="w-6 h-6" />,
                      title: lang === 'EN' ? 'Request a Quote' : 'Offerte Aanvragen',
                      desc: lang === 'EN'
                        ? 'Tell us what you need to move, where, and when. We respond within 90 minutes with a clear, no-obligation quote.'
                        : 'Vertel ons wat u wilt vervoeren, waarheen en wanneer. Wij reageren binnen 90 minuten met een heldere offerte zonder verplichtingen.',
                    },
                    {
                      icon: <FileCheck className="w-6 h-6" />,
                      title: lang === 'EN' ? 'Approval of the Plan' : 'Goedkeuring van het Plan',
                      desc: lang === 'EN'
                        ? 'We agree on routes, timing, and costs. No fine print, no surprises. Just a plan you can rely on.'
                        : 'We komen een route, timing en kosten overeen. Geen kleine lettertjes, geen verrassingen. Gewoon een plan waar u op kunt vertrouwen.',
                    },
                    {
                      icon: <TruckIcon className="w-6 h-6" />,
                      title: lang === 'EN' ? 'Pickup and Delivery' : 'Ophalen en Afleveren',
                      desc: lang === 'EN'
                        ? 'We handle everything from collection to final delivery. You track progress in real time and we keep you informed every step of the way.'
                        : 'Wij regelen alles van ophalen tot uiteindelijke levering. U volgt de voortgang in real time en wij houden u bij elke stap op de hoogte.',
                    },
                  ].map((step, i) => (
                    <div key={i} className={`reveal flex items-start gap-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-eu-yellow/30 hover:shadow-md transition-all delay-${i * 150 + 100}`}>
                      <div className="text-4xl font-black text-slate-200 w-10 flex-shrink-0 leading-none">{i + 1}</div>
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

            {/* Flagship Section: Coil Transport Highlight */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative">
                   <div className="absolute -top-20 -left-20 w-64 h-64 bg-eu-yellow/5 rounded-full blur-3xl"></div>
                   <div className="lg:w-1/2 relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy text-eu-yellow text-[10px] font-black uppercase tracking-widest mb-6">
                        <Cog className="w-3 h-3" /> {lang === 'EN' ? 'Specialized Flagship' : 'Gespecialiseerd Vlaggenschip'}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                        {lang === 'EN' ? 'Flagship Service: Coil Transport' : 'Vlaggenschip Dienst: Coil Transport'}
                      </h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {lang === 'EN'
                          ? 'Specialized coiltrailers, engineered for the steel and automotive industries. Daily routes. All of Europe.'
                          : 'Gespecialiseerde coiltrailers, ontworpen voor de staal- en automobielindustrie. Dagelijkse routes. Heel Europa.'}
                      </p>
                      <button 
                        onClick={() => navigateTo('coil-transport')}
                        className="flex items-center gap-3 bg-navy hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg group"
                      >
                        {lang === 'EN' ? 'Explore Flagship Equipment' : 'Ontdek Vlaggenschip Materieel'}
                        <ArrowRight className="w-5 h-5 text-eu-yellow transition-transform group-hover:translate-x-1" />
                      </button>
                   </div>
                   <div className="lg:w-1/2 relative">
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img 
                          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                          alt="Industrial Coil Storage" 
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-navy/20"></div>
                      </div>
                   </div>
                </div>
              </div>
            </section>

            <Services lang={lang} onNavigate={navigateTo} />

            {/* ── F&Q Section ── */}
            {(() => {
              const faqs = lang === 'EN' ? [
                {
                  q: 'What types of cargo do you transport?',
                  a: 'We handle virtually all cargo types: full container loads (FCL), less-than-container (LCL), groupage, oversized/special cargo, steel coils, temperature-controlled goods, ADR hazardous materials, and project cargo. Road, sea, and air. All from Rotterdam.',
                },
                {
                  q: 'How do I request a quote?',
                  a: 'Click "Request a Quote" on our website, call +31 (0)10 295 63 33, or email info@allround-transport.nl. We respond with a clear, no-obligation quote within 90 minutes during business hours.',
                },
                {
                  q: 'Do you handle customs and documentation?',
                  a: 'Yes, fully. We are AEO-certified and manage all customs declarations for UK post-Brexit, Norway, and international onward EU transport. We handle T1/T2 transit documents, CMR waybills, bills of lading, and all paperwork end-to-end.',
                },
                {
                  q: 'What are your delivery timeframes?',
                  a: 'European destinations typically take 24–96 hours from Rotterdam. Scandinavia: 24–72h. UK: 24–48h. Iberian peninsula: 3–5 days. Balkans: 4–7 days. For urgent cargo, our Speed Freight service operates 24/7 with same-day dispatch available.',
                },
                {
                  q: 'Can you handle oversized or specialist cargo?',
                  a: 'Absolutely. We specialize in coil transport (steel/automotive industry), ADR hazardous goods, exceptional/oversized transport, and cross-trading. Our reinforced coiltrailer fleet is engineered specifically for non-standard heavy loads.',
                },
                {
                  q: 'How do I track my shipment?',
                  a: 'All shipments receive real-time GPS monitoring. Your dedicated Rotterdam contact keeps you updated at every stage. For urgent shipments we provide direct driver communication. Full tracking visibility from pickup to final delivery.',
                },
              ] : [
                {
                  q: 'Welke soorten lading vervoert u?',
                  a: 'Wij verwerken vrijwel alle soorten lading: volledige containerlading (FCL), gedeeltelijke containerlading (LCL), groupage, zwaar/speciaal transport, staalrollen, temperatuurgecontroleerde goederen, ADR gevaarlijke stoffen en projectlading. Weg, zee en lucht. Allemaal vanuit Rotterdam.',
                },
                {
                  q: 'Hoe vraag ik een offerte aan?',
                  a: 'Klik op "Offerte Aanvragen" op onze website, bel +31 (0)10 295 63 33 of mail info@allround-transport.nl. Wij reageren met een heldere, vrijblijvende offerte binnen 90 minuten tijdens kantooruren.',
                },
                {
                  q: 'Verzorgt u ook douane en documentatie?',
                  a: 'Ja, volledig. Wij zijn AEO-gecertificeerd en beheren alle douaneaangiften voor het VK post-Brexit, Noorwegen en internationaal onward EU-transport. T1/T2-transitdocumenten, CMR vrachtbrieven en alle formaliteiten end-to-end.',
                },
                {
                  q: 'Wat zijn uw levertijden?',
                  a: 'Europese bestemmingen: doorgaans 24–96 uur vanuit Rotterdam. Scandinavië: 24–72 uur. VK: 24–48 uur. Iberisch schiereiland: 3–5 dagen. Balkan: 4–7 dagen. Voor urgente lading is onze Speed Freight service 24/7 beschikbaar met same-day verzending.',
                },
                {
                  q: 'Kunt u ook oversized of speciaal transport verzorgen?',
                  a: 'Absoluut. Wij zijn gespecialiseerd in coiltransport (staal/automotive), ADR gevaarlijke stoffen, uitzonderlijk transport en cross-trading. Onze versterkte coiltrailervloot is specifiek ontworpen voor niet-standaard zware lading.',
                },
                {
                  q: 'Hoe volg ik mijn zending?',
                  a: 'Alle zendingen krijgen realtime GPS-monitoring. Uw vaste Rotterdam-contactpersoon houdt u bij elke stap op de hoogte. Voor spoedzendingen bieden wij directe chauffeursverbinding. Volledige zichtbaarheid van ophaling tot eindlevering.',
                },
              ];

              return (
                <section className="py-24 bg-[#010d2e] relative overflow-hidden">
                  {/* CSS-only dot grid pattern */}
                  <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,204,0,0.07) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
                  {/* Top / bottom accent lines */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-eu-yellow/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-eu-yellow/30 to-transparent" />
                  {/* Glow blob */}
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-eu-yellow/5 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header row */}
                    <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
                      <div className="lg:w-2/5 reveal-left">
                        <p className="text-[80px] md:text-[110px] font-black text-white leading-none tracking-tighter">F&amp;Q</p>
                        <p className="text-eu-yellow font-black text-xs uppercase tracking-[0.3em] mt-1">
                          {lang === 'EN' ? 'Frequently Asked Questions' : 'Veelgestelde Vragen'}
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mt-4 max-w-xs">
                          {lang === 'EN'
                            ? 'Everything you need to know about shipping with Allround Transport from Rotterdam.'
                            : 'Alles wat u moet weten over verzenden met Allround Transport vanuit Rotterdam.'}
                        </p>
                      </div>
                      <div className="lg:w-3/5 reveal-right">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {(lang === 'EN'
                            ? ['Cargo Types', 'Customs & Docs', 'Pricing', 'Transit Times', 'Specialist Loads', 'Live Tracking']
                            : ['Vrachttypen', 'Douane & Docs', 'Tarieven', 'Transittijden', 'Speciaal Transport', 'Live Tracking']
                          ).map((topic) => (
                            <div key={topic} className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                              <span className="w-1.5 h-1.5 rounded-full bg-eu-yellow flex-shrink-0" />
                              <span className="text-white/70 text-sm font-semibold">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-2">
                      {faqs.map((faq, i) => (
                        <div key={i} className={`reveal bg-white/5 border border-white/10 rounded-2xl overflow-hidden delay-${i * 75 + 75}`}>
                          <button
                            className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-white/5 transition-colors"
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          >
                            <span className="text-white font-bold text-base md:text-lg pr-4">{faq.q}</span>
                            <span
                              className="text-eu-yellow text-3xl font-black flex-shrink-0 transition-transform duration-300"
                              style={{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                            >+</span>
                          </button>
                          <div className={`faq-answer ${openFaq === i ? 'open' : 'closed'}`}>
                            <p className="px-8 pb-6 text-slate-300 leading-relaxed text-sm border-t border-white/10 pt-4">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })()}

            <Advantage lang={lang} />
            <TruckPullSlider lang={lang} onComplete={() => navigateTo('quote')} />
            
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h4 className="text-xl font-bold text-navy mb-2">Certified Excellence</h4>
                            <p className="text-slate-500 text-sm"> We maintain the highest industry standards.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
                            <div className="flex items-center gap-2">
                                <Shield className="w-8 h-8 text-navy" />
                                <span className="font-bold text-navy">ISO 9001</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-8 h-8 text-navy" />
                                <span className="font-bold text-navy">AEO Full</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-8 h-8 text-navy" />
                                <span className="font-bold text-navy">IFS Logistics</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-navy rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                        <div className="z-10">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{lang === 'EN' ? 'Ready to move your cargo?' : 'Klaar om uw vracht te verplaatsen?'}</h2>
                            <p className="text-white/70 max-w-lg mb-0">{lang === 'EN' ? 'Get a personalized logistics plan from our experts in Rotterdam. We speak your language.' : 'Ontvang een gepersonaliseerd logistiek plan van onze experts in Rotterdam. Wij spreken uw taal.'}</p>
                        </div>
                        <div className="z-10 flex flex-col sm:flex-row gap-4">
                            <button 
                              onClick={() => navigateTo('quote')}
                              className="bg-eu-yellow hover:bg-yellow-500 text-navy px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-yellow-500/20"
                            >
                                {t.common.contact}
                            </button>
                            <a href="tel:+31102956333" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/10 flex items-center justify-center gap-2">
                                <Phone className="w-5 h-5" /> +31 (0)10 295 63 33
                            </a>
                        </div>
                    </div>
                </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} currentLang={lang} onLangChange={setLang} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <footer className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
                <button onClick={() => navigateTo('home')} className="flex items-center mb-6 cursor-pointer focus:outline-none group">
                    <img 
                      src={LOGO_URL} 
                      alt="Allround Transport" 
                      className="h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
                    />
                </button>
                <div className="space-y-1 text-slate-600 text-sm">
                  <p className="font-bold text-navy">Allround Transport BV</p>
                  <p>Kaasmakerstraat 10</p>
                  <p>3194 DJ Hoogvliet-Rotterdam</p>
                  <p>Nederland</p>
                </div>
            </div>
            <div>
              <h5 className="font-bold text-navy mb-6">{lang === 'EN' ? 'Contact' : 'Contact'}</h5>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-eu-yellow" />
                  <a href="tel:+31102956333" className="hover:text-navy transition-colors">+31 (0)10 295 63 33</a>
                </li>
                <li className="flex items-center gap-3">
                  <Printer className="w-4 h-4 text-eu-yellow" />
                  <span>+31 (0)10 438 55 66</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-eu-yellow" />
                  <a href="mailto:info@allround-transport.nl" className="hover:text-navy transition-colors">info@allround-transport.nl</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-navy mb-6">{lang === 'EN' ? 'Services' : 'Diensten'}</h5>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><button onClick={() => navigateTo('road-transport')} className="hover:text-eu-yellow transition-colors text-left">{t.nav.road}</button></li>
                <li><button onClick={() => navigateTo('customs')} className="hover:text-eu-yellow transition-colors text-left">{t.nav.customs}</button></li>
                <li><button onClick={() => navigateTo('other-services')} className="hover:text-eu-yellow transition-colors text-left">{t.nav.other_services}</button></li>
                <li><button onClick={() => navigateTo('destinations')} className="hover:text-eu-yellow transition-colors text-left">{t.nav.destinations}</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-navy mb-6">{lang === 'EN' ? 'Follow Us' : 'Volg Ons'}</h5>
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-navy hover:bg-eu-yellow hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-navy hover:bg-eu-yellow hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-navy hover:bg-eu-yellow hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              </div>
              <button 
                onClick={() => navigateTo('quote')}
                className="text-xs font-bold text-navy underline hover:text-eu-yellow transition-colors"
              >
                {lang === 'EN' ? 'Request Official Quote' : 'Officiële Offerte Aanvragen'}
              </button>
            </div>
          </div>
          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2025 Allround Transport BV. {lang === 'EN' ? 'All rights reserved.' : 'Alle rechten voorbehouden.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
