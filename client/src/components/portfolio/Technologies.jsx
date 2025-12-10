import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useLanguage } from "./LanguageContext";
import { 
  SiReact, SiVuedotjs, SiLaravel, SiNodedotjs, SiPython, 
  SiPostgresql, SiMysql, SiGithub, SiTailwindcss, SiBootstrap,
  SiQgis, SiDocker, SiTypescript, SiPhp, SiJavascript,
  SiAngular, SiFigma, SiHtml5, SiCss3, SiGooglemaps
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiAngular, name: "Angular", color: "#DD0031" },
  { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { icon: SiCss3, name: "CSS3", color: "#1572B6" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { icon: SiQgis, name: "QGIS", color: "#589632" },
  { icon: SiGooglemaps, name: "Google Maps", color: "#4285F4" },
  { icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { icon: SiGithub, name: "GitHub", color: "#181717" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
];

export default function Technologies() {
  const { t } = useLanguage();

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
            {t.technologies.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.technologies.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
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
                <div className="flex flex-col items-center gap-2">
                  <tech.icon
                    className="w-8 h-8 transition-colors"
                    style={{ color: tech.color }}
                  />
                  <h3 className="font-medium text-foreground text-xs">
                    {tech.name}
                  </h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
