import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import { Quote } from "lucide-react";

const items = [
  { quote: "Nanda ships faster than most senior engineers I've worked with — and his AI work is genuinely impressive.", name: "Hackathon Mentor", role: "Senior Engineer, FinTech" },
  { quote: "Rare blend of design taste and engineering depth. He owned the product end-to-end and made it feel premium.", name: "Project Lead", role: "Startup Founder" },
  { quote: "Every demo he showed felt like a real product, not a student project. Recruiters should be paying attention.", name: "Peer", role: "ML Engineer" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <Section
      id="testimonials"
      eyebrow="Kind Words"
      title={<>What people <span className="text-gradient">say</span>.</>}
    >
      <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <Quote className="absolute right-6 top-6 size-16 text-white/5" />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
          >
            <p className="font-display text-xl leading-snug text-foreground/95 sm:text-2xl">"{items[i].quote}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="size-9 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)]" />
              <div>
                <div className="text-sm font-semibold">{items[i].name}</div>
                <div className="text-xs text-muted-foreground">{items[i].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex gap-1.5">
          {items.map((_, j) => (
            <button
              key={j}
              onClick={() => setI(j)}
              aria-label={`Show testimonial ${j + 1}`}
              className={`h-1.5 rounded-full transition-all ${j === i ? "w-8 bg-[oklch(0.72_0.2_290)]" : "w-1.5 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
