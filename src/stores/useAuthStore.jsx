import { create } from "zustand";
import { toast } from "react-toastify";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  login: (userData) => {
    set({
      user: userData,
      isAuthenticated: true,
    });
    toast.success("Login successful!");
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, isAuthenticated: false });
    toast.success("Logged out!");
  }
}));

export default useAuthStore;
