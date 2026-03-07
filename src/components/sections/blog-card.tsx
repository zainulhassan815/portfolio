import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/lib/blogs";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { ArrowRight } from "lucide-react";

export const BlogCard = ({ title, description, tags, url, featured }: Blog & { featured?: boolean }) => {
  if (featured) {
    return (
      <article className="border-foreground/10 border-b pb-6">
        <Typography variant="h3" className="font-serif mb-2 text-2xl">{title}</Typography>
        <Typography className="text-muted-foreground mb-3 leading-relaxed">{description}</Typography>
        <div className="mb-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge variant="outline" key={tag} className="text-[10px] uppercase tracking-wider">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild variant="ghost" className="group gap-2 px-0 text-xs font-semibold uppercase tracking-widest">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read Article
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </article>
    );
  }

  return (
    <article className="border-foreground/10 border-b pb-4">
      <Typography variant="large" className="font-serif mb-1">{title}</Typography>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {tags.slice(0, 2).map((tag) => (
          <Badge variant="outline" key={tag} className="text-[9px] uppercase tracking-wider">
            {tag}
          </Badge>
        ))}
      </div>
      <Button asChild variant="ghost" className="group h-auto gap-1.5 px-0 py-0 text-[11px] font-semibold uppercase tracking-widest">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read More
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </article>
  );
};
