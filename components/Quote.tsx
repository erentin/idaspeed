import React from 'react';
import { Send, FileText } from 'lucide-react';
import { Language, Content } from '../types';

interface QuoteProps {
  lang: Language;
  content: Content['quote'];
}

const Quote: React.FC<QuoteProps> = ({ lang, content }) => {
  return (
    <div id="quote" className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <span className="inline-block p-3 rounded-full bg-brand-red/20 text-brand-red mb-4">
                <FileText className="w-8 h-8" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">{content.title[lang]}</h2>
            <p className="text-gray-400 text-lg">{content.subtitle[lang]}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-2 bg-brand-red w-full"></div>
            <form className="p-8 md:p-12 space-y-6">
                
                {/* Contact Info Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.company[lang]}</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.contactPerson[lang]}</label>
                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.email[lang]}</label>
                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.phone[lang]}</label>
                        <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" />
                    </div>
                </div>

                {/* Route Group */}
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.origin[lang]}</label>
                            <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="Country, City" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.destination[lang]}</label>
                            <input type="text" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all" placeholder="Country, City" />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{content.fields.cargo[lang]}</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all"></textarea>
                </div>

                <div className="pt-4">
                    <button type="button" className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center text-lg">
                        {content.submit[lang]}
                        <Send className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;