import Logo from "../portfolio/Logo";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function LogoExample() {
  return (
    <ThemeProvider>
      <div className="flex items-center gap-4 p-4">
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
      </div>
    </ThemeProvider>
  );
}
