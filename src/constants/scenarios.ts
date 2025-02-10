import { Language } from "@/types/Language"
import type { Scenario } from "@/types/scenerio"
import {
  MessagesSquare,
  UtensilsCrossed,
  ShoppingBag,
  Hotel,
  MapPin,
  Users,
  Briefcase,
  Phone,
  Plane,
  FireExtinguisherIcon as FirstAidKit,
  Landmark,
  Mail,
  School,
  Scissors,
  Dumbbell,
  Library,
  Film,
  Car,
  GlassWater,
  Heart,
  Network,
  Globe,
  Video,
} from "lucide-react"

export const scenarioTranslations: Record<Language, Record<string, string>> = {
  en: {
    general: "General",
    "small-talk": "Small Talk",
    restaurant: "Restaurant",
    shopping: "Shopping",
    hotel: "Hotel",
    "hair-salon": "Hair Salon",
    gym: "Gym",
    library: "Library",
    "movie-theater": "Movie Theater",
    "car-rental": "Car Rental",
    meeting: "Meeting",
    "job-interview": "Job Interview",
    "business-negotiation": "Business Negotiation",
    presentation: "Presentation",
    "phone-call": "Phone Call",
    "email-writing": "Email Writing",
    "job-networking": "Job Networking",
    "online-meeting": "Online Meeting",
    directions: "Directions",
    airport: "Airport",
    transportation: "Transportation",
    sightseeing: "Sightseeing",
    immigration: "Immigration",
    hospital: "Hospital/Clinic",
    bank: "Bank",
    "post-office": "Post Office",
    school: "School/University",
    emergency: "Emergency",
    party: "Party",
    dating: "Dating",
    "cultural-exchange": "Cultural Exchange",
  },
  es: {
    general: "General",
    "small-talk": "Charla informal",
    restaurant: "Restaurante",
    shopping: "Compras",
    hotel: "Hotel",
    "hair-salon": "Peluquería",
    gym: "Gimnasio",
    library: "Biblioteca",
    "movie-theater": "Cine",
    "car-rental": "Alquiler de coches",
    meeting: "Reunión",
    "job-interview": "Entrevista de trabajo",
    "business-negotiation": "Negociación de negocios",
    presentation: "Presentación",
    "phone-call": "Llamada telefónica",
    "email-writing": "Redacción de correos",
    "job-networking": "Networking profesional",
    "online-meeting": "Reunión en línea",
    directions: "Direcciones",
    airport: "Aeropuerto",
    transportation: "Transporte",
    sightseeing: "Turismo",
    immigration: "Inmigración",
    hospital: "Hospital/Clínica",
    bank: "Banco",
    "post-office": "Oficina de correos",
    school: "Escuela/Universidad",
    emergency: "Emergencia",
    party: "Fiesta",
    dating: "Citas",
    "cultural-exchange": "Intercambio cultural",
  },
  fr: {
    general: "Général",
    "small-talk": "Conversation légère",
    restaurant: "Restaurant",
    shopping: "Shopping",
    hotel: "Hôtel",
    "hair-salon": "Salon de coiffure",
    gym: "Salle de sport",
    library: "Bibliothèque",
    "movie-theater": "Cinéma",
    "car-rental": "Location de voiture",
    meeting: "Réunion",
    "job-interview": "Entretien d'embauche",
    "business-negotiation": "Négociation commerciale",
    presentation: "Présentation",
    "phone-call": "Appel téléphonique",
    "email-writing": "Rédaction d'e-mails",
    "job-networking": "Réseautage professionnel",
    "online-meeting": "Réunion en ligne",
    directions: "Directions",
    airport: "Aéroport",
    transportation: "Transport",
    sightseeing: "Tourisme",
    immigration: "Immigration",
    hospital: "Hôpital/Clinique",
    bank: "Banque",
    "post-office": "Bureau de poste",
    school: "École/Université",
    emergency: "Urgence",
    party: "Fête",
    dating: "Rencontres",
    "cultural-exchange": "Échange culturel",
  },
  it: {
    general: "Generale",
    "small-talk": "Chiacchiere",
    restaurant: "Ristorante",
    shopping: "Shopping",
    hotel: "Hotel",
    "hair-salon": "Parrucchiere",
    gym: "Palestra",
    library: "Biblioteca",
    "movie-theater": "Cinema",
    "car-rental": "Autonoleggio",
    meeting: "Riunione",
    "job-interview": "Colloquio di lavoro",
    "business-negotiation": "Negoziazione commerciale",
    presentation: "Presentazione",
    "phone-call": "Telefonata",
    "email-writing": "Scrittura email",
    "job-networking": "Networking professionale",
    "online-meeting": "Riunione online",
    directions: "Indicazioni",
    airport: "Aeroporto",
    transportation: "Trasporti",
    sightseeing: "Turismo",
    immigration: "Immigrazione",
    hospital: "Ospedale/Clinica",
    bank: "Banca",
    "post-office": "Ufficio postale",
    school: "Scuola/Università",
    emergency: "Emergenza",
    party: "Festa",
    dating: "Appuntamenti",
    "cultural-exchange": "Scambio culturale",
  },
  de: {
    general: "Allgemein",
    "small-talk": "Smalltalk",
    restaurant: "Restaurant",
    shopping: "Einkaufen",
    hotel: "Hotel",
    "hair-salon": "Friseursalon",
    gym: "Fitnessstudio",
    library: "Bibliothek",
    "movie-theater": "Kino",
    "car-rental": "Autovermietung",
    meeting: "Besprechung",
    "job-interview": "Vorstellungsgespräch",
    "business-negotiation": "Geschäftsverhandlung",
    presentation: "Präsentation",
    "phone-call": "Telefonanruf",
    "email-writing": "E-Mail-Verfassen",
    "job-networking": "Berufliches Networking",
    "online-meeting": "Online-Meeting",
    directions: "Wegbeschreibung",
    airport: "Flughafen",
    transportation: "Transport",
    sightseeing: "Besichtigung",
    immigration: "Einwanderung",
    hospital: "Krankenhaus/Klinik",
    bank: "Bank",
    "post-office": "Postamt",
    school: "Schule/Universität",
    emergency: "Notfall",
    party: "Party",
    dating: "Dating",
    "cultural-exchange": "Kulturaustausch",
  },
  ja: {
    general: "一般",
    "small-talk": "雑談",
    restaurant: "レストラン",
    shopping: "ショッピング",
    hotel: "ホテル",
    "hair-salon": "美容院",
    gym: "ジム",
    library: "図書館",
    "movie-theater": "映画館",
    "car-rental": "レンタカー",
    meeting: "ミーティング",
    "job-interview": "就職面接",
    "business-negotiation": "ビジネス交渉",
    presentation: "プレゼンテーション",
    "phone-call": "電話",
    "email-writing": "メール作成",
    "job-networking": "職業ネットワーキング",
    "online-meeting": "オンライン会議",
    directions: "道案内",
    airport: "空港",
    transportation: "交通機関",
    sightseeing: "観光",
    immigration: "入国管理",
    hospital: "病院/クリニック",
    bank: "銀行",
    "post-office": "郵便局",
    school: "学校/大学",
    emergency: "緊急",
    party: "パーティー",
    dating: "デート",
    "cultural-exchange": "文化交流",
  },
  ko: {
    general: "일반",
    "small-talk": "일상 대화",
    restaurant: "레스토랑",
    shopping: "쇼핑",
    hotel: "호텔",
    "hair-salon": "미용실",
    gym: "체육관",
    library: "도서관",
    "movie-theater": "영화관",
    "car-rental": "렌터카",
    meeting: "회의",
    "job-interview": "취업 면접",
    "business-negotiation": "비즈니스 협상",
    presentation: "프레젠테이션",
    "phone-call": "전화 통화",
    "email-writing": "이메일 작성",
    "job-networking": "취업 네트워킹",
    "online-meeting": "온라인 회의",
    directions: "길 안내",
    airport: "공항",
    transportation: "교통",
    sightseeing: "관광",
    immigration: "이민",
    hospital: "병원/클리닉",
    bank: "은행",
    "post-office": "우체국",
    school: "학교/대학교",
    emergency: "긴급",
    party: "파티",
    dating: "데이트",
    "cultural-exchange": "문화 교류",
  },
  zh: {
    general: "一般",
    "small-talk": "闲聊",
    restaurant: "餐厅",
    shopping: "购物",
    hotel: "酒店",
    "hair-salon": "美发店",
    gym: "健身房",
    library: "图书馆",
    "movie-theater": "电影院",
    "car-rental": "租车",
    meeting: "会议",
    "job-interview": "求职面试",
    "business-negotiation": "商务谈判",
    presentation: "演示",
    "phone-call": "电话",
    "email-writing": "邮件写作",
    "job-networking": "职业社交",
    "online-meeting": "在线会议",
    directions: "方向指引",
    airport: "机场",
    transportation: "交通",
    sightseeing: "观光",
    immigration: "移民",
    hospital: "医院/诊所",
    bank: "银行",
    "post-office": "邮局",
    school: "学校/大学",
    emergency: "紧急情况",
    party: "派对",
    dating: "约会",
    "cultural-exchange": "文化交流",
  },
  hi: {
    general: "सामान्य",
    "small-talk": "छोटी बातचीत",
    restaurant: "रेस्तरां",
    shopping: "खरीदारी",
    hotel: "होटल",
    "hair-salon": "हेयर सैलून",
    gym: "जिम",
    library: "पुस्तकालय",
    "movie-theater": "सिनेमाघर",
    "car-rental": "कार किराए पर",
    meeting: "बैठक",
    "job-interview": "जॉब इंटरव्यू",
    "business-negotiation": "व्यापार वार्ता",
    presentation: "प्रस्तुति",
    "phone-call": "फोन कॉल",
    "email-writing": "ईमेल लेखन",
    "job-networking": "जॉब नेटवर्किंग",
    "online-meeting": "ऑनलाइन बैठक",
    directions: "दिशा-निर्देश",
    airport: "हवाई अड्डा",
    transportation: "परिवहन",
    sightseeing: "पर्यटन",
    immigration: "आव्रजन",
    hospital: "अस्पताल/क्लिनिक",
    bank: "बैंक",
    "post-office": "डाकघर",
    school: "स्कूल/विश्वविद्यालय",
    emergency: "आपातकाल",
    party: "पार्टी",
    dating: "डेटिंग",
    "cultural-exchange": "सांस्कृतिक आदान-प्रदान",
  },
  pt: {
    general: "Geral",
    "small-talk": "Conversa informal",
    restaurant: "Restaurante",
    shopping: "Compras",
    hotel: "Hotel",
    "hair-salon": "Salão de beleza",
    gym: "Academia",
    library: "Biblioteca",
    "movie-theater": "Cinema",
    "car-rental": "Aluguel de carros",
    meeting: "Reunião",
    "job-interview": "Entrevista de emprego",
    "business-negotiation": "Negociação comercial",
    presentation: "Apresentação",
    "phone-call": "Chamada telefônica",
    "email-writing": "Redação de e-mail",
    "job-networking": "Networking profissional",
    "online-meeting": "Reunião online",
    directions: "Direções",
    airport: "Aeroporto",
    transportation: "Transporte",
    sightseeing: "Turismo",
    immigration: "Imigração",
    hospital: "Hospital/Clínica",
    bank: "Banco",
    "post-office": "Correios",
    school: "Escola/Universidade",
    emergency: "Emergência",
    party: "Festa",
    dating: "Encontros",
    "cultural-exchange": "Intercâmbio cultural",
  },
  ar: {
    general: "عام",
    "small-talk": "محادثة عادية",
    restaurant: "مطعم",
    shopping: "تسوق",
    hotel: "فندق",
    "hair-salon": "صالون تجميل",
    gym: "صالة رياضية",
    library: "مكتبة",
    "movie-theater": "سينما",
    "car-rental": "تأجير سيارات",
    meeting: "اجتماع",
    "job-interview": "مقابلة عمل",
    "business-negotiation": "مفاوضات تجارية",
    presentation: "عرض تقديمي",
    "phone-call": "مكالمة هاتفية",
    "email-writing": "كتابة البريد الإلكتروني",
    "job-networking": "تواصل مهني",
    "online-meeting": "اجتماع عبر الإنترنت",
    directions: "اتجاهات",
    airport: "مطار",
    transportation: "مواصلات",
    sightseeing: "مشاهدة المعالم",
    immigration: "الهجرة",
    hospital: "مستشفى/عيادة",
    bank: "بنك",
    "post-office": "مكتب البريد",
    school: "مدرسة/جامعة",
    emergency: "طوارئ",
    party: "حفلة",
    dating: "مواعدة",
    "cultural-exchange": "تبادل ثقافي",
  },
}

