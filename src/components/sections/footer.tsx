import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";

export const Footer = () => {
  return (
    <footer>
      <div className="bg-foreground h-1" />
      <div className="container mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-8">
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
