import React from 'react';
import './Navbar_Home.css';
// import { BrowserRouter,Route,Routes,useNavigate } from "react-router-dom";
// import {Button,Spinner} from 'react-bootstrap';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAuthStore from '../../stores/useAuthStore';


const Navbar_Home = () => {
    // const {logout, isAuthenticated} = useAuthStore()
    const logout = useAuthStore((state) => state.logout);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);



  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  
  // const handleSignIn = () => {
  //       setIsLoading(true);
  //       // Simulate a delay for the redirect (e.g., API call or processing)
  //       setTimeout(() => {
  //         navigate('/signin');
  //       }, 2000); // 2-second delay to show the loader
  // };


  return (
    <Navbar expand="lg" className="navbar_anm bg-dark sticky-top">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand as={Link} to={'/'} style={{ color: "#45678a" }}>
          <span style={{ color: "#ffffff" }}>&lt;</span>
          CodeWarriors/
          <span style={{ color: "#ffffff" }}>&gt;</span>
        </Navbar.Brand>


        {/* Collapsible nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/problem" style={{ color: "#ffffff" }}>Problems</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#ffffff" }}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex gap-4">
        {/* Sign in always on right */}
        {/* <img src="../../assets/streak.svg" alt="" /> */}
        <div className="d-flex">
          {isAuthenticated ? (
            <Link
              to="/"
              className="btn btn-outline-primary text-decoration-none ms-auto"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline-primary text-decoration-none ms-auto"
            >
              Sign in
            </Link>
          )}
        </div>

        {/* Collapse toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-secondary'/>
        </div>
      </Container>
    </Navbar>

  );
};

export default Navbar_Home;
