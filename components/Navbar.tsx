import React, { useState } from 'react';
import { Menu, X, Globe, Truck } from 'lucide-react';
import { Language, Content } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const languages: { code: Language; label: string }[] = [
    { code: 'bg', label: 'BG' },
    { code: 'tr', label: 'TR' },
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-brand-navy/90 backdrop-blur-md text-white border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="bg-brand-red p-1.5 rounded-md group-hover:bg-red-700 transition-colors">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight">IDA SPEED</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-brand-red transition-colors px-2 py-2 text-sm font-medium tracking-wide">{content.about[lang]}</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-brand-red transition-colors px-2 py-2 text-sm font-medium tracking-wide">{content.services[lang]}</button>
              <button onClick={() => scrollToSection('routes')} className="hover:text-brand-red transition-colors px-2 py-2 text-sm font-medium tracking-wide">{content.routes[lang]}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-brand-red transition-colors px-2 py-2 text-sm font-medium tracking-wide">{content.contact[lang]}</button>
              
              <button onClick={() => scrollToSection('quote')} className="bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-900/30">
                {content.quote[lang]}
              </button>
              
              {/* Language Switcher Desktop */}
              <div className="relative group ml-4">
                <button className="flex items-center space-x-1 hover:text-gray-300 border border-white/20 px-3 py-1 rounded-full bg-white/5 transition-colors">
                  <Globe className="h-3.5 w-3.5" />
                  <span className="uppercase text-xs font-bold">{lang}</span>
                </button>
                {/* Dropdown Container with padding for hover bridge and animation */}
                <div className="absolute right-0 top-full pt-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-lg shadow-xl py-1 ring-1 ring-black ring-opacity-5 overflow-hidden">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors ${lang === l.code ? 'font-bold bg-gray-50 text-brand-red' : ''}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={() => scrollToSection('about')} className="text-gray-200 hover:text-white hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium w-full text-left">{content.about[lang]}</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-200 hover:text-white hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium w-full text-left">{content.services[lang]}</button>
            <button onClick={() => scrollToSection('routes')} className="text-gray-200 hover:text-white hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium w-full text-left">{content.routes[lang]}</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-200 hover:text-white hover:bg-white/5 block px-3 py-3 rounded-md text-base font-medium w-full text-left">{content.contact[lang]}</button>
            <button onClick={() => scrollToSection('quote')} className="text-white bg-brand-red block px-3 py-3 rounded-md text-base font-bold w-full text-center mt-4 shadow-lg">{content.quote[lang]}</button>
          </div>
          <div className="pt-4 pb-6 border-t border-white/10">
            <div className="flex items-center justify-center space-x-6">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code); setIsOpen(false); }}
                  className={`text-sm font-bold uppercase px-3 py-1 rounded-full ${lang === l.code ? 'bg-white text-brand-navy' : 'text-gray-400 border border-gray-600'}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;