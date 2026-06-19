// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  theme: string;
  setTheme: (newTheme: string) => void;
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "white",
      setTheme: (newTheme: string) => set({ theme: newTheme }),
    }),
    {
      name: "portfolio-theme", // localStorage key
    }
  )
);

export default useThemeStore;
