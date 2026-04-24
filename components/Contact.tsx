import React from 'react';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Language, Content } from '../types';

interface ContactProps {
  lang: Language;
  content: Content['contact'];
}

const labels = {
  section: { bg: 'Контакти', tr: 'İletişim', en: 'Contact', ru: 'Контакты' },
  addressLabel: { bg: 'Адрес', tr: 'Adres', en: 'Address', ru: 'Адрес' },
  emailLabel: { bg: 'Ел. поща', tr: 'E-posta', en: 'Email', ru: 'E-mail' },
  phoneLabel: { bg: 'Телефон', tr: 'Telefon', en: 'Phone', ru: 'Телефон' },
  whatsappLabel: { bg: 'WhatsApp', tr: 'WhatsApp', en: 'WhatsApp', ru: 'WhatsApp' },
  legal: { bg: 'Правно наименование', tr: 'Resmi Ünvan', en: 'Legal name', ru: 'Юр. наименование' },
};

const ADDRESS = {
  bg: 'гр. София 1360, ж.к. Модерно предградие, ул. Професор Янаки Моллов № 1',
  tr: 'Sofya 1360, Moderno Predgradie, Prof. Yanaki Mollov Cad. No: 1',
  en: 'Sofia 1360, Moderno Predgradie district, 1 Prof. Yanaki Mollov Str.',
  ru: 'г. София 1360, ж.к. Модерно предградие, ул. Профессор Янаки Моллов, № 1',
};

const LEGAL_NAME: Record<Language, string> = {
  bg: '„ИДА СПИЙД“ ЕООД',
  tr: '„IDA SPEED“ LTD',
  en: '„IDA SPEED“ LTD',
  ru: '„IDA SPEED“ LTD',
};

const EMAIL = 'ida.speed@abv.bg';
const PHONE_DISPLAY = '+359 87 611 6239';
const PHONE_TEL = '+359876116239';
const WHATSAPP_DISPLAY = '+90 538 305 15 32';
const WHATSAPP_NUMBER = '905383051532';

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

        <div className="mt-16 grid lg:grid-cols-12 gap-5">
          {/* Office card */}
          <article className="lg:col-span-7 p-8 lg:p-10 bg-ink border hairline rounded-2xl">
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-gold">BG · HQ</span>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            </div>

            <h3 className="mt-6 font-display text-3xl lg:text-4xl font-semibold text-cream leading-tight">
              {content.offices.sofia[lang]}
            </h3>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-mono-label text-slate">{labels.addressLabel[lang]}</div>
                <address className="not-italic mt-2 text-cream leading-relaxed">
                  <span className="inline-flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                    <span>{ADDRESS[lang]}</span>
                  </span>
                </address>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="font-mono-label text-slate">{labels.phoneLabel[lang]}</div>
                  <a href={`tel:${PHONE_TEL}`} className="mt-2 inline-flex items-center gap-2 text-cream hover:text-gold transition-colors">
                    <Phone className="w-4 h-4 text-gold" /> {PHONE_DISPLAY}
                  </a>
                </div>
                <div>
                  <div className="font-mono-label text-slate">{labels.whatsappLabel[lang]}</div>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-cream hover:text-gold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-gold" /> {WHATSAPP_DISPLAY}
                  </a>
                </div>
                <div>
                  <div className="font-mono-label text-slate">{labels.emailLabel[lang]}</div>
                  <a href={`mailto:${EMAIL}`} className="mt-2 inline-flex items-center gap-2 text-cream hover:text-gold transition-colors">
                    <Mail className="w-4 h-4 text-gold" /> {EMAIL}
                  </a>
                </div>
                <div>
                  <div className="font-mono-label text-slate">{labels.legal[lang]}</div>
                  <p className="mt-2 text-cream font-display">{LEGAL_NAME[lang]}</p>
                </div>
              </div>
            </div>
          </article>

          {/* Direct mail CTA */}
          <aside className="lg:col-span-5 p-8 lg:p-10 border hairline rounded-2xl bg-gradient-to-br from-graphite to-ink flex flex-col justify-between">
            <div>
              <span className="font-mono-label text-gold">Direct line</span>
              <p className="mt-6 font-display text-2xl lg:text-3xl text-cream leading-snug">
                {lang === 'bg' && 'Пишете ни директно — отговаряме в рамките на 2 часа.'}
                {lang === 'tr' && 'Bize doğrudan yazın — 2 saat içinde dönüş yapıyoruz.'}
                {lang === 'en' && 'Write to us directly — we reply within 2 hours.'}
                {lang === 'ru' && 'Напишите нам напрямую — отвечаем в течение 2 часов.'}
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-obsidian px-6 py-4 rounded-full font-semibold hover:bg-gold-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 border hairline text-cream px-6 py-4 rounded-full font-semibold hover:border-gold/60 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 text-slate hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;