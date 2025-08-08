import { FC } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export const Testimonials: FC = () => {
  return (
    <section className="py-12">
      <div className="container-sm mx-auto">
        <Typography variant="h2" className="mb-4">
          ⭐ What My Clients Say
        </Typography>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="gap-4 py-4">
              <CardContent>
                <Typography variant="p">{testimonial.review}</Typography>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="ms-4">
                    <Typography variant="h4">{testimonial.name}</Typography>
                    <Typography variant="small">{testimonial.country}</Typography>
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
