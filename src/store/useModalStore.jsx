import { create } from "zustand";

export const useModalStore = create((set) => ({
    isOpenModal: false,

    content: <></>,

    showContent: (component) => set({ content: component, isOpenModal: true }),

    closeModal: () => set({ content: <></>, isOpenModal: false }),
}));
