import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Code, Database } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import profileImg from "@assets/generated_images/professional_profile_placeholder.png";

export default function About() {
  const { t } = useLanguage();

  const milestones = [
    {
      icon: MapPin,
      title: t.about.milestone1,
      description: t.about.milestone1Desc,
    },
    {
      icon: Database,
      title: t.about.milestone2,
      description: t.about.milestone2Desc,
    },
    {
      icon: Code,
      title: t.about.milestone3,
      description: t.about.milestone3Desc,
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-about"
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
            {t.about.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.about.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <p className="text-foreground text-lg leading-relaxed">
                {t.about.bio1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.bio2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.bio3}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center hover-elevate">
                    <milestone.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {milestone.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-2xl" />
              <img
                src={profileImg}
                alt="Hafsa EL AKHDAR"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border-4 border-primary/20"
                data-testid="img-profile"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
