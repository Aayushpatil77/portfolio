"use client";
import { ResizablePanelProps } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const ResizablePanel = ({
  children,
  animationName,
  duration,
  containerStyles,
}: ResizablePanelProps) => {
  let [ref, { height }] = useMeasure();

  let animations: any = {
    fade: {
      initial: { opacity: 0 },
      animate: {
        opacity: 1,
        transition: { duration: duration / 2, delay: duration / 2 },
      },
      exit: { opacity: 0, transition: { duration: duration / 2 } },
    },

    crossFade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },

    slide: {
      initial: { x: 382 },
      animate: { x: 0 },
      exit: { x: -382 },
    },

    slideAndFade: {
      initial: { x: 382, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -382, opacity: 0 },
    },
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${containerStyles}`}
      animate={{ height: height || "auto" }}
      transition={{ duration }}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          {...animations[animationName]}
          transition={{ duration }}
          className={height ? "absolute" : "relative"}
        >
          <div ref={ref} className="px-8 pb-8">
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

export default ResizablePanel;
