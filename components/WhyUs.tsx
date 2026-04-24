import React from 'react';
import { Language, Content } from '../types';

interface WhyUsProps {
  lang: Language;
  content: Content['whyUs'];
}

const labels = {
  section: { bg: 'Защо ние', tr: 'Neden Biz', en: 'Why Us', ru: 'Почему мы' },
};

const WhyUs: React.FC<WhyUsProps> = ({ lang, content }) => {
  return (
    <section className="relative py-28 lg:py-36 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>04 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <h2 className="mt-10 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest text-cream leading-[1.05] max-w-4xl">
          {content.title[lang]}
        </h2>

        <ol className="mt-16 divide-y hairline border-t border-b hairline">
          {content.items.map((item, i) => (
            <li key={i} className="group grid grid-cols-12 gap-6 py-8 items-start hover:bg-graphite/40 transition-colors px-2 lg:px-4">
              <div className="col-span-12 lg:col-span-2 font-mono-label text-gold/70">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="col-span-12 lg:col-span-4 font-display text-2xl lg:text-3xl font-semibold text-cream group-hover:text-gold transition-colors">
                {item.title[lang]}
              </h3>
              <p className="col-span-12 lg:col-span-6 text-slate leading-relaxed text-base lg:text-lg">
                {item.desc[lang]}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WhyUs;