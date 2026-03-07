import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Blog } from "@/lib/blogs";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";
import { ArrowRight } from "lucide-react";

export const BlogCard = ({ title, description, tags, url }: Blog) => {
  return (
    <Card className="border-t-foreground/30 gap-4 border-t-2 transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h3" className="font-serif">{title}</Typography>
        </CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge variant="outline" key={tag} className="text-[10px] uppercase tracking-wider">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="group gap-2 px-0 text-xs font-semibold uppercase tracking-widest">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
