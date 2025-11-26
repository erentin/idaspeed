import React from 'react';
import { Language, Content } from '../types';

interface ProcessProps {
  lang: Language;
  content: Content['process'];
}

const Process: React.FC<ProcessProps> = ({ lang, content }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">{content.title[lang]}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 h-full hover:shadow-lg transition-shadow">
                <div className="text-4xl font-extrabold text-gray-200 absolute top-4 right-4">{index + 1}</div>
                <h3 className="text-xl font-bold text-brand-red mb-3 relative z-10">{step.title[lang]}</h3>
                <p className="text-gray-600 relative z-10">{step.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;