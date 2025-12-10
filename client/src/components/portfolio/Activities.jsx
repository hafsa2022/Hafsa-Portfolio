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
      type: "formation",
      icon: GraduationCap,
      title: "Master en Géoinformation",
      organization: "Université Hassan II",
      date: "2022 - 2024",
      description: "Spécialisation en systèmes d'information géographique et télédétection.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "certification",
      icon: Award,
      title: "Full Stack Web Development",
      organization: "Coursera - Meta",
      date: "2023",
      description: "Certification en développement web React, Node.js et bases de données.",
      color: "bg-emerald-500",
    },
    {
      id: 3,
      type: "workshop",
      icon: Users,
      title: "Workshop SIG Avancé",
      organization: "ESRI Maroc",
      date: "2023",
      description: "Formation intensive sur les outils ArcGIS et l'analyse spatiale.",
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "project",
      icon: Briefcase,
      title: "Cartographie Participative",
      organization: "ONG Environnement",
      date: "2023",
      description: "Projet collaboratif de cartographie des ressources naturelles.",
      color: "bg-orange-500",
    },
  ],
  ar: [
    {
      id: 1,
      type: "formation",
      icon: GraduationCap,
      title: "ماجستير في المعلومات الجغرافية",
      organization: "جامعة الحسن الثاني",
      date: "2022 - 2024",
      description: "تخصص في أنظمة المعلومات الجغرافية والاستشعار عن بعد.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "certification",
      icon: Award,
      title: "تطوير الويب الكامل",
      organization: "Coursera - Meta",
      date: "2023",
      description: "شهادة في تطوير الويب React و Node.js وقواعد البيانات.",
      color: "bg-emerald-500",
    },
    {
      id: 3,
      type: "workshop",
      icon: Users,
      title: "ورشة SIG المتقدمة",
      organization: "ESRI المغرب",
      date: "2023",
      description: "تكوين مكثف على أدوات ArcGIS والتحليل المكاني.",
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "project",
      icon: Briefcase,
      title: "رسم الخرائط التشاركية",
      organization: "منظمة البيئة",
      date: "2023",
      description: "مشروع تعاوني لرسم خرائط الموارد الطبيعية.",
      color: "bg-orange-500",
    },
  ],
  en: [
    {
      id: 1,
      type: "formation",
      icon: GraduationCap,
      title: "Master in Geoinformation",
      organization: "Hassan II University",
      date: "2022 - 2024",
      description: "Specialization in geographic information systems and remote sensing.",
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "certification",
      icon: Award,
      title: "Full Stack Web Development",
      organization: "Coursera - Meta",
      date: "2023",
      description: "Certification in React, Node.js web development and databases.",
      color: "bg-emerald-500",
    },
    {
      id: 3,
      type: "workshop",
      icon: Users,
      title: "Advanced GIS Workshop",
      organization: "ESRI Morocco",
      date: "2023",
      description: "Intensive training on ArcGIS tools and spatial analysis.",
      color: "bg-purple-500",
    },
    {
      id: 4,
      type: "project",
      icon: Briefcase,
      title: "Participatory Mapping",
      organization: "Environment NGO",
      date: "2023",
      description: "Collaborative project for mapping natural resources.",
      color: "bg-orange-500",
    },
  ],
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
