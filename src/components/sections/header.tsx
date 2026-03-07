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
      {/* Thick top rule */}
      <div className="bg-foreground h-1" />

      {/* Masthead */}
      <div className="flex flex-col items-center py-5">
        <a href="#" className="flex flex-col items-center">
          <span className="font-serif text-4xl font-black tracking-[0.3em] uppercase md:text-6xl lg:text-7xl">
            Dreamers Lab
          </span>
          <div className="mt-2 flex items-center gap-4">
            <span className="bg-primary h-0.5 w-12" />
            <span className="text-muted-foreground text-[10px] font-bold tracking-[0.3em] uppercase md:text-xs">
              Software Engineering &middot; Est. 2020
            </span>
            <span className="bg-primary h-0.5 w-12" />
          </div>
        </a>
      </div>

      {/* Bold nav bar */}
      <div className="bg-foreground text-background flex items-center justify-between px-4 py-2.5">
        <nav className="hidden items-center gap-0 md:flex">
          {navItems.map((item, i) => (
            <div key={item} className="flex items-center">
              {i > 0 && <span className="text-background/30 mx-2">&bull;</span>}
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                {item}
              </a>
            </div>
          ))}
        </nav>

        <span className="text-background/60 hidden text-xs font-semibold tracking-wider md:block">
          {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </span>

        {/* Mobile Menu */}
        <div className="flex w-full items-center justify-between md:hidden">
          <span className="text-background/60 text-xs font-semibold tracking-wider">
            {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" aria-label="Toggle menu" className="text-background hover:text-primary hover:bg-background/10">
                {isOpen ? <X /> : <Menu />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={8} align="end">
              {navItems.map((item) => (
                <DropdownMenuItem key={item} asChild>
                  <a href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest">
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
