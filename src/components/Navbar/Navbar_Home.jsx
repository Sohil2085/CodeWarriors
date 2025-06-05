import React from 'react';
import './Navbar_Home.css';
// import { BrowserRouter,Route,Routes,useNavigate } from "react-router-dom";
// import {Button,Spinner} from 'react-bootstrap';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar_Home = () => {

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
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        {/* Brand */}
        <Navbar.Brand href="#home" style={{ color: "#45678a" }}>
          <span style={{ color: "#ffffff" }}>&lt;</span>
          CodeWarriors/
          <span style={{ color: "#ffffff" }}>&gt;</span>
        </Navbar.Brand>

        {/* Collapse toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible nav links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#ffffff" }}>Problems</Nav.Link>
            <Nav.Link href="#about" style={{ color: "#ffffff" }}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Sign in always on right */}
        {/* <img src="../../assets/streak.svg" alt="" /> */}
        <Link to="../../pages/SignupPage/SignupPage" className="btn btn-outline-primary text-decoration-none ms-auto">
          Sign in
        </Link>
      </Container>
    </Navbar>
  );
};

export default Navbar_Home;
