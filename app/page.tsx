import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { FeaturedWork, Services, Projects, Testimonials, Writing, Footer } from "@/components/site/sections";
import { Contact } from "@/components/site/contact";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Cursor } from "@/components/site/cursor";
import { ScrollChrome, ActiveNav, Reveal } from "@/components/site/chrome";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Cursor />
      <ScrollChrome />
      <ActiveNav />
      <Reveal />
      <ThemeToggle />

      <Header />
      <Hero />

      <main className="wrap" id="main">
        <FeaturedWork />
        <Services />
        <Projects />
        <Testimonials />
        <Writing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
