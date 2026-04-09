
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS, LANGUAGES } from '../constants';
import { translations } from '../translations';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  currentLang: 'EN' | 'NL';
  onLangChange: (lang: 'EN' | 'NL') => void;
}

const LOGO_URL = "https://ci3.googleusercontent.com/meips/ADKq_Nalh8vh5ihyLRpmTeanZoUpOAAY76sBg2-Kv_pVpxa3MxMsCbNILJOocgiFOXAsiO1cgyU8ud-VBEXiO4Q3LKWiSoVLQWnAwky1-AGvz_DmC_KM8xf1czEr2TFzRQ9S1HkblgQYSJDmJ0PaDqUQjXUCTb8Ox4mRWw9cuziq-o2EKu0Uzw=s0-d-e1-ft#https://www.evofenedexbedrijvengids.nl/site/allround-transport-wegtransport/$File/allround-transport-intro.png";

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage, currentLang, onLangChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[currentLang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (['home', 'destinations', 'other-services', 'road-transport', 'coil-transport', 'individual', 'customs'].includes(href)) {
      e.preventDefault();
      onNavigate(href);
      setIsOpen(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-md py-1' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 flex items-center cursor-pointer focus:outline-none group py-1"
          >
            <div className="transition-all duration-300 py-1">
              <img 
                src={LOGO_URL} 
                alt="Allround Transport" 
                className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = `text-2xl font-extrabold tracking-tighter ${scrolled || currentPage !== 'home' ? 'text-navy' : 'text-white'}`;
                    span.innerHTML = 'ALLROUND<span class="text-eu-yellow">TRANSPORT</span>';
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          </button>

          <div className="hidden xl:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[13px] font-bold hover:text-eu-yellow transition-colors whitespace-nowrap ${scrolled || currentPage !== 'home' ? 'text-slate-700' : 'text-white'}`}
              >
                {t.nav[link.href.replace('-', '_') as keyof typeof t.nav] || link.label}
              </a>
            ))}
            
            <div className="flex items-center gap-6 pl-4 border-l border-white/20">
              <div className="relative group">
                <button className={`flex items-center gap-1 text-[13px] font-bold uppercase ${scrolled || currentPage !== 'home' ? 'text-navy' : 'text-white'}`}>
                  {currentLang} <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {LANGUAGES.filter(l => l.code === 'EN' || l.code === 'NL').map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => onLangChange(lang.code as 'EN' | 'NL')}
                      className="w-full text-left px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-eu-yellow transition-colors"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('quote')}
                aria-label={currentLang === 'EN' ? 'Request a freight quote' : 'Offerte aanvragen'}
                className="bg-eu-yellow hover:bg-yellow-500 text-navy px-5 py-2 rounded-full text-[13px] font-bold transition-all transform hover:scale-105 whitespace-nowrap">
                  {t.nav.quick_quote}
              </button>
            </div>
          </div>

          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled || currentPage !== 'home' ? 'text-navy' : 'text-white'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-eu-yellow"
              >
                {t.nav[link.href.replace('-', '_') as keyof typeof t.nav] || link.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t px-3 flex flex-wrap gap-2">
                {['EN', 'NL'].map(lCode => (
                    <button 
                        key={lCode}
                        onClick={() => { onLangChange(lCode as 'EN' | 'NL'); setIsOpen(false); }}
                        className={`text-xs px-2 py-1 rounded border ${currentLang === lCode ? 'bg-navy text-white' : 'border-slate-300'}`}
                    >
                        {lCode}
                    </button>
                ))}
            </div>
            <div className="px-3 pt-2">
               <button onClick={() => { onNavigate('quote'); setIsOpen(false); }} aria-label={currentLang === 'EN' ? 'Request a freight quote' : 'Offerte aanvragen'} className="w-full bg-eu-yellow text-navy py-3 rounded-xl font-bold">{t.nav.quick_quote}</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
