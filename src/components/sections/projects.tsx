import { FC } from "react";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/sections/project-card";
import Typography from "@/components/ui/typography";

const Projects: FC = () => {
  return (
    <section className="py-12">
      <div className="container-sm mx-auto">
        <Typography variant="h2" className="mb-4">
          My Projects
        </Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
