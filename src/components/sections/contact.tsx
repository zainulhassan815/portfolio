import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";
import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Contact: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Typography variant="h2" className="mb-0 shrink-0 pb-0 font-serif uppercase tracking-widest">
            Get in Touch
          </Typography>
          <div className="newspaper-rule-thick mt-1 flex-1" />
        </div>
        <Typography variant="lead" className="mb-4">
          Have a project in mind or just want to say hi?
        </Typography>
        <Typography className="mb-4 max-w-xl">
          I&apos;m always open to new opportunities, collaborations, or just a good tech
          conversation. Feel free to reach out and I&apos;ll get back to you as soon as possible!
        </Typography>
        <Button asChild size="lg" className="mb-8 text-xs font-semibold uppercase tracking-widest">
          <a href="mailto:zainulhassan815@gmail.com">
            Say Hello
          </a>
        </Button>
        <SocialLinks />
      </div>
    </section>
  );
};
