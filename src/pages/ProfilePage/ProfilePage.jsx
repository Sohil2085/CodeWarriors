import React from 'react'
import ProfilePic from '../../assets/profile.png'
import './ProfilePage.css'
import { Link } from 'react-router-dom'
import Navbar_Home from '../../components/Navbar/Navbar_Home'
import { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';


const ProfilePage = () => {

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
    <section className="custom_container pt-5">
      <div className="container">
        <div className="row">
          <div className="col-4 first_col p-5" data-aos="flip-left">
            <div className="name d-flex justify-content-between" data-aos="fade-up">
            <figure className="picture">
              <img src={ProfilePic} alt="" />
            </figure>
            <p><strong className='fw-bold'>Sohil Kareliya</strong>
              <p className='text-secondary'><small>sohil_2085</small></p>
              <p>Rank : 000001</p>
            </p>
            </div>
            <div className="edit_profile" data-aos="fade-up">
              <button className='btn btn-outline-primary w-100'>Edit Profile</button>
            </div>
            <hr />
            <div className="language" data-aos="fade-up">
              <h3 className='fw-bold'>Language</h3>
              <button className="btn btn-outline-secondary me-2 mt-2">Java</button>
              <button className="btn btn-outline-secondary me-2 mt-2">Javascript</button>
              <button className="btn btn-outline-secondary me-2 mt-2">Python</button>
              <button className="btn btn-outline-secondary me-2 mt-2">C++</button>
            </div>
          </div>
          <div className="col-8">

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProfilePage  