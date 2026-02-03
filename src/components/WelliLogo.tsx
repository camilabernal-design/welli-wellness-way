import welliLogo from "@/assets/welli-logo.jpg";
import { cn } from "@/lib/utils";

interface WelliLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const WelliLogo = ({ className = "", size = "md" }: WelliLogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <img
      src={welliLogo}
      alt="Welli - Financia tu Bienestar"
      className={cn("rounded-xl object-cover", sizeClasses[size], className)}
    />
  );
};

export default WelliLogo;
