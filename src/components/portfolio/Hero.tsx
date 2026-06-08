import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";
import profile from "@/assets/orange.jpg";



export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-[#0A0A0A] overflow-hidden">
      
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        
        {/* Left Column - Typography */}
        <div className="z-10 flex flex-col items-start px-6 pt-32 pb-16 lg:px-12 lg:py-0">
          
          {/* Availability Badge */}
          <div className="text-xs uppercase tracking-[0.2em]  rounded-full text-[#F97316] ">— Available for opportunities · 2026</div>


          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl"
          >
            <span className="text-white">Hi </span> <span className="text-white">I'm</span><br />

            <span className="text-white">Nanda </span> 
            <span className="bg-gradient-to-r from-[#F97316] to-[#EA580C] bg-clip-text text-transparent">Kishor</span>
            {/* <span className="bg-gradient-to-r from-[#F97316] to-[#EA580C] bg-clip-text text-transparent">AI</span> */}
            
            {/* <span className="bg-gradient-to-r from-[#F97316] to-[#EA580C] bg-clip-text text-transparent">Developer</span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-[#A3A3A3]"
          >
            Computer Science engineer passionate about building AI-powered products and exceptional full-stack experiences. I transform ambitious ideas into scalable, elegant, and impactful software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <a
              href="mailto:nandakishor0718@gmail.com"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105"
            >
              Get in touch 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
            
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-[#262626] bg-[#161616] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#262626]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              View Resume
            </a>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group text-sm font-medium text-[#A3A3A3] transition-colors hover:text-white"
            >
              View work <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-16 flex flex-wrap items-center gap-12 sm:gap-16"
          >
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-[#F97316]">10+</span>
              <span className="text-xs font-medium text-[#A3A3A3]">Projects shipped</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-[#F97316]">6+</span>
              <span className="text-xs font-medium text-[#A3A3A3]">Hackathons</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-display text-3xl font-bold text-[#F97316]">5★</span>
              <span className="text-xs font-medium text-[#A3A3A3]">HackerRank</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Blended Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-y-0 right-0 w-full lg:w-1/2"
        >
          {/* Image with gradient mask for blending */}
          <div 
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${profile})`,
              WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black 100%)",
              maskImage: "linear-gradient(to right, transparent, black 30%, black 100%)"
            }}
          />

          {/* Cinematic lighting overlay to fit palette better */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#F97316]/10 to-transparent mix-blend-overlay" />


        </motion.div>

      </div>
    </section>
  );
}
