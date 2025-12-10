import About from "../portfolio/About";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function AboutExample() {
  return (
    <ThemeProvider>
      <About />
    </ThemeProvider>
  );
}
