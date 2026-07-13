import { create } from "zustand";
import type { Debt, Payment } from "@/types";

interface DebtStore {
  debts: Debt[];
  payments: Payment[];
  addDebt: (debt: Debt) => void;
  updateDebt: (id: string, updates: Partial<Debt>) => void;
  deleteDebt: (id: string) => void;
  archiveDebt: (id: string) => void;
  recordPayment: (payment: Payment) => void;
  markPaid: (id: string) => void;
}

const sampleDebts: Debt[] = [
  { id: "d1", name: "Chase Sapphire", type: "credit_card", lender: "Chase", balance: 4230, originalBalance: 6000, interestRate: 22.9, minimumPayment: 150, dueDate: "2026-07-22", status: "active" },
  { id: "d2", name: "Student Loan", type: "student_loan", lender: "Navient", balance: 18500, originalBalance: 25000, interestRate: 5.4, minimumPayment: 280, dueDate: "2026-07-28", status: "active" },
  { id: "d3", name: "Toyota Camry", type: "auto_loan", lender: "Toyota Financial", balance: 9800, originalBalance: 22000, interestRate: 6.9, minimumPayment: 410, dueDate: "2026-08-02", status: "active" },
  { id: "d4", name: "Medical Bill", type: "medical", lender: "City Hospital", balance: 620, originalBalance: 1200, interestRate: 0, minimumPayment: 100, dueDate: "2026-07-18", status: "active" },
];

const samplePayments: Payment[] = [
  { id: "p1", debtId: "d1", amount: 150, date: "2026-06-22", status: "paid" },
  { id: "p2", debtId: "d2", amount: 280, date: "2026-06-28", status: "paid" },
  { id: "p3", debtId: "d3", amount: 410, date: "2026-07-02", status: "paid" },
];

export const useDebtStore = create<DebtStore>((set) => ({
  debts: sampleDebts,
  payments: samplePayments,
  addDebt: (debt) => set((s) => ({ debts: [...s.debts, debt] })),
  updateDebt: (id, updates) =>
    set((s) => ({ debts: s.debts.map((d) => (d.id === id ? { ...d, ...updates } : d)) })),
  deleteDebt: (id) => set((s) => ({ debts: s.debts.filter((d) => d.id !== id) })),
  archiveDebt: (id) =>
    set((s) => ({ debts: s.debts.map((d) => (d.id === id ? { ...d, status: "archived" } : d)) })),
  recordPayment: (payment) =>
    set((s) => ({
      payments: [...s.payments, payment],
      debts: s.debts.map((d) =>
        d.id === payment.debtId ? { ...d, balance: Math.max(0, d.balance - payment.amount) } : d
      ),
    })),
  markPaid: (id) =>
    set((s) => ({ debts: s.debts.map((d) => (d.id === id ? { ...d, balance: 0, status: "paid" } : d)) })),
}));