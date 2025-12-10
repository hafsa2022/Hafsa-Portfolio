import { createContext, useContext, useState, useEffect } from "react";

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      technologies: "Technologies",
      projects: "Projets",
      activities: "Activités",
      testimonials: "Témoignages",
      contact: "Contact",
      downloadCV: "Télécharger CV",
    },
    hero: {
      welcome: "Bienvenue",
      profession1: "Ingénieure en Géoinformation (SIG)",
      profession2: "Développeuse SIG",
      profession3: "Développeuse Full Stack",
      description: "Je transforme les données géospatiales en solutions innovantes et développe des applications web modernes.",
      exploreProjects: "Explorer mes projets",
      contactMe: "Me contacter",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Découvrez mon parcours professionnel",
      bio1: "Je suis Hafsa EL AKHDAR, une ingénieure passionnée par la géoinformation et le développement web. Mon parcours unique combine l'expertise en Systèmes d'Information Géographique (SIG) avec les compétences en développement Full Stack.",
      bio2: "Après avoir maîtrisé les outils d'analyse spatiale et de cartographie, j'ai élargi mes compétences vers le développement d'applications web modernes. Cette double expertise me permet de créer des solutions innovantes qui transforment les données géospatiales en applications interactives et accessibles.",
      bio3: "Je m'engage à fournir des solutions de haute qualité qui répondent aux besoins spécifiques de chaque projet, en combinant précision technique et créativité.",
      milestone1: "Géoinformation",
      milestone1Desc: "Analyse spatiale et cartographie avancée",
      milestone2: "Systèmes d'Information Géographique",
      milestone2Desc: "Maîtrise des outils SIG professionnels",
      milestone3: "Développement Full Stack",
      milestone3Desc: "Applications web modernes et performantes",
    },
    skills: {
      title: "Compétences",
      subtitle: "Mes compétences techniques et professionnelles",
      sig: "Outils SIG",
      sigDesc: "Outils SIG",
      development: "Développement",
      developmentDesc: "Développement",
      databases: "Bases de données",
      databasesDesc: "Bases de données",
      design: "Conception",
      designDesc: "Conception",
      techniques: "Techniques",
      techniquesDesc: "Techniques",
    },
    technologies: {
      title: "Technologies",
      subtitle: "Les technologies que j'utilise au quotidien",
    },
    projects: {
      title: "Projets",
      subtitle: "Découvrez mes réalisations récentes",
      all: "Tous",
      sig: "SIG",
      fullstack: "Full Stack",
      viewProject: "Voir le projet",
    },
    activities: {
      title: "Activités",
      subtitle: "Formations, certifications et projets collaboratifs",
      formation: "Formation",
      certification: "Certification",
      workshop: "Atelier",
      project: "Projet collaboratif",
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que disent mes collaborateurs",
    },
    contact: {
      title: "Contact",
      subtitle: "N'hésitez pas à me contacter pour vos projets",
      fullName: "Nom complet",
      fullNamePlaceholder: "Entrez votre nom complet",
      email: "Email",
      emailPlaceholder: "Entrez votre email",
      message: "Message",
      messagePlaceholder: "Écrivez votre message ici...",
      send: "Envoyer le message",
      sending: "Envoi en cours...",
      successTitle: "Message envoyé",
      successDesc: "Merci pour votre message. Je vous répondrai dès que possible.",
      contactInfo: "Informations de contact",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      followMe: "Suivez-moi",
    },
    footer: {
      role: "Ingénieure en Géoinformation",
      description: "Transforming geospatial data into innovative solutions and building modern web applications.",
      quickLinks: "Liens rapides",
      followMe: "Suivez-moi",
      rights: "Tous droits réservés.",
      madeWith: "Fait avec",
      using: "avec React",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      skills: "المهارات",
      technologies: "التقنيات",
      projects: "المشاريع",
      activities: "الأنشطة",
      testimonials: "التوصيات",
      contact: "تواصل معي",
      downloadCV: "تحميل السيرة",
    },
    hero: {
      welcome: "مرحباً بكم",
      profession1: "مهندسة في المعلومات الجغرافية (SIG)",
      profession2: "مطورة SIG",
      profession3: "مطورة Full Stack",
      description: "أحول البيانات الجغرافية المكانية إلى حلول مبتكرة وأطور تطبيقات ويب حديثة.",
      exploreProjects: "استكشف مشاريعي",
      contactMe: "تواصل معي",
    },
    about: {
      title: "من أنا",
      subtitle: "اكتشف مساري المهني",
      bio1: "أنا حفصة الأخضر، مهندسة شغوفة بالمعلومات الجغرافية وتطوير الويب. مساري الفريد يجمع بين الخبرة في أنظمة المعلومات الجغرافية (SIG) ومهارات التطوير Full Stack.",
      bio2: "بعد إتقان أدوات التحليل المكاني ورسم الخرائط، وسعت مهاراتي نحو تطوير تطبيقات الويب الحديثة. هذه الخبرة المزدوجة تمكنني من إنشاء حلول مبتكرة تحول البيانات الجغرافية المكانية إلى تطبيقات تفاعلية وسهلة الوصول.",
      bio3: "أنا ملتزمة بتقديم حلول عالية الجودة تلبي الاحتياجات المحددة لكل مشروع، من خلال الجمع بين الدقة التقنية والإبداع.",
      milestone1: "المعلومات الجغرافية",
      milestone1Desc: "تحليل مكاني ورسم خرائط متقدم",
      milestone2: "أنظمة المعلومات الجغرافية",
      milestone2Desc: "إتقان أدوات SIG الاحترافية",
      milestone3: "تطوير Full Stack",
      milestone3Desc: "تطبيقات ويب حديثة وفعالة",
    },
    skills: {
      title: "المهارات",
      subtitle: "مهاراتي التقنية والمهنية",
      sig: "أدوات SIG",
      sigDesc: "أدوات SIG",
      development: "التطوير",
      developmentDesc: "التطوير",
      databases: "قواعد البيانات",
      databasesDesc: "قواعد البيانات",
      design: "التصميم",
      designDesc: "التصميم",
      techniques: "التقنيات",
      techniquesDesc: "التقنيات",
    },
    technologies: {
      title: "التقنيات",
      subtitle: "التقنيات التي أستخدمها يومياً",
    },
    projects: {
      title: "المشاريع",
      subtitle: "اكتشف إنجازاتي الأخيرة",
      all: "الكل",
      sig: "SIG",
      fullstack: "Full Stack",
      viewProject: "عرض المشروع",
    },
    activities: {
      title: "الأنشطة",
      subtitle: "التكوينات والشهادات والمشاريع التعاونية",
      formation: "تكوين",
      certification: "شهادة",
      workshop: "ورشة عمل",
      project: "مشروع تعاوني",
    },
    testimonials: {
      title: "التوصيات",
      subtitle: "ما يقوله المتعاونون معي",
    },
    contact: {
      title: "تواصل معي",
      subtitle: "لا تتردد في التواصل معي لمشاريعك",
      fullName: "الاسم الكامل",
      fullNamePlaceholder: "أدخل اسمك الكامل",
      email: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      message: "الرسالة",
      messagePlaceholder: "اكتب رسالتك هنا...",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successTitle: "تم إرسال الرسالة",
      successDesc: "شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.",
      contactInfo: "معلومات الاتصال",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع",
      followMe: "تابعني على",
    },
    footer: {
      role: "مهندسة معلومات جغرافية",
      description: "تحويل البيانات الجغرافية المكانية إلى حلول مبتكرة وبناء تطبيقات ويب حديثة.",
      quickLinks: "روابط سريعة",
      followMe: "تابعني",
      rights: "جميع الحقوق محفوظة.",
      madeWith: "صنع بـ",
      using: "باستخدام React",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      technologies: "Technologies",
      projects: "Projects",
      activities: "Activities",
      testimonials: "Testimonials",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    hero: {
      welcome: "Welcome",
      profession1: "Geoinformation Engineer (GIS)",
      profession2: "GIS Developer",
      profession3: "Full Stack Developer",
      description: "I transform geospatial data into innovative solutions and develop modern web applications.",
      exploreProjects: "Explore my projects",
      contactMe: "Contact me",
    },
    about: {
      title: "About Me",
      subtitle: "Discover my professional journey",
      bio1: "I am Hafsa EL AKHDAR, an engineer passionate about geoinformation and web development. My unique path combines expertise in Geographic Information Systems (GIS) with Full Stack development skills.",
      bio2: "After mastering spatial analysis and mapping tools, I expanded my skills towards developing modern web applications. This dual expertise allows me to create innovative solutions that transform geospatial data into interactive and accessible applications.",
      bio3: "I am committed to delivering high-quality solutions that meet the specific needs of each project, combining technical precision with creativity.",
      milestone1: "Geoinformation",
      milestone1Desc: "Advanced spatial analysis and mapping",
      milestone2: "Geographic Information Systems",
      milestone2Desc: "Mastery of professional GIS tools",
      milestone3: "Full Stack Development",
      milestone3Desc: "Modern and performant web applications",
    },
    skills: {
      title: "Skills",
      subtitle: "My technical and professional skills",
      sig: "GIS Tools",
      sigDesc: "GIS Tools",
      development: "Development",
      developmentDesc: "Development",
      databases: "Databases",
      databasesDesc: "Databases",
      design: "Design",
      designDesc: "Design",
      techniques: "Techniques",
      techniquesDesc: "Techniques",
    },
    technologies: {
      title: "Technologies",
      subtitle: "Technologies I use daily",
    },
    projects: {
      title: "Projects",
      subtitle: "Discover my recent achievements",
      all: "All",
      sig: "GIS",
      fullstack: "Full Stack",
      viewProject: "View project",
    },
    activities: {
      title: "Activities",
      subtitle: "Training, certifications and collaborative projects",
      formation: "Training",
      certification: "Certification",
      workshop: "Workshop",
      project: "Collaborative project",
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What my collaborators say",
    },
    contact: {
      title: "Contact",
      subtitle: "Feel free to contact me for your projects",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      message: "Message",
      messagePlaceholder: "Write your message here...",
      send: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent",
      successDesc: "Thank you for your message. I will respond as soon as possible.",
      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      followMe: "Follow me",
    },
    footer: {
      role: "Geoinformation Engineer",
      description: "Transforming geospatial data into innovative solutions and building modern web applications.",
      quickLinks: "Quick Links",
      followMe: "Follow me",
      rights: "All rights reserved.",
      madeWith: "Made with",
      using: "using React",
    },
  },
};

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      return saved || "fr";
    }
    return "fr";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    const html = document.documentElement;
    if (language === "ar") {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
    } else {
      html.setAttribute("dir", "ltr");
      html.setAttribute("lang", language);
    }
  }, [language]);

  const t = translations[language];

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
