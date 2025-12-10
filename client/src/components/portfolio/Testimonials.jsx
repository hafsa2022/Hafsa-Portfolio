import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useLanguage } from "./LanguageContext";

// todo: remove mock functionality
const testimonialsData = {
  fr: [
    {
      id: 1,
      name: "Ahmed Benali",
      role: "Chef de Projet SIG",
      company: "GeoTech Solutions",
      content: "Hafsa a démontré une expertise exceptionnelle dans la gestion de projets SIG complexes. Sa capacité à résoudre des problèmes techniques tout en maintenant une vision globale du projet est remarquable.",
      initials: "AB",
    },
    {
      id: 2,
      name: "Marie Dupont",
      role: "Directrice Technique",
      company: "WebDev Agency",
      content: "Une développeuse Full Stack talentueuse qui livre des solutions de qualité dans les délais. Son code est propre, bien documenté et facile à maintenir.",
      initials: "MD",
    },
    {
      id: 3,
      name: "Karim Tazi",
      role: "Consultant GIS",
      company: "Geo Consulting",
      content: "J'ai eu le plaisir de collaborer avec Hafsa sur plusieurs projets cartographiques. Sa maîtrise des outils SIG et sa créativité ont apporté une vraie valeur ajoutée.",
      initials: "KT",
    },
  ],
  ar: [
    {
      id: 1,
      name: "أحمد بنعلي",
      role: "رئيس مشروع SIG",
      company: "GeoTech Solutions",
      content: "أظهرت حفصة خبرة استثنائية في إدارة مشاريع SIG المعقدة. قدرتها على حل المشكلات التقنية مع الحفاظ على رؤية شاملة للمشروع رائعة.",
      initials: "أب",
    },
    {
      id: 2,
      name: "ماري دوبون",
      role: "المديرة التقنية",
      company: "WebDev Agency",
      content: "مطورة Full Stack موهوبة تقدم حلولاً عالية الجودة في الوقت المحدد. كودها نظيف وموثق جيداً وسهل الصيانة.",
      initials: "مد",
    },
    {
      id: 3,
      name: "كريم التازي",
      role: "مستشار GIS",
      company: "Geo Consulting",
      content: "سعدت بالتعاون مع حفصة في عدة مشاريع خرائطية. إتقانها لأدوات SIG وإبداعها أضافا قيمة حقيقية.",
      initials: "كت",
    },
  ],
  en: [
    {
      id: 1,
      name: "Ahmed Benali",
      role: "GIS Project Manager",
      company: "GeoTech Solutions",
      content: "Hafsa demonstrated exceptional expertise in managing complex GIS projects. Her ability to solve technical problems while maintaining an overall project vision is remarkable.",
      initials: "AB",
    },
    {
      id: 2,
      name: "Marie Dupont",
      role: "Technical Director",
      company: "WebDev Agency",
      content: "A talented Full Stack developer who delivers quality solutions on time. Her code is clean, well-documented and easy to maintain.",
      initials: "MD",
    },
    {
      id: 3,
      name: "Karim Tazi",
      role: "GIS Consultant",
      company: "Geo Consulting",
      content: "I had the pleasure of collaborating with Hafsa on several mapping projects. Her mastery of GIS tools and creativity added real value.",
      initials: "KT",
    },
  ],
};

export default function Testimonials() {
  const { language, t } = useLanguage();

  const testimonials = testimonialsData[language] || testimonialsData.fr;

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
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.testimonials.subtitle}
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
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
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
