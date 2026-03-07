import { ComponentProps, FC } from "react";
import Image from "next/image";

import { toolCategories } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export const Tools: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-12", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Bold section heading */}
        <div className="mb-8">
          <div className="bg-foreground mb-3 h-1" />
          <Typography variant="h2" className="mb-0 pb-0 font-serif text-2xl font-black uppercase tracking-[0.1em] sm:text-4xl sm:tracking-[0.15em] md:text-5xl">
            Tools &amp; Technologies
          </Typography>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {toolCategories.map((group, i) => (
            <div
              key={group.category}
              className={cn(
                "mb-5 break-inside-avoid border-2 border-foreground p-4",
                i % 3 === 0 && "bg-secondary/40",
                i % 3 === 1 && "bg-accent/20",
              )}
            >
              {/* Category headline */}
              <div className="bg-foreground text-background mb-3 px-2 py-1 text-center">
                <span className="text-xs font-black uppercase tracking-[0.25em]">
                  {group.category}
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {group.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-1.5">
                    <div className="border-foreground/30 flex size-14 items-center justify-center border-2 bg-white p-2">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <span className="max-w-16 text-center text-[10px] font-bold leading-tight">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
