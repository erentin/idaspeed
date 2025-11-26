import React from 'react';
import { Truck, ArrowUp } from 'lucide-react';
import { Language, Content } from '../types';

interface FooterProps {
  lang: Language;
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ lang, content }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy border-t border-white/10 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center space-x-2 text-white mb-6">
                    <div className="bg-brand-red p-1 rounded">
                        <Truck className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight">IDA SPEED</span>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-gray-400">{content.about[lang]}</p>
            </div>
            
            <div>
                <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
                <ul className="space-y-3 text-sm">
                    <li>
                        <a href="#" className="relative hover:text-brand-red transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full">
                            {content.terms[lang]}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="relative hover:text-brand-red transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-brand-red after:transition-all after:duration-300 hover:after:w-full">
                            {content.privacy[lang]}
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="flex flex-col items-start lg:items-end justify-between">
                <button 
                    onClick={scrollToTop} 
                    className="p-3 bg-white/5 hover:bg-brand-red hover:text-white rounded-full transition-all group"
                >
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>{content.copyright[lang]}</p>
            <p className="mt-2 md:mt-0">Premium Logistics Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;