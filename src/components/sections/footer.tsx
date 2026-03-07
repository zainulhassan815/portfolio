import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";

export const Footer = () => {
  return (
    <footer className="border-foreground/15 border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-1 md:items-start">
          <span className="font-serif text-sm font-semibold tracking-[0.1em] uppercase">
            Dreamers Lab
          </span>
          <Typography variant="muted" className="text-xs">
            &copy; {new Date().getFullYear()} &middot; Built with care by Zain Ul Hassan
          </Typography>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};
