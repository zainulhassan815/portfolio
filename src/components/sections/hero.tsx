import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { ComponentProps, FC } from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import { SocialLinks } from "@/components/sections/socials-links";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("flex w-full flex-col", className)} {...props}>
      {/* Newspaper-style 3-column hero */}
      <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left column - Profile */}
        <div className="border-foreground/20 flex flex-col items-center gap-4 md:items-start md:border-r md:pr-8">
          <Image
            priority
            src="/profile.jpg"
            alt="Zain Ul Hassan"
            width={280}
            height={280}
            className="retro-img border-foreground border-2 object-cover object-center"
          />
        </div>

        {/* Center column - Main headline */}
        <div className="flex flex-col justify-center">
          <span className="text-muted-foreground mb-2 text-xs font-bold uppercase tracking-[0.3em]">
            Hi, I&apos;m
          </span>
          <h1 className="font-serif text-primary mb-3 text-5xl font-black italic leading-tight md:text-6xl lg:text-7xl">
            Zain Ul Hassan
          </h1>
          <div className="bg-primary mb-4 h-1 w-24" />
          <Typography variant="p" noMargin className="text-lg leading-relaxed lg:text-xl">
            From brainstorming to bug fixing, I bring ideas to life across{" "}
            <Highlighter
              padding={2}
              iterations={4}
              action="underline"
              color="var(--primary)"
              multiline
            >
              <span className="whitespace-nowrap font-bold">Mobile, Web, and AI</span>
            </Highlighter>
          </Typography>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="text-xs font-bold uppercase tracking-[0.2em]">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-foreground border-2 text-xs font-bold uppercase tracking-[0.2em]">
              <a href="#projects">View My Work</a>
            </Button>
            <SocialLinks className="mt-2 md:mt-0" />
          </div>
        </div>

        {/* Right column - Quick info (visible on lg) */}
        <div className="border-foreground/20 hidden flex-col gap-5 border-l pl-8 lg:flex">
          <div className="border-foreground/20 border-b pb-4">
            <span className="bg-primary text-primary-foreground mb-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
              Specialties
            </span>
            <ul className="marker:text-primary list-disc pl-4">
              <li className="font-serif text-lg font-bold">Mobile Apps</li>
              <li className="font-serif text-lg font-bold">Web Development</li>
              <li className="font-serif text-lg font-bold">AI Solutions</li>
            </ul>
          </div>
          <div className="border-foreground/20 border-b pb-4">
            <span className="bg-foreground text-background mb-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
              Based in
            </span>
            <Typography variant="large" className="font-serif font-bold">Pakistan</Typography>
          </div>
          <div>
            <span className="bg-foreground text-background mb-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em]">
              Available for
            </span>
            <Typography variant="large" className="font-serif font-bold">Freelance &amp; Full-time</Typography>
          </div>
        </div>
      </div>

    </section>
  );
};
