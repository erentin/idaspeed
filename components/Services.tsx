import React from 'react';
import { Truck, Zap, FileCheck, Warehouse, Thermometer, Boxes, ArrowUpRight } from 'lucide-react';
import { Language, Content } from '../types';

interface ServicesProps {
  lang: Language;
  content: Content['services'];
}

const iconMap: Record<string, React.ReactNode> = {
  Truck: <Truck className="h-7 w-7" strokeWidth={1.4} />,
  Zap: <Zap className="h-7 w-7" strokeWidth={1.4} />,
  FileCheck: <FileCheck className="h-7 w-7" strokeWidth={1.4} />,
  Warehouse: <Warehouse className="h-7 w-7" strokeWidth={1.4} />,
  Thermometer: <Thermometer className="h-7 w-7" strokeWidth={1.4} />,
  Boxes: <Boxes className="h-7 w-7" strokeWidth={1.4} />,
};

const labels = {
  section: { bg: 'Услуги', tr: 'Hizmetler', en: 'Services', ru: 'Услуги' },
  kicker: { bg: 'Пълен спектър логистични решения', tr: 'Tam kapsamlı lojistik çözümleri', en: 'Full-spectrum logistics solutions', ru: 'Полный спектр логистики' },
};

const Services: React.FC<ServicesProps> = ({ lang, content }) => {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>02 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest text-cream max-w-3xl leading-[1.05]">
            {content.title[lang]}
          </h2>
          <p className="text-slate text-lg max-w-md">{labels.kicker[lang]}</p>
        </div>

        <ul className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel/40 border hairline rounded-2xl overflow-hidden">
          {content.items.map((item, i) => (
            <li
              key={i}
              className="group relative bg-ink p-8 lg:p-10 hover-lift hover:bg-graphite"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono-label text-gold/70">{String(i + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="w-4 h-4 text-slate group-hover:text-gold transition-colors" />
              </div>
              <div className="mt-10 w-12 h-12 rounded-full border hairline flex items-center justify-center text-gold group-hover:border-gold transition-colors">
                {iconMap[item.icon]}
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-cream leading-snug">{item.title[lang]}</h3>
              <p className="mt-3 text-slate leading-relaxed text-sm">{item.desc[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;