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
      <Image
        priority
        src="/profile.jpg"
        alt="Zain Ul Hassan"
        width={196}
        height={196}
        className="mb-8 rounded-4xl object-cover object-center shadow-xl"
      />

      <div className="mb-4 flex flex-col justify-center gap-4">
        <Typography variant="h1" noMargin>
          Hi, I’m <span className="text-primary whitespace-nowrap">Zain Ul Hassan</span>
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
        <Button asChild size="lg">
          <a href="#contact">Hire ME</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#projects">View My Work</a>
        </Button>
      </div>

      <SocialLinks />
    </section>
  );
};
