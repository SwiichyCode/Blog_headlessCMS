import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "dark",
      toggleTheme: () => {
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          localStorage.setItem("dark-mode", newTheme);
          return { theme: newTheme };
        });
      },
    }),
    {
      name: "dark-mode",
      getStorage: () => localStorage,
    }
  )
);
