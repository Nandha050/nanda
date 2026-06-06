import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0F]"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.2_290_/_0.6),transparent_60%)] blur-2xl" />
              <div className="size-12 rounded-2xl bg-gradient-to-br from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)] shadow-[0_0_40px_oklch(0.72_0.2_290)]" />
            </motion.div>
            <div className="font-display text-sm tracking-widest text-muted-foreground">
              NK · LOADING
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
