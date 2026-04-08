
import React, { useState } from 'react';
import { Shield, CheckCircle, Maximize2, X, Anchor, Zap, ShieldAlert, Weight } from 'lucide-react';

interface CoilTransportPageProps {
  onBack: () => void;
  onQuote: () => void;
  lang: 'EN' | 'NL';
}

const COIL_EMPTY_IMAGE = "https://mail.google.com/mail/u/0?ui=2&ik=0491c68d68&attid=0.3&permmsgid=msg-f:1856025991925972614&th=19c1edce56a3be86&view=fimg&fur=ip&permmsgid=msg-f:1856025991925972614&sz=s0-l75-ft&attbid=ANGjdJ8zA-DvSX6cBaB_THuHr_Zy_TVLEb_jfEZv8h1ZjjGey8ClqWvqWf0wMR2izvbrnHm2RZ--QL4PpkQqLHrVBlvLjYR4AXR9C4_BdTnX-HR69g-vLp4eX3ceah8&disp=emb&zw";
const COIL_UNLOADING_IMAGE = "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&q=80&w=1600";
const COIL_HERO_BG = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000";

const CoilTransportPage: React.FC<CoilTransportPageProps> = ({ onBack, onQuote, lang }) => {
  const [activeModal, setActiveModal] = useState<'empty' | 'unloading' | null>(null);

  return (
    <div className="pt-24 min-h-screen bg-slate-50 selection:bg-eu-yellow selection:text-navy">
      {/* Immersive Industrial Hero */}
      <div className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src={COIL_HERO_BG} 
            alt="Steel Industry Flagship Service" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
          {/* Animated particles/grid overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-eu-yellow text-navy text-xs font-black uppercase tracking-[0.2em] mb-6 shadow-xl shadow-eu-yellow/20">
              <Zap className="w-4 h-4" /> {lang === 'EN' ? 'Flagship Service' : 'Vlaggenschip Dienst'}
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              COIL<span className="text-eu-yellow">TRANSPORT</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-4 border-eu-yellow pl-8">
              {lang === 'EN' 
                ? 'The backbone of European steel logistics. Specialized coiltrailers for secure, heavy-duty industrial transport.'
                : 'De ruggengraat van de Europese staallogistiek. Gespecialiseerde coiltrailers voor veilig, zwaar industrieel transport.'}
            </p>
          </div>
        </div>
      </div>

      {/* Technical Excellence Section */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-navy mb-8 leading-tight">
                {lang === 'EN' ? 'Engineered for the' : 'Ontworpen voor de'} <br />
                <span className="text-eu-yellow">{lang === 'EN' ? 'Steel Industry.' : 'Staalindustrie.'}</span>
              </h2>
              <div className="prose prose-lg text-slate-600 space-y-6 max-w-none">
                <p className="text-lg leading-relaxed">
                  {lang === 'EN' 
                    ? 'Standard trailers cannot handle the concentrated point-loading of industrial coils. Our specialized fleet features a reinforced chassis and a central "well" designed specifically to secure circular cargo.'
                    : 'Standaard trailers zijn niet bestand tegen de geconcentreerde puntbelasting van industriële rollen. Onze gespecialiseerde vloot beschikt over een versterkt chassis en een centrale "well" die specifiek is ontworpen om ronde lading vast te zetten.'}
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex gap-4 p-6 bg-navy text-white rounded-3xl items-start shadow-xl">
                    <ShieldAlert className="w-8 h-8 text-eu-yellow flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{lang === 'EN' ? 'Safety Without Compromise' : 'Veiligheid Zonder Compromis'}</h4>
                      <p className="text-sm text-slate-300">
                        {lang === 'EN' ? 'Lower center of gravity combined with Multi-Lock side frames ensures zero cargo movement even during emergency braking.' : 'Een lager zwaartepunt in combinatie met Multi-Lock zijframes zorgt voor nul ladingverplaatsing, zelfs bij een noodstop.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 bg-white border border-slate-100 rounded-3xl items-start shadow-md">
                    <Anchor className="w-8 h-8 text-navy flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-navy text-lg mb-1">{lang === 'EN' ? 'Intermodal Ready' : 'Klaar voor Intermodaal'}</h4>
                      <p className="text-sm text-slate-500">
                        {lang === 'EN' ? 'Seamlessly transition from Rotterdam port to the Scandinavian hinterland with our daily FTL departures.' : 'Naadloze overgang van de haven van Rotterdam naar het Scandinavische achterland met onze dagelijkse FTL-vertrekken.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative group cursor-pointer" onClick={() => setActiveModal('empty')}>
                <div className="absolute -inset-4 bg-eu-yellow/10 rounded-[3rem] blur-2xl group-hover:bg-eu-yellow/20 transition-all"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src={COIL_EMPTY_IMAGE} 
                    alt="Empty Coiltrailer Well" 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"; }}
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                    <Maximize2 className="w-4 h-4 text-navy" />
                    <span className="text-xs font-black text-navy uppercase">{lang === 'EN' ? 'Inspect Empty Well' : 'Inspecteer Lege Well'}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-3xl font-black text-navy mb-1">Daily</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'EN' ? 'Scandinavia Shuttle' : 'Scandinavië Shuttle'}</p>
                 </div>
                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-3xl font-black text-navy mb-1">{lang === 'EN' ? 'EU-wide' : 'Heel EU'}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'EN' ? 'Coverage' : 'Dekking'}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Visual: The Unloading Process */}
      <section className="py-24 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10 group cursor-pointer" onClick={() => setActiveModal('unloading')}>
                <img src={COIL_UNLOADING_IMAGE} alt="Coil Unloading" className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-eu-yellow/90 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 className="w-8 h-8 text-navy" />
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-eu-yellow font-black uppercase tracking-[0.3em] mb-4 text-sm">{lang === 'EN' ? 'End-to-End Reliability' : 'End-to-End Betrouwbaarheid'}</h3>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                {lang === 'EN' ? 'Precision Handling for Precious Cargo' : 'Precisie-afhandeling voor Kostbare Lading'}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                {lang === 'EN' 
                  ? 'Steel coils are highly susceptible to moisture and physical damage. Our drivers are specifically trained in the delicate balance of industrial securement and rapid transit.'
                  : 'Stalen rollen zijn zeer gevoelig voor vocht en fysieke schade. Onze chauffeurs zijn specifiek getraind in de delicate balans tussen industriële zekering en snel transport.'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Anti-Slip Mats', desc: 'Standard on all trailers' },
                  { title: 'Weatherproof', desc: 'Premium tarpaulin systems' },
                  { title: 'Traceable', desc: 'GPS monitoring 24/7' },
                  { title: 'Certified', desc: 'VDI 2700 compliant' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-eu-yellow flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-16 rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Weight className="w-32 h-32 text-navy" />
            </div>
            <h2 className="text-4xl font-black text-navy mb-6">{lang === 'EN' ? 'Move Your Steel Today' : 'Verplaats Uw Staal Vandaag'}</h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              {lang === 'EN' 
                ? 'Join Europe\'s leading manufacturers who trust Allround Transport for their most critical industrial lanes.'
                : 'Sluit u aan bij de toonaangevende fabrikanten in Europa die op Allround Transport vertrouwen voor hun meest kritieke industriële routes.'}
            </p>
            <button 
              onClick={onQuote}
              className="bg-eu-yellow hover:bg-yellow-500 text-navy px-12 py-5 rounded-2xl font-black text-xl shadow-xl shadow-eu-yellow/20 transition-all hover:scale-105 active:scale-95"
            >
              {lang === 'EN' ? 'REQUEST COIL QUOTE' : 'VRAAG COIL OFFERTE AAN'}
            </button>
          </div>
        </div>
      </section>

      {/* Image Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[60] bg-navy/95 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setActiveModal(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-eu-yellow transition-colors">
            <X className="w-10 h-10" />
          </button>
          <div className="max-w-6xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <img 
              src={activeModal === 'empty' ? COIL_EMPTY_IMAGE : COIL_UNLOADING_IMAGE} 
              alt={activeModal} 
              className="w-full h-full max-h-[85vh] object-contain bg-slate-900" 
            />
            <div className="p-8 bg-white border-t border-slate-100 flex justify-between items-center">
              <div>
                <h4 className="text-2xl font-black text-navy uppercase">
                  {activeModal === 'empty' ? (lang === 'EN' ? 'Empty Well Detail' : 'Lege Well Detail') : (lang === 'EN' ? 'Unloading Process' : 'Het Losproces')}
                </h4>
                <p className="text-slate-500 text-sm">{lang === 'EN' ? 'Technical inspection of our flagship equipment.' : 'Technische inspectie van ons vlaggenschip materieel.'}</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="bg-navy text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                {lang === 'EN' ? 'Close Inspector' : 'Sluit Inspecteur'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoilTransportPage;
