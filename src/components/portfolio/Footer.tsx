import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/5 bg-[#0B0B0F] pt-12">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="size-2 rounded-full bg-gradient-to-br from-[#F97316] to-[#FB923C] shadow-[0_0_12px_#F97316]" />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold text-white">Nanda Kishor</span>
              <span className="text-xs text-muted-foreground">Crafted with care © 2026</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/Nandha050"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <Github className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nanda-kishor-b3ab0833b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href="mailto:nandakishor0718@gmail.com"
              aria-label="Email"
              className="transition-colors hover:text-white"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Massive Text */}
       <div className="mt-16 select-none text-center">
        <div className="text-[clamp(4rem,18vw,16rem)] font-bold leading-none tracking-[-0.06em] bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent">
          Nanda.
        </div>
      </div>
    </footer>
  );
}
