import { Language } from './types';

type LangMap = Record<Language, string>;

export const SEO: {
  title: LangMap;
  description: LangMap;
  ogLocale: LangMap;
} = {
  title: {
    bg: 'IDA SPEED — Международна автомобилна логистика | Европа · Турция · Русия',
    tr: 'IDA SPEED — Uluslararası Karayolu Lojistiği | Avrupa · Türkiye · Rusya',
    en: 'IDA SPEED — International Road Logistics | Europe · Türkiye · Russia',
    ru: 'IDA SPEED — Международная автомобильная логистика | Европа · Турция · Россия',
  },
  description: {
    bg: 'B2B сухопътен транспорт между Европа, Турция и Русия: FTL, LTL, експресни доставки, температурен режим и митническа координация. Собствен автопарк, 24/7 диспечер.',
    tr: 'Avrupa, Türkiye ve Rusya arasında B2B karayolu taşımacılığı: FTL, LTL, ekspres, frigorifik ve gümrük koordinasyonu. Kendi filomuz, 7/24 dispeçer.',
    en: 'B2B road freight between Europe, Türkiye and Russia: FTL, LTL, express, temperature-controlled transport and customs coordination. Own fleet, 24/7 dispatch.',
    ru: 'B2B автомобильные перевозки между Европой, Турцией и Россией: FTL, LTL, экспресс, рефрижератор, таможенная координация. Собственный парк, диспетчер 24/7.',
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
