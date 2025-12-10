import Contact from "../portfolio/Contact";
import { ThemeProvider } from "../portfolio/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

export default function ContactExample() {
  return (
    <ThemeProvider>
      <Contact />
      <Toaster />
    </ThemeProvider>
  );
}
