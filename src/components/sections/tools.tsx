import { ComponentProps, FC } from "react";
import Image from "next/image";

import { toolCategories } from "@/lib/tools";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";

export const Tools: FC<ComponentProps<"section">> = ({ className, ...props }) => {
  return (
    <section className={cn("w-full py-8", className)} {...props}>
      <div className="container-sm mx-auto">
        {/* Section heading */}
        <div className="border-foreground/15 mb-8 border-b pb-2">
          <Typography variant="h2" className="mb-0 pb-0 font-serif uppercase tracking-[0.15em]">
            Tools &amp; Technologies
          </Typography>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {toolCategories.map((group, i) => (
            <div
              key={group.category}
              className={cn(
                "mb-4 break-inside-avoid border-2 border-foreground/80 p-4",
                i % 3 === 0 && "bg-secondary/30",
              )}
            >
              {/* Category headline — newspaper ad style */}
              <div className="mb-3 border-b border-foreground/20 pb-2 text-center">
                <Typography variant="small" className="font-serif text-base font-bold uppercase tracking-[0.2em]">
                  {group.category}
                </Typography>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {group.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-1.5">
                    <div className="border-foreground/10 flex size-12 items-center justify-center border bg-white p-1.5">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="max-w-16 text-center text-[10px] leading-tight">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="border-foreground/15 mt-8 border-t" />
    </section>
  );
};
