import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, LayoutDashboard, CreditCard, Bot, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const quickNav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/debts", label: "Debts", icon: CreditCard },
  { to: "/ai-coach", label: "AI Coach", icon: Bot },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function MobileDrawer({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.25 }}
            className="fixed left-0 top-0 z-50 h-screen w-72 border-r border-border bg-surface] p-4 md:hidden"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-display text-lg font-bold">DebtZero</span>
              <button onClick={() => setOpen(false)} className="text-text-muted">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-1">
              {quickNav.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium",
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-text-muted"
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}