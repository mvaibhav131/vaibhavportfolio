// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';

// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      theme: "white",
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "portfolio-theme", // localStorage key
    }
  )
);

export default useThemeStore;
