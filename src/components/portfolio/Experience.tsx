import { motion } from "framer-motion";
import { Section } from "./Section";
import { Trophy, Award, Briefcase, GitBranch, GraduationCap, Sparkles } from "lucide-react";

const items = [
  { icon: Trophy, type: "Hackathon", title: "National Hackathon Finalist", date: "2025", desc: "Top team out of 500+ — built an AI credit assistant in 36 hours." },
  { icon: Award, type: "Certification", title: "Deep Learning Specialization", date: "2024", desc: "Completed Coursera's DL specialization with hands-on projects." },
  { icon: Briefcase, type: "Internship", title: "Full-Stack Developer Intern", date: "2025", desc: "Shipped production features used by thousands of users." },
  { icon: GitBranch, type: "Open Source", title: "Contributor", date: "Ongoing", desc: "PRs merged into ML & web tooling repos on GitHub." },
  { icon: Sparkles, type: "Achievement", title: "Built 6+ AI Products", date: "2024–25", desc: "From bio-AI to credit AI — shipped end-to-end systems solo & with teams." },
];

const education = [
  { icon: GraduationCap, title: "B.Tech, Computer Science Engineering", org: "On track · CGPA 8.5+", date: "2022 – 2026", desc: "Coursework: DSA, OS, DBMS, AI, ML, Computer Networks, Web Technologies." },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title={<>A track record of <span className="text-gradient">shipping</span>.</>}
      subtitle="Hackathons, internships, open source — and the academic foundation behind it all."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-display text-lg font-semibold">Highlights</h3>
          <div className="relative space-y-4 pl-6">
            <div className="absolute left-2 top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[oklch(0.72_0.2_290)]/70 via-white/10 to-transparent" />
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass relative rounded-2xl p-4"
              >
                <span className="absolute -left-[1.4rem] top-5 inline-flex size-3 items-center justify-center rounded-full bg-[oklch(0.72_0.2_290)] shadow-[0_0_14px_oklch(0.72_0.2_290)]" />
                <div className="flex items-start gap-3">
                  <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[oklch(0.85_0.15_290)]">
                    <it.icon className="size-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[oklch(0.85_0.15_290)]">{it.type}</span>
                      <span className="font-mono text-[10px] text-muted-foreground">· {it.date}</span>
                    </div>
                    <div className="mt-0.5 font-display text-base font-semibold">{it.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-lg font-semibold">Education</h3>
          {education.map((e) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_290)]/30 to-[oklch(0.7_0.2_250)]/30 text-[oklch(0.85_0.15_290)]">
                <e.icon className="size-5" />
              </div>
              <div className="font-display text-lg font-semibold">{e.title}</div>
              <div className="mt-1 text-sm text-[oklch(0.85_0.15_290)]">{e.org}</div>
              <div className="font-mono text-xs text-muted-foreground">{e.date}</div>
              <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}

          {/* GitHub stats */}
          <div className="mt-6">
            <h3 className="mb-3 font-display text-lg font-semibold">GitHub at a glance</h3>
            <div className="glass overflow-hidden rounded-2xl p-4">
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  ["120+", "Repos"],
                  ["1.2k+", "Contributions"],
                  ["40+", "Stars"],
                ].map(([k, v]) => (
                  <div key={v} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-gradient font-display text-2xl font-semibold">{k}</div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
                <img
                  src="https://ghchart.rshah.org/8b5cf6/Nandha050"
                  alt="GitHub contribution graph"
                  loading="lazy"
                  className="w-full bg-[#0c0c12] p-3"
                />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Nandha050&layout=compact&theme=tokyonight&hide_border=true&bg_color=0c0c12"
                  alt="Most used languages"
                  loading="lazy"
                  className="w-full rounded-xl border border-white/10"
                />
                <img
                  src="https://streak-stats.demolab.com?user=Nandha050&theme=tokyonight&hide_border=true&background=0c0c12"
                  alt="GitHub streak stats"
                  loading="lazy"
                  className="w-full rounded-xl border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
