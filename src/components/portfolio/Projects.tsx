import { motion } from "framer-motion";
import { ArrowUpRight, Github, Bot, Map, FileText, ShieldCheck, Database, BarChart2 } from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, 
  SiFastapi, SiGooglegemini, SiTypescript, 
  SiTailwindcss, SiLangchain, SiPython,
  SiExpo, SiScikitlearn, SiPlotly, SiStreamlit,SiGithub
} from "react-icons/si";
import { Section } from "./Section";
import planetImg from "@/assets/orange_planet.png";

// NavixGo Images
import navixMain from "@/assets/navixgo/main.png";
import navixSub1 from "@/assets/navixgo/sub1.png";
import navixSub2 from "@/assets/navixgo/sub2.png";

// Credit AI Images
import creditMain from "@/assets/credit-ai/main.png";
import creditSub1 from "@/assets/credit-ai/sub1.png";
import creditSub2 from "@/assets/credit-ai/sub2.png";

// PreBunk AI Images
import prebunkMain from "@/assets/prebunk/main.png";
import prebunkSub1 from "@/assets/prebunk/sub1.png";
import prebunkSub2 from "@/assets/prebunk/sub2.png";

// Resume Evaluator Images
import resumeMain from "@/assets/resume-evaluator/main.png";
import resumeSub1 from "@/assets/resume-evaluator/sub1.png";
import resumeSub2 from "@/assets/resume-evaluator/sub2.png";


const projects = [
  {
    title: "NavixGo",
    tag: "REAL-TIME PLATFORM",
    bullet: "→ Hardware-free GPS tracking with sub-second updates.",
    icon: Map,
    tags: ["React Native", "Expo", "TypeScript", "Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/Nandha050/navixgo",
    live: "https://navixgo.in",
    images: [navixMain, navixSub1, navixSub2],
  },
  {
    title: "Credit AI",
    tag: "AI DECISIONING",
    bullet: "→ Automates corporate lending analysis and risk assessment.",
    icon: Bot,
    tags: ["FastAPI", "XGBoost", "Scikit Learn", "Python", "MongoDB"],
    github: "https://github.com/Nandha050/credit-ai",
    live: null,
    images: [creditMain, creditSub1, creditSub2],
  },
  {
    title: "PreBunk AI",
    tag: "AI & SECURITY",
    bullet: "→ Identifies misinformation and deceptive content.",
    icon: ShieldCheck,
    tags: ["React", "TypeScript", "Gemini", "Tailwind CSS"],
    github: "https://github.com/Nandha050/prebunk",
    live: "https://prebunk-ai.vercel.app/",
    images: [prebunkMain, prebunkSub1, prebunkSub2],
  },
  {
    title: "Resume Evaluator",
    tag: "AI & NLP",
    bullet: "→ Accelerates candidate screening with intelligent AI evaluation.",
    icon: FileText,
    tags: ["FastAPI", "LangChain", "Python", "Plotly", "Streamlit", "ChromaDB"],
    github: "https://github.com/Nandha050/resume_evaluator",
    live: "https://resume-evaluator-kohl.vercel.app/",
    images: [resumeMain, resumeSub1, resumeSub2],
  },
];

const getTechIcon = (tag: string) => {
  switch (tag) {
    case "React":
    case "React Native":
      return <SiReact className="size-4" />;
    case "Next.js":
      return <SiNextdotjs className="size-4" />;
    case "Node.js":
      return <SiNodedotjs className="size-4" />;
    case "MongoDB":
      return <SiMongodb className="size-4" />;
    case "FastAPI":
      return <SiFastapi className="size-4" />;
    case "XGBoost":
      return <BarChart2 className="size-4" />;
    case "Gemini":
      return <SiGooglegemini className="size-4" />;
    case "TypeScript":
      return <SiTypescript className="size-4" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="size-4" />;
    case "LangChain":
      return <SiLangchain className="size-4" />;
    case "ChromaDB":
      return <Database className="size-4" />;
    case "Expo":
      return <SiExpo className="size-4" />;
    case "Scikit Learn":
      return <SiScikitlearn className="size-4" />;
    case "Python":
      return <SiPython className="size-4" />;
    case "Plotly":
      return <SiPlotly className="size-4" />;
    case "Streamlit":
      return <SiStreamlit className="size-4" />;
    default:
      return null;
  }
};

export function Projects() {
  return (
    <>
      <Section
        id="projects"
        eyebrow="selected work"
        title={
          <>
            Few of  <span className="text-[#F97316]">my works</span>.
          </>
        }
        subtitle="Projects that solve real problems"
      >
        {/* Decorative Planet - Left (Full Bleed) */}
        <div className="absolute top-1/4 left-1/2 -ml-[50vw] w-screen h-full pointer-events-none -z-10 flex justify-start items-start">
          <div className="w-[800px] h-[800px] opacity-40 mix-blend-screen -translate-x-[40%]">
            <img src={planetImg} alt="Decorative planet" className="h-full w-full object-contain blur-[2px]" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/50 hover:shadow-[0_12px_40px_-12px_rgba(249,115,22,0.15)]"
            >
              {/* Image Container */}
              <div className="relative flex h-64 w-full items-center justify-center bg-[#161616] overflow-hidden">
                <div className="absolute top-4 left-4 z-30 rounded-full bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {p.tag}
                </div>
                
                <img 
                  src={p.images[0]} 
                  alt={`${p.title} screenshot`}
                  className="absolute inset-0 z-20 h-full w-full object-cover transition-transform duration-700 "
                />
              </div>

              {/* Bottom Half - Details */}
              <div className="flex flex-1 flex-col p-6">
                
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-display text-xl font-bold text-[#FFFFFF]">{p.title}</h3>
                  <div className="flex items-center gap-2">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="flex size-8 items-center justify-center rounded-full border border-[#404040] bg-[#111111] text-[#A3A3A3] transition-colors hover:bg-[#262626] hover:text-[#FFFFFF]">
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="flex size-8 items-center justify-center rounded-full border border-[#404040] bg-[#111111] text-[#A3A3A3] transition-colors hover:bg-[#262626] hover:text-[#FFFFFF]">
                        <Github className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="mt-2 text-xs font-semibold text-[#F97316]">
                  {p.bullet}
                </p>

                {/* Tech Tags */}
                <div className="mt-auto pt-6">
                  <div className="flex items-center -space-x-2">
                    {p.tags.map((tag, idx) => (
                      <div
                        key={tag}
                        title={tag}
                        className="relative flex size-9 items-center justify-center rounded-full border border-[#404040] bg-[#111111] text-white transition-transform hover:scale-110"
                        style={{ zIndex: p.tags.length - idx }}
                      >
                        {getTechIcon(tag)}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
