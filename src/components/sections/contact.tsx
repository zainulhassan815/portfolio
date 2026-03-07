import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";
import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Contact: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Bold section heading */}
        <div className="mb-8">
          <div className="bg-foreground mb-3 h-1" />
          <Typography variant="h2" className="mb-0 pb-0 font-serif text-4xl font-black uppercase tracking-[0.15em] md:text-5xl">
            Get in Touch
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Main content */}
          <div>
            <Typography variant="lead" className="mb-3 font-serif text-2xl font-bold italic">
              Have a project in mind or just want to say hi?
            </Typography>
            <Typography className="mb-6 max-w-xl leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, or just a good tech
              conversation. Feel free to reach out and I&apos;ll get back to you as soon as possible!
            </Typography>
            <SocialLinks />
          </div>

          {/* Bold sidebar widget */}
          <div className="border-foreground border-2 bg-secondary/40 p-6">
            <div className="bg-primary text-primary-foreground mb-4 py-2 text-center">
              <span className="font-serif text-xl font-black uppercase tracking-[0.2em]">
                Say Hello
              </span>
            </div>
            <Typography variant="muted" className="mb-4 text-center text-sm">
              Let&apos;s build something great together.
            </Typography>
            <Button asChild size="lg" className="w-full border-2 border-foreground text-xs font-black uppercase tracking-[0.2em]">
              <a href="mailto:zainulhassan815@gmail.com">
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
