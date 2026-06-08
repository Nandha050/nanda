import { motion } from "framer-motion";
import { GraduationCap,Star} from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Institute of Aeronautical Engineering (IARE)",
    period: "Aug 2024 - Jun 2027",
    grade: "9.01",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Annamacharya institute of Technology and Sciences",
    period: "Aug 2021 - Jun 2024",
    grade: "8.5",
  },
  {
    degree: "Secondary Education",
    institution: "Mjptbcwries sangareddy",
    period: "2011 - 2021",
    grade: "10.0",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-[#0A0A0A]">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Header */}
        <div className="mb-16 flex items-center justify-center gap-4">
          <GraduationCap className="size-10 text-[#dd5e0ada]" strokeWidth={2.5} />
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Education
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#F97316]/50 hover:shadow-[0_12px_40px_-12px_rgba(249,115,22,0.15)]"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-[#F97316] transition-colors duration-300">
                  {edu.degree}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-[#A3A3A3]">
                  {edu.institution} | {edu.period}
                </p>
              </div>
              
              <div className="mt-8 flex items-center justify-end gap-2 text-[#e07e0e]">
                <Star className="size-4" strokeWidth={3} />
                <span className="font-mono text-sm font-bold">{edu.grade}</span>
              </div>
              
              {/* Subtle inner hover glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F97316]/0 via-transparent to-[#F97316]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
