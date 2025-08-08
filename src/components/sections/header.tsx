import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";

export const Header: FC<ComponentProps<"header">> = ({ className, ...props }) => {
  return (
    <header className={cn("h-(--header-height) w-full py-6", className)} {...props}>
      <div className="mx-auto flex items-center justify-between">
        <Typography variant="h3">Dreamers Lab</Typography>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#projects">
            <Typography variant="p">Projects</Typography>
          </a>
          <a href="#testimonials">
            <Typography variant="p">Testimonials</Typography>
          </a>
          <a href="#blog">
            <Typography variant="p">Blog</Typography>
          </a>
          <a href="#contact">
            <Typography variant="p">Contact</Typography>
          </a>
        </nav>
      </div>
    </header>
  );
};
