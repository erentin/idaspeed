import React, { useState } from 'react';
import { Search, Package, Check, Truck, MapPin, FileText } from 'lucide-react';
import { Language, Content } from '../types';

interface TrackingProps {
  lang: Language;
  content: Content['tracking'];
}

const Tracking: React.FC<TrackingProps> = ({ lang, content }) => {
  const [trackingId, setTrackingId] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if(trackingId.trim()) {
        setShowResult(true);
    }
  };

  return (
    <div id="tracking" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-brand-navy p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{content.title[lang]}</h2>
            <p className="text-gray-300">{content.desc[lang]}</p>
          </div>
          
          <div className="p-8 md:p-12">
            <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-12">
              <input
                type="text"
                placeholder={content.placeholder[lang]}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <button 
                type="submit"
                className="px-8 py-3 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Search className="h-5 w-5 mr-2" />
                {content.button[lang]}
              </button>
            </form>

            {showResult && (
                <div className="border-t pt-8 animate-fade-in">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div>
                            <p className="text-sm text-gray-500">Tracking ID</p>
                            <p className="text-xl font-bold text-brand-navy">{trackingId}</p>
                        </div>
                        <div className="mt-4 md:mt-0 px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                            {content.steps.transit[lang]}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Progress Bar Background */}
                        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 md:w-full md:h-0.5 md:left-0 md:top-6"></div>
                        
                        {/* Steps */}
                        <div className="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-8 relative">
                            {/* Step 1 */}
                            <div className="flex md:flex-col items-center md:text-center z-10">
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-brand-navy text-white rounded-full flex items-center justify-center shadow-md">
                                    <Package className="h-4 w-4 md:h-6 md:w-6" />
                                </div>
                                <div className="ml-4 md:ml-0 md:mt-4">
                                    <p className="font-bold text-gray-900">{content.steps.pickup[lang]}</p>
                                    <p className="text-xs text-gray-500">Sofia, BG</p>
                                </div>
                            </div>
                            
                            {/* Step 2 (Active) */}
                            <div className="flex md:flex-col items-center md:text-center z-10">
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-brand-red text-white rounded-full flex items-center justify-center shadow-md ring-4 ring-red-100">
                                    <Truck className="h-4 w-4 md:h-6 md:w-6" />
                                </div>
                                <div className="ml-4 md:ml-0 md:mt-4">
                                    <p className="font-bold text-gray-900">{content.steps.transit[lang]}</p>
                                    <p className="text-xs text-gray-500">Istanbul, TR</p>
                                </div>
                            </div>

                             {/* Step 3 */}
                             <div className="flex md:flex-col items-center md:text-center z-10">
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-white border-2 border-gray-300 text-gray-400 rounded-full flex items-center justify-center">
                                    <FileText className="h-4 w-4 md:h-6 md:w-6" />
                                </div>
                                <div className="ml-4 md:ml-0 md:mt-4">
                                    <p className="font-semibold text-gray-400">{content.steps.customs[lang]}</p>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="flex md:flex-col items-center md:text-center z-10">
                                <div className="w-8 h-8 md:w-12 md:h-12 bg-white border-2 border-gray-300 text-gray-400 rounded-full flex items-center justify-center">
                                    <MapPin className="h-4 w-4 md:h-6 md:w-6" />
                                </div>
                                <div className="ml-4 md:ml-0 md:mt-4">
                                    <p className="font-semibold text-gray-400">{content.steps.delivered[lang]}</p>
                                    <p className="text-xs text-gray-400">Moscow, RU</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;