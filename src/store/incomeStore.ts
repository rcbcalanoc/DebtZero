import { create } from "zustand";
import type { Income } from "@/types";

interface IncomeStore {
  incomes: Income[];
  addIncome: (income: Income) => void;
  updateIncome: (id: string, updates: Partial<Income>) => void;
  deleteIncome: (id: string) => void;
}

export const useIncomeStore = create<IncomeStore>((set) => ({
  incomes: [
    { id: "i1", sourceName: "Full-time Salary", amount: 5400, frequency: "monthly" },
    { id: "i2", sourceName: "Freelance Design", amount: 800, frequency: "monthly" },
  ],
  addIncome: (income) => set((s) => ({ incomes: [...s.incomes, income] })),
  updateIncome: (id, updates) =>
    set((s) => ({ incomes: s.incomes.map((i) => (i.id === id ? { ...i, ...updates } : i)) })),
  deleteIncome: (id) => set((s) => ({ incomes: s.incomes.filter((i) => i.id !== id) })),
}));