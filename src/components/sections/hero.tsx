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
      <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr]">
        {/* Left column - Profile */}
        <div className="border-foreground/10 flex flex-col items-center gap-4 md:items-start md:border-r md:pr-8">
          <Image
            priority
            src="/profile.jpg"
            alt="Zain Ul Hassan"
            width={280}
            height={280}
            className="retro-img border-foreground/15 border object-cover object-center"
          />
        </div>

        {/* Center column - Main headline */}
        <div className="flex flex-col justify-center">
          <Typography variant="p" noMargin className="text-muted-foreground mb-1 text-sm uppercase tracking-widest">
            Hi, I&apos;m
          </Typography>
          <Typography variant="h1" noMargin className="font-serif text-primary mb-4 italic">
            Zain Ul Hassan
          </Typography>
          <Typography variant="p" noMargin className="text-xl leading-relaxed lg:text-2xl">
            From brainstorming to bug fixing, I bring ideas to life across{" "}
            <Highlighter
              padding={2}
              iterations={4}
              action="underline"
              color="var(--primary)"
              multiline
            >
              <span className="whitespace-nowrap">Mobile, Web, and AI</span>
            </Highlighter>
          </Typography>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="text-xs font-semibold uppercase tracking-widest">
              <a href="#contact">Hire Me</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-xs font-semibold uppercase tracking-widest">
              <a href="#projects">View My Work</a>
            </Button>
            <SocialLinks className="mt-2 md:mt-0" />
          </div>
        </div>

        {/* Right column - Quick info (visible on lg) */}
        <div className="border-foreground/10 hidden flex-col gap-4 border-l pl-8 lg:flex">
          <div className="border-foreground/10 border-b pb-4">
            <Typography variant="small" className="text-muted-foreground mb-1 uppercase tracking-widest">
              Specialties
            </Typography>
            <ul className="list-disc pl-4">
              <li className="font-serif text-lg font-semibold">Mobile Apps</li>
              <li className="font-serif text-lg font-semibold">Web Development</li>
              <li className="font-serif text-lg font-semibold">AI Solutions</li>
            </ul>
          </div>
          <div>
            <Typography variant="small" className="text-muted-foreground mb-1 uppercase tracking-widest">
              Based in
            </Typography>
            <Typography variant="large" className="font-serif">Pakistan</Typography>
          </div>
          <div>
            <Typography variant="small" className="text-muted-foreground mb-1 uppercase tracking-widest">
              Available for
            </Typography>
            <Typography variant="large" className="font-serif">Freelance &amp; Full-time</Typography>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="border-foreground/15 border-t" />
    </section>
  );
};
