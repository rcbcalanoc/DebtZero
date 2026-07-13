import { create } from "zustand";
import type { FinancialProfile } from "@/types";

interface ProfileStore extends FinancialProfile {
  updateProfile: (updates: Partial<FinancialProfile>) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  monthlyIncome: 6200,
  payFrequency: "monthly",
  savingsGoal: 10000,
  emergencyFundAmount: 3200,
  emergencyFundTarget: 12000,
  preferredStrategy: "avalanche",
  updateProfile: (updates) => set((s) => ({ ...s, ...updates })),
}));