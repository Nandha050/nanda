import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 max-w-2xl"
      >
        {eyebrow && (
          <div className="mb-4 flex items-center gap-4 text-xs font-normal tracking-[0.2em] uppercase text-[#A3A3A3]">
            <span className="h-px w-8 bg-[#A3A3A3]" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{title}</h2>
        {subtitle && <p className="mt-6 text-lg font-medium text-white/70 sm:text-xl">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
