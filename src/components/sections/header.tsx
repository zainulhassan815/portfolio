"use client";

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

const navItems = ["Projects", "Testimonials", "Blog", "Contact"];

export const Header: FC<ComponentProps<"header">> = ({ className, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("h-(--header-height) w-full py-6", className)} {...props}>
      <div className="mx-auto flex items-center justify-between">
        {/* Newspaper Masthead */}
        <a href="#" className="flex flex-col items-start">
          <span className="font-serif text-2xl font-black tracking-[0.2em] uppercase md:text-3xl">
            Dreamers Lab
          </span>
          <span className="text-muted-foreground text-xs tracking-[0.15em] uppercase">
            Est. 2020 &middot; Software Engineering
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Button key={item} asChild variant="ghost" className="px-4 text-xs font-semibold uppercase tracking-widest">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </Button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" aria-label="Toggle menu">
                {isOpen ? <X /> : <Menu />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={8} align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item} asChild>
                  <a href={`#${item.toLowerCase()}`} className="text-xs font-semibold uppercase tracking-widest">
                    {item}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
