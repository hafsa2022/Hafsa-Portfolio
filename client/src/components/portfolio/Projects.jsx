import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import gisProject from "@assets/generated_images/gis_project_screenshot.png";
import webApp from "@assets/generated_images/web_app_dashboard_project.png";
import mapProject from "@assets/generated_images/interactive_map_project.png";

// todo: remove mock functionality
const projectsData = {
  fr: [
    {
      id: 1,
      title: "Système d'Analyse Spatiale",
      description: "Application d'analyse géospatiale avancée pour la gestion territoriale et l'urbanisme.",
      image: gisProject,
      category: "sig",
      technologies: ["QGIS", "PostGIS", "Python", "Leaflet"],
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif pour la visualisation de données en temps réel.",
      image: webApp,
      category: "fullstack",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    },
    {
      id: 3,
      title: "Cartographie Interactive",
      description: "Application de cartographie web avec géolocalisation et filtres avancés.",
      image: mapProject,
      category: "sig",
      technologies: ["Vue.js", "Google Maps", "Laravel", "MySQL"],
    },
    {
      id: 4,
      title: "Plateforme E-commerce",
      description: "Solution e-commerce complète avec gestion de produits et paiements.",
      image: webApp,
      category: "fullstack",
      technologies: ["Angular", "Laravel", "MySQL"],
    },
    {
      id: 5,
      title: "Système de Géocodage",
      description: "Service de géocodage et recherche d'adresses avec base de données spatiale.",
      image: gisProject,
      category: "sig",
      technologies: ["Python", "PostgreSQL", "FastAPI", "PostGIS"],
    },
    {
      id: 6,
      title: "API RESTful",
      description: "API robuste pour la gestion de données avec authentification JWT.",
      image: mapProject,
      category: "fullstack",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    },
  ],
  ar: [
    {
      id: 1,
      title: "نظام التحليل المكاني",
      description: "تطبيق تحليل جغرافي مكاني متقدم لإدارة الأراضي والتخطيط العمراني.",
      image: gisProject,
      category: "sig",
      technologies: ["QGIS", "PostGIS", "Python", "Leaflet"],
    },
    {
      id: 2,
      title: "لوحة تحليلات البيانات",
      description: "لوحة معلومات تفاعلية لعرض البيانات في الوقت الفعلي.",
      image: webApp,
      category: "fullstack",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    },
    {
      id: 3,
      title: "خرائط تفاعلية",
      description: "تطبيق خرائط ويب مع تحديد الموقع الجغرافي وفلاتر متقدمة.",
      image: mapProject,
      category: "sig",
      technologies: ["Vue.js", "Google Maps", "Laravel", "MySQL"],
    },
    {
      id: 4,
      title: "منصة التجارة الإلكترونية",
      description: "حل تجارة إلكترونية شامل مع إدارة المنتجات والمدفوعات.",
      image: webApp,
      category: "fullstack",
      technologies: ["Angular", "Laravel", "MySQL"],
    },
    {
      id: 5,
      title: "نظام الترميز الجغرافي",
      description: "خدمة ترميز جغرافي والبحث عن العناوين مع قاعدة بيانات مكانية.",
      image: gisProject,
      category: "sig",
      technologies: ["Python", "PostgreSQL", "FastAPI", "PostGIS"],
    },
    {
      id: 6,
      title: "واجهة برمجة التطبيقات",
      description: "واجهة برمجة تطبيقات قوية لإدارة البيانات مع مصادقة JWT.",
      image: mapProject,
      category: "fullstack",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    },
  ],
  en: [
    {
      id: 1,
      title: "Spatial Analysis System",
      description: "Advanced geospatial analysis application for territorial management and urban planning.",
      image: gisProject,
      category: "sig",
      technologies: ["QGIS", "PostGIS", "Python", "Leaflet"],
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization.",
      image: webApp,
      category: "fullstack",
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    },
    {
      id: 3,
      title: "Interactive Mapping",
      description: "Web mapping application with geolocation and advanced filters.",
      image: mapProject,
      category: "sig",
      technologies: ["Vue.js", "Google Maps", "Laravel", "MySQL"],
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "Complete e-commerce solution with product management and payments.",
      image: webApp,
      category: "fullstack",
      technologies: ["Angular", "Laravel", "MySQL"],
    },
    {
      id: 5,
      title: "Geocoding System",
      description: "Geocoding service and address search with spatial database.",
      image: gisProject,
      category: "sig",
      technologies: ["Python", "PostgreSQL", "FastAPI", "PostGIS"],
    },
    {
      id: 6,
      title: "RESTful API",
      description: "Robust API for data management with JWT authentication.",
      image: mapProject,
      category: "fullstack",
      technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    },
  ],
};

export default function Projects() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = projectsData[language] || projectsData.fr;

  const filters = [
    { id: "all", label: t.projects.all },
    { id: "sig", label: t.projects.sig },
    { id: "fullstack", label: t.projects.fullstack },
  ];

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
            {t.projects.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.projects.subtitle}
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
                    <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                    <h3 className="font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
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
                        {t.projects.viewProject}
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
