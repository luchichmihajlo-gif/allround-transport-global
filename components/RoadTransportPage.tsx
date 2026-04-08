
import React from 'react';
import { Truck, CheckCircle, ArrowRight, Cog, Layout, Thermometer, Maximize, FileText, Anchor, Box, Globe } from 'lucide-react';

interface RoadTransportPageProps {
  onNavigate: (page: string) => void;
  // Added lang prop to interface
  lang: 'EN' | 'NL';
}

const RoadTransportPage: React.FC<RoadTransportPageProps> = ({ onNavigate, lang }) => {
  const truckTypes = [
    { name: 'Tilttrailers', icon: <Truck className="w-5 h-5" /> },
    { name: 'Tautliners', icon: <Truck className="w-5 h-5" /> },
    { name: 'Coiltrailers', icon: <Cog className="w-5 h-5" /> },
    { name: 'Boxtrailers', icon: <Box className="w-5 h-5" /> },
    { name: 'Thermotrucks', icon: <Thermometer className="w-5 h-5" /> },
    { name: 'Kipper', icon: <Truck className="w-5 h-5" /> },
    { name: 'Walkingfloortrucks', icon: <Layout className="w-5 h-5" /> },
    { name: 'Flatbedtrailers', icon: <Maximize className="w-5 h-5" /> },
    { name: 'Megatrailers', icon: <Maximize className="w-5 h-5" /> },
    { name: 'Open trucks', icon: <Truck className="w-5 h-5" /> },
  ];

  const services = lang === 'EN' ? [
    'Complete loads',
    'Partial loads',
    'Groupage loads',
    'Speed freight services',
    'Harbour services',
    'Custom formalities',
    'Exceptional transport',
    'Coiltrailers'
  ] : [
    'Complete ladingen',
    'Deelladingen',
    'Groupage ladingen',
    'Speed freight diensten',
    'Havendiensten',
    'Douaneformaliteiten',
    'Uitzonderlijk transport',
    'Coiltrailers'
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[45vh] min-h-[400px] flex items-center overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://mail.google.com/mail/u/0?ui=2&ik=0491c68d68&attid=0.1&permmsgid=msg-f:1856486853057501424&th=19c390f4eeacd8f0&view=fimg&fur=ip&permmsgid=msg-f:1856486853057501424&sz=s0-l75-ft&attbid=ANGjdJ8dqYw-uhNgjpu-h4f5i6bSXiiXJVue0wa6c0kSRLOvfDwjWFCnnlyYAq08KsAj1TwLM7h5raCeToHUEdLOTLzxRIP2WVucJljp6SMw655EZKBr4djAORsjxzk&disp=emb&zw" 
            alt="Road Transport Trucks" 
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=2000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              {lang === 'EN' ? 'Road Transport' : 'Wegtransport'} <br />
              <span className="text-safety-orange">{lang === 'EN' ? 'Across Europe.' : 'Door Heel Europa.'}</span>
            </h1>
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              {lang === 'EN' 
                ? 'Versatile fleet solutions for every cargo type, managed with precision from Rotterdam.'
                : 'Veelzijdige vlootoplossingen voor elk type lading, met precisie beheerd vanuit Rotterdam.'}
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-extrabold text-navy mb-8">
                {lang === 'EN' ? 'What kind of road transport do you need?' : 'Welk soort wegtransport heeft u nodig?'}
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {lang === 'EN' 
                  ? 'Allround Transport can offer you a wide variety of specialized equipment for road transport. Our diverse fleet ensures we have the right tool for your specific cargo requirements.'
                  : 'Allround Transport kan u een grote variëteit aan gespecialiseerd materieel voor wegtransport aanbieden. Onze diverse vloot zorgt ervoor dat we het juiste gereedschap hebben voor uw specifieke ladingvereisten.'}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {truckTypes.map((truck) => (
                  <div key={truck.name} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-safety-orange transition-all group">
                    <div className="text-safety-orange group-hover:scale-110 transition-transform">{truck.icon}</div>
                    <span className="font-bold text-navy text-sm">{truck.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-safety-orange/10 rounded-full translate-x-16 -translate-y-16 blur-2xl"></div>
                
                <h2 className="text-3xl font-extrabold mb-8">
                  {lang === 'EN' ? 'Our services for road transport' : 'Onze diensten voor wegtransport'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {services.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-safety-orange flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-200">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h4 className="text-xl font-bold text-safety-orange mb-3 flex items-center gap-2">
                       <Cog className="w-6 h-6" /> {lang === 'EN' ? 'Specialized in Coiltrailers' : 'Gespecialiseerd in Coiltrailers'}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {lang === 'EN' 
                        ? 'We have a high-capacity fleet of coiltrailers driving throughout Europe daily.'
                        : 'Wij hebben een vloot coiltrailers met hoge capaciteit die dagelijks door heel Europa rijdt.'}
                    </p>
                    <button 
                      // Fixed navigation to 'coil-transport' to match App.tsx
                      onClick={() => onNavigate('coil-transport')}
                      className="inline-flex items-center gap-2 text-white font-bold hover:text-safety-orange transition-colors"
                    >
                      {lang === 'EN' ? 'Learn what a coiltrailer is' : 'Leer wat een coiltrailer is'} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations CTA */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-navy mb-6">
            {lang === 'EN' ? 'Where do we drive?' : 'Waar rijden we?'}
          </h3>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            {lang === 'EN' 
              ? 'Our road network spans the entire European continent with daily departures. From the Nordics to the Mediterranean, we have you covered.'
              : 'Ons wegennetwerk omspant het hele Europese continent met dagelijkse vertrekken. Van de Scandinavische landen tot de Middellandse Zee, wij regelen het.'}
          </p>
          <button 
            onClick={() => onNavigate('destinations')}
            className="bg-navy hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 mx-auto"
          >
            {lang === 'EN' ? 'Explore All Destinations' : 'Ontdek Alle Bestemmingen'} <Globe className="w-5 h-5 text-safety-orange" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default RoadTransportPage;
