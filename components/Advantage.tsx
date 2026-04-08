
import React from 'react';
import { Zap, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

interface AdvantageProps {
  // Added lang prop to interface
  lang: 'EN' | 'NL';
}

const Advantage: React.FC<AdvantageProps> = ({ lang }) => {
  return (
    <section id="advantage" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-safety-orange/5 rounded-full blur-3xl"></div>
                <h2 className="text-xs font-bold text-safety-orange uppercase tracking-[0.2em] mb-4">
                  {lang === 'EN' ? 'Strategic Location' : 'Strategische Locatie'}
                </h2>
                <h3 className="text-4xl font-extrabold text-navy mb-6">
                  {lang === 'EN' ? 'The Rotterdam Advantage' : 'Het Rotterdamse Voordeel'}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    {lang === 'EN'
                      ? "Rotterdam is Europe's port. We're five minutes from the gate. That's not a coincidence. It's your competitive edge."
                      : "Rotterdam is de haven van Europa. Wij zitten vijf minuten van de ingang. Dat is geen toeval. Het is uw concurrentievoordeel."}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white">
                            < Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="font-bold text-navy mb-1">{lang === 'EN' ? 'Express Transit' : 'Express Transit'}</h5>
                            <p className="text-xs text-slate-500">{lang === 'EN' ? 'A15/A29 on-ramp: 5 minutes.' : 'A15/A29 oprit: 5 minuten.'}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="font-bold text-navy mb-1">{lang === 'EN' ? '24/7 Monitoring' : '24/7 Monitoring'}</h5>
                            <p className="text-xs text-slate-500">{lang === 'EN' ? 'Real-time status updates for all cargo.' : 'Real-time statusupdates voor alle lading.'}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="font-bold text-navy mb-1">{lang === 'EN' ? 'AEO Certified' : 'AEO Gecertificeerd'}</h5>
                            <p className="text-xs text-slate-500">{lang === 'EN' ? 'Fast-track customs handling.' : 'Snelle douaneafhandeling.'}</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-navy rounded-lg flex items-center justify-center text-white">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <h5 className="font-bold text-navy mb-1">{lang === 'EN' ? 'Native Expertise' : 'Native Expertise'}</h5>
                            <p className="text-xs text-slate-500">{lang === 'EN' ? '12 languages. No misunderstandings.' : '12 talen. Geen misverstanden.'}</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-video">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    poster="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200"
                >
                    <source src="https://cdn.pixabay.com/video/2021/04/12/70860-536962386_large.mp4" type="video/mp4" />
                    {/* Fallback image */}
                    <img 
                        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" 
                        alt="Port Logistics" 
                        className="w-full h-auto"
                    />
                </video>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-slate-100 rounded-2xl -z-10"></div>
            
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 border border-slate-100 max-w-[200px]">
                <p className="text-3xl font-black text-navy mb-1">1h</p>
                <p className="text-xs font-bold text-slate-500 uppercase">
                  {lang === 'EN' ? 'From port to major hinterland hubs' : 'Van haven naar belangrijke achterland hubs'}
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
