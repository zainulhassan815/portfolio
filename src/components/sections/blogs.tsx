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
        {/* Bold section heading */}
        <div className="mb-8">
          <div className="bg-foreground mb-3 h-1" />
          <Typography variant="h2" className="mb-0 pb-0 font-serif text-2xl font-black uppercase tracking-[0.1em] sm:text-4xl sm:tracking-[0.15em] md:text-5xl">
            Blog Posts
          </Typography>
        </div>

        {/* Featured blog + sidebar list */}
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <BlogCard {...featured} featured />

          <div className="border-foreground/20 flex flex-col gap-4 lg:border-l-2 lg:pl-8">
            <span className="bg-foreground text-background inline-block w-fit px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.2em]">
              More Articles
            </span>
            {rest.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </div>

        <Typography className="mt-4 font-bold">
          Read more on{" "}
          <a
            href="https://zainulhassan815.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-2 underline-offset-4"
          >
            Medium
          </a>
        </Typography>
      </div>
    </section>
  );
};
