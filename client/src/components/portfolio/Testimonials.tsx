import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    nameAr: "أحمد بنعلي",
    role: "Chef de Projet SIG",
    roleAr: "رئيس مشروع SIG",
    company: "GeoTech Solutions",
    content: "Hafsa a démontré une expertise exceptionnelle dans la gestion de projets SIG complexes. Sa capacité à résoudre des problèmes techniques tout en maintenant une vision globale du projet est remarquable.",
    initials: "AB",
  },
  {
    id: 2,
    name: "Marie Dupont",
    nameAr: "ماري دوبون",
    role: "Directrice Technique",
    roleAr: "المديرة التقنية",
    company: "WebDev Agency",
    content: "Une développeuse Full Stack talentueuse qui livre des solutions de qualité dans les délais. Son code est propre, bien documenté et facile à maintenir.",
    initials: "MD",
  },
  {
    id: 3,
    name: "Karim Tazi",
    nameAr: "كريم التازي",
    role: "Consultant GIS",
    roleAr: "مستشار GIS",
    company: "Geo Consulting",
    content: "J'ai eu le plaisir de collaborer avec Hafsa sur plusieurs projets cartographiques. Sa maîtrise des outils SIG et sa créativité ont apporté une vraie valeur ajoutée.",
    initials: "KT",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-32 bg-muted/30"
      data-testid="section-testimonials"
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
            التوصيات
          </h2>
          <p className="text-muted-foreground text-lg">
            Ce que disent mes collaborateurs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full hover-elevate"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.nameAr}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.roleAr}
                    </p>
                    <p className="text-xs text-primary">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
