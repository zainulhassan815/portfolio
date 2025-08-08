import { Blogs } from "@/components/sections/blogs";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Tools } from "@/components/sections/tools";

import { Typography } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="mt-(--header-height) flex min-h-screen flex-col items-center justify-center space-y-8">
      <div className="relative text-center">
        <Typography variant="h1" className="mb-4">
          Welcome to my Portfolio!
        </Typography>
        <Typography variant="p" className="max-w-2xl">
          This is a simple page created with Next.js and Tailwind CSS. Explore my projects below.
        </Typography>
      </div>
      <Tools />
      <Projects id="projects" className="scroll-mt-(--header-height)" />
      <Testimonials id="testimonials" className="scroll-mt-(--header-height)" />
      <Blogs id="blog" className="scroll-mt-(--header-height)" />
      <Contact id="contact" className="scroll-mt-(--header-height)" />
    </main>
  );
}
