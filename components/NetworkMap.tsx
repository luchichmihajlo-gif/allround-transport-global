
import React from 'react';
import { MapPin } from 'lucide-react';

interface NetworkMapProps {
  // Added lang prop to interface
  lang: 'EN' | 'NL';
}

const NetworkMap: React.FC<NetworkMapProps> = ({ lang }) => {
  return (
    <section id="network" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 800 400" className="w-full h-full">
            <path d="M150,150 Q250,50 400,150 T650,250" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
            <path d="M150,150 Q200,250 350,200 T600,100" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-eu-yellow uppercase tracking-[0.2em] mb-4">
            {lang === 'EN' ? 'Global Reach' : 'Wereldwijd Bereik'}
          </h2>
          <h3 className="text-4xl font-extrabold text-white">
            {lang === 'EN' ? 'Our International Network' : 'Ons Internationaal Netwerk'}
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                        <MapPin className="text-eu-yellow w-4 h-4" /> {lang === 'EN' ? 'Europe-Wide' : 'Heel Europa'}
                    </h5>
                    <p className="text-slate-400 text-sm">
                      {lang === 'EN' 
                        ? 'Daily departures to Scandinavia, Italy, Spain, and Eastern Europe.'
                        : 'Dagelijkse vertrekken naar Scandinavië, Italië, Spanje en Oost-Europa.'}
                    </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                        <MapPin className="text-eu-yellow w-4 h-4" /> {lang === 'EN' ? 'Middle East & Asia' : 'Midden-Oosten & Azië'}
                    </h5>
                    <p className="text-slate-400 text-sm">
                      {lang === 'EN'
                        ? 'Specialized trade lanes for manufacturing and tech sectors.'
                        : 'Gespecialiseerde handelsroutes voor de productie- en techsectoren.'}
                    </p>
                </div>
            </div>

            <div className="relative group">
                <img 
                    src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=800" 
                    alt="World Map Graphic" 
                    className="w-full rounded-full border-8 border-white/5 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-eu-yellow rounded-full animate-ping"></div>
                    <div className="absolute w-3 h-3 bg-eu-yellow rounded-full"></div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                        <MapPin className="text-eu-yellow w-4 h-4" /> {lang === 'EN' ? 'The Americas' : 'Amerika'}
                    </h5>
                    <p className="text-slate-400 text-sm">
                      {lang === 'EN'
                        ? 'Full sea-freight and air-express services to all major ports.'
                        : 'Volledige zeevracht- en lucht-expressdiensten naar alle grote havens.'}
                    </p>
                </div>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <h5 className="text-white font-bold mb-2 flex items-center gap-2">
                        <MapPin className="text-eu-yellow w-4 h-4" /> {lang === 'EN' ? 'Local Experts' : 'Lokale Experts'}
                    </h5>
                    <p className="text-slate-400 text-sm">
                      {lang === 'EN'
                        ? 'Strategic partnerships with local agents in over 120 countries.'
                        : 'Strategische partnerschappen met lokale agenten in meer dan 120 landen.'}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkMap;
