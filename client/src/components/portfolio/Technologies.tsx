import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  SiReact, SiVuedotjs, SiLaravel, SiNodedotjs, SiPython, 
  SiPostgresql, SiMysql, SiGithub, SiTailwindcss, SiBootstrap,
  SiQgis, SiDocker, SiTypescript, SiPhp, SiJavascript
} from "react-icons/si";

const technologies = [
  { 
    icon: SiReact, 
    name: "React", 
    description: "Bibliothèque UI moderne pour applications web interactives",
    color: "#61DAFB"
  },
  { 
    icon: SiVuedotjs, 
    name: "Vue.js", 
    description: "Framework progressif pour interfaces utilisateur",
    color: "#4FC08D"
  },
  { 
    icon: SiLaravel, 
    name: "Laravel", 
    description: "Framework PHP élégant pour applications robustes",
    color: "#FF2D20"
  },
  { 
    icon: SiNodedotjs, 
    name: "Node.js", 
    description: "Environnement d'exécution JavaScript côté serveur",
    color: "#339933"
  },
  { 
    icon: SiPython, 
    name: "Python", 
    description: "Langage polyvalent pour analyse et automatisation",
    color: "#3776AB"
  },
  { 
    icon: SiTypescript, 
    name: "TypeScript", 
    description: "JavaScript typé pour code plus fiable",
    color: "#3178C6"
  },
  { 
    icon: SiPhp, 
    name: "PHP", 
    description: "Langage serveur pour applications web dynamiques",
    color: "#777BB4"
  },
  { 
    icon: SiJavascript, 
    name: "JavaScript", 
    description: "Langage fondamental du développement web",
    color: "#F7DF1E"
  },
  { 
    icon: SiPostgresql, 
    name: "PostgreSQL", 
    description: "Base de données relationnelle avancée avec support spatial",
    color: "#4169E1"
  },
  { 
    icon: SiMysql, 
    name: "MySQL", 
    description: "Système de gestion de base de données populaire",
    color: "#4479A1"
  },
  { 
    icon: SiQgis, 
    name: "QGIS", 
    description: "Logiciel SIG open source professionnel",
    color: "#589632"
  },
  { 
    icon: SiGithub, 
    name: "GitHub", 
    description: "Plateforme de gestion de versions et collaboration",
    color: "#181717"
  },
  { 
    icon: SiTailwindcss, 
    name: "Tailwind CSS", 
    description: "Framework CSS utilitaire moderne",
    color: "#06B6D4"
  },
  { 
    icon: SiBootstrap, 
    name: "Bootstrap", 
    description: "Framework CSS pour design responsive",
    color: "#7952B3"
  },
  { 
    icon: SiDocker, 
    name: "Docker", 
    description: "Plateforme de conteneurisation d'applications",
    color: "#2496ED"
  },
];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-technologies"
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
            التقنيات
          </h2>
          <p className="text-muted-foreground text-lg">
            Les technologies que j'utilise au quotidien
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <Card
                className="p-4 text-center h-full group hover-elevate cursor-default"
                data-testid={`card-tech-${tech.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="flex flex-col items-center gap-3">
                  <tech.icon
                    className="w-10 h-10 transition-colors"
                    style={{ color: tech.color }}
                  />
                  <h3 className="font-semibold text-foreground text-sm">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {tech.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
