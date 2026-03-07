"use client";

import { FC, ComponentProps } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export const Testimonials: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Bold section heading */}
        <div className="mb-8">
          <div className="bg-foreground mb-3 h-1" />
          <Typography variant="h2" className="mb-0 pb-0 font-serif text-2xl font-black uppercase tracking-[0.1em] sm:text-4xl sm:tracking-[0.15em] md:text-5xl">
            Testimonials
          </Typography>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-background to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-background to-transparent md:w-24" />

          <Carousel opts={{ align: "center", loop: true }} className="mx-auto w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-[92%] sm:basis-[80%] md:basis-[55%] lg:basis-[45%]">
                  <article className="border-2 border-foreground bg-background px-5 py-6 text-center sm:px-6 sm:py-8 md:px-12 h-full flex flex-col justify-center">
                    <span className="text-primary font-serif text-5xl leading-none sm:text-6xl md:text-7xl">&ldquo;</span>
                    <Typography variant="p" className="font-serif -mt-3 text-sm italic leading-relaxed sm:text-base md:text-lg lg:text-xl">
                      {testimonial.review}
                    </Typography>
                    <div className="bg-primary mx-auto mt-3 mb-3 h-0.5 w-12 sm:w-16" />
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={36}
                        height={36}
                        className="retro-img rounded-full border-2 border-foreground/20 sm:size-11"
                      />
                      <div className="text-left">
                        <span className="font-serif text-xs font-black uppercase tracking-wider sm:text-sm">{testimonial.name}</span>
                        <Typography variant="muted" className="text-[10px] font-semibold sm:text-xs">{testimonial.country}</Typography>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 z-20 md:left-4" />
            <CarouselNext className="right-2 z-20 md:right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
