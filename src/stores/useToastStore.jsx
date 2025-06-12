import { create } from "zustand";


const toastStore = create((set) => ({
    message : null,
    setMessage : (msg) => set({message : msg}),
    clearMessage : () => set({message : null})
}))

export default toastStore;