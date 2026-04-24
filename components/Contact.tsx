import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Language, Content } from '../types';

interface ContactProps {
  lang: Language;
  content: Content['contact'];
}

const labels = {
  section: { bg: 'Контакти', tr: 'İletişim', en: 'Contact', ru: 'Контакты' },
};

const OFFICES = [
  {
    key: 'sofia',
    code: 'BG',
    address: ['Brussels Blvd 1, Sofia Airport Center', '1592 Sofia, Bulgaria'],
    phone: '+359 2 999 9999',
    email: 'office@idaspeed.com',
  },
  {
    key: 'istanbul',
    code: 'TR',
    address: ['Halkalı Merkez, Basın Ekspres Yolu', '34303 Istanbul, Türkiye'],
    phone: '+90 212 999 9999',
    email: 'tr@idaspeed.com',
  },
  {
    key: 'moscow',
    code: 'RU',
    address: ['Presnenskaya Naberezhnaya 12', '123317 Moscow, Russia'],
    phone: '+7 495 999 9999',
    email: 'ru@idaspeed.com',
  },
] as const;

const Contact: React.FC<ContactProps> = ({ lang, content }) => {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-obsidian">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>07 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest text-cream leading-[1.05]">
            {content.title[lang]}
          </h2>
          <p className="text-slate text-lg">{content.subtitle[lang]}</p>
        </div>

        <ul className="mt-16 grid md:grid-cols-3 gap-5">
          {OFFICES.map((o) => (
            <li key={o.key} className="p-8 bg-ink border hairline rounded-2xl hover-lift hover:border-gold/40">
              <div className="flex items-center justify-between">
                <span className="font-mono-label text-gold">{o.code}</span>
                <span className="w-2 h-2 rounded-full bg-gold" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
                {content.offices[o.key][lang]}
              </h3>
              <address className="not-italic mt-4 text-slate leading-relaxed text-sm">
                {o.address.map((l) => (<div key={l}>{l}</div>))}
              </address>
              <div className="mt-6 space-y-2 text-sm">
                <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold" /> {o.phone}
                </a>
                <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-cream hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold" /> {o.email}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;