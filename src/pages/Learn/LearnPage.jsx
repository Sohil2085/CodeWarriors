import React, { useEffect } from 'react'
import Navbar_Home from '../../components/Navbar/Navbar_Home'
import Footer from '../../components/Footer/Footer'
import './LearnPage.css'
import { Link, useNavigate } from 'react-router-dom'
import Javascript from '../../assets/javascript.png'
import Python from '../../assets/python.png'
import Java from '../../assets/java.png'
import CPP from '../../assets/cpp.png'


import AOS from "aos";
import 'aos/dist/aos.css';

const LearnPage = () => {

    useEffect(() => {
             AOS.init({
             // Global settings
             duration: 700, // Animation duration
               easing: 'ease-out-cubic', // Animation easing
               once: true, // Only animate once
               disable: 'phone', // Disable on phone
             });
           }, []);


    return (
    <>
    <Navbar_Home />
    <section className='learn'>
        <div className="container p-5">
            <div className="heading text-center">
                <h1 className='fx-bold' data-aos = "fade-up">Learn</h1>
            </div>
            <div className="custom_card">
              <div className="row g-4 mb-4">
                <div className="col-12 col-lg-6" data-aos="flip-right">
                  <div className="text-start h-100 custom_col rounded p-4 glass-card">
                    <h2 className="pb-2">JAVASCRIPT</h2>
                    <p className='text-dark'>Ideal for practicing DSA with dynamic typing and built-in data structures like arrays and objects, often used for algorithmic coding in web-based platforms.</p>
                    <div className="img text-center my-3">
                      <img src={Javascript} alt="Javascript" height={100} />
                    </div>
                    <div className="text-center mt-auto py-3">
                      <Link className="px-4 py-2 text-decoration-none glow-button d-inline-block" to={'/info/javascript'}>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6" data-aos="flip-right">
                  <div className="text-start h-100 custom_col rounded p-4 glass-card">
                    <h2 className="pb-2">JAVA</h2>
                    <p className='text-dark'>Preferred for DSA due to its strict typing, robust standard library (e.g., ArrayList, HashMap), and widespread use in competitive programming.</p>
                    <div className="img text-center my-3">
                      <img src={Java} alt="Java" height={100} />
                    </div>
                    <div className="text-center mt-auto py-3">
                      <Link className="px-4 py-2 text-decoration-none glow-button d-inline-block" to={'/info/java'}>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6" data-aos="flip-right">
                  <div className="text-start h-100 custom_col rounded p-4 glass-card">
                    <h2 className="pb-2">PYTHON</h2>
                    <p className='text-dark'>Favored for DSA for its concise syntax, extensive libraries (e.g., collections), and ease of implementing complex algorithms quickly.</p>
                    <div className="img text-center my-3">
                      <img src={Python} alt="Python" height={100} />
                    </div>
                    <div className="text-center mt-auto py-3">
                      <Link className="px-4 py-2 text-decoration-none glow-button d-inline-block" to={'/info/python'}>Read More</Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6" data-aos="flip-right">
                  <div className="text-start h-100 custom_col rounded p-4 glass-card">
                    <h2 className="pb-2">C++</h2>
                    <p className='text-dark'>A top choice for DSA in competitive programming due to its high performance, STL (e.g., vectors, maps), and fine-grained memory control.</p>
                    <div className="img text-center my-3">
                      <img src={CPP} alt="CPP" height={100} />
                    </div>
                    <div className="text-center mt-auto py-3">
                      <Link className="px-4 py-2 text-decoration-none glow-button d-inline-block" to={'/info/cpp'}>Read More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
)
}

export default LearnPage    