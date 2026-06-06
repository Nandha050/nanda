import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav() {
  const [active, setActive] = useState("home");
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    // active section
    for (const it of items) {
      const el = document.getElementById(it.id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= 120 && r.bottom > 120) {
        setActive(it.id);
        break;
      }
    }
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`glass-strong flex items-center gap-1 rounded-full px-2 py-2 transition-all ${
          scrolled ? "shadow-[0_8px_40px_-12px_rgba(140,100,255,0.35)]" : ""
        }`}
      >
        <Link to="/" className="ml-2 mr-3 hidden items-center gap-2 sm:flex">
          <span className="size-2 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)] shadow-[0_0_12px_oklch(0.72_0.2_290)]" />
          <span className="font-display text-sm font-semibold tracking-tight">Nanda Kishor</span>
        </Link>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              active === it.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === it.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {it.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
