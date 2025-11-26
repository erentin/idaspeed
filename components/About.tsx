import React from 'react';
import { Language, Content } from '../types';
import { ShieldCheck, Award } from 'lucide-react';

interface AboutProps {
  lang: Language;
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ lang, content }) => {
  return (
    <div id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center space-x-2 text-brand-navy font-bold uppercase tracking-wider mb-4">
               <span className="h-0.5 w-8 bg-brand-red"></span>
               <span>IDA SPEED</span>
            </div>
            <h2 className="text-4xl font-extrabold text-brand-navy mb-8 leading-tight">
              {content.title[lang]}
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">{content.desc1[lang]}</p>
              <p>{content.desc2[lang]}</p>
            </div>
            
            <div className="flex gap-8 mt-10">
                <div className="flex items-center gap-3">
                    <div className="bg-brand-navy/5 p-3 rounded-full text-brand-navy">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-brand-navy">Reliable</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-brand-navy/5 p-3 rounded-full text-brand-navy">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-brand-navy">Premium</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
               <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
                  alt="Logistics Warehouse" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-brand-red text-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
               <p className="text-2xl font-bold mb-1">15+ Years</p>
               <p className="text-sm opacity-90">Experience in International Logistics</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;