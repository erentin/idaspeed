import { Language } from './types';

type LangMap = Record<Language, string>;

export const SEO: {
  title: LangMap;
  description: LangMap;
  keywords: LangMap;
  ogLocale: LangMap;
} = {
  title: {
    bg: 'Международен транспорт Европа – Турция – Великобритания | IDA SPEED ЕООД — София',
    tr: 'Avrupa - Türkiye - İngiltere Uluslararası Nakliye | IDA SPEED LTD — Sofya Merkezli Lojistik',
    en: 'Europe – Türkiye – UK Road Freight Forwarder | IDA SPEED LTD — Sofia, Bulgaria',
    ru: 'Международные грузоперевозки Европа – Турция – Великобритания | IDA SPEED LTD — София',
  },
  description: {
    bg: '„ИДА СПИЙД“ ЕООД — B2B международен автомобилен транспорт и спедиция между Европа, Турция и Великобритания: FTL, LTL, експресни доставки, температурен режим и митническа координация. София — 23+ години опит, 24/7 диспечер, безплатна оферта до 2 часа.',
    tr: 'IDA SPEED LTD („ИДА СПИЙД“ ЕООД) — Avrupa, Türkiye ve İngiltere arasında B2B karayolu nakliyesi: FTL, LTL / parsiyel, ekspres, frigorifik taşıma ve gümrük koordinasyonu. Sofya merkezli 23+ yıl deneyim, 7/24 dispeçer, 2 saat içinde ücretsiz teklif. Almanya, İtalya, Benelüks, Avusturya, Fransa, İsveç ve UK koridorları.',
    en: 'IDA SPEED LTD (registered as „ИДА СПИЙД“ ЕООД) — B2B international road freight forwarder connecting Europe, Türkiye and the United Kingdom. FTL, LTL groupage, express, temperature-controlled transport and customs coordination. Sofia-based, 23+ years of expertise, 24/7 dispatch, free quote within 2 hours. Coverage: Germany, Italy, Benelux, Austria, France, Scandinavia, UK.',
    ru: 'IDA SPEED LTD („ИДА СПИЙД“ ЕООД) — B2B международные автомобильные перевозки между Европой, Турцией и Великобританией: FTL, LTL сборные, экспресс, рефрижераторные и таможенная координация. София — 23+ лет опыта, диспетчер 24/7, бесплатный расчёт за 2 часа. Германия, Италия, Бенилюкс, Австрия, Франция, Скандинавия, UK.',
  },
  keywords: {
    bg: 'международен транспорт, международна спедиция, сухопътен транспорт, транспорт Европа Турция, транспорт Англия, транспорт Великобритания, FTL, LTL, групаж, експресен превоз, хладилен транспорт, митнически услуги, митнически агент София, B2B логистика, Капикуле, Истанбул, Бурса, IDA SPEED, ИДА СПИЙД ЕООД',
    tr: 'uluslararası nakliye, uluslararası taşımacılık, karayolu nakliyesi, Avrupa Türkiye nakliye, İngiltere nakliye, UK nakliyesi, FTL, LTL, parsiyel, ekspres nakliye, frigorifik taşıma, gümrük müşavirliği, gümrükleme, Sofya lojistik, Kapıkule, Hamza Beyli, İstanbul, Bursa, Almanya nakliye, Hollanda nakliye, Belgrad, Bulgaristan nakliye, B2B lojistik, IDA SPEED, İDA SPİYD EOOD',
    en: 'international road freight, Europe Turkey freight forwarder, UK road freight, Britain road logistics, Sofia freight forwarder, Bulgaria customs broker, FTL full truckload, LTL groupage, express road freight, reefer transport, customs clearance Turkey, Kapikule, Istanbul freight, Bursa logistics, Germany Turkey transport, Benelux Turkey, Scandinavia Turkey, B2B logistics operator, IDA SPEED LTD',
    ru: 'международные грузоперевозки, автомобильные перевозки, грузы Европа Турция, грузы Англия, грузы Великобритания, FTL, LTL, сборные грузы, экспресс-перевозка, рефрижератор, таможенные услуги, таможенный брокер София, логистика Болгария, Капикуле, Стамбул, Бурса, Германия Турция, B2B логистика, IDA SPEED, ИДА СПИЙД ЕООД',
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
  setMeta('meta[name="keywords"]', 'content', SEO.keywords[lang]);
  setMeta('meta[property="og:title"]', 'content', SEO.title[lang]);
  setMeta('meta[property="og:description"]', 'content', SEO.description[lang]);
  setMeta('meta[property="og:locale"]', 'content', SEO.ogLocale[lang]);
  setMeta('meta[name="twitter:title"]', 'content', SEO.title[lang]);
  setMeta('meta[name="twitter:description"]', 'content', SEO.description[lang]);
};
