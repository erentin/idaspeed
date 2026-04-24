import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Language, Content } from '../types';

interface QuoteProps {
  lang: Language;
  content: Content['quote'];
}

const labels = {
  section: { bg: 'Оферта', tr: 'Teklif', en: 'Quote', ru: 'Запрос' },
  sla: { bg: 'Отговор в рамките на 2 часа', tr: '2 saat içinde geri dönüş', en: 'Response within 2 hours', ru: 'Ответ в течение 2 часов' },
};

const fieldCls =
  'w-full bg-transparent border-0 border-b hairline focus:border-gold outline-none py-3 text-cream placeholder-slate/50 transition-colors';

const Quote: React.FC<QuoteProps> = ({ lang, content }) => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = Array.from(data.entries())
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    window.location.href = `mailto:info@idaspeed.com?subject=Quote%20Request&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="quote" className="relative py-28 lg:py-36 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 font-mono-label text-gold">
          <span>06 — {labels.section[lang]}</span>
          <span className="hairline border-t flex-1" />
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tightest text-cream leading-[1.05]">
              {content.title[lang]}
            </h2>
            <p className="mt-6 text-slate text-lg leading-relaxed">{content.subtitle[lang]}</p>
            <div className="mt-8 inline-flex items-center gap-2 border hairline rounded-full px-4 py-2 font-mono-label text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {labels.sla[lang]}
            </div>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 bg-obsidian border hairline rounded-2xl p-8 md:p-12 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <label className="block">
                <span className="font-mono-label text-slate">{content.fields.company[lang]}</span>
                <input name="company" required className={fieldCls} />
              </label>
              <label className="block">
                <span className="font-mono-label text-slate">{content.fields.contactPerson[lang]}</span>
                <input name="contact" required className={fieldCls} />
              </label>
              <label className="block">
                <span className="font-mono-label text-slate">{content.fields.email[lang]}</span>
                <input name="email" type="email" required className={fieldCls} />
              </label>
              <label className="block">
                <span className="font-mono-label text-slate">{content.fields.phone[lang]}</span>
                <input name="phone" type="tel" className={fieldCls} />
              </label>
              <label className="block">
                <span className="font-mono-label text-slate">{content.fields.origin[lang]}</span>
                <input name="origin" required className={fieldCls} />
              </label>
              <label className="block">
                <span className="font-mono-label text-slate">{content.fields.destination[lang]}</span>
                <input name="destination" required className={fieldCls} />
              </label>
            </div>
            <label className="block">
              <span className="font-mono-label text-slate">{content.fields.cargo[lang]}</span>
              <textarea name="cargo" rows={4} className={fieldCls} />
            </label>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-gold text-obsidian px-7 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors"
            >
              {sent ? '✓ ' : ''}{content.submit[lang]}
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quote;