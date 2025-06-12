import React from "react";

import { BrowserRouter,Route,Routes,Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import SignupPage from './pages/SignupPage/SignupPage'
import ProblemPage from './pages/ProblemPage/ProblemPage'
import AboutPage from './pages/AboutPage/AboutPage'
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoaderWrapper from "./components/loader/LoaderWrapper";
import ProblemDetail from "./pages/ProblemPage/ProblemDetail";
import LeaderBoard from "./pages/FooterPage/LeaderBoard";
import DiscussionForum from "./pages/FooterPage/DiscussionForum";
import Documentation from "./pages/FooterPage/Documentation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import CursorFollower from "./components/cursor/CursorFollower";


export default function App() {

  

  return (
    <>
      <CursorFollower />
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
       />
    <BrowserRouter>
    <LoaderWrapper>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
        <Route path="/problem" element={<ProblemPage />}/>
        <Route path="/problem/:id" element={<ProblemDetail />} />
        <Route path="/leaderboard" element={<LeaderBoard />}/>
        <Route path="/dscussionforum" element={<DiscussionForum />}/>
        <Route path="/documentation" element={<Documentation />}/>
      </Routes>
    </LoaderWrapper>
    </BrowserRouter>
  </>
  );
}
