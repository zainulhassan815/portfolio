import { FC, ComponentProps } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Testimonials: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Section heading */}
        <div className="border-foreground/15 mb-8 border-b pb-2">
          <Typography variant="h2" className="mb-0 pb-0 font-serif uppercase tracking-[0.15em]">
            Testimonials
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="border-foreground/10 border-t pt-4">
              <Typography variant="p" className="mb-4 italic leading-relaxed">
                &ldquo;{testimonial.review}&rdquo;
              </Typography>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={36}
                  height={36}
                  className="retro-img rounded-full"
                />
                <div>
                  <Typography variant="small" className="font-serif font-semibold">{testimonial.name}</Typography>
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
