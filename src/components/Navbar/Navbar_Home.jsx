import React, { useEffect, useState } from 'react';
import './Navbar_Home.css';

import { useNavigate, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAuthStore from '../../stores/useAuthStore';
import Dropdown  from 'react-bootstrap/Dropdown';
import { toast } from 'react-toastify';


const Navbar_Home = () => {
    // const {logout, isAuthenticated} = useAuthStore()
    const logout = useAuthStore((state) => state.logout);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const navigate = useNavigate()

    // useEffect(() => {
    //   if(!isAuthenticated){
    //     navigate("/login")
    //   }
    // },[!isAuthenticated])

    const handleLogout = () => {
      try{
        logout()
        window.location.reload()
      }
      catch(error){
        console.log(error)
      }
    }

    // useEffect(() => {
    //     if (!isAuthenticated) {
    //       navigate("/login", { state: { fromLogout: true } })
    //     }
    //   }, [!isAuthenticated]);




  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(false);
  
  // const handleSignIn = () => {
  //       setIsLoading(true);
  //       // Simulate a delay for the redirect (e.g., API call or processing)
  //       setTimeout(() => {
  //         navigate('/signin');
  //       }, 2000); // 2-second delay to show the loader
  // };

  const [avatar, setAvatar] = useState('')

  useEffect(() => {
  const randomSeed = Math.random().toString(36).substring(7);
  setAvatar(`https://api.dicebear.com/8.x/avataaars/svg?seed=${randomSeed}`);
  }, []);

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
            <Nav.Link
              as={NavLink}
              to="/problem"
              className={({ isActive }) =>
                `btn btn-outline-primary text-decoration-none ms-auto ${isActive ? 'active' : ''}`
              }
              style={({ isActive }) => ({
                color: '#ffffff',
                backgroundColor: isActive ? '#0d6efd' : 'transparent', // Active: blue background
                borderColor: '#0d6efd',
              })}
            >
              Problems
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                `btn btn-outline-primary text-decoration-none ms-auto ${isActive ? 'active' : ''}`
              }
              style={({ isActive }) => ({
                color: '#ffffff',
                backgroundColor: isActive ? '#0d6efd' : 'transparent', // Active: blue background
                borderColor: '#0d6efd',
              })}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-flex gap-4">
        {/* Sign in always on right */}
        {/* <img src="../../assets/streak.svg" alt="" /> */}
        <div className="d-flex">
          {isAuthenticated ? (
            <Dropdown align="end">
              <Dropdown.Toggle variant="dark" id="dropdown-basic" className="profile-toggle border-0 bg-transparent p-0">
                <img
                  src={avatar}
                  alt="profile"
                  className="rounded-circle border border-info shadow"
                  width={45}  
                  height={45}
                  style={{ objectFit: 'cover' }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-custom mt-2">
                <Dropdown.Item as={Link} to="/profile"> Profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/problem">Problem</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/login" className="text-danger" onClick={handleLogout}>
                   Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
