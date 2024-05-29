import { create } from "zustand";

export const useLoaderStore = create ((set) => ({
    isLoading: false,
    changeLoading: (loading) => set({ isLoading: loading })
}));