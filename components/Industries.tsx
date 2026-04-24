import React from 'react';
import { Car, Shirt, Cpu, ShoppingBasket, Cog, ShoppingBag } from 'lucide-react';
import { Language, Content } from '../types';

interface IndustriesProps {
  lang: Language;
  content: Content['industries'];
}

const iconMap: Record<string, React.ReactNode> = {
  Car: <Car className="h-6 w-6" strokeWidth={1.4} />,
  Shirt: <Shirt className="h-6 w-6" strokeWidth={1.4} />,
  Cpu: <Cpu className="h-6 w-6" strokeWidth={1.4} />,
  ShoppingBasket: <ShoppingBasket className="h-6 w-6" strokeWidth={1.4} />,
  Cog: <Cog className="h-6 w-6" strokeWidth={1.4} />,
  ShoppingBag: <ShoppingBag className="h-6 w-6" strokeWidth={1.4} />,
};

const labels = {
  section: { bg: 'Индустрии', tr: 'Sektörler', en: 'Industries', ru: 'Отрасли' },
};

const Industries: React.FC<IndustriesProps> = ({ lang, content }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-obsidian">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>05 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <h2 className="mt-10 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest text-cream leading-[1.05] max-w-3xl">
          {content.title[lang]}
        </h2>

        <ul className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-steel/40 border hairline rounded-2xl overflow-hidden">
          {content.items.map((item, i) => (
            <li key={i} className="group bg-ink p-6 lg:p-8 hover:bg-graphite transition-colors">
              <div className="text-gold">{iconMap[item.icon]}</div>
              <h3 className="mt-6 font-display text-lg font-semibold text-cream">{item.name[lang]}</h3>
              <p className="mt-2 text-slate text-xs leading-relaxed">{item.desc[lang]}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Industries;