import React from 'react';
import { Clock } from 'lucide-react';
import { Language, Content } from '../types';

interface RoutesProps {
  lang: Language;
  content: Content['routes'];
}

const labels = {
  section: { bg: 'Коридори', tr: 'Koridorlar', en: 'Corridors', ru: 'Коридоры' },
};

// Corridor nodes: Frankfurt → Sofia → Istanbul — stylised map
const CorridorMap: React.FC = () => (
  <svg viewBox="0 0 800 360" className="w-full h-auto" aria-hidden="true">
    <defs>
      <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#E8B64F" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#E8B64F" stopOpacity="1" />
        <stop offset="100%" stopColor="#E8B64F" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    {/* grid */}
    <g stroke="#F5F1E814" strokeWidth="1">
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={'h' + i} x1="0" y1={i * 45} x2="800" y2={i * 45} />
      ))}
      {Array.from({ length: 17 }).map((_, i) => (
        <line key={'v' + i} x1={i * 50} y1="0" x2={i * 50} y2="360" />
      ))}
    </g>
    {/* corridor arcs */}
    <path d="M 140 140 C 280 70, 380 80, 450 170" fill="none" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 6" />
    <path d="M 450 170 C 560 200, 620 230, 700 220" fill="none" stroke="url(#line)" strokeWidth="2" strokeDasharray="6 6" />
    {/* nodes */}
    {[
      { x: 140, y: 140, label: 'Frankfurt' },
      { x: 310, y: 100, label: 'Milano' },
      { x: 450, y: 170, label: 'Sofia' },
      { x: 700, y: 220, label: 'Istanbul' },
    ].map((n) => (
      <g key={n.label}>
        <circle cx={n.x} cy={n.y} r="14" fill="#0A0B0F" stroke="#E8B64F" strokeWidth="2" />
        <circle cx={n.x} cy={n.y} r="4" fill="#E8B64F" />
        <text x={n.x + 20} y={n.y + 5} fill="#F5F1E8" fontSize="14" fontFamily="Space Grotesk, sans-serif" fontWeight="500">{n.label}</text>
      </g>
    ))}
  </svg>
);

const RoutesSection: React.FC<RoutesProps> = ({ lang, content }) => {
  return (
    <section id="routes" className="relative py-28 lg:py-36 bg-obsidian overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>03 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest text-cream leading-[1.05]">{content.title[lang]}</h2>
            <p className="mt-6 text-slate text-lg leading-relaxed max-w-md">{content.desc[lang]}</p>
          </div>
          <div className="lg:col-span-7 border hairline rounded-2xl p-6 bg-ink">
            <CorridorMap />
          </div>
        </div>

        <ul className="mt-16 grid lg:grid-cols-3 gap-5">
          {content.items.map((item, i) => (
            <li key={i} className="group relative p-8 bg-ink border hairline rounded-2xl hover-lift hover:border-gold/40">
              <span className="font-mono-label text-gold/70">Corridor / {String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-2xl font-semibold text-cream leading-snug">{item.title[lang]}</h3>
              <p className="mt-4 text-slate text-sm leading-relaxed border-b hairline pb-6 min-h-[84px]">{item.desc[lang]}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-cream font-mono-label">
                <Clock className="w-3.5 h-3.5 text-gold" />
                {item.time[lang]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RoutesSection;