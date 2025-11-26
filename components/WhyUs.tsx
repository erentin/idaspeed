import React from 'react';
import { Check } from 'lucide-react';
import { Language, Content } from '../types';

interface WhyUsProps {
  lang: Language;
  content: Content['whyUs'];
}

const WhyUs: React.FC<WhyUsProps> = ({ lang, content }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">{content.title[lang]}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {content.items.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <Check className="w-6 h-6 text-brand-red" />
                  </div>
              </div>
              <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title[lang]}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc[lang]}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;