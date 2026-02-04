import welliLogoFull from "@/assets/welli-logo-full.png";
import { cn } from "@/lib/utils";

interface WelliLogoFullProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const WelliLogoFull = ({ className = "", size = "md" }: WelliLogoFullProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <img
      src={welliLogoFull}
      alt="Welli - Financia tu Bienestar"
      className={cn("object-contain", sizeClasses[size], className)}
    />
  );
};

export default WelliLogoFull;
