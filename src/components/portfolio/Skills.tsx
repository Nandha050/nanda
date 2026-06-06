import { motion } from "framer-motion";
import { Section } from "./Section";

const categories = [
  { name: "Languages", skills: [["Python", 92], ["JavaScript", 90], ["TypeScript", 85], ["Java", 78], ["C++", 75], ["SQL", 82]] },
  { name: "Frontend", skills: [["React", 92], ["Next.js", 86], ["Tailwind CSS", 95], ["Framer Motion", 80], ["Shadcn UI", 88]] },
  { name: "Backend", skills: [["Node.js", 88], ["Express", 86], ["FastAPI", 84], ["REST", 90], ["GraphQL", 70]] },
  { name: "AI / ML", skills: [["PyTorch", 82], ["TensorFlow", 75], ["LLMs / RAG", 88], ["NLP", 85], ["scikit-learn", 80]] },
  { name: "Databases", skills: [["PostgreSQL", 85], ["MongoDB", 88], ["Redis", 72], ["Vector DBs", 78]] },
  { name: "Cloud & DevOps", skills: [["AWS", 78], ["Docker", 80], ["GitHub Actions", 82], ["Vercel", 90]] },
  { name: "Tools", skills: [["Git", 92], ["Figma", 80], ["Postman", 88], ["Linux", 82]] },
] as const;

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={<>Skills, <span className="text-gradient">end to end</span>.</>}
      subtitle="The stack I use to design, build, and ship intelligent, production-ready products."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.05 }}
            className="glass rounded-2xl p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-base font-semibold">{cat.name}</h3>
              <span className="font-mono text-[10px] text-muted-foreground">{cat.skills.length} skills</span>
            </div>
            <div className="space-y-3">
              {cat.skills.map(([name, val]) => (
                <div key={name as string}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-foreground/90">{name}</span>
                    <span className="font-mono text-muted-foreground">{val}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${val}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)] shadow-[0_0_12px_oklch(0.72_0.2_290_/_0.6)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
