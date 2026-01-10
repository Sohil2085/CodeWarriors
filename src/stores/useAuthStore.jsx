import { create } from "zustand";
import { toast } from "react-toastify";
import API from "../utils/api";

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

  logout: async () => {
    try {
      await API.post("/auth/logout");
      localStorage.removeItem("token");
      set({ user: null, isAuthenticated: false });
      toast.success("Logged out!");
    } catch (error) {
      console.log("Logout failed", error);
      toast.error("Logout failed");
    }
  },

  checkAuth: async () => {
    try {
      const res = await API.get("/auth/check");
      set({ user: res.data.user, isAuthenticated: true });
    } catch (error) {
      console.log("Check auth failed:", error);
      set({ user: null, isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
