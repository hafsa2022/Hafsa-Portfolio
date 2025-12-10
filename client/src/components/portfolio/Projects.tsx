import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import gisProject from "@assets/generated_images/gis_project_screenshot.png";
import webApp from "@assets/generated_images/web_app_dashboard_project.png";
import mapProject from "@assets/generated_images/interactive_map_project.png";

// todo: remove mock functionality
const projects = [
  {
    id: 1,
    title: "Système d'Analyse Spatiale",
    titleAr: "نظام التحليل المكاني",
    description: "Application d'analyse géospatiale avancée pour la gestion territoriale et l'urbanisme.",
    image: gisProject,
    category: "sig",
    technologies: ["QGIS", "PostGIS", "Python", "Leaflet"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    titleAr: "لوحة تحليلات البيانات",
    description: "Tableau de bord interactif pour la visualisation de données en temps réel.",
    image: webApp,
    category: "fullstack",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Cartographie Interactive",
    titleAr: "خرائط تفاعلية",
    description: "Application de cartographie web avec géolocalisation et filtres avancés.",
    image: mapProject,
    category: "sig",
    technologies: ["Vue.js", "Mapbox", "Laravel", "MySQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Plateforme E-commerce",
    titleAr: "منصة التجارة الإلكترونية",
    description: "Solution e-commerce complète avec gestion de produits et paiements.",
    image: webApp,
    category: "fullstack",
    technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Système de Géocodage",
    titleAr: "نظام الترميز الجغرافي",
    description: "Service de géocodage et recherche d'adresses avec base de données spatiale.",
    image: gisProject,
    category: "sig",
    technologies: ["Python", "PostgreSQL", "FastAPI", "PostGIS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "API RESTful",
    titleAr: "واجهة برمجة التطبيقات",
    description: "API robuste pour la gestion de données avec authentification JWT.",
    image: mapProject,
    category: "fullstack",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const filters = [
  { id: "all", label: "الكل", labelFr: "Tous" },
  { id: "sig", label: "SIG", labelFr: "SIG" },
  { id: "fullstack", label: "Full Stack", labelFr: "Full Stack" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section
      id="projects"
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-projects"
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
            المشاريع
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez mes réalisations récentes
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "secondary"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              data-testid={`button-filter-${filter.id}`}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="overflow-hidden group hover-elevate"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 right-2 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-white/90 text-black"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground mb-1">
                      {project.titleAr}
                    </h3>
                    <p className="text-sm text-primary mb-2">{project.title}</p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 gap-2"
                        onClick={() => console.log(`View demo: ${project.title}`)}
                        data-testid={`button-demo-${project.id}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                        عرض المشروع
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log(`View GitHub: ${project.title}`)}
                        data-testid={`button-github-${project.id}`}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
