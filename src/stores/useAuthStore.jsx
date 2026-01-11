import { create } from "zustand";
import { toast } from "react-toastify";
import API from "../utils/api";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  authChecked: false, // 🔥 ADD THIS

  login: (userData) => {
    set({
      user: userData,
      isAuthenticated: true,
      authChecked: true,
    });
    toast.success("Login successful!");
  },

  logout: async () => {
    try {
      await API.post("/auth/logout");
      set({ user: null, isAuthenticated: false, authChecked: true });
      toast.success("Logged out!");
    } catch (error) {
      console.log("Logout failed", error);
      toast.error("Logout failed");
    }
  },

  checkAuth: async () => {
    try {
      const res = await API.get("/auth/check");
      set({
        user: res.data.user,
        isAuthenticated: true,
        authChecked: true,
      });
    } catch (error) {
      // 🔥 IMPORTANT CHANGE
      // Do NOT force logout on 401
      set({
        user: null,
        isAuthenticated: false,
        authChecked: true,
      });
    }
  },
}));

export default useAuthStore;
