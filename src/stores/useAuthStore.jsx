import { User } from "lucide-react";
import { use } from "react";
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
      console.log('Login successful!');
    } else {
      alert('Invalid credentials! Only dummy user can login.');
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
    console.log('Signup successful!');
    },

    logout : () => {
        console.log('Logging Out....')
        set({
            user : null,
            isAuthanticated : false,
        })
        console.log('Logout Successfull!')
    }


}))

export default useAuthStore