
import React from 'react';
import { Ship, Plane, Globe, Anchor, Container, ClipboardCheck, Zap, Package, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface OtherServicesPageProps {
  lang: 'EN' | 'NL';
  onQuote: () => void;
}

const OtherServicesPage: React.FC<OtherServicesPageProps> = ({ lang, onQuote }) => {
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
    </div>
  );
};

export default OtherServicesPage;
