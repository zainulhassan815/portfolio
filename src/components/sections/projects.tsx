import { FC } from 'react';

import { projects } from '@/lib/projects';
import ProjectCard from '@/components/sections/project-card';

const Projects: FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">My Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
