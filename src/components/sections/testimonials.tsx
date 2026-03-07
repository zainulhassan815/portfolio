import { FC, ComponentProps } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Testimonials: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Bold section heading */}
        <div className="mb-8">
          <div className="bg-foreground mb-3 h-1" />
          <Typography variant="h2" className="mb-0 pb-0 font-serif text-4xl font-black uppercase tracking-[0.15em] md:text-5xl">
            Testimonials
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="border-foreground/20 border-l-primary border-l-4 border-t-2 pl-4 pt-4">
              <span className="text-primary font-serif text-5xl leading-none">&ldquo;</span>
              <Typography variant="p" className="mb-4 -mt-4 italic leading-relaxed">
                {testimonial.review}
              </Typography>
              <div className="border-foreground/10 flex items-center gap-3 border-t pt-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="retro-img rounded-full border border-foreground/20"
                />
                <div>
                  <span className="font-serif text-sm font-bold">{testimonial.name}</span>
                  <Typography variant="muted" className="text-xs">{testimonial.country}</Typography>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
