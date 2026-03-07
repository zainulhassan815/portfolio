import { ComponentProps, FC } from "react";
import Image from "next/image";

import { tools } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { Badge } from "@/components/ui/badge";

export const Tools: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  const size = Math.ceil(tools.length / 3);
  const allTools = Array.from({ length: 3 }, (_, i) => tools.slice(i * size, (i + 1) * size));

  return (
    <section className={cn("w-full py-12", className)} {...props}>
      {/* Newspaper ticker bar style */}
      <div className="border-foreground/20 mb-6 flex items-center gap-3 border-y-2 py-2">
        <Badge className="shrink-0 text-[10px] font-bold uppercase tracking-widest">
          Tech Stack
        </Badge>
        <div className="newspaper-rule flex-1" />
      </div>

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
                  className="retro-img object-contain"
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
