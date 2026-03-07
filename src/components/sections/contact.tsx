import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";
import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Contact: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Section heading */}
        <div className="border-foreground/15 mb-8 border-b pb-2">
          <Typography variant="h2" className="mb-0 pb-0 font-serif uppercase tracking-[0.15em]">
            Get in Touch
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Main content */}
          <div>
            <Typography variant="lead" className="mb-3">
              Have a project in mind or just want to say hi?
            </Typography>
            <Typography className="mb-6 max-w-xl">
              I&apos;m always open to new opportunities, collaborations, or just a good tech
              conversation. Feel free to reach out and I&apos;ll get back to you as soon as possible!
            </Typography>
            <SocialLinks />
          </div>

          {/* Subscribe-style sidebar widget */}
          <div className="bg-secondary/50 border-foreground/10 border p-6">
            <Typography variant="h3" className="font-serif mb-2 text-center uppercase tracking-widest">
              Say Hello
            </Typography>
            <Typography variant="muted" className="mb-4 text-center text-sm">
              Let&apos;s build something great together.
            </Typography>
            <Button asChild size="lg" className="w-full text-xs font-semibold uppercase tracking-widest">
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
