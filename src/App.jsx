import React, { Children } from "react";

import { BrowserRouter, Route, Routes, Navigate, createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
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
import LearnPage from "./pages/Learn/LearnPage";
import InfoPage from "./pages/Info/infoPage";
import Intro from "./pages/Info/intro";
import Loops from "./pages/Info/loops";
import Dashboard from "./pages/Dashboard/Dashboard";
import VerifyMagicLinkPage from "./pages/VerifyMagicLinkPage/VerifyMagicLinkPage";



import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Loader from "./components/loader/Loader";
import { useEffect } from "react";
import useAuthStore from "./stores/useAuthStore";
import CursorFollower from "./components/Cursor/CursorFollower";

export default function App() {
  const { checkAuth, authChecked, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!authChecked) {
      checkAuth();
    }
  }, [authChecked, checkAuth]);



  return (
    <>
      {/* <CursorFollower /> */}
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
        <Routes>
          <Route path="/" element={<LoaderWrapper><HomePage /></LoaderWrapper>} />
          <Route path="/login" element={<LoaderWrapper><LoginPage /></LoaderWrapper>} />
          <Route path="/signup" element={<LoaderWrapper><SignupPage /></LoaderWrapper>} />
          <Route path="/verify" element={<LoaderWrapper><VerifyMagicLinkPage /></LoaderWrapper>} />
          <Route path="/about" element={<LoaderWrapper><AboutPage /></LoaderWrapper>} />
          <Route path="/profile" element={<LoaderWrapper><ProfilePage /></LoaderWrapper>} />
          <Route path="/problem" element={<LoaderWrapper><ProblemPage /></LoaderWrapper>} />
          <Route path="/problem/:id" element={<LoaderWrapper><ProblemDetail /></LoaderWrapper>} />
          <Route path="/leaderboard" element={<LoaderWrapper><LeaderBoard /></LoaderWrapper>} />
          <Route path="/dscussionforum" element={<LoaderWrapper><DiscussionForum /></LoaderWrapper>} />
          <Route path="/documentation" element={<LoaderWrapper><Documentation /></LoaderWrapper>} />
          <Route path="/learn" element={<LoaderWrapper><LearnPage /></LoaderWrapper>} />
          <Route path="/dashboard" element={<LoaderWrapper><Dashboard /></LoaderWrapper>} />


          <Route path="/info" element={<InfoPage />}>
            <Route path="intro" element={<Intro />} />
            <Route path="loops" element={<Loops />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
