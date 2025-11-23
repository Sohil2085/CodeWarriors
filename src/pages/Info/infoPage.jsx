import React from 'react'
import Navbar_Home from '../../components/Navbar/Navbar_Home'
import Footer from '../../components/Footer/Footer'
import { Link, Outlet } from 'react-router-dom'
import './info.css'


const infoPage = () => {
  return (
    <>
    <Navbar_Home />
    <div className="container">
    <div className="row">
    <div className="mt-5 col-3 sidebar d-flex flex-column">
        <div className="first d-flex flex-column">
            <h3 className='p-3' style={{background : '#f8f9fa',borderTopRightRadius : '20px',borderTopLeftRadius : '20px', color: '#212529', border: '1px solid #dee2e6'}}>Introduction</h3>
            <Link to={"intro"} className='text-decoration-none pb-2 active'>What is ... ?</Link>
            <Link to={"loops"} className='text-decoration-none pb-2'>Why to Learn ... ?</Link>
            <Link to={"intro"} className='text-decoration-none pb-2'>How to get Started ... ?</Link>
        </div>
        <div className="mt-4 first d-flex flex-column">
            <h3 className='p-3' style={{background : '#f8f9fa',borderTopRightRadius : '20px',borderTopLeftRadius : '20px', color: '#212529', border: '1px solid #dee2e6'}}>Variable and Data Types</h3>
            <Link to={"intro"} className='text-decoration-none pb-2'>What are Variables ?</Link>
            <Link to={"loops"} className='text-decoration-none pb-2'>Data Types</Link>
            <Link to={"intro"} className='text-decoration-none pb-2'>Type Modifiers</Link>
            <Link to={"loops"} className='text-decoration-none pb-2'>Storage Classes</Link>
        </div>
        <div className="mt-4 first d-flex flex-column">
            <h3 className='p-3' style={{background : '#f8f9fa',borderTopRightRadius : '20px',borderTopLeftRadius : '20px', color: '#212529', border: '1px solid #dee2e6'}}>Looping in ...</h3>
            <Link to={"intro"} className='text-decoration-none pb-2'>What are Loops ?</Link>
            <Link to={"loops"} className='text-decoration-none pb-2'>For Loop</Link>
            <Link to={"intro"} className='text-decoration-none pb-2'>While Loop</Link>
            <Link to={"loops"} className='text-decoration-none pb-2'>Do-While Loop</Link>
        </div>
    </div>
    <div className="col-9 content">
        <Outlet />
    </div>
    </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default infoPage