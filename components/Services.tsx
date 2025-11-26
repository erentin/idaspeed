import React from 'react';
import { Truck, Zap, FileCheck, Warehouse, Thermometer, Boxes } from 'lucide-react';
import { Language, Content } from '../types';

interface ServicesProps {
  lang: Language;
  content: Content['services'];
}

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="h-8 w-8" />,
  Zap: <Zap className="h-8 w-8" />,
  FileCheck: <FileCheck className="h-8 w-8" />,
  Warehouse: <Warehouse className="h-8 w-8" />,
  Thermometer: <Thermometer className="h-8 w-8" />,
  Boxes: <Boxes className="h-8 w-8" />,
};

const Services: React.FC<ServicesProps> = ({ lang, content }) => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">{content.title[lang]}</h2>
          <div className="h-1.5 w-24 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-brand-red/20 relative overflow-hidden">
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="h-16 w-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 text-brand-navy transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                {iconMap[item.icon]}
              </div>
              
              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-brand-red transition-colors">{item.title[lang]}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;