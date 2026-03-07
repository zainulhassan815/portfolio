import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { ComponentProps, FC } from "react";
import { Highlighter } from "@/components/magicui/highlighter";
import { SocialLinks } from "@/components/sections/socials-links";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("flex w-full flex-col justify-center", className)} {...props}>
      {/* Newspaper date line */}
      <div className="mb-6 flex items-center gap-4">
        <div className="newspaper-rule-thick flex-1" />
        <span className="text-muted-foreground whitespace-nowrap text-xs tracking-[0.2em] uppercase">
          Software Engineer &middot; {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </span>
        <div className="newspaper-rule-thick flex-1" />
      </div>

      <div className="flex flex-col items-start gap-8 md:flex-row md:gap-12">
        {/* Profile image with retro treatment */}
        <Image
          priority
          src="/profile.jpg"
          alt="Zain Ul Hassan"
          width={196}
          height={196}
          className="retro-img border-foreground/20 border-2 object-cover object-center shadow-md"
        />

        <div className="flex flex-1 flex-col">
          <div className="mb-4 flex flex-col justify-center gap-4">
            <Typography variant="h1" noMargin>
              Hi, I&apos;m{" "}
              <span className="font-serif text-primary italic">Zain Ul Hassan</span>
            </Typography>
            <Typography variant="p" noMargin className="text-xl leading-relaxed lg:text-3xl">
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
          </div>

          <div className="mb-8 flex gap-4">
            <Button asChild size="lg" className="text-xs font-semibold uppercase tracking-widest">
              <a href="#contact">Hire ME</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-xs font-semibold uppercase tracking-widest">
              <a href="#projects">View My Work</a>
            </Button>
          </div>

          <SocialLinks />
        </div>
      </div>

    </section>
  );
};
