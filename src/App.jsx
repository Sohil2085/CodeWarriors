import React from "react";
import "./App.css";
import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ProblemPage from './pages/ProblemPage/ProblemPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoaderWrapper from "./components/loader/LoaderWrapper";


export default function App() {
  return (
    <BrowserRouter>
    <LoaderWrapper>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/problem" element={<ProblemPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </LoaderWrapper>
    </BrowserRouter>
  );
}
