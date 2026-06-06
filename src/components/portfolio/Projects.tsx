import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";

type Project = {
  name: string;
  tag: string;
  problem: string;
  achievements: string[];
  stack: string[];
  demo?: string;
  repo?: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "Credit AI",
    tag: "AI · FinTech",
    problem: "Corporate credit appraisal is slow and inconsistent across analysts.",
    achievements: ["Cut appraisal time by ~70%", "Explainable risk scoring", "Bank-grade workflow"],
    stack: ["Python", "LLMs", "FastAPI", "React", "PostgreSQL"],
    accent: "from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)]",
  },
  {
    name: "Gene & Protein Intelligence",
    tag: "AI · BioTech",
    problem: "Researchers waste hours digging through genomic & proteomic data.",
    achievements: ["Unified search across datasets", "AI-summarized insights", "Interactive 3D structures"],
    stack: ["Python", "PyTorch", "Next.js", "D3", "Vector DB"],
    accent: "from-[oklch(0.7_0.2_180)] to-[oklch(0.72_0.2_290)]",
  },
  {
    name: "E-Hospital Management",
    tag: "Full Stack · HealthTech",
    problem: "Hospitals juggle patients, doctors, billing on disconnected tools.",
    achievements: ["End-to-end OPD flow", "Role-based dashboards", "Realtime appointment system"],
    stack: ["MERN", "Tailwind", "JWT", "Socket.IO"],
    accent: "from-[oklch(0.75_0.18_150)] to-[oklch(0.7_0.2_250)]",
  },
  {
    name: "Recipe Finder",
    tag: "AI · Consumer",
    problem: "What can I cook with what's already in my kitchen?",
    achievements: ["Ingredient-based search", "Smart substitutions", "Saved 10k+ ingredient queries"],
    stack: ["React", "Node", "OpenAI", "MongoDB"],
    accent: "from-[oklch(0.78_0.18_60)] to-[oklch(0.72_0.2_290)]",
  },
  {
    name: "Automated Question Generator",
    tag: "AI · EdTech",
    problem: "Teachers spend hours preparing assessments from textbook content.",
    achievements: ["NLP-driven question synthesis", "MCQ + descriptive output", "Difficulty calibration"],
    stack: ["Python", "spaCy", "Transformers", "Flask"],
    accent: "from-[oklch(0.7_0.2_320)] to-[oklch(0.7_0.2_250)]",
  },
  {
    name: "Gamyam Bus Tracking",
    tag: "Full Stack · IoT",
    problem: "Students wait blindly for college buses with no live info.",
    achievements: ["Realtime GPS tracking", "ETAs & route maps", "Used by 500+ students"],
    stack: ["React Native", "Node", "MongoDB", "Maps API"],
    accent: "from-[oklch(0.72_0.2_290)] to-[oklch(0.75_0.18_30)]",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title={<>Selected <span className="text-gradient">projects</span>.</>}
      subtitle="A snapshot of products I've designed, built, and shipped — spanning AI, full-stack, and developer tools."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
            className="group glass relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1.5 hover:border-white/20"
          >
            {/* visual */}
            <div className="relative mb-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12]">
              <div className={`aspect-[16/9] w-full bg-gradient-to-br ${p.accent} opacity-90`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="glass-strong rounded-xl px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/90">
                  {p.tag}
                </div>
              </div>
              <div className="absolute inset-0 translate-y-full bg-black/40 backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-0" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{p.problem}</p>

            <ul className="mt-4 space-y-1.5">
              {p.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-xs text-foreground/80">
                  <span className="mt-1 size-1 shrink-0 rounded-full bg-[oklch(0.72_0.2_290)] shadow-[0_0_8px_oklch(0.72_0.2_290)]" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={p.demo ?? "#"}
                className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors hover:bg-white/10"
              >
                Live demo <ArrowUpRight className="size-3" />
              </a>
              <a
                href={p.repo ?? "https://github.com/Nandha050"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-3" /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
