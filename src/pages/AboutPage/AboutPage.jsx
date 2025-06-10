import React from 'react'
import Navbar from '../../components/Navbar/Navbar_Home'
import Footer from '../../components/Footer/Footer'
import './AboutPage.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AboutPage = () => {
  
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
    <div>
    <Navbar />
    </div>
    <div className="container-fluid custom_class">
      <div className="container content">
      <p className='' data-aos="fade-up">Welcome to <span>Code Warriors</span>, your ultimate destination for mastering Data Structures & Algorithms through targeted practice and real-world challenges. Our mission is to empower developers at all levels to improve their problem-solving skills, prepare confidently for technical interviews, and build a strong coding foundation.</p>
      <p data-aos="fade-up">At Code Warriors, we offer a rich collection of DSA problems organized by topics such as Arrays, Strings, Graphs, Dynamic Programming, and more. Whether you’re preparing for an upcoming interview or just sharpening your skills, our platform provides curated company-wise questions, personalized progress tracking, and an intuitive interface designed to keep you motivated.</p>
      
      <h2 className='fw-bold' data-aos="fade-up">Platform Features</h2>
      <ul data-aos="fade-up">
        <li><span className='fw-bold'>Curated Problem Sets:</span> Diverse DSA problems covering arrays, strings, graphs, dynamic programming, and more.</li>
        <li><span className='fw-bold'>Personalized Dashboard:</span> Track solved problems, progress by topic, and maintain streaks.</li>
        <li><span className='fw-bold'>Detailed Explanations & Hints:</span> Get insights to problem solutions to deepen understanding.</li>
        <li><span className='fw-bold'>Admin Problem Management:</span> Efficiently add, update, and manage challenges.</li>
      </ul>
      
      <h2 className='fw-bold' data-aos="fade-up">How to Use Code Warriors</h2>
      <ol data-aos="fade-up">
        <li><span className='fw-bold'> Create an Account :</span> Sign up to save your progress and personalize your experience.</li>
        <li><span className='fw-bold'> Explore & Solve :</span> Browse problems by topic, difficulty, or company tag.</li>
        <li><span className='fw-bold'> Track Your Progress :</span> Check the dashboard for stats on solved problems and streaks.</li>
        <li><span className='fw-bold'> Use Admin Tools :</span> For admins, manage and curate problem sets to keep the platform fresh.</li>
      </ol>

      <h2 className="fw-bold" data-aos="fade-up">About me</h2>
      <p data-aos="fade-up">I'm Sohil Kareliya, a passionate software developer who loves to code and build tools that make learning and growth easier for developers worldwide. With years of experience in full-stack development and a keen interest in algorithmic problem solving, I created Code Warriors to bridge the gap between practice and success in technical interviews. My goal is to build a supportive community where learners can thrive, challenge themselves, and achieve their career goals.</p>


      </div>
    <Footer />
    </div>
    </>
  )
}

export default AboutPage    