import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { label: "Email", icon: Mail, href: "mailto:nandakishor0718@gmail.com" },
  { label: "GitHub", icon: Github, href: "https://github.com/Nandha050" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/nanda-kishor-b3ab0833b/" },
  { label: "LeetCode", iconText: "LeetCode", href: "https://leetcode.com/u/9HWcyJXe6l/" },
  { label: "HackerRank", iconText: "HackerRank", href: "https://www.hackerrank.com/profile/nandhu_4562" },
  { label: "GeeksforGeeks", iconText: "GFG", href: "https://www.geeksforgeeks.org/profile/nandakishor7" },
  { label: "Credly", iconText: "Credly", href: "https://www.credly.com/users/nanda-kishor.0caa1279" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10">
          
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-[2rem] border border-[#262626] bg-[#0F0F0F] p-10 overflow-hidden transition-all duration-300 hover:border-[#F97316]/30 hover:shadow-[0_12px_40px_-12px_rgba(249,115,22,0.15)]"
          >
            <div className="absolute -top-32 -left-32 size-80 rounded-full bg-[#F97316] opacity-30 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 size-80 rounded-full bg-[#ff2600] opacity-30 blur-3xl transition-opacity duration-300 group-hover:opacity-50" />
            
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">— Let's talk</div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-white">
                Got a project <br /> in mind?
                <br />
                <span className="text-[#F97316]">Let's build it.</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-md">
                Open to internships, full-time roles and collaborations at top product & AI teams.
              </p>

              {/* Social Icons Row */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group/icon flex size-14 items-center justify-center rounded-full border border-[#262626] bg-[#161616] text-[#A3A3A3] transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316]/50 hover:bg-[#F97316]/10 hover:text-[#F97316] hover:shadow-[0_8px_20px_-8px_rgba(249,115,22,0.5)]"
                      title={s.label}
                    >
                      {Icon ? (
                        <Icon className="size-5" />
                      ) : (
                        <span style={{ fontFamily: 'cursive' }} className="text-[10px] tracking-tight">{s.iconText}</span>
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="group relative rounded-[2rem] border border-[#262626] bg-[#0F0F0F] p-8 md:p-10 flex flex-col transition-all duration-300 hover:border-[#F97316]/30 hover:shadow-[0_12px_40px_-12px_rgba(249,115,22,0.15)]"
          >
            
            <div className="text-sm text-muted-foreground mb-6">Send a message</div>
            
            <div className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Your name" className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F97316]/50 focus:ring-1 focus:ring-[#F97316]/50 transition-colors" />
                <input required type="email" placeholder="Email" className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F97316]/50 focus:ring-1 focus:ring-[#F97316]/50 transition-colors" />
              </div>
              <input placeholder="Company (optional)" className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F97316]/50 focus:ring-1 focus:ring-[#F97316]/50 transition-colors" />
              <textarea required rows={5} placeholder="Tell me about your project..." className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#737373] focus:outline-none focus:border-[#F97316]/50 focus:ring-1 focus:ring-[#F97316]/50 transition-colors resize-none" />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#EA580C] text-white font-bold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-70 shadow-[0_8px_30px_-10px_rgba(249,115,22,0.5)]"
            >
              {sent ? "Thanks — I'll be in touch ✓" : "Send message"}
              {!sent && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              )}
            </button>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Avg. response time · under 24 hours
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
