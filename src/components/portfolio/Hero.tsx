import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";
import { ParticleField } from "./ParticleField";
import profile from "@/assets/profile.jpg";

const ROLES = ["AI Developer", "Full Stack Developer", "Problem Solver", "Hackathon Builder"];

export function Hero() {
  const typed = useTypewriter(ROLES, 70, 1400);
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-28">
      {/* gradient backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.2_290_/_0.35),transparent_60%)] blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[480px] w-[680px] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_250_/_0.28),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,#0B0B0F_85%)]" />
        <svg className="absolute inset-0 size-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <ParticleField />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">Nanda Kishor</span>.
            <br />
            <span className="text-foreground/90">Building intelligent products.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex h-8 items-center gap-2 font-mono text-base text-muted-foreground sm:text-lg"
          >
            <span className="text-foreground/80">{">"}</span>
            <span className="text-gradient font-semibold">{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-pulse bg-[oklch(0.72_0.2_290)]" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            CS Engineering student crafting AI-powered products and polished full-stack
            experiences. I turn ambitious ideas into shipped software — fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_oklch(0.72_0.2_290_/_0.7)] transition-transform hover:scale-[1.02]"
            >
              <Download className="size-4" />
              Download Resume
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Mail className="size-4" />
              Contact me
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex items-center gap-4 text-muted-foreground"
          >
            <a href="https://github.com/Nandha050" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-foreground">
              <Github className="size-5" />
            </a>
            <a href="https://www.linkedin.com/in/nanda-kishor-b3ab0833b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-foreground">
              <Linkedin className="size-5" />
            </a>
            <a href="mailto:nandakishor0718@gmail.com" aria-label="Email" className="transition-colors hover:text-foreground">
              <Mail className="size-5" />
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-[conic-gradient(from_0deg,oklch(0.72_0.2_290_/_0.5),oklch(0.7_0.2_250_/_0.5),oklch(0.72_0.2_290_/_0.5))] blur-2xl" />
          <div className="gradient-border overflow-hidden rounded-[2rem] p-1">
            <div className="overflow-hidden rounded-[1.75rem]">
              <img
                src={profile}
                alt="Nanda Kishor portrait"
                width={768}
                height={896}
                className="size-full object-cover"
              />
            </div>
          </div>
          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-6 top-10 hidden rounded-2xl px-3 py-2 text-xs font-medium shadow-xl sm:block"
          >
            <div className="text-gradient font-semibold">AI / ML</div>
            <div className="text-muted-foreground">PyTorch · LLMs</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -right-4 bottom-12 hidden rounded-2xl px-3 py-2 text-xs font-medium shadow-xl sm:block"
          >
            <div className="text-gradient font-semibold">Full Stack</div>
            <div className="text-muted-foreground">React · Node · Cloud</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
