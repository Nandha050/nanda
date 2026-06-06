import { motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={<>Let's build something <span className="text-gradient">remarkable</span>.</>}
      subtitle="Open to internships, full-time roles, and meaningful collaborations. Drop a message — I reply fast."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Channels */}
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "nandakishor0718@gmail.com", href: "mailto:nandakishor0718@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "/in/nanda-kishor", href: "https://www.linkedin.com/in/nanda-kishor-b3ab0833b/" },
            { icon: Github, label: "GitHub", value: "@Nandha050", href: "https://github.com/Nandha050" },
            { icon: ArrowUpRight, label: "LeetCode", value: "@nandakishor", href: "https://leetcode.com/" },
            { icon: ArrowUpRight, label: "Kaggle", value: "@nandakishor", href: "https://www.kaggle.com/" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass group flex items-center justify-between rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:bg-white/[0.07]"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.72_0.2_290)]/30 to-[oklch(0.7_0.2_250)]/30 text-[oklch(0.85_0.15_290)]">
                  <c.icon className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium">{c.value}</div>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const name = f.get("name");
            const msg = f.get("message");
            window.location.href = `mailto:nandakishor0718@gmail.com?subject=Portfolio inquiry from ${name}&body=${encodeURIComponent(String(msg ?? ""))}`;
            setSent(true);
          }}
          className="glass relative overflow-hidden rounded-3xl p-6 sm:p-8"
        >
          <div className="absolute -right-16 -top-16 size-60 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.2_290_/_0.3),transparent_70%)] blur-2xl" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" label="Email" placeholder="you@company.com" type="email" />
          </div>
          <Field name="company" label="Company / Role" placeholder="Where are you reaching from?" className="mt-4" />
          <div className="mt-4">
            <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about the role, project, or idea…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[oklch(0.72_0.2_290_/_0.7)] focus:ring-2 focus:ring-[oklch(0.72_0.2_290_/_0.25)]"
            />
          </div>
          <button
            type="submit"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_oklch(0.72_0.2_290_/_0.7)] transition-transform hover:scale-[1.02]"
          >
            <Send className="size-4" />
            {sent ? "Opening your email client…" : "Send message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ name, label, placeholder, type = "text", className = "" }: { name: string; label: string; placeholder: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-[oklch(0.72_0.2_290_/_0.7)] focus:ring-2 focus:ring-[oklch(0.72_0.2_290_/_0.25)]"
      />
    </div>
  );
}
