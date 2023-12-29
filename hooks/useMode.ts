import { create } from "zustand";

export type useModeType = {
  isDark: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
  modeCheckerDefault: (mode: string) => void;
};

const useMode = create((set) => ({
  isDark: false,
  setDarkMode: () => {
    localStorage.setItem("movary:mode", JSON.stringify({ mode: "dark" }));
    return set({
      isDark: true,
    });
  },
  setLightMode: () => {
    localStorage.removeItem("movary:mode");
    return set({ isDark: false });
  },
  modeCheckerDefault: (mode: string) =>
    set({
      isDark: mode && mode == "dark" ? true : false,
    }),
}));

export default useMode;
