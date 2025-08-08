"use client";

import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ComponentProps, FC, useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header: FC<ComponentProps<"header">> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("h-(--header-height) w-full py-6", className)} {...props}>
      <div className="mx-auto flex items-center justify-between">
        <a href="#">
          <Typography variant="h3">Dreamers Lab</Typography>
        </a>
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
        <div className="md:hidden">
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                {isOpen ? <X /> : <Menu />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button asChild variant="ghost">
                  <a href="#projects">
                    <Typography variant="p">Projects</Typography>
                  </a>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild variant="ghost">
                  <a href="#testimonials">
                    <Typography variant="p">Testimonials</Typography>
                  </a>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild variant="ghost">
                  <a href="#blog">
                    <Typography variant="p">Blog</Typography>
                  </a>
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button asChild variant="ghost">
                  <a href="#contact">
                    <Typography variant="p">Contact</Typography>
                  </a>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
