import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { formatCurrency, cn } from "@/lib/utils";

export function KPICard({
  label,
  value,
  icon: Icon,
  trend,
  trendLabel,
  accentVar = "var(--color-accent)",
  delay = 0,
}: {
  label: string;
  value: number;
  icon: LucideIcon;
  trend?: "up" | "down";
  trendLabel?: string;
  accentVar?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card>
        <div className="flex items-start justify-between">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text-muted)]">
            {label}
          </p>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: `₱{accentVar}22` }}
          >
            <Icon className="h-4 w-4" style={{ color: accentVar }} />
          </div>
        </div>
        <p className="font-mono-num mt-3 text-2xl font-semibold">{formatCurrency(value)}</p>
        {trendLabel && (
          <p
            className={cn(
              "mt-1 text-xs font-medium",
              trend === "up" ? "text-[var(--color-positive)]" : "text-[var(--color-danger)]"
            )}
          >
            {trendLabel}
          </p>
        )}
      </Card>
    </motion.div>
  );
}