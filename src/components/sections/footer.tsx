import { Typography } from "@/components/ui/typography";
import { SocialLinks } from "@/components/sections/socials-links";

export const Footer = () => {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-2 md:items-start">
          <Typography variant="small">&copy; {new Date().getFullYear()} Dreamers Lab</Typography>
          <Typography variant="muted">Built with ❤️ by Zain Ul Hassan</Typography>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};
