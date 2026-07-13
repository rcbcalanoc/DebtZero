import { create } from "zustand";
import type { Expense } from "@/types";

interface ExpenseStore {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (id: string, updates: Partial<Expense>) => void;
  deleteExpense: (id: string) => void;
}

export const useExpenseStore = create<ExpenseStore>((set) => ({
  expenses: [
    { id: "e1", name: "Groceries", category: "Food", amount: 480, date: "2026-07-05" },
    { id: "e2", name: "Gas", category: "Transportation", amount: 160, date: "2026-07-06" },
    { id: "e3", name: "Electric Bill", category: "Utilities", amount: 110, date: "2026-07-03" },
    { id: "e4", name: "Streaming Services", category: "Entertainment", amount: 45, date: "2026-07-01" },
  ],
  addExpense: (expense) => set((s) => ({ expenses: [...s.expenses, expense] })),
  updateExpense: (id, updates) =>
    set((s) => ({ expenses: s.expenses.map((e) => (e.id === id ? { ...e, ...updates } : e)) })),
  deleteExpense: (id) => set((s) => ({ expenses: s.expenses.filter((e) => e.id !== id) })),
}));