import { motion } from "framer-motion";
import { Section } from "./Section";
import { Sparkles, Code2, Rocket, Brain } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI / ML", desc: "Building intelligent systems with LLMs, NLP & deep learning." },
  { icon: Code2, label: "Full Stack", desc: "Production-grade web apps with React, Node, and modern cloud." },
  { icon: Rocket, label: "Shipping", desc: "From idea to deployed product in days — not months." },
  { icon: Sparkles, label: "Design", desc: "Pixel-perfect, motion-driven interfaces that feel premium." },
];

const timeline = [
  { year: "2022", title: "Started B.Tech CSE", desc: "Began the journey into computer science engineering." },
  { year: "2023", title: "First full-stack apps", desc: "Built and deployed MERN projects, fell in love with React." },
  { year: "2024", title: "Diving into AI", desc: "Trained ML models, NLP pipelines, and explored LLM apps." },
  { year: "2025", title: "Hackathons & impact", desc: "Won/competed in national hackathons, shipped AI products." },
  { year: "2026", title: "Looking for the next challenge", desc: "Open to roles building world-class AI & developer tools." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineer obsessed with <span className="text-gradient">craft & impact</span>.</>}
      subtitle="I'm a Computer Science Engineering student passionate about building AI-driven, beautifully crafted products. I love the intersection of intelligent systems and elegant interfaces."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-8"
        >
          <div className="absolute -right-12 -top-12 size-48 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.2_290_/_0.4),transparent_70%)] blur-2xl" />
          <h3 className="font-display text-xl font-semibold">My story</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I started coding because I wanted to build the kind of products I loved using. That
            curiosity pulled me into web development, then into AI, and finally into the space
            where they meet — intelligent tools that feel magical to use. Today I focus on
            shipping AI-powered, full-stack experiences with the polish of a top-tier product team.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            When I'm not coding, I'm probably reading product teardowns, sketching UI, or
            prepping for the next hackathon.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="mb-3 inline-flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_290)]/30 to-[oklch(0.7_0.2_250)]/30 text-[oklch(0.85_0.15_290)]">
                <h.icon className="size-4" />
              </div>
              <div className="font-display text-sm font-semibold">{h.label}</div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-12">
        <h3 className="mb-6 font-display text-xl font-semibold">Learning journey</h3>
        <div className="relative">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-[oklch(0.72_0.2_290)]/60 via-white/10 to-transparent md:left-1/2" />
          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-8 ${
                  i % 2 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="md:hidden">
                  <div className="relative top-1.5 size-3 rounded-full bg-[oklch(0.72_0.2_290)] shadow-[0_0_18px_oklch(0.72_0.2_290)]" />
                </div>
                <div className={i % 2 ? "md:text-left" : "md:text-right"}>
                  <div className="hidden size-3 rounded-full bg-[oklch(0.72_0.2_290)] shadow-[0_0_18px_oklch(0.72_0.2_290)] md:absolute md:left-1/2 md:top-2 md:block md:-translate-x-1/2" />
                  <div className="font-mono text-xs text-[oklch(0.85_0.15_290)]">{t.year}</div>
                  <div className="font-display text-lg font-semibold">{t.title}</div>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </div>
                <div />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
