import { motion } from "framer-motion";
import { Section } from "./Section";
import planetImg from "@/assets/orange_planet.png";

const categories = [
  {
    name: "Languages",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    ],
  },
  {
    name: "Frontend",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    skills: [
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
    ],
  },
  {
    name: "Mobile",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    skills: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    ]
  },
  {
    name: "Backend",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
    ],
  },
  {
    name: "Databases",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
      { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" },
    ],
  },
  {
    name: "AI / ML",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    skills: [
      { name: "LLMs & NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" },
      { name: "Vector Search", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "RAG", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    ],
  },
  {
    name: "Cloud & DevOps",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    skills: [
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    ],
  },
  {
    name: "Soft Skills",
    bgIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    skills: [
      { name: "Problem Solving" },
      { name: "Analytical Thinking" },
      { name: "Team Collaboration" },
      { name: "Communication" },
      { name: "Time Management" },
      { name: "Adaptability" },
    ]
  }
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={
        <>
          Skills that fuel <span className="text-[#F97316]">my passion</span>.
        </>
      }
      subtitle="The exact technologies and tools I use to bring ideas to life."
    >
      {/* Decorative Planet - Right (Full Bleed) */}
      <div className="absolute top-1/4 left-1/2 -ml-[50vw] w-screen h-full pointer-events-none -z-10 flex justify-end items-start">
        <div className="w-[800px] h-[800px] opacity-30 mix-blend-screen translate-x-[40%]">
          <img src={planetImg} alt="Decorative planet" className="h-full w-full object-contain blur-[2px]" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.05 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/50 hover:shadow-[0_12px_40px_-12px_rgba(249,115,22,0.15)]"
          >
            {/* Background Watermark Icon */}
            {cat.bgIcon && (
              <div className="pointer-events-none absolute -bottom-6 -right-6 z-0 opacity-[0.03] grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-[0.08] group-hover:grayscale-0">
                <img src={cat.bgIcon} alt="" className="size-48 object-contain" />
              </div>
            )}

            <div className="relative z-10 mb-6 flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">{cat.name}</h3>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/5 px-3 py-2 transition-colors hover:bg-white/10"
                >
                  {skill.icon && (
                    <div className="flex size-5 items-center justify-center rounded bg-white/10 p-0.5">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="size-full object-contain filter" 
                      />
                    </div>
                  )}
                  <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
