import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Payment, Debt } from "@/types";

export function RecentPayments({ payments, debts }: { payments: Payment[]; debts: Debt[] }) {
  const recent = [...payments].sort((a, b) => +new Date(b.date) - +new Date(a.date)).slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payments</CardTitle>
      </CardHeader>
      <div className="space-y-3">
        {recent.map((p) => {
          const debt = debts.find((d) => d.id === p.debtId);
          return (
            <div key={p.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{debt?.name ?? "Unknown Debt"}</p>
                <p className="text-xs text-[var(--color-text-faint)]">{formatDate(p.date)}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono-num text-sm">{formatCurrency(p.amount)}</span>
                <Badge variant="positive">Paid</Badge>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}