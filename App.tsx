import { useState } from 'react';
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

function App() {
  // Default language is Bulgarian (bg)
  const [lang, setLang] = useState<Language>('bg');

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      <Navbar lang={lang} setLang={setLang} content={CONTENT.nav} />
      
      <main>
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