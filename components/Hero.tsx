import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Language, Content } from '../types';

interface HeroProps {
  lang: Language;
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ lang, content }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background Image - Concept: Modern European highway with a clean, branded semi-truck */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop" 
            alt="European Logistics Truck on Highway" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
         />
         {/* Gradient Overlay for text readability and premium feel */}
         <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/70 to-brand-navy/20"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            <span className="text-brand-red font-bold tracking-widest text-xs uppercase">IDA SPEED Logistics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight drop-shadow-lg">
            {content.headline[lang]}
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mb-12 leading-relaxed font-light border-l-4 border-brand-red pl-6">
            {content.subheadline[lang]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => scrollTo('quote')}
              className="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-red-900/40 flex items-center justify-center text-lg group"
            >
              {content.ctaPrimary[lang]}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/30 font-semibold rounded-lg transition-all hover:border-white/50 flex items-center justify-center text-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              {content.ctaSecondary[lang]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;