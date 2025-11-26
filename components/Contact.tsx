import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Language, Content } from '../types';

interface ContactProps {
  lang: Language;
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ lang, content }) => {
  return (
    <div id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">{content.title[lang]}</h2>
           <p className="text-gray-500 text-lg">{content.subtitle[lang]}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sofia */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:border-brand-red/30 transition-all group">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md">
                <MapPin className="w-8 h-8 text-brand-red" />
             </div>
             <h3 className="text-xl font-bold text-brand-navy mb-4">{content.offices.sofia[lang]}</h3>
             <div className="space-y-3 text-gray-600">
                <p>Brussels Blvd 1, Sofia Airport Center</p>
                <p>1592 Sofia, Bulgaria</p>
                <div className="pt-4 flex flex-col gap-2 items-center">
                    <span className="flex items-center text-sm font-medium"><Phone className="w-4 h-4 mr-2 text-brand-red"/> +359 2 999 9999</span>
                    <span className="flex items-center text-sm font-medium"><Mail className="w-4 h-4 mr-2 text-brand-red"/> office@idaspeed.com</span>
                </div>
             </div>
          </div>

          {/* Istanbul */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:border-brand-red/30 transition-all group">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md">
                <Globe className="w-8 h-8 text-brand-navy" />
             </div>
             <h3 className="text-xl font-bold text-brand-navy mb-4">{content.offices.istanbul[lang]}</h3>
             <div className="space-y-3 text-gray-600">
                <p>Halkalı Merkez, Basın Ekspres Yolu</p>
                <p>34303 Istanbul, Turkey</p>
                <div className="pt-4 flex flex-col gap-2 items-center">
                    <span className="flex items-center text-sm font-medium"><Phone className="w-4 h-4 mr-2 text-brand-navy"/> +90 212 999 9999</span>
                    <span className="flex items-center text-sm font-medium"><Mail className="w-4 h-4 mr-2 text-brand-navy"/> tr@idaspeed.com</span>
                </div>
             </div>
          </div>

          {/* Moscow */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center hover:border-brand-red/30 transition-all group">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md">
                <Globe className="w-8 h-8 text-brand-navy" />
             </div>
             <h3 className="text-xl font-bold text-brand-navy mb-4">{content.offices.moscow[lang]}</h3>
             <div className="space-y-3 text-gray-600">
                <p>Presnenskaya Naberezhnaya 12</p>
                <p>123317 Moscow, Russia</p>
                <div className="pt-4 flex flex-col gap-2 items-center">
                    <span className="flex items-center text-sm font-medium"><Phone className="w-4 h-4 mr-2 text-brand-navy"/> +7 495 999 9999</span>
                    <span className="flex items-center text-sm font-medium"><Mail className="w-4 h-4 mr-2 text-brand-navy"/> ru@idaspeed.com</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;