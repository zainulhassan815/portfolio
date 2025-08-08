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

export const BlogCard = ({ title, description, tags, url }: Blog) => {
  return (
    <Card className="gap-4 transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>
          <Typography variant="h3">{title}</Typography>
        </CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge variant="outline" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read Full Article
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
