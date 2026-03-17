import React from 'react'
import Navbar_Home from '../../components/Navbar/Navbar_Home'
import Footer from '../../components/Footer/Footer'
import { Link, Outlet } from 'react-router-dom'
import './info.css'


const infoPage = () => {
  return (
    <>
    <Navbar_Home />
    <div className="container py-4">
      <div className="row gy-4">
        {/* Sidebar */}
        <div className="col-12 col-md-4 col-lg-3">
          <div className="sidebar d-flex flex-column gap-4">
            <div className="sidebar-section d-flex flex-column">
              <h4 className='p-3 m-0 d-flex align-items-center' style={{ background: '#f8f9fa', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', color: '#212529', border: '1px solid #dee2e6', fontSize: '1.1rem' }}>
                Introduction
              </h4>
              <div className="sidebar-links d-flex flex-column p-2 border border-top-0 rounded-bottom" style={{ borderColor: '#dee2e6' }}>
                <Link to={"intro"} className='text-decoration-none p-2 rounded hover-bg-light active'>What is ... ?</Link>
                <Link to={"loops"} className='text-decoration-none p-2 rounded hover-bg-light'>Why to Learn ... ?</Link>
                <Link to={"intro"} className='text-decoration-none p-2 rounded hover-bg-light'>How to get Started ... ?</Link>
              </div>
            </div>
            <div className="sidebar-section d-flex flex-column">
              <h4 className='p-3 m-0 d-flex align-items-center' style={{ background: '#f8f9fa', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', color: '#212529', border: '1px solid #dee2e6', fontSize: '1.1rem' }}>
                Variable and Data Types
              </h4>
              <div className="sidebar-links d-flex flex-column p-2 border border-top-0 rounded-bottom" style={{ borderColor: '#dee2e6' }}>
                <Link to={"intro"} className='text-decoration-none p-2 rounded hover-bg-light'>What are Variables ?</Link>
                <Link to={"loops"} className='text-decoration-none p-2 rounded hover-bg-light'>Data Types</Link>
                <Link to={"intro"} className='text-decoration-none p-2 rounded hover-bg-light'>Type Modifiers</Link>
                <Link to={"loops"} className='text-decoration-none p-2 rounded hover-bg-light'>Storage Classes</Link>
              </div>
            </div>
            <div className="sidebar-section d-flex flex-column">
              <h4 className='p-3 m-0 d-flex align-items-center' style={{ background: '#f8f9fa', borderTopRightRadius: '15px', borderTopLeftRadius: '15px', color: '#212529', border: '1px solid #dee2e6', fontSize: '1.1rem' }}>
                Looping in ...
              </h4>
              <div className="sidebar-links d-flex flex-column p-2 border border-top-0 rounded-bottom" style={{ borderColor: '#dee2e6' }}>
                <Link to={"intro"} className='text-decoration-none p-2 rounded hover-bg-light'>What are Loops ?</Link>
                <Link to={"loops"} className='text-decoration-none p-2 rounded hover-bg-light'>For Loop</Link>
                <Link to={"intro"} className='text-decoration-none p-2 rounded hover-bg-light'>While Loop</Link>
                <Link to={"loops"} className='text-decoration-none p-2 rounded hover-bg-light'>Do-While Loop</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="col-12 col-md-8 col-lg-9 content shadow-sm rounded p-4 bg-white border">
          <Outlet />
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default infoPage