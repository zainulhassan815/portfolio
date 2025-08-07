import { FC } from 'react';
import { Project } from '@/lib/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GitHub from '@/assets/icons/github';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src="/project-placeholder.png" alt={project.name} layout="fill" objectFit="cover" />
      </div>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-secondary text-secondary-foreground mr-2 mb-2 rounded-full px-2.5 py-0.5 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <GitHub />
            View on GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
