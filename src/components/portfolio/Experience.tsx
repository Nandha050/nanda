import { motion } from "framer-motion";
import { Section } from "./Section";

// Import all certificate images
import agenthon from "@/assets/cerificates/agenthon gdhackthong.png";
import aminoverse from "@/assets/cerificates/aminoverse hackthon by mahindra university.png";
import buildwithindia from "@/assets/cerificates/buildwith india hackthon.png";
import codesprint from "@/assets/cerificates/code sprint.png";
import genai from "@/assets/cerificates/genai-certificate-ibm-coursera.png";
import googleStartup from "@/assets/cerificates/google  for stratup.png";
import knowation from "@/assets/cerificates/knowation  2.0.png";
import pythonCert from "@/assets/cerificates/python certificate-google-coursera.png";
import top20 from "@/assets/cerificates/top20 contributor.png";
import viswam from "@/assets/cerificates/viswam ai internship.png";

const highlights = [
  {
    year: "Apr 2026",
    tag: "ACHIEVEMENT",
    title: "Top 20 Contributor Among 4000+ Participants",
    description: "Recognized as one of the Top 20 Contributors in Open Source Connect Global among over 4,000 selected contributors and participants.",
  },
  {
    year: "Mar 2026",
    tag: "OPEN SOURCE",
    title: "Open Source Contributor",
    description: "Selected as a contributor and collaborated on multiple open-source projects while working with developers from diverse technical backgrounds.",
  },
  {
    year: "Jan 2026",
    tag: "STARTUP",
    title: "NavixGo Foundation Started",
    description: "Initiated research and planning for NavixGo, a real-time tracking platform designed to solve transportation and mobility challenges.",
  },
  {
    year: "Dec 2025",
    tag: "CERTIFICATION",
    title: "Google Cloud Skill Badges",
    description: "Earned skill badges in Creating Secure Data Lakes, Building Serverless Applications, and Protecting Sensitive Data.",
  },
  {
    year: "Sep 2025",
    tag: "PROJECT",
    title: "Built First Major AI Product",
    description: "Developed an AI-powered Resume Evaluation System, marking the start of a continuous product-building journey focused on AI and full-stack applications.",
  },
  {
    year: "Jun – Jul 2025",
    tag: "INTERNSHIP",
    title: "AI/ML Intern — Swecha (Viswam.ai)",
    description: "Worked on AI initiatives and gained real-world exposure to collaborative software development and emerging AI technologies.",
  },
  {
    year: "May 2025",
    tag: "CERTIFICATION",
    title: "AI & Python Certifications",
    description: "Completed industry-focused courses on AI Fundamentals, Generative AI Applications, and Python Programming (Coursera & IBM).",
  },
  {
    year: "2025",
    tag: "JOURNEY",
    title: "Entered Professional Tech Ecosystem",
    description: "Started actively learning modern technologies, building projects, attending hackathons, webinars, and technical events to expand practical skills.",
  },
  {
    year: "2024",
    tag: "EDUCATION",
    title: "Diploma in Computer Science",
    description: "Gained hands-on practical knowledge in software development and participated in my first hackathon, marking the beginning of my competitive tech journey.",
  },
  {
    year: "2021",
    tag: "EDUCATION",
    title: "SSC Completed",
    description: "Built a strong academic foundation and developed an early interest in technology and problem-solving.",
  },
];

const polaroids = [
  { id: 1, type: "HACKATHON", title: "Agenthon Global", image: agenthon, rotate: -12, x: "5%", y: "5%", z: 10 },
  { id: 2, type: "HACKATHON", title: "Aminoverse Hackathon", image: aminoverse, rotate: 8, x: "25%", y: "15%", z: 20 },
  { id: 3, type: "HACKATHON", title: "BuildWith India", image: buildwithindia, rotate: -5, x: "45%", y: "2%", z: 15 },
  { id: 4, type: "COMPETITION", title: "Code Sprint", image: codesprint, rotate: 15, x: "65%", y: "8%", z: 25 },
  { id: 5, type: "CERTIFICATE", title: "IBM GenAI", image: genai, rotate: -8, x: "10%", y: "35%", z: 30 },
  { id: 6, type: "HACKATHON", title: "Knowvation 2.0", image: knowation , rotate: 2, x: "32%", y: "42%", z: 22 },
  { id: 7, type: "PROGRAM", title: "Google Startups", image: googleStartup, rotate: -15, x: "60%", y: "35%", z: 35 },
  { id: 8, type: "CERTIFICATE", title: "Google Python", image: pythonCert, rotate: 10, x: "15%", y: "65%", z: 40 },
  { id: 9, type: "ACHIEVEMENT", title: "Top 20 Contributor", image: top20, rotate: -4, x: "40%", y: "70%", z: 45 },
  { id: 10, type: "INTERNSHIP", title: "Viswam AI", image: viswam, rotate: 12, x: "60%", y: "62%", z: 50 },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Journey"
      title={
        <>
          Experience & <br />
          <span className="text-[#F97316]">achievements.</span>
        </>
      }
      
    >
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        
        {/* Left Side: Compact Timeline */}
        <div className="flex flex-col gap-3">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative flex flex-col gap-4 rounded-xl border border-[#262626] bg-[#111111] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/50 hover:shadow-[0_8px_30px_-10px_rgba(249,115,22,0.15)] sm:flex-row sm:items-start sm:gap-6 sm:p-5"
            >
              {/* Left Side: Year & Tag */}
              <div className="flex w-24 shrink-0 flex-col gap-1">
                <span className="font-mono text-xs font-semibold text-[#A3A3A3]">{h.year}</span>
                <span className="text-[9px] font-bold tracking-wider text-[#F97316] uppercase">
                  {h.tag}
                </span>
              </div>
              
              {/* Right Side: Content */}
              <div className="flex-1 border-t border-[#262626] pt-3 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <h4 className="font-display text-base font-bold text-white transition-colors duration-300 group-hover:text-[#F97316]">
                  {h.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-[#737373]">
                  {h.description}
                </p>
              </div>

              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-transparent to-[#F97316]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Right Side: Scattered Polaroids */}
        <div className="relative hidden h-[800px] w-full lg:block">
          {polaroids.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ 
                scale: 1.15, 
                rotate: 0, 
                zIndex: 100,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              style={{ 
                left: cert.x, 
                top: cert.y, 
                rotate: `${cert.rotate}deg`,
                zIndex: cert.z
              }}
              className="absolute w-52 cursor-pointer rounded bg-[#F4F4F0] p-3 pb-10 shadow-2xl transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              {/* Polaroid Image Container with Protection Overlay */}
              <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden bg-[#1A1A1A] border border-[#262626]">
                <img 
                  src={cert.image} 
                  alt="Certificate" 
                  className="h-full w-full object-cover pointer-events-none"
                  draggable={false}
                />
                {/* Invisible overlay prevents direct right clicks and dragging on the image */}
                <div className="absolute inset-0 z-10 w-full h-full bg-transparent" />
              </div>
              {/* Polaroid Bottom Text */}
              <div className="absolute bottom-3 left-0 w-full px-4 text-center text-[11px] font-bold text-[#404040]">
                {cert.title}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </Section>
  );
}
