import Navbar from "../portfolio/Navbar";
import { ThemeProvider } from "../portfolio/ThemeProvider";

export default function NavbarExample() {
  return (
    <ThemeProvider>
      <div className="min-h-[200px] bg-muted">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}
