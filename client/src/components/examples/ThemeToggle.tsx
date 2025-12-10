import ThemeToggle from "../portfolio/ThemeToggle";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}
