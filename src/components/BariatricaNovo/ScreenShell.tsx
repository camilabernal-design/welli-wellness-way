import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NovoHeader from "./NovoHeader";

interface Props {
  children: ReactNode;
  withNovo?: boolean;
  center?: boolean;
  className?: string;
}

const ScreenShell = ({ children, withNovo, center, className }: Props) => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className={cn(
      "relative w-full min-h-[calc(100vh-72px)] px-8 md:px-16 py-12 md:py-16 flex",
      center ? "items-center justify-center" : "items-start justify-center",
      className,
    )}
  >
    {withNovo && <NovoHeader />}
    <div className="w-full max-w-5xl">{children}</div>
  </motion.section>
);

export default ScreenShell;
