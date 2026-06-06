import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/portfolio/FloatingNav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Loader } from "@/components/portfolio/Loader";

const TITLE = "Nanda Kishor — AI & Full Stack Developer";
const DESC = "Portfolio of Nanda Kishor — CSE student building AI-powered, full-stack products with the polish of a top-tier product team.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B0B0F" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-[#0B0B0F] text-foreground">
      <Loader />
      <CursorGlow />
      <FloatingNav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
