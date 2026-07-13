import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Link } from "react-router-dom";

export function AIInsightCard({ insight }: { insight: string }) {
  return (
    <Card className="col-span-full border-[var(--color-accent-soft)] bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-surface-2)]">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)]">
          <Sparkles className="h-4 w-4 text-[var(--color-accent)]" />
        </div>
        <div className="flex-1">
          <p className="font-display text-sm font-semibold text-[var(--color-text)]">AI Insight</p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{insight}</p>
          <Link
            to="/ai-coach"
            className="mt-2 inline-block text-xs font-medium text-[var(--color-accent)] hover:underline"
          >
            Ask AI Coach →
          </Link>
        </div>
      </div>
    </Card>
  );
}