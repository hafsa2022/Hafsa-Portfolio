import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./LanguageContext";
import heroBg from "@assets/generated_images/hero_section_tech_background.png";

export default function Hero() {
  const { t } = useLanguage();

  const professions = [
    t.hero.profession1,
    t.hero.profession2,
    t.hero.profession3,
  ];

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.p
            className="text-primary font-medium text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t.hero.welcome}
          </motion.p>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            data-testid="text-hero-name"
          >
            Hafsa EL AKHDAR
          </motion.h1>

          <div className="space-y-2">
            {professions.map((profession, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-xl text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                data-testid={`text-profession-${index}`}
              >
                {profession}
              </motion.p>
            ))}
          </div>

          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              data-testid="button-explore-projects"
            >
              {t.hero.exploreProjects}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={scrollToContact}
              data-testid="button-contact-hero"
            >
              {t.hero.contactMe}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => {
          const element = document.querySelector("#about");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}
