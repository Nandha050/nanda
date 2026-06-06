import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10">
      <div className="glass flex flex-col items-center justify-between gap-4 rounded-2xl p-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-gradient-to-br from-[oklch(0.72_0.2_290)] to-[oklch(0.7_0.2_250)] shadow-[0_0_12px_oklch(0.72_0.2_290)]" />
          <span className="font-display text-sm font-semibold">Nanda Kishor</span>
          <span className="text-xs text-muted-foreground">· crafted with care · 2026</span>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com/Nandha050" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github className="size-4" /></a>
          <a href="https://www.linkedin.com/in/nanda-kishor-b3ab0833b/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="size-4" /></a>
          <a href="mailto:nandakishor0718@gmail.com" aria-label="Email" className="hover:text-foreground"><Mail className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}
