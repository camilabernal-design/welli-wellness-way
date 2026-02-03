import { cn } from "@/lib/utils";

interface WelliLogoProps {
  className?: string;
  variant?: "full" | "icon";
}

const WelliLogo = ({ className, variant = "full" }: WelliLogoProps) => {
  if (variant === "icon") {
    return (
      <div className={cn("w-10 h-10 rounded-xl bg-primary flex items-center justify-center", className)}>
        <span className="text-primary-foreground font-bold text-lg">W</span>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8", className)}
    >
      {/* Welli text logo */}
      <text
        x="0"
        y="28"
        className="fill-current"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "28px",
          fontWeight: 700,
          letterSpacing: "-0.5px",
        }}
      >
        Welli
      </text>
      {/* Accent dot */}
      <circle cx="105" cy="26" r="5" className="fill-welli-yellow" />
    </svg>
  );
};

export default WelliLogo;
