import { useState } from "react";
import Module2Hook from "./Module2/Module2Hook";
import Module2PainCalculator from "./Module2/Module2PainCalculator";
import Module2QualitativeLoss from "./Module2/Module2QualitativeLoss";
import Module2AgendaReveal from "./Module2/Module2AgendaReveal";
import Module2DoubleReframe from "./Module2/Module2DoubleReframe";

interface Props { onComplete: () => void; }

const steps = ["hook", "calculator", "qualitative", "agenda", "reframe"] as const;
type Step = (typeof steps)[number];

const ExpressAliadosModule2Impact = ({ onComplete }: Props) => {
  const [step, setStep] = useState<Step>("hook");

  const goNext = (current: Step) => {
    const idx = steps.indexOf(current);
    if (idx < steps.length - 1) setStep(steps[idx + 1]);
    else onComplete();
  };

  return (
    <div className="module-container">
      <div className="max-w-5xl mx-auto">
        {step === "hook" && <Module2Hook onNext={() => goNext("hook")} />}
        {step === "calculator" && <Module2PainCalculator onNext={() => goNext("calculator")} />}
        {step === "qualitative" && <Module2QualitativeLoss onNext={() => goNext("qualitative")} />}
        {step === "agenda" && <Module2AgendaReveal onNext={() => goNext("agenda")} />}
        {step === "reframe" && <Module2DoubleReframe onComplete={onComplete} />}
      </div>
    </div>
  );
};

export default ExpressAliadosModule2Impact;
