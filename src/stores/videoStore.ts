import { create } from "zustand";

interface VideoStore {
  duration: number;
  setDuration: (duration: number) => void;
}

export const useVideoStore = create<VideoStore>()((set) => ({
  duration: 0,
  setDuration: (duration) => set({ duration }),
}));
