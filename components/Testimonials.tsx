import React from 'react';
import { Quote } from 'lucide-react';
import { Language, Content } from '../types';

interface TestimonialsProps {
  lang: Language;
  content: Content['testimonials'];
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang, content }) => {
  return (
    <div className="py-24 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">{content.title[lang]}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.items.map((item, index) => (
            <div key={index} className="bg-white/10 p-8 rounded-2xl relative">
              <Quote className="h-8 w-8 text-brand-red absolute top-6 left-6 opacity-50" />
              <div className="pl-10 relative z-10">
                  <p className="text-lg italic mb-6 text-gray-200">"{item.quote[lang]}"</p>
                  <div>
                      <p className="font-bold text-white">{item.author}</p>
                      <p className="text-sm text-brand-red">{item.company}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;