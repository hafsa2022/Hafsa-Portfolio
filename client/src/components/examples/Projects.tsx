import Projects from "../portfolio/Projects";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function ProjectsExample() {
  return (
    <ThemeProvider>
      <Projects />
    </ThemeProvider>
  );
}
