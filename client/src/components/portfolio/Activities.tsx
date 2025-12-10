import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Briefcase } from "lucide-react";

// todo: remove mock functionality
const activities = [
  {
    id: 1,
    type: "formation",
    typeLabel: "تكوين",
    icon: GraduationCap,
    title: "Master en Géoinformation",
    titleAr: "ماجستير في المعلومات الجغرافية",
    organization: "Université Hassan II",
    date: "2022 - 2024",
    description: "Spécialisation en systèmes d'information géographique et télédétection.",
    color: "bg-blue-500",
  },
  {
    id: 2,
    type: "certification",
    typeLabel: "شهادة",
    icon: Award,
    title: "Full Stack Web Development",
    titleAr: "تطوير الويب الكامل",
    organization: "Coursera - Meta",
    date: "2023",
    description: "Certification en développement web React, Node.js et bases de données.",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    type: "workshop",
    typeLabel: "ورشة عمل",
    icon: Users,
    title: "Workshop SIG Avancé",
    titleAr: "ورشة SIG المتقدمة",
    organization: "ESRI Maroc",
    date: "2023",
    description: "Formation intensive sur les outils ArcGIS et l'analyse spatiale.",
    color: "bg-purple-500",
  },
  {
    id: 4,
    type: "project",
    typeLabel: "مشروع تعاوني",
    icon: Briefcase,
    title: "Cartographie Participative",
    titleAr: "رسم الخرائط التشاركية",
    organization: "ONG Environnement",
    date: "2023",
    description: "Projet collaboratif de cartographie des ressources naturelles.",
    color: "bg-orange-500",
  },
  {
    id: 5,
    type: "formation",
    typeLabel: "تكوين",
    icon: GraduationCap,
    title: "Licence en Géographie",
    titleAr: "إجازة في الجغرافيا",
    organization: "Université Mohammed V",
    date: "2019 - 2022",
    description: "Formation de base en géographie physique et humaine.",
    color: "bg-blue-500",
  },
  {
    id: 6,
    type: "certification",
    typeLabel: "شهادة",
    icon: Award,
    title: "Python for Data Science",
    titleAr: "بايثون لعلوم البيانات",
    organization: "IBM - Coursera",
    date: "2022",
    description: "Certification en analyse de données avec Python et bibliothèques scientifiques.",
    color: "bg-emerald-500",
  },
];

export default function Activities() {
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
            الأنشطة
          </h2>
          <p className="text-muted-foreground text-lg">
            Formations, certifications et projets collaboratifs
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 md:text-center" />
                
                <div className="absolute right-4 md:right-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                
                <div className="flex-1 mr-12 md:mr-0">
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
                            {activity.typeLabel}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {activity.date}
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground">
                          {activity.titleAr}
                        </h3>
                        <p className="text-sm text-primary mb-1">
                          {activity.title}
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">
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
