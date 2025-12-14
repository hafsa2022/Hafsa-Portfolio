import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Logo from "./Logo";
import { useLanguage } from "./LanguageContext";

const socialLinks = [
  { icon: SiGithub, href: "https://github.com/hafsa2022", label: "GitHub" },
  { icon: SiLinkedin, href: "https://www.linkedin.com/in/hafsa-el-akhdar-92b446198/", label: "LinkedIn" }
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-card border-t border-border py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Logo size="md" />
              <div>
                <h3 className="font-bold text-foreground">Hafsa EL AKHDAR</h3>
                <p className="text-sm text-muted-foreground">
                  {t.footer.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-foreground">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-start"
                  data-testid={`link-footer-${link.href.slice(1)}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-bold text-foreground">{t.footer.followMe}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Hafsa EL AKHDAR. {t.footer.rights}
            </p>
            <p className="flex items-center gap-1">
              {t.footer.madeWith} <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
