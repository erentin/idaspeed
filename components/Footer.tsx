import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Language, Content } from '../types';

interface FooterProps {
  lang: Language;
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ lang, content }) => {
  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-obsidian border-t hairline">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        {/* Big wordmark */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M10 44 L32 16 L54 44 Z" fill="none" stroke="#E8B64F" strokeWidth="4" strokeLinejoin="round" />
                <circle cx="32" cy="38" r="3.5" fill="#E8B64F" />
              </svg>
              <span className="font-display text-xl font-bold tracking-tightest">
                IDA <span className="text-gold">SPEED</span>
              </span>
            </div>
            <p className="text-slate text-sm leading-relaxed">{content.about[lang]}</p>
          </div>

          <button
            onClick={toTop}
            className="group inline-flex items-center gap-2 border hairline px-5 py-3 rounded-full font-mono-label hover:border-gold hover:text-gold transition-colors"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            Back to top
          </button>
        </div>

        <div className="mt-16 font-display text-[18vw] lg:text-[12rem] leading-[0.9] font-bold tracking-tightest text-cream/5 select-none pointer-events-none">
          IDA SPEED
        </div>

        <div className="mt-10 pt-8 border-t hairline flex flex-col md:flex-row justify-between gap-4 text-xs text-slate">
          <p>{content.copyright[lang]}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">{content.privacy[lang]}</a>
            <a href="#" className="hover:text-gold transition-colors">{content.terms[lang]}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;