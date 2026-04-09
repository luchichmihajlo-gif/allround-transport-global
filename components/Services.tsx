
import React from 'react';
import { ArrowUpRight, ArrowRight, Truck, Ship, Plane, FileText, Cog, Home as HomeIcon, Package, Thermometer, Anchor, Wind, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';
import { translations } from '../translations';

const MARQUEE_ITEMS = [
  { icon: <Truck className="w-7 h-7" />,       label: 'Road Freight' },
  { icon: <Ship className="w-7 h-7" />,        label: 'Sea Freight' },
  { icon: <Plane className="w-7 h-7" />,       label: 'Air Freight' },
  { icon: <FileText className="w-7 h-7" />,    label: 'Customs' },
  { icon: <Cog className="w-7 h-7" />,         label: 'Coil Transport' },
  { icon: <HomeIcon className="w-7 h-7" />,    label: 'Removals' },
  { icon: <Package className="w-7 h-7" />,     label: 'Groupage' },
  { icon: <Thermometer className="w-7 h-7" />, label: 'Temperature' },
  { icon: <Anchor className="w-7 h-7" />,      label: 'Port Logistics' },
  { icon: <Wind className="w-7 h-7" />,        label: 'Express' },
];

interface ServicesProps {
  lang: 'EN' | 'NL';
  onNavigate: (page: string) => void;
}

const PAGE_MAP: Record<string, string> = {
  road: 'road-transport',
  sea: 'other-services',
  air: 'other-services',
  customs: 'customs',
  coil: 'road-transport',
  individual: 'other-services',
  destinations: 'destinations',
};

const Services: React.FC<ServicesProps> = ({ lang, onNavigate }) => {
  const t = translations[lang];
  const primaryService = SERVICES.find(s => s.isPrimary);
  const secondaryServices = SERVICES.filter(s => !s.isPrimary);

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-xs font-bold text-eu-yellow uppercase tracking-[0.2em] mb-4">
            {lang === 'EN' ? 'Full-Service Logistics' : 'Volledige Logistieke Service'}
          </h2>
          <h3 className="text-4xl font-extrabold text-navy">
            {lang === 'EN' ? 'What We Move, And How' : 'Wat Wij Vervoeren, En Hoe'}
          </h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            {lang === 'EN'
              ? 'Road is our core. Sea and air extend it. Customs, coil, and private moves are where we specialize.'
              : 'Weg is ons fundament. Zee en lucht zijn hoe we het uitbreiden. Douane, coil en particuliere verhuizingen zijn waar we in gespecialiseerd zijn.'}
          </p>
        </div>

        {/* Scrolling icon strip */}
        <div className="marquee-wrapper relative overflow-hidden mb-12 py-4 cursor-default select-none">
          <div className="animate-marquee-ltr flex gap-10" style={{ width: 'max-content' }}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 min-w-[80px] group/icon">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl text-navy shadow-sm group-hover/icon:bg-eu-yellow group-hover/icon:border-eu-yellow transition-colors duration-200">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 group-hover/icon:text-navy transition-colors duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Primary: Road Transport — full-width hero card */}
        {primaryService && (() => {
          const svc = (t.services as any)[primaryService.id];
          return (
            <div
              className="reveal bg-navy text-white rounded-2xl p-10 mb-8 flex flex-col md:flex-row items-start gap-8 shadow-xl cursor-pointer group"
              onClick={() => onNavigate(PAGE_MAP[primaryService.id])}
            >
              <div className="p-5 bg-eu-yellow/10 rounded-2xl text-eu-yellow flex-shrink-0 group-hover:bg-eu-yellow group-hover:text-navy transition-colors">
                {primaryService.icon}
              </div>
              <div className="flex-1">
                <div className="inline-block text-[10px] font-black text-eu-yellow uppercase tracking-widest mb-3 border border-eu-yellow/30 px-3 py-1 rounded-full">
                  {lang === 'EN' ? 'Core Service' : 'Kerndienst'}
                </div>
                <h4 className="text-3xl font-black text-white mb-2 group-hover:text-eu-yellow transition-colors">{svc.title}</h4>
                <p className="text-eu-yellow font-bold mb-3">{svc.description}</p>
                <p className="text-white/70 text-base leading-relaxed mb-6 max-w-2xl">{svc.details}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate(PAGE_MAP[primaryService.id]); }}
                  className="inline-flex items-center gap-2 bg-eu-yellow hover:bg-yellow-500 text-navy px-6 py-3 rounded-xl font-bold transition-all group/btn"
                >
                  {lang === 'EN' ? 'Explore Road Transport' : 'Bekijk Wegtransport'}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          );
        })()}

        {/* Secondary: 5 remaining services + Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryServices.map((service) => {
            const svc = (t.services as any)[service.id];
            return (
              <div
                key={service.id}
                className={`reveal group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer delay-${(secondaryServices.indexOf(service) % 3) * 100 + 100}`}
                onClick={() => onNavigate(PAGE_MAP[service.id])}
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-6 h-6 text-navy" />
                </div>

                <div className="mb-6 p-4 bg-navy/5 rounded-xl text-navy group-hover:bg-eu-yellow group-hover:text-navy transition-colors w-fit">
                  {service.icon}
                </div>

                <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-eu-yellow transition-colors">
                  {svc.title}
                </h4>
                <p className="text-sm font-semibold text-slate-500 mb-3">{svc.description}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{svc.details}</p>

                <button
                  onClick={(e) => { e.stopPropagation(); onNavigate(PAGE_MAP[service.id]); }}
                  className="inline-flex items-center text-navy font-bold text-sm border-b-2 border-navy/10 hover:border-eu-yellow transition-all"
                >
                  {lang === 'EN' ? 'Learn More' : 'Lees Meer'}
                </button>
              </div>
            );
          })}

          {/* Destinations card */}
          <div
            className="reveal group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer delay-300"
            onClick={() => onNavigate('destinations')}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-6 h-6 text-navy" />
            </div>
            <div className="mb-6 p-4 bg-navy/5 rounded-xl text-navy group-hover:bg-eu-yellow group-hover:text-navy transition-colors w-fit">
              <MapPin className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-eu-yellow transition-colors">
              {lang === 'EN' ? 'Destinations' : 'Bestemmingen'}
            </h4>
            <p className="text-sm font-semibold text-slate-500 mb-3">
              {lang === 'EN' ? '38+ Countries Across Europe' : '38+ landen door heel Europa'}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {lang === 'EN'
                ? 'From Rotterdam to every corner of Europe. Explore our full network of destinations and transit times.'
                : 'Van Rotterdam naar elke hoek van Europa. Ontdek ons volledige netwerk van bestemmingen en transittijden.'}
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); onNavigate('destinations'); }}
              className="inline-flex items-center text-navy font-bold text-sm border-b-2 border-navy/10 hover:border-eu-yellow transition-all"
            >
              {lang === 'EN' ? 'Learn More' : 'Lees Meer'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
