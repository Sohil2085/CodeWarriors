import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="footer footer-expand-lg container-fluid bg-light text-dark">
    <div className="py-5">
        <div className="row">

        <div className="col-md-3 mb-4 mb-md-0 text-start">
            <h5 Brand href="#home" style={{ color: "#0d6efd" }}>
                <span style={{ color: "#212529" }}>&lt;</span>
                CodeWarriors/
                <span style={{ color: "#212529" }}>&gt;</span>
            </h5>
            <p className="small">Empowering developers to become coding masters through practice, challenges, and community.</p>
            <div>
            <a href="#"><i className="fab fa-github me-2 text-dark"></i></a>
            <a href="#"><i className="fab fa-twitter me-2 text-dark"></i></a>
            <a href="#"><i className="fab fa-linkedin text-dark"></i></a>
            </div>
        </div>

        <div className="col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="fw-bold">Platform</h6>
            <ul className="list-unstyled small">
            <li><Link to={"/problem"} className="text-dark text-decoration-none">Challenges</Link></li>
            <li><Link to={"/leaderborad"} className="text-dark text-decoration-none">Leaderboard</Link></li>
            <li><Link to={"/discussionforum"} className="text-dark text-decoration-none">Discussion Forum</Link></li>
            <li><Link to={"/documentation"} className="text-dark text-decoration-none">Documentation</Link></li>
            </ul>
        </div>

        <div className="col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled small">
            <li><Link href="#" className="text-dark text-decoration-none">Blog</Link></li>
            <li><Link href="#" className="text-dark text-decoration-none">Tutorials</Link></li>
            <li><Link href="#" className="text-dark text-decoration-none">API</Link></li>
            <li><Link href="#" className="text-dark text-decoration-none">FAQ</Link></li>
            </ul>
        </div>

        <div className="col-md-3 mb-4 mb-md-0 text-start">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled small">
            <li><Link href="#" className="text-dark text-decoration-none">About</Link></li>
            <li><Link href="#" className="text-dark text-decoration-none">Careers</Link></li>
            <li><Link href="#" className="text-dark text-decoration-none">Contact</Link></li>
            <li><Link href="#" className="text-dark text-decoration-none">Legal</Link></li>
            </ul>
        </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between small">
        <div>© 2025 Code Warriors. All rights reserved.</div>
        <div>
            <Link href="#" className="text-dark text-decoration-none me-3">Privacy Policy</Link>
            <Link href="#" className="text-dark text-decoration-none me-3">Terms of Service</Link>
            <Link href="#" className="text-dark text-decoration-none">Cookie Policy</Link>
        </div>
        </div>
    </div>
    </footer>

  )
}

export default Footer   