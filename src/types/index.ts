export type DebtType = "credit_card" | "personal_loan" | "student_loan" | "auto_loan" | "mortgage" | "medical" | "other";
export type DebtStatus = "active" | "paid" | "archived";
export type PayFrequency = "weekly" | "biweekly" | "monthly" | "semi_monthly";
export type PayoffStrategy = "snowball" | "avalanche" | "custom";
export type ExpenseCategory = "Food" | "Transportation" | "Utilities" | "Entertainment" | "Shopping" | "Medical" | "Other";
export type PaymentStatus = "upcoming" | "paid" | "overdue";

export interface Debt {
  id: string;
  name: string;
  type: DebtType;
  lender: string;
  balance: number;
  originalBalance: number;
  interestRate: number;
  minimumPayment: number;
  dueDate: string; // ISO date
  status: DebtStatus;
  priorityOrder?: number;
}

export interface Payment {
  id: string;
  debtId: string;
  amount: number;
  date: string;
  status: PaymentStatus;
}

export interface Income {
  id: string;
  sourceName: string;
  amount: number;
  frequency: PayFrequency;
}

export interface Expense {
  id: string;
  name: string;
  category: ExpenseCategory;
  amount: number;
  date: string;
}

export interface FinancialProfile {
  monthlyIncome: number;
  payFrequency: PayFrequency;
  savingsGoal: number;
  emergencyFundAmount: number;
  emergencyFundTarget: number;
  preferredStrategy: PayoffStrategy;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  unlockedDate?: string;
}