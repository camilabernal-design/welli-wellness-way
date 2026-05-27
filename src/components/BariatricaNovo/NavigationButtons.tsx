import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  onBack?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  hideBack?: boolean;
  hideNext?: boolean;
}

const NavigationButtons = ({
  onBack,
  onNext,
  nextLabel = "Continuar",
  nextDisabled,
  hideBack,
  hideNext,
}: Props) => (
  <div className="flex items-center justify-between mt-12 gap-4">
    {!hideBack ? (
      <Button
        variant="ghost"
        size="lg"
        onClick={onBack}
        disabled={!onBack}
        className="text-indigo-950 text-lg gap-2 h-14 px-6"
      >
        <ChevronLeft className="h-5 w-5" /> Atrás
      </Button>
    ) : (
      <div />
    )}
    {!hideNext && (
      <Button
        size="lg"
        onClick={onNext}
        disabled={nextDisabled}
        className="bg-welli-yellow hover:bg-welli-yellow/90 text-indigo-950 text-lg font-semibold h-14 px-10 gap-2 shadow-md"
      >
        {nextLabel} <ChevronRight className="h-5 w-5" />
      </Button>
    )}
  </div>
);

export default NavigationButtons;
