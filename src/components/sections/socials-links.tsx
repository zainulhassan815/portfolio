import { Mail } from "lucide-react";
import { GitHub, Instagram, LinkedIn, Twitter, Youtube } from "@/assets/icons";
import { Button } from "@/components/ui/button";
import { ComponentProps, FC } from "react";
import { cn } from "@/lib/utils";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/zainulhassan815",
    icon: GitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/zainulhassan815",
    icon: LinkedIn,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@DreamersLab",
    icon: Youtube,
  },
  {
    name: "X",
    href: "https://x.com/zainulhassan815",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dreamerslab815",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:zainulhassan815@gmail.com",
    icon: Mail,
  },
];

export const SocialLinks: FC<ComponentProps<"div">> = ({ className, ...props }) => {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)} {...props}>
      {socials.map((social) => (
        <Button key={social.name} asChild variant="secondary" className="size-12 p-2">
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit my ${social.name} profile`}
          >
            <social.icon className="size-6" />
          </a>
        </Button>
      ))}
    </div>
  );
};
