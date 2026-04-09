
import React from 'react';
import { Ship, Plane, Globe, Anchor, Container, ClipboardCheck, Zap, Package, Clock, ShieldCheck, ArrowRight, Home, MapPin, Truck, FileText, Star } from 'lucide-react';
import { translations } from '../translations';

interface OtherServicesPageProps {
  lang: 'EN' | 'NL';
  onQuote: () => void;
}

const HERO_IMAGE = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400";

const OtherServicesPage: React.FC<OtherServicesPageProps> = ({ lang, onQuote }) => {
  const t = translations[lang];

  const individualServices = lang === 'EN' ? [
    { icon: <Home className="w-6 h-6" />, title: 'International Moving', desc: 'Complete relocation service for your household goods. We handle packing coordination, loading, transport, and delivery to your new home.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Italy & Spain Specialist', desc: 'Especially popular for Italy and Spain. Our native speakers ensure seamless coordination with no language barriers, end to end.' },
    { icon: <Truck className="w-6 h-6" />, title: 'Door-to-Door Delivery', desc: 'We collect from your current address and deliver directly to your new home. No intermediaries, no confusion. Just one team.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Customs & Documentation', desc: 'All import/export paperwork handled by our AEO-certified team. We manage customs clearance for UK, Norway, and EU destinations.' },
    { icon: <Package className="w-6 h-6" />, title: 'Packaging Guidance', desc: 'Expert advice on safely packing fragile, valuable, and oversized items for long-distance international road and sea freight.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Insured & Reliable', desc: 'All personal shipments are fully insured during transit. 35+ years of reliable reputation. Your belongings are in safe hands.' },
  ] : [
    { icon: <Home className="w-6 h-6" />, title: 'Internationale Verhuizing', desc: 'Complete verhuisservice voor uw inboedel. Wij regelen de inpakcoördinatie, het laden, het transport en de levering op uw nieuwe adres.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Italië & Spanje Specialist', desc: 'Bijzonder populair voor Italië en Spanje. Onze native speakers zorgen voor naadloze coördinatie zonder taalbarrières.' },
    { icon: <Truck className="w-6 h-6" />, title: 'Deur-tot-Deur Levering', desc: 'Wij halen op bij uw huidige adres en bezorgen direct op uw nieuwe locatie. Geen tussenpersonen, geen verwarring.' },
    { icon: <FileText className="w-6 h-6" />, title: 'Douane & Documentatie', desc: 'Alle in- en uitvoerformaliteiten worden afgehandeld door ons AEO-gecertificeerd team. VK, Noorwegen en EU-bestemmingen.' },
    { icon: <Package className="w-6 h-6" />, title: 'Verpakkingsadvies', desc: 'Deskundig advies over het veilig verpakken van breekbare en waardevolle items voor internationaal transport over land en zee.' },
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Verzekerd & Betrouwbaar', desc: 'Alle persoonlijke zendingen zijn volledig verzekerd tijdens transport. 35+ jaar betrouwbare reputatie. Uw spullen zijn in goede handen.' },
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">

      {/* Page Hero */}
      <div className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eu-yellow text-navy text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-eu-yellow/20">
            <Globe className="w-4 h-4" /> {lang === 'EN' ? 'Global Logistics' : 'Wereldwijde Logistiek'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {lang === 'EN' ? 'Other Services' : 'Overige Diensten'}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed border-l-4 border-eu-yellow pl-6">
            {lang === 'EN'
              ? 'Sea freight from Rotterdam to the world. Air freight when speed is critical. Both handled door to door.'
              : 'Zeevracht vanuit Rotterdam naar de wereld. Luchtvracht wanneer snelheid essentieel is. Beide deur-tot-deur afgehandeld.'}
          </p>
        </div>
      </div>

      {/* Sea Freight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-navy rounded-xl text-eu-yellow">
              <Ship className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-black text-eu-yellow uppercase tracking-widest mb-1">
                {lang === 'EN' ? 'Ocean Logistics' : 'Oceaanlogistiek'}
              </p>
              <h2 className="text-3xl font-black text-navy">
                {lang === 'EN' ? 'Sea Freight' : 'Zeevracht'}
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
              <div className="space-y-4 text-slate-600 mb-10">
                <p className="text-lg leading-relaxed">
                  {lang === 'EN'
                    ? 'Leveraging our strategic position in Hoogvliet-Rotterdam, we arrange comprehensive intercontinental and continental services tailored to your specific logistical needs. Whether you are moving a single pallet or managing a large industrial project, our sea freight department handles it with professional precision.'
                    : 'Gebruikmakend van onze strategische positie in Hoogvliet-Rotterdam regelen wij uitgebreide intercontinentale en continentale diensten op maat van uw logistieke behoeften. Of u nu een enkele pallet verplaatst of een groot industrieel project beheert, onze afdeling zeevracht handelt het met professionele precisie af.'}
                </p>
                <p className="text-lg leading-relaxed">
                  {lang === 'EN'
                    ? 'We bridge the gap between global manufacturers and the European hinterland, providing seamless transit through the continent\'s largest port facility.'
                    : 'Wij dichten het gat tussen wereldwijde fabrikanten en het Europese achterland en bieden naadloze doorvoer via de grootste havenfaciliteit van het continent.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-eu-yellow/40 transition-all shadow-sm">
                  <Container className="w-10 h-10 text-eu-yellow mb-5" />
                  <h3 className="text-xl font-bold text-navy mb-3">{lang === 'EN' ? 'FCL / LCL Services' : 'FCL / LCL Diensten'}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {lang === 'EN'
                      ? 'Full Container Loads (FCL) for high-volume shipments and Less than Container Loads (LCL) for smaller parcels, optimizing your costs.'
                      : 'Full Container Loads (FCL) voor zendingen met hoog volume en Less than Container Loads (LCL) voor kleinere pakketten.'}
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-navy">
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Door-to-Door Delivery' : 'Deur-tot-Deur Levering'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Regular Departure Times' : 'Regelmatige Vertrektijden'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Competitive Rates' : 'Concurrerende Tarieven'}</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-eu-yellow/40 transition-all shadow-sm">
                  <Anchor className="w-10 h-10 text-eu-yellow mb-5" />
                  <h3 className="text-xl font-bold text-navy mb-3">{lang === 'EN' ? 'Project Cargo' : 'Projectlading'}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {lang === 'EN'
                      ? 'Oversized, heavy, or specialized freight requiring unique engineering solutions and expert maritime coordination.'
                      : 'Overmaatse, zware of gespecialiseerde vracht die unieke technische oplossingen en deskundige maritieme coördinatie vereist.'}
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-navy">
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Breakbulk Expertise' : 'Breakbulk Expertise'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Technical Feasibility Studies' : 'Technische Haalbaarheidsstudies'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Port-to-Site Management' : 'Haven-naar-Locatie Beheer'}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-navy rounded-3xl p-8 text-white sticky top-28 shadow-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="text-eu-yellow w-5 h-5" /> {lang === 'EN' ? 'Global Network' : 'Wereldwijd Netwerk'}
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardCheck className="w-5 h-5 text-eu-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{lang === 'EN' ? 'Full Documentation' : 'Volledige Documentatie'}</h4>
                      <p className="text-xs text-slate-400 mt-1">{lang === 'EN' ? 'Bill of Lading, Customs, and Certificates of Origin.' : 'Bill of Lading, Douane en Certificaten van Oorsprong.'}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Ship className="w-5 h-5 text-eu-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{lang === 'EN' ? 'Real-time Tracking' : 'Real-time Tracking'}</h4>
                      <p className="text-xs text-slate-400 mt-1">{lang === 'EN' ? "Monitor your container's position 24/7." : "Volg de positie van uw container 24/7."}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button onClick={onQuote} className="w-full bg-eu-yellow hover:bg-yellow-500 text-navy py-4 rounded-xl font-bold transition-all">
                    {lang === 'EN' ? 'Get Sea Freight Quote' : 'Zeevracht Offerte Aanvragen'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-slate-100" />

      {/* Air Freight Section */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-navy rounded-xl text-eu-yellow">
              <Plane className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-black text-eu-yellow uppercase tracking-widest mb-1">
                {lang === 'EN' ? 'Express Transport' : 'Express Transport'}
              </p>
              <h2 className="text-3xl font-black text-navy">
                {lang === 'EN' ? 'Air Freight' : 'Luchtvracht'}
              </h2>
            </div>
          </div>

          {/* Plane image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12 aspect-[21/7]">
            <img
              src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2000"
              alt="Air Freight"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="bg-eu-yellow text-navy px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                {lang === 'EN' ? 'Global Operations' : 'Wereldwijde Operaties'}
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-2/3">
              <div className="space-y-4 text-slate-600 mb-10">
                <p className="text-lg leading-relaxed font-semibold text-navy">
                  {lang === 'EN'
                    ? 'If it has to be done quickly for emergency shipments, air transport often is the only possibility.'
                    : 'Als het voor spoedzendingen echt snel moet, is luchttransport vaak de enige mogelijkheid.'}
                </p>
                <p className="text-lg leading-relaxed">
                  {lang === 'EN'
                    ? 'At Allround Transport we understand the urgency of critical cargo. No challenge is too big. In consultation with you and thanks to our extensive global network of agents, we arrange your airfreight door to door if you wish.'
                    : 'Bij Allround Transport begrijpen we de urgentie van kritieke lading. Geen uitdaging is ons te groot. In overleg met u en dankzij ons uitgebreide wereldwijde netwerk van agenten regelen wij uw luchtvracht deur tot deur als u dat wenst.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-eu-yellow/40 transition-all shadow-sm">
                  <Zap className="w-10 h-10 text-eu-yellow mb-5" />
                  <h3 className="text-xl font-bold text-navy mb-3">{lang === 'EN' ? 'Emergency Shipments' : 'Spoedzendingen'}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {lang === 'EN'
                      ? 'Immediate action for time-sensitive cargo. We prioritize your shipment on the next available flight.'
                      : 'Onmiddellijke actie voor tijdsgevoelige lading. Wij prioriteren uw zending op de eerstvolgende beschikbare vlucht.'}
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-navy">
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Same-day pickup' : 'Pickup op dezelfde dag'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Express processing' : 'Express verwerking'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? '24/7 Monitoring' : '24/7 Monitoring'}</li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-eu-yellow/40 transition-all shadow-sm">
                  <Package className="w-10 h-10 text-eu-yellow mb-5" />
                  <h3 className="text-xl font-bold text-navy mb-3">{lang === 'EN' ? 'Door-to-Door Service' : 'Deur-tot-Deur Service'}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {lang === 'EN'
                      ? 'Full management from your warehouse to the final destination, including all airport handling.'
                      : 'Volledig beheer van uw magazijn tot de eindbestemming, inclusief alle afhandeling op de luchthaven.'}
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-navy">
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Local trucking' : 'Lokaal transport'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Customs brokerage' : 'Douanebemiddeling'}</li>
                    <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-eu-yellow" /> {lang === 'EN' ? 'Final mile delivery' : 'Last-mile levering'}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-navy rounded-3xl p-8 text-white sticky top-28 shadow-2xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="text-eu-yellow w-5 h-5" /> {lang === 'EN' ? 'Express Advantage' : 'Express Voordeel'}
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-eu-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{lang === 'EN' ? 'Global Flight Network' : 'Wereldwijd Vluchtnetwerk'}</h4>
                      <p className="text-xs text-slate-400 mt-1">{lang === 'EN' ? 'Access to all major scheduled airlines and private charters.' : 'Toegang tot alle grote lijndiensten en privécharters.'}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-eu-yellow" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{lang === 'EN' ? 'Secure Handling' : 'Veilige Afhandeling'}</h4>
                      <p className="text-xs text-slate-400 mt-1">{lang === 'EN' ? 'Specialized handling for high-value or fragile goods.' : 'Gespecialiseerde afhandeling voor waardevolle of breekbare goederen.'}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button onClick={onQuote} className="w-full bg-eu-yellow hover:bg-yellow-500 text-navy py-4 rounded-xl font-bold transition-all mb-3">
                    {lang === 'EN' ? 'Get Air Freight Quote' : 'Luchtvracht Offerte Aanvragen'}
                  </button>
                  <a href="tel:+31102956333" className="block text-center text-white text-sm font-bold hover:text-eu-yellow transition-colors">
                    {lang === 'EN' ? 'Or Call: +31 10 295 63 33' : 'Of Bel: +31 10 295 63 33'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider */}
      <div className="border-t border-slate-100" />

      {/* Individual / Private Moving Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-navy rounded-xl text-eu-yellow">
              <Home className="w-7 h-7" />
            </div>
            <div>
              <p className="text-xs font-black text-eu-yellow uppercase tracking-widest mb-1">
                {lang === 'EN' ? 'Individual Services' : 'Particuliere Diensten'}
              </p>
              <h2 className="text-3xl font-black text-navy">
                {lang === 'EN' ? 'Private Moving' : 'Particuliere Verhuizing'}
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-eu-yellow/15 border border-eu-yellow/40 text-navy text-xs font-black uppercase tracking-widest rounded-full mb-6">
                <Star className="w-3 h-3 text-eu-yellow fill-eu-yellow" />
                {lang === 'EN' ? 'Moving Abroad?' : 'Verhuizen naar het Buitenland?'}
              </span>
              <h3 className="text-4xl font-black text-navy leading-tight mb-6">
                {lang === 'EN' ? <>We've Got You.</> : <>Wij Regelen Het.</>}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">{t.individual.subtitle}</p>
              <p className="text-slate-500 leading-relaxed mb-8">{t.individual.body1}</p>
              <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-100">
                <div className="text-center"><p className="text-2xl font-black text-navy">35+</p><p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{lang === 'EN' ? 'Years Experience' : 'Jaar Ervaring'}</p></div>
                <div className="w-px bg-slate-200"></div>
                <div className="text-center"><p className="text-2xl font-black text-navy">500+</p><p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{lang === 'EN' ? 'Happy Clients' : 'Tevreden Klanten'}</p></div>
                <div className="w-px bg-slate-200"></div>
                <div className="text-center"><p className="text-2xl font-black text-navy">38+</p><p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{lang === 'EN' ? 'Countries' : 'Landen'}</p></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <img src={HERO_IMAGE} alt={lang === 'EN' ? 'International Moving' : 'Internationale Verhuizing'} className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1400'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
                    <p className="text-xs font-black text-eu-yellow uppercase tracking-widest mb-1">{lang === 'EN' ? 'Most Popular Routes' : 'Meest Populaire Routes'}</p>
                    <p className="text-navy font-bold text-sm">🇮🇹 Italy · 🇪🇸 Spain · 🇵🇹 Portugal · 🇫🇷 France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy rounded-3xl p-12">
            <div className="text-center mb-10">
              <p className="text-eu-yellow text-xs font-black uppercase tracking-[0.3em] mb-3">{lang === 'EN' ? 'What We Offer' : 'Wat Wij Bieden'}</p>
              <h3 className="text-3xl font-black text-white">{lang === 'EN' ? 'Everything You Need for a Smooth Move' : 'Alles voor een Vlotte Verhuizing'}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {individualServices.map((svc, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-eu-yellow/30 transition-all group">
                  <div className="w-12 h-12 bg-eu-yellow/10 rounded-xl flex items-center justify-center text-eu-yellow mb-5 group-hover:bg-eu-yellow group-hover:text-navy transition-colors">{svc.icon}</div>
                  <h4 className="text-base font-black text-white mb-2 group-hover:text-eu-yellow transition-colors">{svc.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button onClick={onQuote} className="inline-flex items-center gap-3 bg-eu-yellow hover:bg-yellow-500 text-navy px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-eu-yellow/20 hover:scale-105">
                {lang === 'EN' ? 'Request Your Free Moving Quote' : 'Vraag Gratis Verhuisofferte Aan'}
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServicesPage;
