import React, { useEffect, useState } from 'react';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';
import { Language, Content } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: Content['nav'];
}

const LANGS: { code: Language; label: string }[] = [
  { code: 'bg', label: 'BG' },
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
];

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  const links = [
    { id: 'about', label: content.about[lang], n: '01' },
    { id: 'services', label: content.services[lang], n: '02' },
    { id: 'routes', label: content.routes[lang], n: '03' },
    { id: 'contact', label: content.contact[lang], n: '04' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/80 backdrop-blur-xl border-b hairline'
          : 'bg-transparent border-b border-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3"
            aria-label="IDA SPEED — home"
          >
            <span className="inline-flex items-center bg-cream rounded-xl px-3 py-1.5 shadow-[0_4px_20px_-4px_rgba(238,51,63,0.35)] ring-1 ring-white/10 transition-transform group-hover:scale-[1.04]">
              <img
                src="/images/idaspeed-preview.png"
                alt="IDA SPEED"
                width={180}
                height={56}
                className="h-10 lg:h-12 w-auto"
              />
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="group flex items-baseline gap-2 text-sm text-cream/80 hover:text-gold transition-colors"
              >
                <span className="font-mono-label text-gold/60 group-hover:text-gold">{l.n}</span>
                <span className="font-medium">{l.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Language */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-2 px-3 py-2 border hairline rounded-full text-xs font-mono-label hover:border-gold/60 hover:text-gold transition-colors"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
              >
                <Globe className="w-3.5 h-3.5" />
                {lang.toUpperCase()}
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  className="absolute right-0 mt-2 w-28 bg-ink border hairline rounded-lg overflow-hidden shadow-2xl shadow-black/50 animate-fade-up"
                >
                  {LANGS.map((l) => (
                    <li key={l.code}>
                      <button
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm font-mono-label hover:bg-graphite ${
                          lang === l.code ? 'text-gold bg-graphite' : 'text-cream/80'
                        }`}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollTo('quote')}
              className="hidden sm:inline-flex items-center gap-2 bg-gold text-obsidian px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-400 transition-colors"
            >
              {content.quote[lang]}
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden p-2 text-cream hover:text-gold"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-t hairline animate-fade-up">
          <div className="px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="flex items-baseline gap-3 py-3 border-b hairline text-left"
              >
                <span className="font-mono-label text-gold/60">{l.n}</span>
                <span className="font-display text-2xl">{l.label}</span>
              </button>
            ))}
            <button
              onClick={() => scrollTo('quote')}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gold text-obsidian px-5 py-3 rounded-full font-semibold"
            >
              {content.quote[lang]}
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;