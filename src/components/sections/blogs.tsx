import { Typography } from "@/components/ui/typography";
import { getBlogs } from "@/lib/blogs";
import { BlogCard } from "./blog-card";
import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Blogs: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  const blogs = getBlogs();
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Typography variant="h2" className="mb-0 shrink-0 pb-0 font-serif uppercase tracking-widest">
            Blog Posts
          </Typography>
          <div className="newspaper-rule-thick mt-1 flex-1" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} {...blog} />
          ))}
        </div>
        <Typography className="mt-6">
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
