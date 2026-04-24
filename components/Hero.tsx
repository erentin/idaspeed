import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { Language, Content } from '../types';

interface HeroProps {
  lang: Language;
  content: Content['hero'];
}

const KPIS = [
  { k: '15+', labels: { bg: 'Години опит', tr: 'Yıl Deneyim', en: 'Years of Expertise', ru: 'Лет опыта' } },
  { k: '50+', labels: { bg: 'Собствени превозни', tr: 'Kendi Aracımız', en: 'Own Fleet Units', ru: 'Ед. собственного парка' } },
  { k: '24/7', labels: { bg: 'Диспечерски контрол', tr: 'Dispeçer Desteği', en: 'Dispatch Support', ru: 'Диспетчер' } },
  { k: '3', labels: { bg: 'Континента', tr: 'Kıta', en: 'Continents', ru: 'Континента' } },
];

const MARQUEE = ['FTL', 'LTL', 'EXPRESS', 'REEFER', 'CUSTOMS', 'CONSOLIDATION', 'B2B', 'EU · TR · RU'];

const Hero: React.FC<HeroProps> = ({ lang, content }) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-obsidian pt-28 pb-16" aria-label="IDA SPEED introduction">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* meta row */}
        <div className="flex items-center gap-4 font-mono-label text-slate">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold">Live · EU → TR → RU</span>
          </span>
          <span className="hairline border-l h-4" />
          <span>Sofia · Istanbul · Moscow</span>
        </div>

        {/* headline */}
        <h1 className="font-display font-bold mt-8 text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[108px] lg:leading-[0.95] tracking-tightest">
          <span className="block text-cream">{content.headline[lang]}</span>
        </h1>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-6 text-lg md:text-xl text-slate leading-relaxed max-w-xl">
            {content.subheadline[lang]}
          </p>

          <div className="lg:col-span-6 flex flex-col sm:flex-row gap-3 lg:justify-end">
            <button
              onClick={() => scrollTo('quote')}
              className="group inline-flex items-center justify-center gap-3 bg-gold text-obsidian px-7 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors"
            >
              {content.ctaPrimary[lang]}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center justify-center gap-3 border hairline px-7 py-4 rounded-full font-medium hover:border-gold hover:text-gold transition-colors"
            >
              <Mail className="w-4 h-4" />
              {content.ctaSecondary[lang]}
            </button>
          </div>
        </div>

        {/* KPI strip */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 border-t hairline">
          {KPIS.map((kpi, i) => (
            <div key={i} className={`py-8 lg:px-8 ${i > 0 ? 'lg:border-l hairline' : ''} ${i % 2 === 1 ? 'border-l hairline lg:border-l' : ''}`}>
              <div className="font-display text-5xl lg:text-6xl font-bold text-cream tracking-tightest">{kpi.k}</div>
              <div className="mt-2 font-mono-label text-slate">{kpi.labels[lang]}</div>
            </div>
          ))}
        </div>

        {/* corridor ticker */}
        <div className="mt-12 relative overflow-hidden border-y hairline py-4" aria-hidden="true">
          <div className="flex gap-12 whitespace-nowrap animate-marquee font-mono-label text-slate">
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={i} className="flex items-center gap-3">
                <MapPin className="w-3 h-3 text-gold" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;