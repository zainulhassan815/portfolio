import { ComponentProps, FC } from "react";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/sections/project-card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Projects: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  const [featured, ...rest] = projects;

  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Bold section heading */}
        <div className="mb-8">
          <div className="bg-foreground mb-3 h-1" />
          <Typography variant="h2" className="mb-0 pb-0 font-serif text-2xl font-black uppercase tracking-[0.1em] sm:text-4xl sm:tracking-[0.15em] md:text-5xl">
            Projects
          </Typography>
        </div>

        {/* Featured project - full width */}
        <div className="mb-10">
          <ProjectCard project={featured} featured />
        </div>

        {/* Rest of projects in grid */}
        <div className="border-foreground/20 grid grid-cols-1 border-t-2 border-l-2 md:grid-cols-2 lg:grid-cols-3 [&>article]:border-foreground/20 [&>article]:border-b-2 [&>article]:border-r-2 [&>article]:p-6">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
