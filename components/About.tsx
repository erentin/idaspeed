import React from 'react';
import { Language, Content } from '../types';

interface AboutProps {
  lang: Language;
  content: Content['about'];
}

const labels = {
  section: { bg: 'За нас', tr: 'Hakkımızda', en: 'About', ru: 'О нас' },
  pill: { bg: 'Автопарк · B2B', tr: 'Filo · B2B', en: 'Fleet · B2B', ru: 'Автопарк · B2B' },
};

const About: React.FC<AboutProps> = ({ lang, content }) => {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-obsidian">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>01 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tightest text-cream">
              {content.title[lang]}
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-6 text-slate leading-relaxed text-lg">
            <p>{content.desc1[lang]}</p>
            <p>{content.desc2[lang]}</p>
            <div className="inline-flex items-center gap-2 border hairline rounded-full px-4 py-2 font-mono-label text-cream/80">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {labels.pill[lang]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;