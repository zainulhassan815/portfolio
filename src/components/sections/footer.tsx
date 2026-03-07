import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";

export const Footer = () => {
  return (
    <footer className="py-8">
      <div className="bg-foreground mb-6 h-1" />
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-1 md:items-start">
          <span className="font-serif text-lg font-black tracking-[0.15em] uppercase">
            Dreamers Lab
          </span>
          <Typography variant="muted" className="text-xs font-semibold">
            &copy; {new Date().getFullYear()} &middot; Built with care by Zain Ul Hassan
          </Typography>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};
