import React from 'react';
import { Car, Shirt, Cpu, ShoppingBasket, Cog, ShoppingBag } from 'lucide-react';
import { Language, Content } from '../types';

interface IndustriesProps {
  lang: Language;
  content: Content['industries'];
}

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="h-6 w-6" />,
  Shirt: <Shirt className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  ShoppingBasket: <ShoppingBasket className="h-6 w-6" />,
  Cog: <Cog className="h-6 w-6" />,
  ShoppingBag: <ShoppingBag className="h-6 w-6" />,
};

const Industries: React.FC<IndustriesProps> = ({ lang, content }) => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-brand-navy mb-12 text-center">{content.title[lang]}</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {content.items.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all group">
                    <div className="text-gray-400 group-hover:text-brand-red transition-colors mb-4 flex justify-center">
                        {iconMap[item.icon]}
                    </div>
                    <h4 className="font-bold text-brand-navy mb-2 text-sm">{item.name[lang]}</h4>
                    <p className="text-xs text-gray-500 leading-tight hidden md:block">{item.desc[lang]}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;