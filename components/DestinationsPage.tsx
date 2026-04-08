
import React, { useState, useMemo } from 'react';
import { COUNTRIES, CountryData } from '../constants';
import { ArrowRight, MapPin, Search } from 'lucide-react';

interface DestinationsPageProps {
  onSelectCountry: (country: CountryData) => void;
  lang: 'EN' | 'NL';
}

const TOP_TIER_IDS = ['sweden', 'denmark', 'finland', 'norway', 'italy', 'sardinia', 'sicily', 'france', 'spain', 'portugal', 'uk'];

const DestinationsPage: React.FC<DestinationsPageProps> = ({ onSelectCountry, lang }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const topTierCountries = useMemo(() => {
    return TOP_TIER_IDS
      .map(id => COUNTRIES.find(c => c.id === id))
      .filter(Boolean)
      .filter(c =>
        c!.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c!.hub.toLowerCase().includes(searchTerm.toLowerCase())
      ) as CountryData[];
  }, [searchTerm]);

  const secondaryCountries = useMemo(() => {
    return COUNTRIES
      .filter(c => !TOP_TIER_IDS.includes(c.id))
      .filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.hub.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm]);

  const CountryCard = ({ country, highlight }: { country: CountryData; highlight: boolean }) => (
    <button
      key={country.id}
      onClick={() => onSelectCountry(country)}
      className={`relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-left flex flex-col justify-between h-full transform hover:-translate-y-1 border-2 ${highlight ? 'border-eu-yellow/40 hover:border-eu-yellow' : 'border-slate-100'}`}
    >
      {highlight && (
        <div className="absolute top-3 right-3 bg-eu-yellow text-navy text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide">
          {lang === 'EN' ? 'Frequent' : 'Frequent'}
        </div>
      )}
      <div>
        <div className="flex justify-between items-start mb-4">
          <span className="text-4xl">{country.flag}</span>
          <div className={`p-2 rounded-full text-navy transition-colors ${highlight ? 'bg-eu-yellow/10 group-hover:bg-eu-yellow' : 'bg-slate-50 group-hover:bg-eu-yellow group-hover:text-navy'}`}>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">{country.name}</h3>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
          <MapPin className="w-3 h-3 text-eu-yellow" />
          <span className="truncate">Hub: {country.hub.split('/')[0]}</span>
        </div>
      </div>
      <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
        {country.description}
      </p>
    </button>
  );

  const hasNoResults = topTierCountries.length === 0 && secondaryCountries.length === 0;

  return (
    <div className="pt-40 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-navy mb-4">
            {lang === 'EN' ? 'European Destinations' : 'Europese Bestemmingen'}
          </h1>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            {lang === 'EN'
              ? 'Strong in Scandinavia and West & South Europe. Daily departures to 38+ countries from our Rotterdam hub.'
              : 'Sterk in Scandinavië en West- & Zuid-Europa. Dagelijkse vertrekken naar 38+ landen vanuit onze Rotterdamse hub.'}
          </p>
        </div>

        <div className="relative mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            type="text"
            placeholder={lang === 'EN' ? "Search countries..." : "Zoek landen..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-eu-yellow focus:border-transparent bg-white shadow-sm transition-all"
          />
        </div>

        {hasNoResults ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
            <p className="text-slate-400 font-medium">
              {lang === 'EN' ? 'No countries found matching your search.' : 'Geen landen gevonden die overeenkomen met uw zoekopdracht.'}
            </p>
          </div>
        ) : (
          <>
            {/* Top Tier Countries */}
            {topTierCountries.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black text-eu-yellow uppercase tracking-widest whitespace-nowrap">
                    {lang === 'EN' ? 'Primary Routes' : 'Primaire Routes'}
                  </span>
                  <div className="flex-1 h-px bg-eu-yellow/30" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {topTierCountries.map(country => (
                    <CountryCard key={country.id} country={country} highlight={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Secondary Countries */}
            {secondaryCountries.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">
                    {lang === 'EN' ? 'All Destinations' : 'Alle Bestemmingen'}
                  </span>
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {secondaryCountries.map(country => (
                    <CountryCard key={country.id} country={country} highlight={false} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;
