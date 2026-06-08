import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0F]"
        >
          <div className="relative flex items-center justify-center">
            {/* Fluid glowing background */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10 size-64 rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.8),transparent_70%)] blur-3xl"
            />
            
            {/* Liquid Fill Name */}
            <div className="relative font-display text-5xl font-black uppercase tracking-widest drop-shadow-[0_0_20px_rgba(249,115,22,0.4)] sm:text-7xl">
              {/* Hollow Text */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-transparent" 
                style={{ WebkitTextStroke: "2px #F97316" }}
              >
                Nanda.
              </motion.span>
              
              {/* Filled Liquid Text */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 overflow-hidden"
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              >
                <span className="absolute bottom-0 left-0 text-[#F97316]">
                  Nanda.
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
