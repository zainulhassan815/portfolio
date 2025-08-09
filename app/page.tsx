import { Blogs } from "@/components/sections/blogs";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Tools } from "@/components/sections/tools";

export default function Home() {
  return (
    <main className="mt-(--header-height) flex min-h-screen flex-col items-center justify-center space-y-8">
      <Hero id="hero" className="scroll-mt-(--header-height)" />
      <Tools id="tools" className="scroll-mt-(--header-height)" />
      <Projects id="projects" className="scroll-mt-(--header-height)" />
      <Testimonials id="testimonials" className="scroll-mt-(--header-height)" />
      <Blogs id="blog" className="scroll-mt-(--header-height)" />
      <Contact id="contact" className="scroll-mt-(--header-height)" />
    </main>
  );
}
