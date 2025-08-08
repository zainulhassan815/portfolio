import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";
import { Button } from "../ui/button";

export const Header: FC<ComponentProps<"header">> = ({ className, ...props }) => {
  return (
    <header className={cn("h-(--header-height) w-full py-6", className)} {...props}>
      <div className="mx-auto flex items-center justify-between">
        <Typography variant="h3">Dreamers Lab</Typography>
        <nav className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <a href="#projects">
              <Typography variant="p">Projects</Typography>
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#testimonials">
              <Typography variant="p">Testimonials</Typography>
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#blog">
              <Typography variant="p">Blog</Typography>
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#contact">
              <Typography variant="p">Contact</Typography>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
