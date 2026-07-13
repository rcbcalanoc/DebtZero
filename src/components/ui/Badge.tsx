import { cn } from "@/lib/utils";

type BadgeVariant = "positive" | "warning" | "danger" | "accent" | "neutral";

const variantStyles: Record<BadgeVariant, string> = {
  positive: "bg-[var(--color-positive-soft)] text-[var(--color-positive)]",
  warning: "bg-[var(--color-warning-soft)] text-[var(--color-warning)]",
  danger: "bg-[var(--color-danger-soft)] text-[var(--color-danger)]",
  accent: "bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
  neutral: "bg-[var(--color-surface-2)] text-[var(--color-text-muted)]",
};

export function Badge({ variant = "neutral", children }: { variant?: BadgeVariant; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        variantStyles[variant]
      )}
    >
      {children}
    </span>
  );
}