import { cn } from "@/lib/utils";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  isShort?: boolean;
  className?: string;
  borderColor?: "primary" | "secondary" | "welli-yellow";
}

const YouTubeEmbed = ({ 
  videoId, 
  title = "Video de Welli", 
  isShort = false,
  className,
  borderColor = "secondary"
}: YouTubeEmbedProps) => {
  // Extract video ID from various YouTube URL formats
  const extractVideoId = (input: string): string => {
    // If it's already just an ID, return it
    if (!input.includes("/") && !input.includes(".")) {
      return input;
    }
    
    // Handle youtube.com/shorts/ID format
    const shortsMatch = input.match(/shorts\/([a-zA-Z0-9_-]+)/);
    if (shortsMatch) return shortsMatch[1];
    
    // Handle youtu.be/ID format
    const shortMatch = input.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (shortMatch) return shortMatch[1];
    
    // Handle youtube.com/watch?v=ID format
    const watchMatch = input.match(/[?&]v=([a-zA-Z0-9_-]+)/);
    if (watchMatch) return watchMatch[1];
    
    return input;
  };

  const cleanVideoId = extractVideoId(videoId);
  
  const borderColorClasses = {
    primary: "border-primary",
    secondary: "border-secondary",
    "welli-yellow": "border-welli-yellow",
  };

  return (
    <div 
      className={cn(
        "rounded-2xl overflow-hidden border-4 shadow-lg",
        borderColorClasses[borderColor],
        isShort ? "max-w-[320px] mx-auto" : "w-full",
        className
      )}
    >
      <div className={cn(
        "relative w-full bg-black",
        isShort ? "aspect-[9/16]" : "aspect-video"
      )}>
        <iframe
          src={`https://www.youtube.com/embed/${cleanVideoId}?rel=0`}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default YouTubeEmbed;
