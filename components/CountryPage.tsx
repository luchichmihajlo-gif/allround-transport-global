
import React from 'react';
import { CountryData } from '../constants';
import { ArrowLeft, MapPin, Clock, Truck, Shield, Globe, ChevronLeft } from 'lucide-react';

interface CountryPageProps {
  country: CountryData;
  onBack: () => void;
  onQuote: () => void;
  lang: 'EN' | 'NL';
}

const CAPITAL_IMAGES: Record<string, { url: string; city: string }> = {
  albania:     { url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=1600', city: 'Tirana' },
  austria:     { url: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=1600', city: 'Vienna' },
  belgium:     { url: 'https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1600', city: 'Brussels' },
  bosnia:      { url: 'https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&q=80&w=1600', city: 'Sarajevo' },
  bulgaria:    { url: 'https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?auto=format&fit=crop&q=80&w=1600', city: 'Sofia' },
  croatia:     { url: 'https://images.unsplash.com/photo-1566559532215-a5b9cd56f0bc?auto=format&fit=crop&q=80&w=1600', city: 'Zagreb' },
  cyprus:      { url: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=1600', city: 'Nicosia' },
  czechia:     { url: 'https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&q=80&w=1600', city: 'Prague' },
  denmark:     { url: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&q=80&w=1600', city: 'Copenhagen' },
  estonia:     { url: 'https://images.unsplash.com/photo-1565010740293-c434a18ea8f1?auto=format&fit=crop&q=80&w=1600', city: 'Tallinn' },
  finland:     { url: 'https://images.unsplash.com/photo-1529982329982-10c27e1f2a7c?auto=format&fit=crop&q=80&w=1600', city: 'Helsinki' },
  france:      { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1600', city: 'Paris' },
  germany:     { url: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&q=80&w=1600', city: 'Berlin' },
  greece:      { url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?auto=format&fit=crop&q=80&w=1600', city: 'Athens' },
  hungary:     { url: 'https://images.unsplash.com/photo-1565427635620-cc1fa24e5e7e?auto=format&fit=crop&q=80&w=1600', city: 'Budapest' },
  ireland:     { url: 'https://images.unsplash.com/photo-1549918864-48ac978761a4?auto=format&fit=crop&q=80&w=1600', city: 'Dublin' },
  italy:       { url: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1600', city: 'Rome' },
  latvia:      { url: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1600', city: 'Riga' },
  lithuania:   { url: 'https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?auto=format&fit=crop&q=80&w=1600', city: 'Vilnius' },
  luxembourg:  { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=1600', city: 'Luxembourg City' },
  malta:       { url: 'https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?auto=format&fit=crop&q=80&w=1600', city: 'Valletta' },
  moldova:     { url: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=1600', city: 'Chișinău' },
  montenegro:  { url: 'https://images.unsplash.com/photo-1568706912989-c73d2f024a8c?auto=format&fit=crop&q=80&w=1600', city: 'Kotor' },
  netherlands: { url: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&q=80&w=1600', city: 'Amsterdam' },
  norway:      { url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1600', city: 'Oslo' },
  poland:      { url: 'https://images.unsplash.com/photo-1540994183-a5f5a7f33427?auto=format&fit=crop&q=80&w=1600', city: 'Warsaw' },
  portugal:    { url: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&q=80&w=1600', city: 'Lisbon' },
  romania:     { url: 'https://images.unsplash.com/photo-1553722513-50e0ce27e42a?auto=format&fit=crop&q=80&w=1600', city: 'Bucharest' },
  sardinia:    { url: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1600', city: 'Cagliari' },
  serbia:      { url: 'https://images.unsplash.com/photo-1555990793-da11153b6c8e?auto=format&fit=crop&q=80&w=1600', city: 'Belgrade' },
  sicily:      { url: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&q=80&w=1600', city: 'Palermo' },
  slovakia:    { url: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=1600', city: 'Bratislava' },
  slovenia:    { url: 'https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?auto=format&fit=crop&q=80&w=1600', city: 'Ljubljana' },
  spain:       { url: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&q=80&w=1600', city: 'Madrid' },
  sweden:      { url: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=1600', city: 'Stockholm' },
  switzerland: { url: 'https://images.unsplash.com/photo-1503789146722-cf137a3c0fea?auto=format&fit=crop&q=80&w=1600', city: 'Bern' },
  turkey:      { url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=1600', city: 'Istanbul' },
  uk:          { url: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1600', city: 'London' },
};

const FALLBACK_CITY = 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&q=80&w=1600';

const CountryPage: React.FC<CountryPageProps> = ({ country, onBack, onQuote, lang }) => {
  const cityData = CAPITAL_IMAGES[country.id] || { url: FALLBACK_CITY, city: country.name };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero with capital city image */}
      <div className="relative h-[55vh] min-h-[440px] flex items-end overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img
            src={cityData.url}
            alt={`${cityData.city}, ${country.name}`}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = FALLBACK_CITY; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-transparent"></div>
        </div>

        {/* Back button — sits at top, inside hero */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-xl text-white font-bold transition-all group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {lang === 'EN' ? 'All Destinations' : 'Alle Bestemmingen'}
          </button>
        </div>

        {/* Country heading overlay */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12">
          <div className="flex items-end gap-6">
            <span className="text-7xl md:text-8xl leading-none">{country.flag}</span>
            <div>
              <p className="text-eu-yellow text-xs font-black uppercase tracking-[0.25em] mb-2">
                {cityData.city} &middot; {lang === 'EN' ? 'Capital City' : 'Hoofdstad'}
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-lg">
                {country.name}
              </h1>
              <div className="flex items-center gap-2 mt-3">
                <Clock className="w-4 h-4 text-eu-yellow" />
                <span className="text-slate-200 text-sm font-semibold">
                  {country.transitTime} {lang === 'EN' ? 'from Rotterdam' : 'vanuit Rotterdam'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
              <div className="md:w-2/3">
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  {lang === 'EN'
                    ? `Allround Transport ships freight to and from ${country.name}, to any destination in Europe and beyond, not just the Netherlands.`
                    : `Allround Transport vervoert vracht van en naar ${country.name}, naar elke bestemming in Europa en daarbuiten, niet alleen Nederland.`}
                </p>
                <p className="text-base text-slate-500 leading-relaxed mb-10">
                  {country.description}{' '}
                  {lang === 'EN'
                    ? `Our team coordinates every shipment to and from ${country.name}: cross-trades, groupage, full loads, with native-speaker support and decades of hands-on experience.`
                    : `Ons team coördineert elke zending van en naar ${country.name}: cross-trades, groupage, volledige ladingen, met native speaker ondersteuning en decennia aan praktijkervaring.`}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4 text-navy">
                      <MapPin className="w-6 h-6 text-eu-yellow" />
                      <h4 className="font-bold">{lang === 'EN' ? 'Primary Transport Hub' : 'Primaire Transport Hub'}</h4>
                    </div>
                    <p className="text-slate-700 font-semibold">{country.hub}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      {lang === 'EN'
                        ? 'Strategically chosen for maximum throughput and hinterland connectivity.'
                        : 'Strategisch gekozen voor maximale doorvoer en achterlandverbindingen.'}
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3 mb-4 text-navy">
                      <Clock className="w-6 h-6 text-eu-yellow" />
                      <h4 className="font-bold">{lang === 'EN' ? 'Average Transit Time' : 'Gemiddelde Transittijd'}</h4>
                    </div>
                    <p className="text-slate-700 font-semibold">{country.transitTime}</p>
                    <p className="text-sm text-slate-500 mt-2">
                      {lang === 'EN'
                        ? 'Estimated door-to-door delivery including loading and handling.'
                        : 'Geschatte deur-tot-deur levering inclusief laden en afhandeling.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 w-full">
                <div className="bg-navy rounded-3xl p-8 text-white sticky top-28">
                  <h3 className="text-xl font-bold mb-6">{lang === 'EN' ? 'Service Advantage' : 'Service Voordeel'}</h3>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <Truck className="w-6 h-6 text-eu-yellow flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm">{lang === 'EN' ? 'Daily FTL & LTL' : 'Dagelijkse FTL & LTL'}</p>
                        <p className="text-xs text-slate-400">{lang === 'EN' ? 'Regular departures ensure consistent supply chains.' : 'Regelmatige vertrekken zorgen voor consistente toeleveringsketens.'}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Shield className="w-6 h-6 text-eu-yellow flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm">{lang === 'EN' ? 'Full Insurance' : 'Volledige Verzekering'}</p>
                        <p className="text-xs text-slate-400">{lang === 'EN' ? 'All cargo covered under premium CMR/AEO terms.' : 'Alle lading gedekt onder premium CMR/AEO voorwaarden.'}</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <Globe className="w-6 h-6 text-eu-yellow flex-shrink-0" />
                      <div>
                        <p className="font-bold text-sm">{lang === 'EN' ? 'Native Coordination' : 'Native Coördinatie'}</p>
                        <p className="text-xs text-slate-400">{lang === 'EN' ? 'Communicating directly in the local language for faster solving.' : 'Direct communiceren in de lokale taal voor snellere oplossingen.'}</p>
                      </div>
                    </li>
                  </ul>
                  <button
                    onClick={onQuote}
                    className="w-full mt-10 bg-eu-yellow hover:bg-yellow-500 text-navy py-4 rounded-xl font-bold transition-all shadow-xl"
                  >
                    {lang === 'EN' ? `Quote to ${country.name}` : `Offerte naar ${country.name}`}
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-16">
              <h3 className="text-2xl font-bold text-navy mb-8 text-center">
                {lang === 'EN' ? `Rotterdam to ${country.name}: The Direct Route` : `Rotterdam naar ${country.name}: De Directe Route`}
              </h3>
              <div className="h-64 rounded-3xl overflow-hidden relative mb-12">
                <img
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1200"
                  className="w-full h-full object-cover"
                  alt="Logistics Network"
                />
                <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                  <p className="text-white font-bold tracking-widest uppercase bg-navy/60 px-6 py-2 rounded-full">
                    {lang === 'EN' ? 'Strategic Corridor Active' : 'Strategische Corridor Actief'}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={onBack}
                  className="inline-flex items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100 text-navy border border-slate-200 px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-sm active:scale-95 group"
                >
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                  {lang === 'EN' ? 'EXPLORE ALL DESTINATIONS' : 'ONTDEK ALLE BESTEMMINGEN'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
