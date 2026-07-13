import { create } from "zustand";

interface SettingsStore {
  theme: "dark" | "light";
  currency: string;
  defaultStrategy: "snowball" | "avalanche" | "custom";
  setTheme: (theme: "dark" | "light") => void;
  setCurrency: (currency: string) => void;
  setDefaultStrategy: (strategy: "snowball" | "avalanche" | "custom") => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  theme: "dark",
  currency: "USD",
  defaultStrategy: "avalanche",
  setTheme: (theme) => set({ theme }),
  setCurrency: (currency) => set({ currency }),
  setDefaultStrategy: (defaultStrategy) => set({ defaultStrategy }),
}));