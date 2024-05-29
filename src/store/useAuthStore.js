import { create } from "zustand";

export const useAuthStore = create((set) => ({
    auth: null,
    changeAuth: (a) => set({ auth: a }),
}));