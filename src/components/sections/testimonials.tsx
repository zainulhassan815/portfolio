import { FC, ComponentProps } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Testimonials: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        <div className="mb-6 flex items-center gap-4">
          <Typography variant="h2" className="mb-0 shrink-0 pb-0 font-serif uppercase tracking-widest">
            Testimonials
          </Typography>
          <div className="newspaper-rule-thick mt-1 flex-1" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-t-foreground/30 gap-4 border-t-2 py-4">
              <CardContent>
                <Typography variant="blockquote" className="border-l-primary italic">
                  &ldquo;{testimonial.review}&rdquo;
                </Typography>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="retro-img rounded-full"
                  />
                  <div className="ms-4">
                    <Typography variant="large" className="font-serif">{testimonial.name}</Typography>
                    <Typography variant="small" className="text-muted-foreground">{testimonial.country}</Typography>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
