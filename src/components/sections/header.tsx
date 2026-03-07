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
    <header className={cn("h-(--header-height) w-full", className)} {...props}>
      {/* Masthead */}
      <div className="flex flex-col items-center py-4">
        <a href="#" className="flex flex-col items-center">
          <span className="font-serif text-3xl font-black tracking-[0.25em] uppercase md:text-5xl">
            Dreamers Lab
          </span>
          <div className="mt-1 flex items-center gap-3">
            <span className="bg-foreground h-px flex-1 min-w-8" />
            <span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase md:text-xs">
              Software Engineering
            </span>
            <span className="bg-foreground h-px flex-1 min-w-8" />
          </div>
        </a>
      </div>

      {/* Nav bar */}
      <div className="border-foreground/15 flex items-center justify-between border-y py-2">
        <nav className="hidden items-center gap-0 md:flex">
          {navItems.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && <span className="text-border mx-1">|</span>}
              <Button asChild variant="ghost" className="h-auto px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </Button>
            </div>
          ))}
        </nav>

        <span className="text-muted-foreground hidden text-xs tracking-wider md:block">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </span>

        {/* Mobile Menu */}
        <div className="flex w-full items-center justify-between md:hidden">
          <span className="text-muted-foreground text-xs tracking-wider">
            {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="Toggle menu">
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
