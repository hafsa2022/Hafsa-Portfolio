import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import geoprtalImage from "../../assets/geoportal.png";
// import moviesImage from "../../assets/";
import invoiceImage from "../../assets/invoice_app.png";
import urlShortnerImage from "../../assets/url_shortener.png";
import jobBordImage from "../../assets/job_board.png";
import webEcommerceImage from "../../assets/ecommerce.png";
import productManagementImage from "../../assets/product_manage.png";
import mapProject from "@assets/generated_images/interactive_map_project.png";


const projectsData = {
  fr: [
    {
      id: 1,
      title: "projet de chercher Films",
      description: "Simple page web permet d'effectuer des recherches des films.",
      image: mapProject,
      category: "fullstack",
      technologies: ["React", "Appwrite" ,"TMDB API" ],
      linkGitHub: "https://github.com/hafsa2022/movies-project",
      linkDemo : "",
    },
    {
      id: 2,
      title: "Application de gestion des factures",
      description: "Une app permet d’effectuer diverses opérations telles que la recherche, la création, la mise à jour, le téléchargement et la suppression de factures. De plus, il permet de changer la langue du français à l’anglais.",
      image: invoiceImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel", "JWT Auth", "i18n"],
      linkGitHub: "https://github.com/hafsa2022/invoice-app-front",
      linkDemo : "https://drive.google.com/file/d/1gRq4IS3QGc1CGuP4lUEA0WhLgKYJARH6/view?usp=sharing",
    },
    {
      id: 3,
      title: "Site Web-ecommerce",
      description: "Le E-Commerce Project avec Spring Boot, Angular, JWT Athentication et mariaDB est une application web innovante qui permet aux utilisateurs d’explorer et d’acheter une large gamme de produits.",
      image: webEcommerceImage,
      category: "fullstack",
      technologies: ["Angular", "Spring Boot", "MariaDB", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/ecommerce-website-frontend",
      linkDemo : "",
    },
    {
      id: 4,
      title: "App de gestion des produits",
      description: "L’application web nous permet de rechercher, créer, mettre à jour et supprimer des produits",
      image: productManagementImage,
      category: "fullstack",
      technologies:  ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel"],
      linkGitHub: "https://github.com/hafsa2022/product-management-web-application-frontend",
      linkDemo : "",
    },
    {
      id: 5,
      title: "Tableau d’offres d’emploi",
      description: "L’application web nous permet de rechercher, créer, mettre à jour et supprimer des produits",
      image: jobBordImage,
      category: "fullstack",
      technologies:  ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/job-board-angular-laravel",
      linkDemo : "",
    },
    {
      id: 6,
      title: "Géoportail simple",
      description: "Simple Geoportail nous permet de cartographier, de chercher des lieux et de manipuler entre les couches.",
      image: geoprtalImage,
      category: "sig",
      technologies: ["Vue.js", "Vuetify", "Leaflet"],
      linkGitHub: "https://github.com/hafsa2022/mini-geoportail",
      linkDemo : "",
    },
    {
      id: 7,
      title: "Raccourcisseur d’URL",
      description: "page web qui permet de raccourcir des URL longues en des liens plus courts et faciles à partager.",
      image: urlShortnerImage,
      category: "fullstack",
      technologies: ["Angular", "Laravel", "CSS"],
      linkGitHub: "https://github.com/hafsa2022/url-shortener-frontend",
      linkDemo : "",
    },
  ],
  ar: [
    {
      id: 1,
      title: "مشروع البحث عن الأفلام",
      description: "صفحة ويب بسيطة تتيح للمستخدم البحث عن الأفلام.",
      image: mapProject,
      category: "fullstack",
      technologies: ["React", "Appwrite", "TMDB API"],
      linkGitHub: "https://github.com/hafsa2022/movies-project",
      linkDemo : "",
    },
    {
      id: 2,
      title: "تطبيق إدارة الفواتير",
      description:
        "تطبيق يتيح للمستخدم تنفيذ عدة عمليات مثل البحث، الإنشاء، التحديث، التحميل وحذف الفواتير، كما يدعم تغيير اللغة من الفرنسية إلى الإنجليزية.",
      image: invoiceImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/invoice-app-front",
      linkDemo : "https://drive.google.com/file/d/1gRq4IS3QGc1CGuP4lUEA0WhLgKYJARH6/view?usp=sharing",
    },
    {
      id: 3,
      title: "موقع تجارة إلكترونية",
      description:
        "مشروع تجارة إلكترونية مبني باستخدام Spring Boot و Angular و JWT Authentication و MariaDB، يتيح للمستخدمين تصفح وشراء مجموعة واسعة من المنتجات.",
      image: webEcommerceImage,
      category: "fullstack",
      technologies: ["Angular", "Spring Boot", "MariaDB", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/ecommerce-website-frontend",
      linkDemo : "",
    },
    {
      id: 4,
      title: "تطبيق إدارة المنتجات",
      description: "يتيح لنا هذا التطبيق الويب البحث عن المنتجات، إنشاؤها، تحديثها وحذفها.",
      image: productManagementImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel"],
      linkGitHub: "https://github.com/hafsa2022/product-management-web-application-frontend",
      linkDemo : "",
    },
    {
      id: 5,
      title: "منصة وظائف",
      description:
        "تطبيق ويب يتيح البحث، الإنشاء، التحديث وحذف المنتجات.",
      image: jobBordImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/job-board-angular-laravel",
      linkDemo : "",
    },
    {
      id: 6,
      title: "بوابة جغرافية بسيطة",
      description:
        "بوابة جغرافية بسيطة تتيح رسم الخرائط، البحث عن المواقع والتفاعل مع الطبقات.",
      image: geoprtalImage,
      category: "sig",
      technologies: ["Vue.js", "Vuetify", "Leaflet"],
      linkGitHub: "https://github.com/hafsa2022/mini-geoportail",
      linkDemo : "",
    },
    {
      id: 7,
      title: "مختصر الروابط",
      description:
        "صفحة ويب تتيح تقصير الروابط الطويلة إلى روابط قصيرة وسهلة المشاركة.",
      image: urlShortnerImage,
      category: "fullstack",
      technologies: ["Angular", "Laravel", "CSS"],
      linkGitHub: "https://github.com/hafsa2022/url-shortener-frontend",
      linkDemo : "",
    }
  ],
  en:[
    {
      id: 1,
      title: "Movie Search Project",
      description: "A simple web page that allows users to search for movies.",
      image: mapProject,
      category: "fullstack",
      technologies: ["React", "Appwrite", "TMDB API"],
      linkGitHub: "https://github.com/hafsa2022/movies-project", 
      linkDemo : "",
    },
    {
      id: 2,
      title: "Invoice Management App",
      description:
        "An application that allows users to perform various operations such as searching, creating, updating, downloading, and deleting invoices. It also supports switching the language from French to English.",
      image: invoiceImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/invoice-app-front",
      linkDemo : "https://drive.google.com/file/d/1gRq4IS3QGc1CGuP4lUEA0WhLgKYJARH6/view?usp=sharing",
    },
    {
      id: 3,
      title: "E-commerce Website",
      description:
        "The E-Commerce project built with Spring Boot, Angular, JWT Authentication, and MariaDB is an innovative web application that allows users to browse and purchase a wide range of products.",
      image: webEcommerceImage,
      category: "fullstack",
      technologies: ["Angular", "Spring Boot", "MariaDB", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/ecommerce-website-frontend",
      linkDemo : "",
    },
    {
      id: 4,
      title: "Product Management App",
      description:
        "This web application allows users to search, create, update, and delete products.",
      image: productManagementImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel"],
      linkGitHub: "https://github.com/hafsa2022/product-management-web-application-frontend",
      linkDemo : "",
    },
    {
      id: 5,
      title: "Job Board",
      description:
        "A web application that allows users to search, create, update, and delete products.",
      image: jobBordImage,
      category: "fullstack",
      technologies: ["Vue.js", "Vuetify", "Vuex", "PostgreSQL", "Laravel", "JWT Auth"],
      linkGitHub: "https://github.com/hafsa2022/job-board-angular-laravel",
      linkDemo : "",
    },
    {
      id: 6,
      title: "Simple Geoportal",
      description:
        "A simple geoportal that allows users to map data, search for locations, and interact with map layers.",
      image: geoprtalImage,
      category: "gis",
      technologies: ["Vue.js", "Vuetify", "Leaflet"],
      linkGitHub: "https://github.com/hafsa2022/mini-geoportail",
      linkDemo : "",
    },
    {
      id: 7,
      title: "URL Shortener",
      description:
        "A web page that allows users to shorten long URLs into shorter and easy-to-share links.",
      image: urlShortnerImage,
      category: "fullstack",
      technologies: ["Angular", "Laravel", "CSS"],
      linkGitHub: "https://github.com/hafsa2022/url-shortener-frontend",
      linkDemo : "",
    }
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
                        onClick={() => {
                          const link = document.createElement('a');
                          link.target="_blank";
                          link.href = project.linkGitHub;
                          link.click();
                          }}
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
