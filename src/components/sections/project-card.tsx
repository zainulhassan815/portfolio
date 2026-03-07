import { FC } from "react";
import { Project } from "@/lib/projects";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="border-t-foreground/30 flex flex-col gap-2 overflow-hidden border-t-2 pt-0 pb-6">
      <div className="relative h-60 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 320px) 100vw"
          className="retro-img object-cover"
        />
      </div>
      <CardHeader>
        <Typography variant="h3" className="font-serif">{project.name}</Typography>
      </CardHeader>
      <CardContent className="flex-grow">
        <Typography className="line-clamp-5">{project.description}</Typography>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px] uppercase tracking-wider">
              <Typography variant="muted">{tech}</Typography>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="text-xs font-semibold uppercase tracking-widest">
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
