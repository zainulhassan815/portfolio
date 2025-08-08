import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";
import { FC, ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Contact: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        <Typography variant="h2" className="mb-4">
          ✉️ Let’s Get in Touch
        </Typography>
        <Typography variant="lead" className="mb-4">
          Have a project in mind or just want to say hi?
        </Typography>
        <Typography className="mb-4 max-w-xl">
          I&apos;m always open to new opportunities, collaborations, or just a good tech
          conversation. Feel free to reach out and I&apos;ll get back to you as soon as possible!
        </Typography>
        <Button asChild size="lg">
          <a href="mailto:zainulhassan815@gmail.com" className="mb-8">
            Say Hello
          </a>
        </Button>
        <SocialLinks />
      </div>
    </section>
  );
};
