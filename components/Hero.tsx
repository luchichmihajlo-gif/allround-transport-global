
import React from 'react';
import { MoveRight, Zap } from 'lucide-react';
import { translations } from '../translations';

interface HeroProps {
  lang: 'EN' | 'NL';
  onQuote: () => void;
  onDestinations: () => void;
}

const DASHBOARD_BG_IMAGE = "https://mail.google.com/mail/u/0?ui=2&ik=0491c68d68&attid=0.1&permmsgid=msg-f:1856658425287871725&th=19c42d0034850ced&view=att&zw&disp=safe";

const Hero: React.FC<HeroProps> = ({ lang, onQuote, onDestinations }) => {
  const t = translations[lang];
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-navy">
      {/* Hero Background Image - Absolute to cover the entire container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={DASHBOARD_BG_IMAGE} 
          alt="Allround Transport Operations Dashboard" 
          className="w-full h-full object-cover"
          onError={(e) => {
            // High-quality industrial fallback if the specific link is restricted
            e.currentTarget.src = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2400";
          }}
        />
        {/* Layered Overlays for maximum legibility and professional aesthetic */}
        <div className="absolute inset-0 bg-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
      </div>

      {/* Main Content Area - Grow to fill space and center content vertically */}
      <div className="relative z-10 flex-grow flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eu-yellow text-navy text-xs font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-left-4 duration-700 shadow-xl shadow-eu-yellow/20">
               <Zap className="w-3.5 h-3.5" /> {t.hero.tag}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-8 animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
              {t.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <button 
                onClick={onQuote}
                className="flex items-center justify-center gap-3 bg-eu-yellow hover:bg-yellow-500 text-navy px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-yellow-500/20 group hover:scale-[1.02] active:scale-95"
              >
                {t.common.quote}
                <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
              </button>
              <button 
                onClick={onDestinations}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:border-white/40"
              >
                {t.common.destinations}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Stats Strip - Now in normal flow at the bottom of the section */}
      <div className="relative z-10 bg-white/5 backdrop-blur-xl border-t border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            <div className="py-8 px-6 text-center">
              <p className="text-2xl font-black text-white">35+</p>
              <p className="text-[10px] font-bold text-eu-yellow uppercase tracking-widest">{lang === 'EN' ? 'Years of Expertise' : 'Jaren Ervaring'}</p>
            </div>
            <div className="py-8 px-6 text-center">
              <p className="text-2xl font-black text-white">500+</p>
              <p className="text-[10px] font-bold text-eu-yellow uppercase tracking-widest">{lang === 'EN' ? 'Trusted Clients' : 'Vertrouwde Klanten'}</p>
            </div>
            <div className="py-8 px-6 text-center">
              <p className="text-2xl font-black text-white">38+</p>
              <p className="text-[10px] font-bold text-eu-yellow uppercase tracking-widest">{lang === 'EN' ? 'Active Destinations' : 'Actieve Bestemmingen'}</p>
            </div>
            <div className="py-8 px-6 text-center">
              <p className="text-2xl font-black text-white">24/7</p>
              <p className="text-[10px] font-bold text-eu-yellow uppercase tracking-widest">{lang === 'EN' ? 'Operational Support' : 'Operationele Support'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
