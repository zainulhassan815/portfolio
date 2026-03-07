import { ComponentProps, FC } from "react";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/sections/project-card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Projects: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Typography variant="h2" className="mb-0 shrink-0 pb-0 font-serif uppercase tracking-widest">
            Projects
          </Typography>
          <div className="newspaper-rule-thick mt-1 flex-1" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
