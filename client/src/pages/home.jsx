import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { LanguageProvider } from "@/components/portfolio/LanguageContext";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
// import Skills from "@/components/portfolio/Skills";
import Technologies from "@/components/portfolio/Technologies";
import Projects from "@/components/portfolio/Projects";
import Activities from "@/components/portfolio/Activities";
//import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollToTop from "@/components/portfolio/ScrollToTop";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main>
            <Hero />
            <About />
            {/* <Skills /> */}
            <Technologies />
            <Projects />
            <Activities />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
