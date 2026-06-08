import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const items = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
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
        className={`flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
          scrolled 
            ? "bg-[#0A0A0A]/70 backdrop-blur-xl border border-[#262626] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border border-transparent"
        }`}
      >
        <Link to="/" className="ml-3 mr-4 hidden items-center gap-2 sm:flex">
          <span className="size-2 rounded-full bg-[#F97316] shadow-[0_0_8px_#F97316]" />
          <span className="font-display text-sm font-bold tracking-tight text-[#FFFFFF]">Nanda Kishor</span>
        </Link>
        
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
              active === it.id ? "text-[#FFFFFF]" : "text-[#737373] hover:text-[#E5E5E5]"
            }`}
          >
            {active === it.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[#262626]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            {it.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
