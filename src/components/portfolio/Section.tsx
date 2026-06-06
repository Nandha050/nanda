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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-2xl"
      >
        {eyebrow && (
          <div className="glass mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[oklch(0.72_0.2_290)] shadow-[0_0_10px_oklch(0.72_0.2_290)]" />
            {eyebrow}
          </div>
        )}
        <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>}
      </motion.div>
      {children}
    </section>
  );
}
