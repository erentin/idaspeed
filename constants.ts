import { Content } from './types';

export const CONTENT: Content = {
  nav: {
    about: { bg: "За Нас", tr: "Hakkımızda", en: "About", ru: "О Нас" },
    services: { bg: "Услуги", tr: "Hizmetler", en: "Services", ru: "Услуги" },
    routes: { bg: "Маршрути", tr: "Rotalar", en: "Routes", ru: "Маршруты" },
    contact: { bg: "Контакти", tr: "İletişim", en: "Contact", ru: "Контакты" },
    quote: { bg: "Поискай Оферта", tr: "Teklif İste", en: "Request Quote", ru: "Запросить Цену" }
  },
  hero: {
    headline: {
      bg: "Премиум логистика между Европа, Турция и Русия",
      tr: "Avrupa, Türkiye ve Rusya Arasında Premium Lojistik",
      en: "Premium Road Logistics Connecting Europe, Turkey & Russia",
      ru: "Премиум логистика между Европой, Турцией и Россией"
    },
    subheadline: {
      bg: "Вашият стратегически партньор за надеждни FTL и LTL превози. Бързина, сигурност и митническа експертиза за вашия бизнес.",
      tr: "Güvenilir FTL ve LTL taşımacılığı için stratejik ortağınız. İşiniz için hız, güvenlik ve gümrük uzmanlığı.",
      en: "Your strategic partner for reliable FTL and LTL freight. Speed, security, and customs expertise for your business.",
      ru: "Ваш стратегический партнер по надежным FTL и LTL перевозкам. Скорость, безопасность и таможенная экспертиза."
    },
    ctaPrimary: { bg: "Поискай Оферта", tr: "Teklif İste", en: "Request a Quote", ru: "Запросить Цену" },
    ctaSecondary: { bg: "Свържете се с нас", tr: "Bize Ulaşın", en: "Contact Us", ru: "Связаться с нами" }
  },
  about: {
    title: { bg: "За IDA SPEED", tr: "IDA SPEED Hakkında", en: "About IDA SPEED", ru: "О Компании IDA SPEED" },
    desc1: {
      bg: "Ние сме специализирана транспортна компания, фокусирана върху сухопътния превоз на товари между Европа, Турция и Русия. С дългогодишен опит и собствен автопарк, ние гарантираме сигурност и прецизност.",
      tr: "Avrupa, Türkiye ve Rusya arasında karayolu yük taşımacılığına odaklanmış uzman bir lojistik şirketiyiz. Yılların deneyimi ve kendi filomuzla güvenlik ve hassasiyeti garanti ediyoruz.",
      en: "We are a specialized transport company focused on road freight between Europe, Turkey, and Russia. With years of experience and our own fleet, we guarantee security and precision.",
      ru: "Мы специализированная транспортная компания, ориентированная на автоперевозки грузов между Европой, Турцией и Россией. Благодаря многолетнему опыту и собственному автопарку мы гарантируем безопасность."
    },
    desc2: {
      bg: "Нашите B2B клиенти избират IDA SPEED заради безкомпромисното спазване на сроковете и дълбокото познаване на митническите регулации по нашите ключови коридори.",
      tr: "B2B müşterilerimiz, teslimat sürelerine tavizsiz uyumumuz ve kilit koridorlarımızdaki gümrük düzenlemelerine dair derin bilgimiz nedeniyle IDA SPEED'i tercih ediyor.",
      en: "Our B2B clients choose IDA SPEED for our uncompromising adherence to deadlines and deep knowledge of customs regulations along our key corridors.",
      ru: "Наши B2B клиенты выбирают IDA SPEED за бескомпромиссное соблюдение сроков и глубокое знание таможенных правил на наших ключевых маршрутах."
    }
  },
  tracking: {
    title: { bg: "Проследете пратка", tr: "Kargo Takibi", en: "Track Your Shipment", ru: "Отследить груз" },
    desc: { 
      bg: "Проверете статуса на вашата пратка в реално време.", 
      tr: "Gönderinizin durumunu gerçek zamanlı kontrol edin.", 
      en: "Check the real-time status of your shipment.", 
      ru: "Проверьте статус вашего груза в реальном времени." 
    },
    placeholder: { bg: "Въведете номер на товарителница", tr: "Takip numarası giriniz", en: "Enter tracking ID", ru: "Введите номер накладной" },
    button: { bg: "Проследи", tr: "Takip Et", en: "Track", ru: "Отследить" },
    steps: {
      pickup: { bg: "Взет", tr: "Alındı", en: "Picked Up", ru: "Принят" },
      transit: { bg: "На път", tr: "Yolda", en: "In Transit", ru: "В пути" },
      customs: { bg: "Митница", tr: "Gümrük", en: "Customs", ru: "Таможня" },
      delivered: { bg: "Доставен", tr: "Teslim", en: "Delivered", ru: "Доставлен" }
    }
  },
  process: {
    title: { bg: "Как работим", tr: "Nasıl Çalışır", en: "Our Process", ru: "Наш процесс" },
    steps: [
      {
        title: { bg: "Запитване", tr: "Talep", en: "Inquiry", ru: "Запрос" },
        desc: { bg: "Изпратете ни детайли за товара.", tr: "Yük detaylarını bize gönderin.", en: "Send us cargo details.", ru: "Отправьте детали груза." }
      },
      {
        title: { bg: "Оферта", tr: "Teklif", en: "Quote", ru: "Предложение" },
        desc: { bg: "Получавате цена до 2 часа.", tr: "2 saat içinde fiyat alın.", en: "Get a price within 2 hours.", ru: "Цена в течение 2 часов." }
      },
      {
        title: { bg: "Транспорт", tr: "Taşıma", en: "Transport", ru: "Транспорт" },
        desc: { bg: "Сигурен превоз до дестинацията.", tr: "Varış noktasına güvenli taşıma.", en: "Secure transport to destination.", ru: "Безопасная перевозка." }
      },
      {
        title: { bg: "Доставка", tr: "Teslimat", en: "Delivery", ru: "Доставка" },
        desc: { bg: "Успешно предаване на стоката.", tr: "Malın başarılı teslimi.", en: "Successful delivery of goods.", ru: "Успешная доставка." }
      }
    ]
  },
  services: {
    title: { bg: "Нашите Услуги", tr: "Hizmetlerimiz", en: "Our Services", ru: "Наши Услуги" },
    items: [
      {
        icon: "Truck",
        title: { bg: "Цялостни товари (FTL)", tr: "Komple Taşımacılık (FTL)", en: "Full Truckload (FTL)", ru: "Полная загрузка (FTL)" },
        desc: {
          bg: "Директен транспорт без претоварване за максимална бързина и сигурност.",
          tr: "Maksimum hız ve güvenlik için aktarmasız doğrudan taşıma.",
          en: "Direct transport without transshipment for maximum speed and security.",
          ru: "Прямая перевозка без перегрузки для максимальной скорости и безопасности."
        }
      },
      {
        icon: "Boxes",
        title: { bg: "Групажни пратки (LTL)", tr: "Parsiyel Taşımacılık (LTL)", en: "Less-Than-Truckload (LTL)", ru: "Сборные грузы (LTL)" },
        desc: {
          bg: "Ефективни решения за по-малки пратки с редовни ежеседмични линии.",
          tr: "Düzenli haftalık hatlarla daha küçük gönderiler için verimli çözümler.",
          en: "Efficient solutions for smaller shipments with regular weekly lines.",
          ru: "Эффективные решения для небольших партий с регулярными еженедельными рейсами."
        }
      },
      {
        icon: "Zap",
        title: { bg: "Експресен транспорт", tr: "Ekspres Taşımacılık", en: "Express Road Freight", ru: "Экспресс-перевозки" },
        desc: {
          bg: "Спешна доставка с двама шофьори или специализирани микробуси.",
          tr: "Çift şoför veya özel minivanlarla acil teslimat.",
          en: "Urgent delivery with double drivers or specialized vans.",
          ru: "Срочная доставка двумя водителями или специализированными микроавтобусами."
        }
      },
      {
        icon: "FileCheck",
        title: { bg: "Митническо съдействие", tr: "Gümrük Koordinasyonu", en: "Customs Coordination", ru: "Таможенная координация" },
        desc: {
          bg: "Пълна подкрепа при оформяне на документи за внос, износ и транзит.",
          tr: "İthalat, ihracat ve transit belgelerinin düzenlenmesinde tam destek.",
          en: "Full support in processing import, export, and transit documentation.",
          ru: "Полная поддержка в оформлении документов на импорт, экспорт и транзит."
        }
      },
      {
        icon: "Thermometer",
        title: { bg: "Температурен режим", tr: "Isı Kontrollü Taşıma", en: "Temperature Controlled", ru: "Температурный режим" },
        desc: {
          bg: "Превоз на чувствителни стоки с хладилни ремаркета под постоянен контрол.",
          tr: "Hassas ürünlerin frigorifik dorselerle sürekli kontrol altında taşınması.",
          en: "Transport of sensitive goods with refrigerated trailers under constant monitoring.",
          ru: "Перевозка чувствительных грузов в рефрижераторах под постоянным контролем."
        }
      },
      {
        icon: "Warehouse",
        title: { bg: "Консолидация", tr: "Konsolidasyon", en: "Consolidation", ru: "Консолидация" },
        desc: {
          bg: "Събиране и разпределяне на товари в нашите логистични центрове.",
          tr: "Lojistik merkezlerimizde yüklerin toplanması ve dağıtılması.",
          en: "Collection and distribution of cargo at our logistics hubs.",
          ru: "Сбор и распределение грузов в наших логистических центрах."
        }
      }
    ]
  },
  routes: {
    title: { bg: "Основни Коридори", tr: "Ana Koridorlar", en: "Main Corridors", ru: "Основные Маршруты" },
    desc: {
      bg: "Ние свързваме индустриалните зони на Европа с пазарите на Турция и Русия.",
      tr: "Avrupa'nın sanayi bölgelerini Türkiye ve Rusya pazarlarına bağlıyoruz.",
      en: "We connect the industrial zones of Europe with the markets of Turkey and Russia.",
      ru: "Мы соединяем промышленные зоны Европы с рынками Турции и России."
    },
    items: [
      {
        title: { bg: "Европа ↔ Турция", tr: "Avrupa ↔ Türkiye", en: "Europe ↔ Turkey", ru: "Европа ↔ Турция" },
        desc: { 
          bg: "Ежедневни линии от Германия, Италия, Бенелюкс до Истанбул и Бурса.", 
          tr: "Almanya, İtalya, Benelüks'ten İstanbul ve Bursa'ya günlük hatlar.",
          en: "Daily lines from Germany, Italy, Benelux to Istanbul and Bursa.",
          ru: "Ежедневные рейсы из Германии, Италии, Бенилюкса в Стамбул и Бурсу."
        },
        time: { bg: "Транзит: 4-6 дни", tr: "Transit: 4-6 Gün", en: "Transit: 4-6 Days", ru: "Транзит: 4-6 дней" }
      },
      {
        title: { bg: "Турция ↔ Русия", tr: "Türkiye ↔ Rusya", en: "Turkey ↔ Russia", ru: "Турция ↔ Россия" },
        desc: { 
          bg: "Директен сухопътен транспорт през Грузия за Москва и регионите.", 
          tr: "Moskova ve bölgeler için Gürcistan üzerinden doğrudan karayolu taşımacılığı.",
          en: "Direct road transport via Georgia to Moscow and the regions.",
          ru: "Прямые автоперевозки через Грузию в Москву и регионы."
        },
        time: { bg: "Транзит: 8-12 дни", tr: "Transit: 8-12 Gün", en: "Transit: 8-12 Days", ru: "Транзит: 8-12 дней" }
      },
      {
        title: { bg: "Европа ↔ Русия", tr: "Avrupa ↔ Rusya", en: "Europe ↔ Russia", ru: "Европа ↔ Россия" },
        desc: { 
          bg: "Надеждни алтернативни маршрути през Турция за санкционирани и несанкционирани товари.", 
          tr: "Yaptırımlı ve yaptırımsız yükler için Türkiye üzerinden güvenilir alternatif rotalar.",
          en: "Reliable alternative routes via Turkey for general cargo.",
          ru: "Надежные альтернативные маршруты через Турцию."
        },
        time: { bg: "Транзит: 14-18 дни", tr: "Transit: 14-18 Gün", en: "Transit: 14-18 Days", ru: "Транзит: 14-18 дней" }
      }
    ]
  },
  whyUs: {
    title: { bg: "Защо IDA SPEED?", tr: "Neden IDA SPEED?", en: "Why Choose IDA SPEED?", ru: "Почему IDA SPEED?" },
    items: [
      {
        title: { bg: "Бързина", tr: "Hız", en: "Speed", ru: "Скорость" },
        desc: { bg: "Оптимизирани маршрути за минимално транзитно време.", tr: "Minimum transit süresi için optimize edilmiş rotalar.", en: "Optimized routes for minimal transit time.", ru: "Оптимизированные маршруты." }
      },
      {
        title: { bg: "Надеждност", tr: "Güvenilirlik", en: "Reliability", ru: "Надежность" },
        desc: { bg: "Гарантирани доставки със собствена флота.", tr: "Kendi filomuzla garantili teslimatlar.", en: "Guaranteed deliveries with our own fleet.", ru: "Гарантированные поставки." }
      },
      {
        title: { bg: "Експертиза", tr: "Uzmanlık", en: "Expertise", ru: "Экспертиза" },
        desc: { bg: "Дълбоко познаване на граничните процедури.", tr: "Sınır prosedürleri hakkında derin bilgi.", en: "Deep knowledge of border procedures.", ru: "Глубокое знание процедур." }
      },
      {
        title: { bg: "B2B Фокус", tr: "B2B Odaklı", en: "B2B Focus", ru: "B2B Фокус" },
        desc: { bg: "Решения, проектирани за бизнеса.", tr: "İşletmeler için tasarlanmış çözümler.", en: "Solutions designed for businesses.", ru: "Решения для бизнеса." }
      },
      {
        title: { bg: "Комуникация", tr: "İletişim", en: "Communication", ru: "Коммуникация" },
        desc: { bg: "24/7 връзка с вашия личен спедитор.", tr: "Kişisel nakliyecinizle 7/24 bağlantı.", en: "24/7 connection with your dispatcher.", ru: "Связь 24/7." }
      },
      {
        title: { bg: "Гъвкавост", tr: "Esneklik", en: "Flexibility", ru: "Гибкость" },
        desc: { bg: "Адаптивни решения спрямо вашите нужди.", tr: "İhtiyaçlarınıza göre uyarlanabilir çözümler.", en: "Adaptive solutions for your needs.", ru: "Адаптивные решения." }
      }
    ]
  },
  industries: {
    title: { bg: "Обслужвани Индустрии", tr: "Hizmet Verilen Sektörler", en: "Industries Served", ru: "Обслуживаемые Отрасли" },
    items: [
      { name: { bg: "Автомобилна", tr: "Otomotiv", en: "Automotive", ru: "Автомобильная" }, desc: { bg: "Части и компоненти за производство.", tr: "Üretim için parça ve bileşenler.", en: "Parts and components for production.", ru: "Запчасти и компоненты." }, icon: "Car" },
      { name: { bg: "Текстил", tr: "Tekstil", en: "Textile", ru: "Текстиль" }, desc: { bg: "Платове и готови облекла.", tr: "Kumaşlar ve hazır giyim.", en: "Fabrics and ready-made garments.", ru: "Ткани и одежда." }, icon: "Shirt" },
      { name: { bg: "Електроника", tr: "Elektronik", en: "Electronics", ru: "Электроника" }, desc: { bg: "Бяла и черна техника.", tr: "Beyaz eşya ve elektronik.", en: "Consumer electronics and appliances.", ru: "Бытовая техника." }, icon: "Cpu" },
      { name: { bg: "Търговия", tr: "Perakende", en: "Retail", ru: "Ритейл" }, desc: { bg: "Стоки за търговските вериги.", tr: "Perakende zincirleri için mallar.", en: "Goods for retail chains.", ru: "Товары для сетей." }, icon: "ShoppingBasket" },
      { name: { bg: "Машини", tr: "Makine", en: "Machinery", ru: "Оборудование" }, desc: { bg: "Индустриално оборудване.", tr: "Endüstriyel ekipmanlar.", en: "Industrial equipment.", ru: "Промышленное оборудование." }, icon: "Cog" },
      { name: { bg: "E-commerce", tr: "E-ticaret", en: "E-commerce", ru: "E-commerce" }, desc: { bg: "Международни пратки за онлайн магазини.", tr: "Online mağazalar için uluslararası gönderiler.", en: "International shipments for online stores.", ru: "Международные отправления." }, icon: "ShoppingBag" },
    ]
  },
  testimonials: {
    title: { bg: "Клиентите за нас", tr: "Müşteri Yorumları", en: "Client Testimonials", ru: "Отзывы клиентов" },
    items: [
      {
        company: "AutoParts International",
        quote: { bg: "IDA SPEED е изключително надежден партньор за нашите доставки от Турция.", tr: "IDA SPEED, Türkiye'den teslimatlarımız için son derece güvenilir bir ortak.", en: "IDA SPEED is an extremely reliable partner for our shipments from Turkey.", ru: "IDA SPEED — надежный партнер для наших поставок из Турции." },
        author: "Mehmet Y."
      },
      {
        company: "Global Logistics Ltd.",
        quote: { bg: "Професионализъм и бърза реакция при всяка ситуация.", tr: "Her durumda profesyonellik ve hızlı tepki.", en: "Professionalism and quick response in every situation.", ru: "Профессионализм и быстрая реакция в любой ситуации." },
        author: "Sarah J."
      }
    ]
  },
  quote: {
    title: { bg: "Поискайте Оферта", tr: "Teklif İsteyin", en: "Request a Quote", ru: "Запросите Предложение" },
    subtitle: { 
      bg: "Попълнете формата и ние ще се свържем с вас в рамките на 2 часа.",
      tr: "Formu doldurun, sizinle 2 saat içinde iletişime geçelim.",
      en: "Fill out the form and we will contact you within 2 hours.",
      ru: "Заполните форму, и мы свяжемся с вами в течение 2 часов."
    },
    fields: {
      company: { bg: "Име на фирмата", tr: "Şirket Adı", en: "Company Name", ru: "Название компании" },
      contactPerson: { bg: "Лице за контакт", tr: "İlgili Kişi", en: "Contact Person", ru: "Контактное лицо" },
      email: { bg: "Имейл", tr: "E-posta", en: "Email", ru: "Email" },
      phone: { bg: "Телефон", tr: "Telefon", en: "Phone", ru: "Телефон" },
      origin: { bg: "Товарен пункт (Държава/Град)", tr: "Yükleme Yeri (Ülke/Şehir)", en: "Origin (Country/City)", ru: "Пункт погрузки" },
      destination: { bg: "Разтоварен пункт (Държава/Град)", tr: "Varış Yeri (Ülke/Şehir)", en: "Destination (Country/City)", ru: "Пункт разгрузки" },
      cargo: { bg: "Детайли за товара (Вид, Тегло, Обем)", tr: "Yük Detayları (Tür, Ağırlık, Hacim)", en: "Cargo Details (Type, Weight, Volume)", ru: "Детали груза" }
    },
    submit: { bg: "Изпрати Запитване", tr: "Teklif İste", en: "Send Request", ru: "Отправить Запрос" }
  },
  contact: {
    title: { bg: "Контакти", tr: "İletişim", en: "Contact Us", ru: "Контакты" },
    subtitle: { bg: "Нашите офиси и представителства.", tr: "Ofislerimiz ve temsilciliklerimiz.", en: "Our offices and representatives.", ru: "Наши офисы и представительства." },
    offices: {
      sofia: { bg: "София, България (Централа)", tr: "Sofya, Bulgaristan (Merkez)", en: "Sofia, Bulgaria (HQ)", ru: "София, Болгария (Офис)" },
      istanbul: { bg: "Истанбул, Турция", tr: "İstanbul, Türkiye", en: "Istanbul, Turkey", ru: "Стамбул, Турция" },
      moscow: { bg: "Москва, Русия", tr: "Moskova, Rusya", en: "Moscow, Russia", ru: "Москва, Россия" }
    }
  },
  footer: {
    about: { 
      bg: "IDA SPEED е вашият надежден партньор за логистика между Изтока и Запада.", 
      tr: "IDA SPEED, Doğu ile Batı arasındaki lojistikte güvenilir ortağınızdır.", 
      en: "IDA SPEED is your trusted partner for logistics between East and West.", 
      ru: "IDA SPEED — ваш надежный партнер в логистике между Востоком и Западом." 
    },
    copyright: { bg: "© 2024 IDA SPEED. Всички права запазени.", tr: "© 2024 IDA SPEED. Tüm hakları saklıdır.", en: "© 2024 IDA SPEED. All rights reserved.", ru: "© 2024 IDA SPEED. Все права защищены." },
    privacy: { bg: "Политика за поверителност", tr: "Gizlilik Politikası", en: "Privacy Policy", ru: "Политика конфиденциальности" },
    terms: { bg: "Общи условия", tr: "Kullanım Şartları", en: "Terms of Service", ru: "Условия использования" }
  }
};