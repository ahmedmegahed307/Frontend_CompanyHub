import { create } from "zustand";
import { User } from "../../models/User";

interface AuthStore {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  setUser: (user: User) => void;
  updateUser: (updatedUser: User) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
  updateUser: (updatedUser) => set((state) => ({ user: updatedUser })),
}));

export default useAuthStore;
