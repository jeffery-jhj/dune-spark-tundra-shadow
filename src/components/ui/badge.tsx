import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-matcha-wash text-matcha-deep",
        matcha: "bg-matcha text-cream",
        outline: "text-muted shadow-[0_0_0_1px_var(--color-line)]",
        ink: "bg-ink text-cream",
        cream: "bg-cream text-muted shadow-[0_0_0_1px_var(--color-line)]",
        warn: "bg-matcha-mist text-warn",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
