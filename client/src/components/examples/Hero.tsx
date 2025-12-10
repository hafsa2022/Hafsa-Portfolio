import Hero from "../portfolio/Hero";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function HeroExample() {
  return (
    <ThemeProvider>
      <Hero />
    </ThemeProvider>
  );
}
