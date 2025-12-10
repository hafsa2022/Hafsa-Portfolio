import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "hafsa.elakhdar@email.com",
    href: "mailto:hafsa.elakhdar@email.com",
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+212 6XX XXX XXX",
    href: "tel:+2126XXXXXXXX",
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "Casablanca, Maroc",
    href: "#",
  },
];

const socialLinks = [
  { icon: SiGithub, label: "GitHub", href: "#", color: "#181717" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#", color: "#0A66C2" },
  { icon: SiX, label: "X", href: "#", color: "#000000" },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: remove mock functionality - implement real form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "تم إرسال الرسالة",
      description: "شكراً لتواصلك. سأرد عليك في أقرب وقت ممكن.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-contact"
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
            تواصل معي
          </h2>
          <p className="text-muted-foreground text-lg">
            N'hésitez pas à me contacter pour vos projets
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input
                    id="name"
                    placeholder="أدخل اسمك الكامل"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea
                    id="message"
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">
                معلومات الاتصال
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                    data-testid={`link-contact-${info.label}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-4">
                تابعني على
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    asChild
                    data-testid={`button-social-${social.label.toLowerCase()}`}
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" style={{ color: social.color }} />
                    </a>
                  </Button>
                ))}
              </div>
            </Card>

            <Card className="p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212281.74954087897!2d-7.7358631!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                data-testid="map-embed"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
