import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import RoutesSection from './components/RoutesSection';
import WhyUs from './components/WhyUs';
import Industries from './components/Industries';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CONTENT } from './constants';
import { Language } from './types';
import { applySEO } from './seo';

const SUPPORTED: Language[] = ['bg', 'tr', 'en', 'ru'];

const detectInitialLang = (): Language => {
  if (typeof window === 'undefined') return 'bg';
  const url = new URLSearchParams(window.location.search).get('lang');
  if (url && SUPPORTED.includes(url as Language)) return url as Language;
  const stored = localStorage.getItem('idaspeed-lang');
  if (stored && SUPPORTED.includes(stored as Language)) return stored as Language;
  const nav = (navigator.language || 'bg').slice(0, 2).toLowerCase();
  if (SUPPORTED.includes(nav as Language)) return nav as Language;
  return 'bg';
};

function App() {
  const [lang, setLangState] = useState<Language>('bg');

  useEffect(() => {
    setLangState(detectInitialLang());
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    try { localStorage.setItem('idaspeed-lang', l); } catch { /* ignore */ }
  };

  useEffect(() => {
    applySEO(lang);
  }, [lang]);

  return (
    <div className="min-h-screen bg-obsidian text-cream antialiased font-sans">
      <Navbar lang={lang} setLang={setLang} content={CONTENT.nav} />

      <main id="main">
        <Hero lang={lang} content={CONTENT.hero} />
        <About lang={lang} content={CONTENT.about} />
        <Services lang={lang} content={CONTENT.services} />
        <RoutesSection lang={lang} content={CONTENT.routes} />
        <WhyUs lang={lang} content={CONTENT.whyUs} />
        <Industries lang={lang} content={CONTENT.industries} />
        <Quote lang={lang} content={CONTENT.quote} />
        <Contact lang={lang} content={CONTENT.contact} />
      </main>

      <Footer lang={lang} content={CONTENT.footer} />
    </div>
  );
}

export default App;