
import React from 'react';
import { Home, Package, FileText, Truck, MapPin, ShieldCheck, Star, ArrowRight } from 'lucide-react';
import { translations } from '../translations';

interface IndividualPageProps {
  lang: 'EN' | 'NL';
  onQuote?: () => void;
}

const HERO_IMAGE = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1400";

const IndividualPage: React.FC<IndividualPageProps> = ({ lang, onQuote }) => {
  const t = translations[lang];

  const services = lang === 'EN' ? [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'International Moving',
      desc: 'Complete relocation service for your household goods. We handle packing coordination, loading, transport, and delivery to your new home.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Italy & Spain Specialist',
      desc: 'Especially popular for Italy and Spain. Our native speakers ensure seamless coordination with no language barriers, end to end.',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Door-to-Door Delivery',
      desc: 'We collect from your current address and deliver directly to your new home. No intermediaries, no confusion. Just one team.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Customs & Documentation',
      desc: 'All import/export paperwork handled by our AEO-certified team. We manage customs clearance for UK, Norway, and EU destinations.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Packaging Guidance',
      desc: 'Expert advice on safely packing fragile, valuable, and oversized items for long-distance international road and sea freight.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Insured & Reliable',
      desc: 'All personal shipments are fully insured during transit. 35+ years of reliable reputation. Your belongings are in safe hands.',
    },
  ] : [
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Internationale Verhuizing',
      desc: 'Complete verhuisservice voor uw inboedel. Wij regelen de inpakcoördinatie, het laden, het transport en de levering op uw nieuwe adres.',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Italië & Spanje Specialist',
      desc: 'Bijzonder populair voor Italië en Spanje. Onze native speakers zorgen voor naadloze coördinatie zonder taalbarrières.',
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Deur-tot-Deur Levering',
      desc: 'Wij halen op bij uw huidige adres en bezorgen direct op uw nieuwe locatie. Geen tussenpersonen, geen verwarring.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Douane & Documentatie',
      desc: 'Alle in- en uitvoerformaliteiten worden afgehandeld door ons AEO-gecertificeerd team. VK, Noorwegen en EU-bestemmingen.',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Verpakkingsadvies',
      desc: 'Deskundig advies over het veilig verpakken van breekbare en waardevolle items voor internationaal transport over land en zee.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Verzekerd & Betrouwbaar',
      desc: 'Alle persoonlijke zendingen zijn volledig verzekerd tijdens transport. 35+ jaar betrouwbare reputatie. Uw spullen zijn in goede handen.',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">

      {/* ── Header section: left text + right image ── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Left: badge, title, description, CTA */}
            <div className="lg:w-1/2 reveal-left">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-eu-yellow/15 border border-eu-yellow/40 text-navy text-xs font-black uppercase tracking-widest rounded-full mb-8">
                <Star className="w-3 h-3 text-eu-yellow fill-eu-yellow" />
                {lang === 'EN' ? 'Individual Services' : 'Particuliere Diensten'}
              </span>

              <h1 className="text-5xl md:text-6xl font-black text-navy leading-tight mb-6">
                {lang === 'EN' ? (
                  <>Moving Abroad?<br /><span className="text-eu-yellow">We've Got You.</span></>
                ) : (
                  <>Verhuizen naar<br /><span className="text-eu-yellow">het Buitenland?</span></>
                )}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {t.individual.subtitle}
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                {t.individual.body1}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onQuote}
                  className="inline-flex items-center justify-center gap-3 bg-eu-yellow hover:bg-yellow-500 text-navy px-8 py-4 rounded-xl font-black transition-all shadow-lg group"
                >
                  {lang === 'EN' ? 'Get a Free Quote' : 'Gratis Offerte Aanvragen'}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="mailto:info@allround-transport.nl"
                  className="inline-flex items-center justify-center gap-3 bg-white border-2 border-navy text-navy px-8 py-4 rounded-xl font-bold transition-all hover:bg-navy hover:text-white"
                >
                  {lang === 'EN' ? 'Email Us' : 'Stuur Ons een E-mail'}
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 mt-10 pt-10 border-t border-slate-100">
                <div className="text-center">
                  <p className="text-2xl font-black text-navy">35+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{lang === 'EN' ? 'Years Experience' : 'Jaar Ervaring'}</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-navy">500+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{lang === 'EN' ? 'Happy Clients' : 'Tevreden Klanten'}</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-navy">38+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{lang === 'EN' ? 'Countries' : 'Landen'}</p>
                </div>
              </div>
            </div>

            {/* Right: tall image */}
            <div className="lg:w-1/2 reveal-right">
              <div className="relative h-[580px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={HERO_IMAGE}
                  alt={lang === 'EN' ? 'International Moving Service' : 'Internationale Verhuisservice'}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1400';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent"></div>
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl">
                    <p className="text-xs font-black text-eu-yellow uppercase tracking-widest mb-1">
                      {lang === 'EN' ? 'Most Popular Routes' : 'Meest Populaire Routes'}
                    </p>
                    <p className="text-navy font-bold text-sm">🇮🇹 Italy · 🇪🇸 Spain · 🇵🇹 Portugal · 🇫🇷 France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service cards grid ── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-eu-yellow text-xs font-black uppercase tracking-[0.3em] mb-3">
              {lang === 'EN' ? 'What We Offer' : 'Wat Wij Bieden'}
            </p>
            <h2 className="text-4xl font-black text-white">
              {lang === 'EN' ? 'Everything You Need for a Smooth Move' : 'Alles voor een Vlotte Verhuizing'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <div
                key={i}
                className={`reveal bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-eu-yellow/30 transition-all duration-300 group delay-${(i % 3) * 100 + 100}`}
              >
                <div className="w-12 h-12 bg-eu-yellow/10 rounded-xl flex items-center justify-center text-eu-yellow mb-6 group-hover:bg-eu-yellow group-hover:text-navy transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-3 group-hover:text-eu-yellow transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-slate-400 mb-6 text-lg">
              {lang === 'EN'
                ? 'Ready to start planning your move? Get a free, no-obligation quote in 90 minutes.'
                : 'Klaar om uw verhuizing te plannen? Ontvang een gratis, vrijblijvende offerte binnen 90 minuten.'}
            </p>
            <button
              onClick={onQuote}
              className="inline-flex items-center gap-3 bg-eu-yellow hover:bg-yellow-500 text-navy px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-eu-yellow/20 hover:scale-105"
            >
              {lang === 'EN' ? 'Request Your Free Moving Quote' : 'Vraag Gratis Verhuisofferte Aan'}
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndividualPage;
