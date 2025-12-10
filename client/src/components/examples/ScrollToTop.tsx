import ScrollToTop from "../portfolio/ScrollToTop";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function ScrollToTopExample() {
  return (
    <ThemeProvider>
      <div className="h-[1200px] bg-muted p-4">
        <p className="text-muted-foreground">Scroll down to see the button appear</p>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
