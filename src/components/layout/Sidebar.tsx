import { NavLink } from "react-router-dom";
import {
  LayoutDashboard, User, CreditCard, Wallet, Receipt, Route,
  FlaskConical, Bot, CalendarDays, PiggyBank, FileBarChart,
  Trophy, Settings, Ban,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/profile", label: "Financial Profile", icon: User },
  { to: "/debts", label: "Debt Management", icon: CreditCard },
  { to: "/income", label: "Income", icon: Wallet },
  { to: "/expenses", label: "Expenses", icon: Receipt },
  { to: "/planner", label: "Debt Planner", icon: Route },
  { to: "/simulator", label: "Debt Simulator", icon: FlaskConical },
  { to: "/ai-coach", label: "AI Coach", icon: Bot },
  { to: "/calendar", label: "Payment Calendar", icon: CalendarDays },
  { to: "/emergency-fund", label: "Emergency Fund", icon: PiggyBank },
  { to: "/reports", label: "Reports", icon: FileBarChart },
  { to: "/achievements", label: "Achievements", icon: Trophy },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-64 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] md:flex">
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-accent)]">
          <Ban className="h-4 w-4 text-white" />
        </div>
        <span className="font-display text-lg font-bold tracking-tight">DebtZero</span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-text)]"
              )
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-[var(--color-border)] p-4 text-xs text-[var(--color-text-faint)]">
        DebtZero Personal · v2.0
      </div>
    </aside>
  );
}