import { Language } from './types';

type LangMap = Record<Language, string>;

export const SEO: {
  title: LangMap;
  description: LangMap;
  ogLocale: LangMap;
} = {
  title: {
    bg: 'IDA SPEED — Международна автомобилна логистика | Европа · Турция',
    tr: 'IDA SPEED — Uluslararası Karayolu Lojistiği | Avrupa · Türkiye',
    en: 'IDA SPEED — International Road Logistics | Europe · Türkiye',
    ru: 'IDA SPEED — Международная автомобильная логистика | Европа · Турция',
  },
  description: {
    bg: '„ИДА СПИЙД“ ЕООД — B2B сухопътен транспорт между Европа и Турция: FTL, LTL, експресни доставки, температурен режим и митническа координация. София — 23+ години опит, 24/7 диспечер.',
    tr: 'Avrupa ile Türkiye arasında B2B karayolu taşımacılığı: FTL, LTL, ekspres, frigorifik ve gümrük koordinasyonu. Sofya merkezli, 23+ yıl deneyim, 7/24 dispeçer.',
    en: 'B2B road freight between Europe and Türkiye: FTL, LTL, express, temperature-controlled transport and customs coordination. Sofia-based, 23+ years of experience, 24/7 dispatch.',
    ru: 'B2B автомобильные перевозки между Европой и Турцией: FTL, LTL, экспресс, рефрижератор, таможенная координация. София — 23+ лет опыта, диспетчер 24/7.',
  },
  ogLocale: {
    bg: 'bg_BG',
    tr: 'tr_TR',
    en: 'en_US',
    ru: 'ru_RU',
  },
};

export const applySEO = (lang: Language) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = lang;
  document.title = SEO.title[lang];

  const setMeta = (selector: string, attr: 'content', value: string) => {
    const el = document.head.querySelector<HTMLMetaElement>(selector);
    if (el) el.setAttribute(attr, value);
  };
  setMeta('meta[name="description"]', 'content', SEO.description[lang]);
  setMeta('meta[property="og:title"]', 'content', SEO.title[lang]);
  setMeta('meta[property="og:description"]', 'content', SEO.description[lang]);
  setMeta('meta[property="og:locale"]', 'content', SEO.ogLocale[lang]);
  setMeta('meta[name="twitter:title"]', 'content', SEO.title[lang]);
  setMeta('meta[name="twitter:description"]', 'content', SEO.description[lang]);
};
