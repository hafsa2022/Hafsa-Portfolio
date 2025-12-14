import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Briefcase } from "lucide-react";
import { useLanguage } from "./LanguageContext";

// todo: remove mock functionality
const activitiesData = {
  fr: [
    {
      id: 1,
      type: "Travail en CDD",
      icon: Briefcase,
      title: "Développement SIG",
      organization: "GEOLAMBERT SARL",
      date: "2024 - 2025",
      description: "Développement en utlisant React, Node.js, Python, OpenLayers, QGIS, Geoserver, GitHub et PostgreSQL.",
      color: "bg-emerald-500",
    },

    {
      id: 2,
      type: "Stage Libre",
      icon: Users,
      title: "Diveloppement SIG",
      organization: "Q8MAPS",
      date: "2024",
      description: "Stage dans le développement SIG et web.",
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "formation",
      icon: GraduationCap,
      title: "Dimplome d'ingénieur d'état en Géoinformation",
      organization: "Faculté des Sciences et Techniques de Tanger",
      date: "2020 - 2023",
      description: "systèmes d'information géographique et télédétection.",
      color: "bg-blue-500",
    },
    {
      id: 4,
      type: "Stage de fin d'études",
      icon: Award,
      title: "Développement Web Full Stack",
      organization: "PETALENS",
      date: "2023",
      description: "Développement en utilisant Vuejs, Vuetify, Laravel, Google Maps, Python, PostgreSQL et GitHub.",
      color: "bg-orange-500",
    },
  ],
  // ar: [
  //   {
  //     id: 1,
  //     type: "formation",
  //     icon: GraduationCap,
  //     title: "ماجستير في المعلومات الجغرافية",
  //     organization: "جامعة الحسن الثاني",
  //     date: "2022 - 2024",
  //     description: "تخصص في أنظمة المعلومات الجغرافية والاستشعار عن بعد.",
  //     color: "bg-blue-500",
  //   },
  //   {
  //     id: 2,
  //     type: "certification",
  //     icon: Award,
  //     title: "تطوير الويب الكامل",
  //     organization: "Coursera - Meta",
  //     date: "2023",
  //     description: "شهادة في تطوير الويب React و Node.js وقواعد البيانات.",
  //     color: "bg-emerald-500",
  //   },
  //   {
  //     id: 3,
  //     type: "workshop",
  //     icon: Users,
  //     title: "ورشة SIG المتقدمة",
  //     organization: "ESRI المغرب",
  //     date: "2023",
  //     description: "تكوين مكثف على أدوات ArcGIS والتحليل المكاني.",
  //     color: "bg-purple-500",
  //   },
  //   {
  //     id: 4,
  //     type: "project",
  //     icon: Briefcase,
  //     title: "رسم الخرائط التشاركية",
  //     organization: "منظمة البيئة",
  //     date: "2023",
  //     description: "مشروع تعاوني لرسم خرائط الموارد الطبيعية.",
  //     color: "bg-orange-500",
  //   },
  // ],
  // en: [
  //   {
  //     id: 1,
  //     type: "formation",
  //     icon: GraduationCap,
  //     title: "Master in Geoinformation",
  //     organization: "Hassan II University",
  //     date: "2022 - 2024",
  //     description: "Specialization in geographic information systems and remote sensing.",
  //     color: "bg-blue-500",
  //   },
  //   {
  //     id: 2,
  //     type: "certification",
  //     icon: Award,
  //     title: "Full Stack Web Development",
  //     organization: "Coursera - Meta",
  //     date: "2023",
  //     description: "Certification in React, Node.js web development and databases.",
  //     color: "bg-emerald-500",
  //   },
  //   {
  //     id: 3,
  //     type: "workshop",
  //     icon: Users,
  //     title: "Advanced GIS Workshop",
  //     organization: "ESRI Morocco",
  //     date: "2023",
  //     description: "Intensive training on ArcGIS tools and spatial analysis.",
  //     color: "bg-purple-500",
  //   },
  //   {
  //     id: 4,
  //     type: "project",
  //     icon: Briefcase,
  //     title: "Participatory Mapping",
  //     organization: "Environment NGO",
  //     date: "2023",
  //     description: "Collaborative project for mapping natural resources.",
  //     color: "bg-orange-500",
  //   },
  // ],
  ar: [
    {
      id: 1,
      type: "عقد عمل محدد المدة",
      icon: Briefcase,
      title: "تطوير نظم المعلومات الجغرافية",
      organization: "GEOLAMBERT SARL",
      date: "2024 - 2025",
      description:
        "تطوير باستخدام React و Node.js و Python و OpenLayers و QGIS و GeoServer و GitHub و PostgreSQL.",
      color: "bg-emerald-500",
    },
    {
      id: 2,
      type: "تدريب",
      icon: Users,
      title: "تطوير نظم المعلومات الجغرافية",
      organization: "Q8MAPS",
      date: "2024",
      description: "تدريب في مجال نظم المعلومات الجغرافية وتطوير الويب.",
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "التكوين",
      icon: GraduationCap,
      title: "دبلوم مهندس دولة في الجيومعلوماتية",
      organization: "كلية العلوم والتقنيات بطنجة",
      date: "2020 - 2023",
      description: "نظم المعلومات الجغرافية والاستشعار عن بعد.",
      color: "bg-blue-500",
    },
    {
      id: 4,
      type: "مشروع نهاية الدراسة",
      icon: Award,
      title: "تطوير ويب Full Stack",
      organization: "PETALENS",
      date: "2023",
      description:
        "تطوير باستخدام Vue.js و Vuetify و Laravel و Google Maps و Python و PostgreSQL و GitHub.",
      color: "bg-orange-500",
    },
  ],

  en: [
    {
      id: 1,
      type: "Fixed-term Contract",
      icon: Briefcase,
      title: "GIS Development",
      organization: "GEOLAMBERT SARL",
      date: "2024 - 2025",
      description:
        "Development using React, Node.js, Python, OpenLayers, QGIS, GeoServer, GitHub, and PostgreSQL.",
      color: "bg-emerald-500",
    },
    {
      id: 2,
      type: "Internship",
      icon: Users,
      title: "GIS Development",
      organization: "Q8MAPS",
      date: "2024",
      description: "Internship in GIS and web development.",
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "Education",
      icon: GraduationCap,
      title: "State Engineer Degree in Geoinformation",
      organization: "Faculty of Sciences and Techniques of Tangier",
      date: "2020 - 2023",
      description: "Geographic Information Systems and Remote Sensing.",
      color: "bg-blue-500",
    },
    {
      id: 4,
      type: "Final Year Internship",
      icon: Award,
      title: "Full Stack Web Development",
      organization: "PETALENS",
      date: "2023",
      description:
        "Development using Vue.js, Vuetify, Laravel, Google Maps, Python, PostgreSQL, and GitHub.",
      color: "bg-orange-500",
    },
  ]

};

export default function Activities() {
  const { language, t } = useLanguage();

  const activities = activitiesData[language] || activitiesData.fr;

  const getTypeLabel = (type) => {
    const labels = {
      formation: t.activities.formation,
      certification: t.activities.certification,
      workshop: t.activities.workshop,
      project: t.activities.project,
    };
    return labels[type] || type;
  };

  return (
    <section
      id="activities"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-activities"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.activities.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.activities.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 md:text-center" />
                
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                
                <div className="flex-1 ms-12 md:ms-0">
                  <Card
                    className="p-5 hover-elevate"
                    data-testid={`card-activity-${activity.id}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-lg ${activity.color} flex items-center justify-center shrink-0`}>
                        <activity.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {getTypeLabel(activity.type)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {activity.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-primary mb-2">
                          {activity.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
