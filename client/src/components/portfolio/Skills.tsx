import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Map, Code2, Database } from "lucide-react";

const skillCategories = [
  {
    id: "sig",
    title: "أدوات SIG",
    titleFr: "Outils SIG",
    icon: Map,
    color: "from-emerald-500 to-teal-500",
    skills: ["QGIS", "ArcGIS", "PostGIS", "GDAL", "Leaflet", "OpenLayers"],
  },
  {
    id: "development",
    title: "التطوير",
    titleFr: "Développement",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Vue.js", "Laravel", "Node.js", "PHP", "JavaScript", "Python", "TypeScript"],
  },
  {
    id: "databases",
    title: "قواعد البيانات",
    titleFr: "Bases de données",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis"],
  },
];

export default function Skills() {
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
            المهارات
          </h2>
          <p className="text-muted-foreground text-lg">
            Mes compétences techniques et professionnelles
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
                  {category.titleFr}
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
