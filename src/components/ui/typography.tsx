import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      list: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
    noMargin: {
      true: "m-0",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type Element = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "ul" | "code";

const elementMapping: Record<
  NonNullable<VariantProps<typeof typographyVariants>["variant"]>,
  Element
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  blockquote: "blockquote",
  list: "ul",
  inlineCode: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
};

export type TypographyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants>;

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, noMargin, ...props }, ref) => {
    const Comp = elementMapping[variant ?? "p"];
    return (
      <Comp
        className={cn(typographyVariants({ variant, noMargin, className }))}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        {...props}
      />
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
