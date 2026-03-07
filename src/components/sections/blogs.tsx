import { Typography } from "@/components/ui/typography";
import { getBlogs } from "@/lib/blogs";
import { BlogCard } from "./blog-card";
import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Blogs: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  const blogs = getBlogs();
  const [featured, ...rest] = blogs;

  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Section heading */}
        <div className="border-foreground/15 mb-8 border-b pb-2">
          <Typography variant="h2" className="mb-0 pb-0 font-serif uppercase tracking-[0.15em]">
            Blog Posts
          </Typography>
        </div>

        {/* Featured blog + sidebar list */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <BlogCard {...featured} featured />

          <div className="border-foreground/10 flex flex-col gap-4 lg:border-l lg:pl-8">
            <Typography variant="small" className="text-muted-foreground uppercase tracking-widest">
              More Articles
            </Typography>
            {rest.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </div>

        <Typography className="mt-4">
          Read more on{" "}
          <a
            href="https://zainulhassan815.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold underline underline-offset-4"
          >
            Medium
          </a>
        </Typography>
      </div>
    </section>
  );
};
