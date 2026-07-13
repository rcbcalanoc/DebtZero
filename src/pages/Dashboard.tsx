import { Wallet, TrendingDown, PiggyBank, Landmark } from "lucide-react";
import { useDebtStore } from "@/store/debtStore";
import { useIncomeStore } from "@/store/incomeStore";
import { useExpenseStore } from "@/store/expenseStore";
import { useProfileStore } from "@/store/profileStore";
import { KPICard } from "@/components/dashboard/KPICard";
import { DebtForecastChart } from "@/components/dashboard/DebtForecastChart";
import { RecentPayments } from "@/components/dashboard/RecentPayments";
import { AIInsightCard } from "@/components/dashboard/AIInsightCard";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatCurrency, percentage } from "@/lib/utils";

export default function Dashboard() {
  const { debts, payments } = useDebtStore();
  const { incomes } = useIncomeStore();
  const { expenses } = useExpenseStore();
  const { emergencyFundAmount, emergencyFundTarget } = useProfileStore();

  const totalDebt = debts.filter((d) => d.status === "active").reduce((sum, d) => sum + d.balance, 0);
  const monthlyIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const monthlyExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const cashFlow = monthlyIncome - monthlyExpenses;

  const forecastData = [
    { month: "Jul", balance: totalDebt },
    { month: "Aug", balance: totalDebt * 0.91 },
    { month: "Sep", balance: totalDebt * 0.81 },
    { month: "Oct", balance: totalDebt * 0.7 },
    { month: "Nov", balance: totalDebt * 0.58 },
    { month: "Dec", balance: totalDebt * 0.44 },
    { month: "Jan", balance: totalDebt * 0.28 },
    { month: "Feb", balance: 0 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-text-muted">Your complete financial overview</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard label="Total Debt" value={totalDebt} icon={TrendingDown} accentVar="var(--color-danger)" delay={0} />
        <KPICard label="Monthly Income" value={monthlyIncome} icon={Landmark} accentVar="var(--color-positive)" delay={0.05} />
        <KPICard label="Monthly Expenses" value={monthlyExpenses} icon={Wallet} accentVar="var(--color-warning)" delay={0.1} />
        <KPICard
          label="Cash Flow"
          value={cashFlow}
          icon={PiggyBank}
          accentVar="var(--color-accent)"
          trend={cashFlow >= 0 ? "up" : "down"}
          trendLabel={cashFlow >= 0 ? "Positive this month" : "Negative this month"}
          delay={0.15}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <DebtForecastChart data={forecastData} />

        <Card>
          <CardHeader>
            <CardTitle>Emergency Fund</CardTitle>
          </CardHeader>
          <p className="font-mono-num text-2xl font-semibold">{formatCurrency(emergencyFundAmount)}</p>
          <p className="mb-3 text-xs text-text-faint">
            of {formatCurrency(emergencyFundTarget)} goal
          </p>
          <ProgressBar
            value={emergencyFundAmount}
            max={emergencyFundTarget}
            colorVar="var(--color-positive)"
          />
          <p className="mt-2 text-xs text-text-muted">
            {percentage(emergencyFundAmount, emergencyFundTarget).toFixed(0)}% funded
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RecentPayments payments={payments} debts={debts} />
        <AIInsightCard insight="Paying an extra $150/month toward your Chase Sapphire card could make you debt-free 4 months sooner and save roughly $310 in interest." />
      </div>
    </div>
  );
}