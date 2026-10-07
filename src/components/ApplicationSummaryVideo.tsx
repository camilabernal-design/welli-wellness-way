import { forwardRef } from "react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { VIDEO_IDS } from "@/lib/videoIds";

const ApplicationSummaryVideo = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="space-y-3 mt-8">
    <h3 className="text-xl font-bold text-foreground text-center">
      Cómo solicitar un crédito · Versión resumida
    </h3>
    <p className="text-sm text-muted-foreground text-center">Para doctores con poco tiempo</p>
    <YouTubeEmbed
      videoId={VIDEO_IDS.applicationSummary}
      title="Cómo solicitar un crédito · Versión resumida para doctores"
      isShort
      borderColor="welli-yellow"
    />
  </div>
));

ApplicationSummaryVideo.displayName = "ApplicationSummaryVideo";
export default ApplicationSummaryVideo;