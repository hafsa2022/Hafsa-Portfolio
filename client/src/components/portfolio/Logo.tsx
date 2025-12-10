import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-14 h-14 text-xl",
  };

  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70 ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-testid="logo"
    >
      <span className="font-bold text-primary-foreground tracking-tight">HA</span>
      <div className="absolute inset-0 rounded-lg bg-primary/20 blur-md -z-10" />
    </motion.div>
  );
}
