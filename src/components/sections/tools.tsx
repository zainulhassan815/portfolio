import { ComponentProps, FC } from "react";
import Image from "next/image";

import { tools } from "@/lib/tools";
// import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export const Tools: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  const size = Math.ceil(tools.length / 3);
  const allTools = Array.from({ length: 3 }, (_, i) => tools.slice(i * size, (i + 1) * size));

  return (
    <section className={cn("w-full py-12", className)} {...props}>
      {/* <Typography variant="h2" className="mb-4">
        ⚙️ Tools & Technologies
      </Typography> */}
      <div className="container-sm relative mx-auto">
        {allTools.map((row, idx) => (
          <Marquee key={idx} reverse={idx % 2 !== 0} className="[--duration:75s]">
            {row.map((tool) => (
              <div key={tool.name} className="m-4 flex items-center justify-center">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={72}
                  height={72}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        ))}

        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </section>
  );
};
