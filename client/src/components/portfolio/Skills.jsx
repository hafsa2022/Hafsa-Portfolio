import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, Code2, Database, Palette, FileText } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      id: "sig",
      title: t.skills.sig,
      titleDesc: t.skills.sigDesc,
      icon: Map,
      color: "from-emerald-500 to-teal-500",
      skills: ["QGIS", "ArcGIS", "PostGIS", "Leaflet", "OpenLayers", "Google Maps"],
    },
    {
      id: "development",
      title: t.skills.development,
      titleDesc: t.skills.developmentDesc,
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Angular", "Vue.js", "Laravel", "Node.js", "PHP", "JavaScript", "TypeScript", "Python", "HTML", "CSS"],
    },
    {
      id: "databases",
      title: t.skills.databases,
      titleDesc: t.skills.databasesDesc,
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["PostgreSQL", "MySQL", "SQLite"],
    },
    {
      id: "design",
      title: t.skills.design,
      titleDesc: t.skills.designDesc,
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["Figma"],
    },
    {
      id: "techniques",
      title: t.skills.techniques,
      titleDesc: t.skills.techniquesDesc,
      icon: FileText,
      color: "from-orange-500 to-amber-500",
      skills: ["Documentation Technique", "Méthodologie Agile", "Git/GitHub"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-skills"
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
            {t.skills.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover-elevate" data-testid={`card-skills-${category.id}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.titleDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
