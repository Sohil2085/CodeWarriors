import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer container-fluid bg-light text-dark border-top">
      <div className="container py-5">
        <div className="row g-4">

          <div className="col-lg-3 col-md-6 text-start">
            <h5 className="mb-3" style={{ color: "#0d6efd" }}>
              <span style={{ color: "#212529" }}>&lt;</span>
              CodeWarriors/
              <span style={{ color: "#212529" }}>&gt;</span>
            </h5>
            <p className="small text-muted">Empowering developers to become coding masters through practice, challenges, and community.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><i className="fab fa-github"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 text-start">
            <h6 className="fw-bold mb-3">Platform</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to={"/problem"} className="text-dark text-decoration-none opacity-75">Challenges</Link></li>
              <li className="mb-2"><Link to={"/leaderborad"} className="text-dark text-decoration-none opacity-75">Leaderboard</Link></li>
              <li className="mb-2"><Link to={"/discussionforum"} className="text-dark text-decoration-none opacity-75">Discussion Forum</Link></li>
              <li className="mb-2"><Link to={"/documentation"} className="text-dark text-decoration-none opacity-75">Documentation</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 text-start">
            <h6 className="fw-bold mb-3">Resources</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">Blog</Link></li>
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">Tutorials</Link></li>
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">API</Link></li>
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">FAQ</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 text-start">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">About</Link></li>
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">Careers</Link></li>
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">Contact</Link></li>
              <li className="mb-2"><Link to="#" className="text-dark text-decoration-none opacity-75">Legal</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 small text-muted">
          <div>© 2025 Code Warriors. All rights reserved.</div>
          <div className="d-flex gap-3">
            <Link to="#" className="text-dark text-decoration-none opacity-75">Privacy Policy</Link>
            <Link to="#" className="text-dark text-decoration-none opacity-75">Terms of Service</Link>
            <Link to="#" className="text-dark text-decoration-none opacity-75">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer   