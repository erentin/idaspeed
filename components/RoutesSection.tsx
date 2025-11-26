import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Language, Content } from '../types';

interface RoutesProps {
  lang: Language;
  content: Content['routes'];
}

const RoutesSection: React.FC<RoutesProps> = ({ lang, content }) => {
  return (
    <div id="routes" className="py-24 bg-brand-navy relative overflow-hidden text-white">
      {/* Decorative Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
             <h2 className="text-3xl md:text-4xl font-extrabold mb-6">{content.title[lang]}</h2>
             <p className="text-lg text-gray-400 max-w-2xl">{content.desc[lang]}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
           {content.items.map((item, index) => (
             <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group">
                <div className="flex items-center justify-between mb-6">
                    <div className="bg-brand-red/20 text-brand-red px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                        Route 0{index + 1}
                    </div>
                    <ArrowRight className="text-gray-500 group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.title[lang]}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed border-b border-white/10 pb-8 min-h-[80px]">
                    {item.desc[lang]}
                </p>
                
                <div className="flex items-center text-white/90 font-medium">
                    <Clock className="w-5 h-5 mr-3 text-brand-red" />
                    {item.time[lang]}
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default RoutesSection;