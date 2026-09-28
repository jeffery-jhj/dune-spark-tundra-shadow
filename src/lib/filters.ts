import { create } from "zustand";
import type { FilterState } from "@/data/study";

type Store = FilterState & {
  setCamp: (camp: FilterState["camp"]) => void;
  setOrigin: (origin: FilterState["origin"]) => void;
  setPowder: (powder: FilterState["powder"]) => void;
  reset: () => void;
};

const initial: FilterState = { camp: "all", origin: "all", powder: "all" };

export const useFilters = create<Store>((set) => ({
  ...initial,
  setCamp: (camp) => set({ camp }),
  setOrigin: (origin) => set({ origin }),
  setPowder: (powder) => set({ powder }),
  reset: () => set(initial),
}));
