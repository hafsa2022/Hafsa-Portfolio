import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "من أنا" },
  { href: "#skills", label: "المهارات" },
  { href: "#technologies", label: "التقنيات" },
  { href: "#projects", label: "المشاريع" },
  { href: "#activities", label: "الأنشطة" },
  { href: "#testimonials", label: "التوصيات" },
  { href: "#contact", label: "تواصل معي" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span className="font-semibold text-foreground hidden sm:block">
                Hafsa EL AKHDAR
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                  data-testid={`link-nav-${link.href.slice(1)}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="default"
                size="sm"
                className="hidden sm:flex gap-2"
                onClick={() => console.log("Download CV clicked")}
                data-testid="button-download-cv"
              >
                <Download className="h-4 w-4" />
                <span>تحميل السيرة</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-mobile-menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background lg:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex items-center justify-between mb-8">
                <Logo size="md" />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid="button-close-menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-right text-xl py-3 text-foreground hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    data-testid={`link-mobile-${link.href.slice(1)}`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="mt-auto">
                <Button
                  variant="default"
                  className="w-full gap-2"
                  onClick={() => console.log("Download CV clicked")}
                >
                  <Download className="h-4 w-4" />
                  <span>تحميل السيرة الذاتية</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