export const scenarios: Scenario[] = [
  {
    id: "general",
    icon: MessagesSquare,
    translations: {
      en: scenarioTranslations.en.general,
      es: scenarioTranslations.es.general,
      fr: scenarioTranslations.fr.general,
      it: scenarioTranslations.it.general,
      de: scenarioTranslations.de.general,
      ja: scenarioTranslations.ja.general,
      ko: scenarioTranslations.ko.general,
      zh: scenarioTranslations.zh.general,
      hi: scenarioTranslations.hi.general,
      pt: scenarioTranslations.pt.general,
      ar: scenarioTranslations.ar.general,
    },
  },
  {
    id: "small-talk",
    icon: Users,
    translations: {
      en: scenarioTranslations.en["small-talk"],
      es: scenarioTranslations.es["small-talk"],
      fr: scenarioTranslations.fr["small-talk"],
      it: scenarioTranslations.it["small-talk"],
      de: scenarioTranslations.de["small-talk"],
      ja: scenarioTranslations.ja["small-talk"],
      ko: scenarioTranslations.ko["small-talk"],
      zh: scenarioTranslations.zh["small-talk"],
      hi: scenarioTranslations.hi["small-talk"],
      pt: scenarioTranslations.pt["small-talk"],
      ar: scenarioTranslations.ar["small-talk"],
    },
  },
  {
    id: "restaurant",
    icon: UtensilsCrossed,
    translations: {
      en: scenarioTranslations.en.restaurant,
      es: scenarioTranslations.es.restaurant,
      fr: scenarioTranslations.fr.restaurant,
      it: scenarioTranslations.it.restaurant,
      de: scenarioTranslations.de.restaurant,
      ja: scenarioTranslations.ja.restaurant,
      ko: scenarioTranslations.ko.restaurant,
      zh: scenarioTranslations.zh.restaurant,
      hi: scenarioTranslations.hi.restaurant,
      pt: scenarioTranslations.pt.restaurant,
      ar: scenarioTranslations.ar.restaurant,
    },
  },
  {
    id: "shopping",
    icon: ShoppingBag,
    translations: {
      en: scenarioTranslations.en.shopping,
      es: scenarioTranslations.es.shopping,
      fr: scenarioTranslations.fr.shopping,
      it: scenarioTranslations.it.shopping,
      de: scenarioTranslations.de.shopping,
      ja: scenarioTranslations.ja.shopping,
      ko: scenarioTranslations.ko.shopping,
      zh: scenarioTranslations.zh.shopping,
      hi: scenarioTranslations.hi.shopping,
      pt: scenarioTranslations.pt.shopping,
      ar: scenarioTranslations.ar.shopping,
    },
  },
  {
    id: "hotel",
    icon: Hotel,
    translations: {
      en: scenarioTranslations.en.hotel,
      es: scenarioTranslations.es.hotel,
      fr: scenarioTranslations.fr.hotel,
      it: scenarioTranslations.it.hotel,
      de: scenarioTranslations.de.hotel,
      ja: scenarioTranslations.ja.hotel,
      ko: scenarioTranslations.ko.hotel,
      zh: scenarioTranslations.zh.hotel,
      hi: scenarioTranslations.hi.hotel,
      pt: scenarioTranslations.pt.hotel,
      ar: scenarioTranslations.ar.hotel,
    },
  },
  {
    id: "hair-salon",
    icon: Scissors,
    translations: {
      en: scenarioTranslations.en["hair-salon"],
      es: scenarioTranslations.es["hair-salon"],
      fr: scenarioTranslations.fr["hair-salon"],
      it: scenarioTranslations.it["hair-salon"],
      de: scenarioTranslations.de["hair-salon"],
      ja: scenarioTranslations.ja["hair-salon"],
      ko: scenarioTranslations.ko["hair-salon"],
      zh: scenarioTranslations.zh["hair-salon"],
      hi: scenarioTranslations.hi["hair-salon"],
      pt: scenarioTranslations.pt["hair-salon"],
      ar: scenarioTranslations.ar["hair-salon"],
    },
  },
  {
    id: "gym",
    icon: Dumbbell,
    translations: {
      en: scenarioTranslations.en.gym,
      es: scenarioTranslations.es.gym,
      fr: scenarioTranslations.fr.gym,
      it: scenarioTranslations.it.gym,
      de: scenarioTranslations.de.gym,
      ja: scenarioTranslations.ja.gym,
      ko: scenarioTranslations.ko.gym,
      zh: scenarioTranslations.zh.gym,
      hi: scenarioTranslations.hi.gym,
      pt: scenarioTranslations.pt.gym,
      ar: scenarioTranslations.ar.gym,
    },
  },
  {
    id: "library",
    icon: Library,
    translations: {
      en: scenarioTranslations.en.library,
      es: scenarioTranslations.es.library,
      fr: scenarioTranslations.fr.library,
      it: scenarioTranslations.it.library,
      de: scenarioTranslations.de.library,
      ja: scenarioTranslations.ja.library,
      ko: scenarioTranslations.ko.library,
      zh: scenarioTranslations.zh.library,
      hi: scenarioTranslations.hi.library,
      pt: scenarioTranslations.pt.library,
      ar: scenarioTranslations.ar.library,
    },
  },
  {
    id: "movie-theater",
    icon: Film,
    translations: {
      en: scenarioTranslations.en["movie-theater"],
      es: scenarioTranslations.es["movie-theater"],
      fr: scenarioTranslations.fr["movie-theater"],
      it: scenarioTranslations.it["movie-theater"],
      de: scenarioTranslations.de["movie-theater"],
      ja: scenarioTranslations.ja["movie-theater"],
      ko: scenarioTranslations.ko["movie-theater"],
      zh: scenarioTranslations.zh["movie-theater"],
      hi: scenarioTranslations.hi["movie-theater"],
      pt: scenarioTranslations.pt["movie-theater"],
      ar: scenarioTranslations.ar["movie-theater"],
    },
  },
  {
    id: "car-rental",
    icon: Car,
    translations: {
      en: scenarioTranslations.en["car-rental"],
      es: scenarioTranslations.es["car-rental"],
      fr: scenarioTranslations.fr["car-rental"],
      it: scenarioTranslations.it["car-rental"],
      de: scenarioTranslations.de["car-rental"],
      ja: scenarioTranslations.ja["car-rental"],
      ko: scenarioTranslations.ko["car-rental"],
      zh: scenarioTranslations.zh["car-rental"],
      hi: scenarioTranslations.hi["car-rental"],
      pt: scenarioTranslations.pt["car-rental"],
      ar: scenarioTranslations.ar["car-rental"],
    },
  },
  {
    id: "meeting",
    icon: Users,
    translations: {
      en: scenarioTranslations.en.meeting,
      es: scenarioTranslations.es.meeting,
      fr: scenarioTranslations.fr.meeting,
      it: scenarioTranslations.it.meeting,
      de: scenarioTranslations.de.meeting,
      ja: scenarioTranslations.ja.meeting,
      ko: scenarioTranslations.ko.meeting,
      zh: scenarioTranslations.zh.meeting,
      hi: scenarioTranslations.hi.meeting,
      pt: scenarioTranslations.pt.meeting,
      ar: scenarioTranslations.ar.meeting,
    },
  },
  {
    id: "job-interview",
    icon: Briefcase,
    translations: {
      en: scenarioTranslations.en["job-interview"],
      es: scenarioTranslations.es["job-interview"],
      fr: scenarioTranslations.fr["job-interview"],
      it: scenarioTranslations.it["job-interview"],
      de: scenarioTranslations.de["job-interview"],
      ja: scenarioTranslations.ja["job-interview"],
      ko: scenarioTranslations.ko["job-interview"],
      zh: scenarioTranslations.zh["job-interview"],
      hi: scenarioTranslations.hi["job-interview"],
      pt: scenarioTranslations.pt["job-interview"],
      ar: scenarioTranslations.ar["job-interview"],
    },
  },
  {
    id: "business-negotiation",
    icon: Briefcase,
    translations: {
      en: scenarioTranslations.en["business-negotiation"],
      es: scenarioTranslations.es["business-negotiation"],
      fr: scenarioTranslations.fr["business-negotiation"],
      it: scenarioTranslations.it["business-negotiation"],
      de: scenarioTranslations.de["business-negotiation"],
      ja: scenarioTranslations.ja["business-negotiation"],
      ko: scenarioTranslations.ko["business-negotiation"],
      zh: scenarioTranslations.zh["business-negotiation"],
      hi: scenarioTranslations.hi["business-negotiation"],
      pt: scenarioTranslations.pt["business-negotiation"],
      ar: scenarioTranslations.ar["business-negotiation"],
    },
  },
  {
    id: "presentation",
    icon: Users,
    translations: {
      en: scenarioTranslations.en.presentation,
      es: scenarioTranslations.es.presentation,
      fr: scenarioTranslations.fr.presentation,
      it: scenarioTranslations.it.presentation,
      de: scenarioTranslations.de.presentation,
      ja: scenarioTranslations.ja.presentation,
      ko: scenarioTranslations.ko.presentation,
      zh: scenarioTranslations.zh.presentation,
      hi: scenarioTranslations.hi.presentation,
      pt: scenarioTranslations.pt.presentation,
      ar: scenarioTranslations.ar.presentation,
    },
  },
  {
    id: "phone-call",
    icon: Phone,
    translations: {
      en: scenarioTranslations.en["phone-call"],
      es: scenarioTranslations.es["phone-call"],
      fr: scenarioTranslations.fr["phone-call"],
      it: scenarioTranslations.it["phone-call"],
      de: scenarioTranslations.de["phone-call"],
      ja: scenarioTranslations.ja["phone-call"],
      ko: scenarioTranslations.ko["phone-call"],
      zh: scenarioTranslations.zh["phone-call"],
      hi: scenarioTranslations.hi["phone-call"],
      pt: scenarioTranslations.pt["phone-call"],
      ar: scenarioTranslations.ar["phone-call"],
    },
  },
  {
    id: "email-writing",
    icon: Mail,
    translations: {
      en: scenarioTranslations.en["email-writing"],
      es: scenarioTranslations.es["email-writing"],
      fr: scenarioTranslations.fr["email-writing"],
      it: scenarioTranslations.it["email-writing"],
      de: scenarioTranslations.de["email-writing"],
      ja: scenarioTranslations.ja["email-writing"],
      ko: scenarioTranslations.ko["email-writing"],
      zh: scenarioTranslations.zh["email-writing"],
      hi: scenarioTranslations.hi["email-writing"],
      pt: scenarioTranslations.pt["email-writing"],
      ar: scenarioTranslations.ar["email-writing"],
    },
  },
  {
    id: "job-networking",
    icon: Network,
    translations: {
      en: scenarioTranslations.en["job-networking"],
      es: scenarioTranslations.es["job-networking"],
      fr: scenarioTranslations.fr["job-networking"],
      it: scenarioTranslations.it["job-networking"],
      de: scenarioTranslations.de["job-networking"],
      ja: scenarioTranslations.ja["job-networking"],
      ko: scenarioTranslations.ko["job-networking"],
      zh: scenarioTranslations.zh["job-networking"],
      hi: scenarioTranslations.hi["job-networking"],
      pt: scenarioTranslations.pt["job-networking"],
      ar: scenarioTranslations.ar["job-networking"],
    },
  },
  {
    id: "online-meeting",
    icon: Video,
    translations: {
      en: scenarioTranslations.en["online-meeting"],
      es: scenarioTranslations.es["online-meeting"],
      fr: scenarioTranslations.fr["online-meeting"],
      it: scenarioTranslations.it["online-meeting"],
      de: scenarioTranslations.de["online-meeting"],
      ja: scenarioTranslations.ja["online-meeting"],
      ko: scenarioTranslations.ko["online-meeting"],
      zh: scenarioTranslations.zh["online-meeting"],
      hi: scenarioTranslations.hi["online-meeting"],
      pt: scenarioTranslations.pt["online-meeting"],
      ar: scenarioTranslations.ar["online-meeting"],
    },
  },
  {
    id: "directions",
    icon: MapPin,
    translations: {
      en: scenarioTranslations.en.directions,
      es: scenarioTranslations.es.directions,
      fr: scenarioTranslations.fr.directions,
      it: scenarioTranslations.it.directions,
      de: scenarioTranslations.de.directions,
      ja: scenarioTranslations.ja.directions,
      ko: scenarioTranslations.ko.directions,
      zh: scenarioTranslations.zh.directions,
      hi: scenarioTranslations.hi.directions,
      pt: scenarioTranslations.pt.directions,
      ar: scenarioTranslations.ar.directions,
    },
  },
  {
    id: "airport",
    icon: Plane,
    translations: {
      en: scenarioTranslations.en.airport,
      es: scenarioTranslations.es.airport,
      fr: scenarioTranslations.fr.airport,
      it: scenarioTranslations.it.airport,
      de: scenarioTranslations.de.airport,
      ja: scenarioTranslations.ja.airport,
      ko: scenarioTranslations.ko.airport,
      zh: scenarioTranslations.zh.airport,
      hi: scenarioTranslations.hi.airport,
      pt: scenarioTranslations.pt.airport,
      ar: scenarioTranslations.ar.airport,
    },
  },
  {
    id: "transportation",
    icon: Car,
    translations: {
      en: scenarioTranslations.en.transportation,
      es: scenarioTranslations.es.transportation,
      fr: scenarioTranslations.fr.transportation,
      it: scenarioTranslations.it.transportation,
      de: scenarioTranslations.de.transportation,
      ja: scenarioTranslations.ja.transportation,
      ko: scenarioTranslations.ko.transportation,
      zh: scenarioTranslations.zh.transportation,
      hi: scenarioTranslations.hi.transportation,
      pt: scenarioTranslations.pt.transportation,
      ar: scenarioTranslations.ar.transportation,
    },
  },
  {
    id: "sightseeing",
    icon: Globe,
    translations: {
      en: scenarioTranslations.en.sightseeing,
      es: scenarioTranslations.es.sightseeing,
      fr: scenarioTranslations.fr.sightseeing,
      it: scenarioTranslations.it.sightseeing,
      de: scenarioTranslations.de.sightseeing,
      ja: scenarioTranslations.ja.sightseeing,
      ko: scenarioTranslations.ko.sightseeing,
      zh: scenarioTranslations.zh.sightseeing,
      hi: scenarioTranslations.hi.sightseeing,
      pt: scenarioTranslations.pt.sightseeing,
      ar: scenarioTranslations.ar.sightseeing,
    },
  },
  {
    id: "immigration",
    icon: Landmark,
    translations: {
      en: scenarioTranslations.en.immigration,
      es: scenarioTranslations.es.immigration,
      fr: scenarioTranslations.fr.immigration,
      it: scenarioTranslations.it.immigration,
      de: scenarioTranslations.de.immigration,
      ja: scenarioTranslations.ja.immigration,
      ko: scenarioTranslations.ko.immigration,
      zh: scenarioTranslations.zh.immigration,
      hi: scenarioTranslations.hi.immigration,
      pt: scenarioTranslations.pt.immigration,
      ar: scenarioTranslations.ar.immigration,
    },
  },
  {
    id: "hospital",
    icon: FirstAidKit,
    translations: {
      en: scenarioTranslations.en.hospital,
      es: scenarioTranslations.es.hospital,
      fr: scenarioTranslations.fr.hospital,
      it: scenarioTranslations.it.hospital,
      de: scenarioTranslations.de.hospital,
      ja: scenarioTranslations.ja.hospital,
      ko: scenarioTranslations.ko.hospital,
      zh: scenarioTranslations.zh.hospital,
      hi: scenarioTranslations.hi.hospital,
      pt: scenarioTranslations.pt.hospital,
      ar: scenarioTranslations.ar.hospital,
    },
  },
  {
    id: "bank",
    icon: Landmark,
    translations: {
      en: scenarioTranslations.en.bank,
      es: scenarioTranslations.es.bank,
      fr: scenarioTranslations.fr.bank,
      it: scenarioTranslations.it.bank,
      de: scenarioTranslations.de.bank,
      ja: scenarioTranslations.ja.bank,
      ko: scenarioTranslations.ko.bank,
      zh: scenarioTranslations.zh.bank,
      hi: scenarioTranslations.hi.bank,
      pt: scenarioTranslations.pt.bank,
      ar: scenarioTranslations.ar.bank,
    },
  },
  {
    id: "post-office",
    icon: Mail,
    translations: {
      en: scenarioTranslations.en["post-office"],
      es: scenarioTranslations.es["post-office"],
      fr: scenarioTranslations.fr["post-office"],
      it: scenarioTranslations.it["post-office"],
      de: scenarioTranslations.de["post-office"],
      ja: scenarioTranslations.ja["post-office"],
      ko: scenarioTranslations.ko["post-office"],
      zh: scenarioTranslations.zh["post-office"],
      hi: scenarioTranslations.hi["post-office"],
      pt: scenarioTranslations.pt["post-office"],
      ar: scenarioTranslations.ar["post-office"],
    },
  },
  {
    id: "school",
    icon: School,
    translations: {
      en: scenarioTranslations.en.school,
      es: scenarioTranslations.es.school,
      fr: scenarioTranslations.fr.school,
      it: scenarioTranslations.it.school,
      de: scenarioTranslations.de.school,
      ja: scenarioTranslations.ja.school,
      ko: scenarioTranslations.ko.school,
      zh: scenarioTranslations.zh.school,
      hi: scenarioTranslations.hi.school,
      pt: scenarioTranslations.pt.school,
      ar: scenarioTranslations.ar.school,
    },
  },
  {
    id: "emergency",
    icon: FirstAidKit,
    translations: {
      en: scenarioTranslations.en.emergency,
      es: scenarioTranslations.es.emergency,
      fr: scenarioTranslations.fr.emergency,
      it: scenarioTranslations.it.emergency,
      de: scenarioTranslations.de.emergency,
      ja: scenarioTranslations.ja.emergency,
      ko: scenarioTranslations.ko.emergency,
      zh: scenarioTranslations.zh.emergency,
      hi: scenarioTranslations.hi.emergency,
      pt: scenarioTranslations.pt.emergency,
      ar: scenarioTranslations.ar.emergency,
    },
  },
  {
    id: "party",
    icon: GlassWater,
    translations: {
      en: scenarioTranslations.en.party,
      es: scenarioTranslations.es.party,
      fr: scenarioTranslations.fr.party,
      it: scenarioTranslations.it.party,
      de: scenarioTranslations.de.party,
      ja: scenarioTranslations.ja.party,
      ko: scenarioTranslations.ko.party,
      zh: scenarioTranslations.zh.party,
      hi: scenarioTranslations.hi.party,
      pt: scenarioTranslations.pt.party,
      ar: scenarioTranslations.ar.party,
    },
  },
  {
    id: "dating",
    icon: Heart,
    translations: {
      en: scenarioTranslations.en.dating,
      es: scenarioTranslations.es.dating,
      fr: scenarioTranslations.fr.dating,
      it: scenarioTranslations.it.dating,
      de: scenarioTranslations.de.dating,
      ja: scenarioTranslations.ja.dating,
      ko: scenarioTranslations.ko.dating,
      zh: scenarioTranslations.zh.dating,
      hi: scenarioTranslations.hi.dating,
      pt: scenarioTranslations.pt.dating,
      ar: scenarioTranslations.ar.dating,
    },
  },
  {
    id: "cultural-exchange",
    icon: Globe,
    translations: {
      en: scenarioTranslations.en["cultural-exchange"],
      es: scenarioTranslations.es["cultural-exchange"],
      fr: scenarioTranslations.fr["cultural-exchange"],
      it: scenarioTranslations.it["cultural-exchange"],
      de: scenarioTranslations.de["cultural-exchange"],
      ja: scenarioTranslations.ja["cultural-exchange"],
      ko: scenarioTranslations.ko["cultural-exchange"],
      zh: scenarioTranslations.zh["cultural-exchange"],
      hi: scenarioTranslations.hi["cultural-exchange"],
      pt: scenarioTranslations.pt["cultural-exchange"],
      ar: scenarioTranslations.ar["cultural-exchange"],
    },
  },
]

export const scenarioTitles = {
  en: "Scenarios",
  es: "Escenarios",
  fr: "Scénarios",
  it: "Scenari",
  de: "Szenarien",
  ja: "シナリオ",
  ko: "시나리오",
  zh: "场景",
  hi: "परिदृश्य",
  pt: "Cenários",
  ar: "سيناريوهات"
}

