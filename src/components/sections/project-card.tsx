import { FC } from "react";
import { Project } from "@/lib/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GitHub } from "@/assets/icons";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ project, featured }) => {
  if (featured) {
    return (
      <article className="border-foreground/20 grid grid-cols-1 gap-8 border-b-2 pb-10 md:grid-cols-2">
        <div className="relative h-64 w-full md:h-80">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="retro-img border-foreground/20 border object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <Badge className="mb-3 w-fit text-[10px] font-bold uppercase tracking-[0.2em]">Featured</Badge>
          <h3 className="font-serif mb-2 text-3xl font-black md:text-4xl">
            {project.name}
          </h3>
          <div className="bg-primary mb-3 h-0.5 w-16" />
          <Typography className="mb-4 leading-relaxed">{project.description}</Typography>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-foreground/40 border text-[10px] font-bold uppercase tracking-wider">
                {tech}
              </Badge>
            ))}
          </div>
          <Button asChild variant="ghost" className="group w-fit gap-2 px-0 text-xs font-bold uppercase tracking-[0.2em]">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <GitHub className="size-4" />
              View on GitHub
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </article>
    );
  }

  return (
    <article className={cn("border-foreground/20 flex flex-col gap-3 border-t-2 pt-5")}>
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 320px) 100vw"
          className="retro-img border-foreground/10 border object-cover"
        />
      </div>
      <h3 className="font-serif text-xl font-bold">{project.name}</h3>
      <Typography className="text-muted-foreground line-clamp-3 text-sm">{project.description}</Typography>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="border-foreground/40 border text-[10px] font-bold uppercase tracking-wider">
            {tech}
          </Badge>
        ))}
      </div>
      <Button asChild variant="ghost" className="group w-fit gap-2 px-0 text-xs font-bold uppercase tracking-[0.2em]">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <GitHub className="size-3.5" />
          GitHub
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </article>
  );
};

export default ProjectCard;
