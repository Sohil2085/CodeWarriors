import { User } from "lucide-react";
import { use } from "react";
import { toast } from "react-toastify";
import { create } from "zustand";

const DUMMY_USER = {
    username : 'Sohil',
    email : 'sohil@gmail.com',
    password : 'sohil2085'
}

const useAuthStore = create((set) => ({

    user : null,
    isAuthanticated : false,

    login: (username, email, password) => {
    console.log('Login by:', username, email);
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      set({
        user: { name: username, email: email },
        isAuthenticated: true,
      });
      toast.success("Logged in successfully!")  
      console.log('Login successful!');
    } else {
      toast.warning("Login failed!")
      console.log('Login failed!');
    }
    },

    signup: (username, email,password) => {
    console.log('Signup by:', username, email);
    set({
      user: { name: username, email: email },
      isAuthenticated: true,
      password : password
    });
    
    toast.success("Signed up successfully!")
    console.log('Signup successful!');
    },

    logout : () => {
        console.log('Logging Out....')
        set({
            user : null,
            isAuthanticated : false,
        })
        toast.success("Logged out successfully!")
        console.log('Logout Successfull!')
    }


}))

export default useAuthStore