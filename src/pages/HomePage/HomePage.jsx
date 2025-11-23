import React from "react";
import "./HomePage.css";
import AOS from "aos";
import 'aos/dist/aos.css';

import { useState,useEffect,useRef } from "react";
import Navbar from "../../components/Navbar/Navbar_Home"
import Footer from "../../components/Footer/Footer";
import Person from "../../assets/coding.jpg"
import useAuthStore from "../../stores/useAuthStore";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function HomePage() {

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  // const location = useLocation()

  // useEffect(() => {
  //   const fromLogin = location.state?.fromLogin
  //   if (fromLogin) {
  //     toast.success("Logged in successfully!");
  //     window.history.replaceState({}, document.title);
  //     console.log("Location state on HomePage:", location.state);
  //   }
  // }, [location.state?.fromLogin]);

  useEffect(() => {
         AOS.init({
         // Global settings
         duration: 700, // Animation duration
           easing: 'ease-out-cubic', // Animation easing
           once: true, // Only animate once
           disable: 'phone', // Disable on phone
         });
       }, []);

  const [displayedCode, setDisplayedCode] = useState('');
  const codeString = `
  
1  function findMissingNumber(nums) {
2  const n = nums.length;
3  const expectedSum = (n * (n + 1)) / 2;
4  const actualSum = nums.reduce((sum, num) => sum + num, 0);
5  const missing = expectedSum - actualSum;
6  return missing;
7  }
8  const numbers = [0, 1, 2, 4, 5];
9  const result = findMissingNumber(numbers);
10 console.log('Missing Number:', result);
`

  // const numbers = [0, 1, 2, 4, 5];
  // const result = findMissingNumber(numbers);
  // console.log('Missing Number:', result);

  useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
          if (index < codeString.length) {
            setDisplayedCode(codeString.slice(0, index + 1));
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, 50); // Delay between each character (50ms)

        return () => clearInterval(typingInterval);
      }, []);
  
        // <div>
      // accordion
    //   const faqs = [
    //     {
    //         id: 1,
    //         header: "What is Lorem Ipsum?",
    //         text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    //     },
    //     {
    //         id: 2,
    //         header: "Where does it come from?",
    //         text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    //     },
    //     {
    //         id: 3,
    //         header: "Why do we use it?",
    //         text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    //     },
    //     {
    //         id: 4,
    //         header: "Where can I get some?",
    //         text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    //     }
    // ]
    // const AccordionItem = (props) => {
    // const contentEl = useRef();
    // const { handleToggle, active, faq } = props;
    // const { header, id, text } = faq;
    // return (
    //     <div className="rc-accordion-card">
    //         <div className="rc-accordion-header">
    //             <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
    //                 <h5 className="rc-accordion-title">{header}</h5>
    //                 <i className="fa fa-chevron-down rc-accordion-icon"></i>
    //             </div>
    //         </div>
    //         <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
    //             active === id
    //                 ? { height: contentEl.current.scrollHeight }
    //                 : { height: "0px" }
    //         }>
    //             <div className="rc-accordion-body">
    //                 <p className='mb-0'>{text}</p>
    //             </div>
    //         </div>
    //     </div>
    // )
    // }

    //   const [active, setActive] = useState(null);

    //   const handleToggle = (index) => {
    //       if (active === index) {
    //           setActive(null);
    //       } else {
    //           setActive(index);
    //       }
    //   }
        // </div> 

  return (
    <>
    <Navbar />
    
    <div className="home-page container-fluid text-center">
      {/* Hero Section */}
      <section className="hero hero_section container">
        <h1 className="text-primary display-4 fw-bold" data-aos="fade-up">Code. Compete. Conquer.</h1>
        <p className="lead text-secondary hero_section_p" data-aos="fade-up">
          Step into the ultimate coding arena. Solve real-world challenges, track your progress, and become a CodeWarrior!
        </p>
        <div className="mt-5 mb-5" data-aos="fade-up">
          {isAuthenticated ? (
          <>
          <Link className="me-3 text-decoration-none glow-button" to={'/problem'}>Start Solving</Link>
          <Link className="me-3 text-decoration-none glow-button" to={'/signup'}>Join CodeWarrior &gt;</Link>
          </>
          ) : (
          <>
          <Link className="me-3 text-decoration-none glow-button" to={'/login'}>Start Solving</Link>
          <Link className="me-3 text-decoration-none glow-button" to={'/signup'}>Join CodeWarrior &gt;</Link>
          </>
          )}
        </div>
      </section>

      {/* Code Snippet */}
      <section className="code-snippet container my-4 p-3 bg-light text-start rounded" data-aos="fade-up-right">
        <pre className="prism-code">
          {displayedCode}
        </pre>
      </section>

      {/* What is CodeWarrior */}
      <section className="about custom_what container">
        <div className="row">
        <div className="what_content col-lg-6 col-sm-12" data-aos="fade-right">
        <h2 className="text-primary text-start pb-3"><span style={{ color: "#212529" }}>What is</span> CodeWarrior?</h2>
        <p className="text-dark text-start">
          CodeWarrior is a modern coding platform that offers realworld coding challenges, instant feedback, and a community
          for developers to learn, compete, and grow their skills. Whether
          you're preparing for interviews or sharpening your coding
          skills, CodeWarrior provides the tools and environment to
          excel.
        </p>
        <p className="text-dark text-start">
          Whether you're a beginner taking your first steps or a
          seasoned developer aiming to stay sharp, CodeWarrior makes
          practice engaging, competitive, and growth-focused.
        </p>
        </div>
        <div className="what_img col-lg-6 col-sm-12" data-aos="fade-left">
          <figure className="picture">
          <img src={Person} alt="" className="rounded"/>
          </figure>
        </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="features container custom_key">
        <h2 className="fw-bold pb-5" data-aos="fade-up">Key Features of Our Coding Platform</h2>
      
        <div className="d-flex align-item-stretch row mb-3 gx-5">
          <div className="col" data-aos="flip-up">
          <div className="text-start h-100 custom_col rounded p-4 glass-card">
            <h3 className="pb-2">Structured DSA Practice</h3>
            <p>Solve curated problems across Arrays, Strings, DP,
              Trees, and more.</p>
          </div>
          </div>
          <div className="col" data-aos="flip-up">
          <div className="text-start h-100 custom_col rounded p-4 glass-card">
            <h3 className="pb-2">Real-Time Code Evaluation</h3>
            <p>Instant feedback on submissions with input/output
            and explanation.</p>
          </div>
          </div>
          <div className="col" data-aos="flip-up">
          <div className="text-start h-100 custom_col rounded p-4 glass-card">
            <h3 className="pb-2">Company-Wise Questions</h3>
            <p>Master top tech interviews with problems asked by
            Google, Amazon, etc.</p>
          </div>
          </div>
        </div>
        <div className="row gx-5 pb-5 d-flex align-item-stretch ">
          <div className="col" data-aos="flip-up">
          <div className="text-start h-100 custom_col rounded p-4 glass-card">
            <h3 className="pb-2">Profile & Coding Graph</h3>
            <p>Track your daily progress, submission streaks, and
            improvement curve.</p>
          </div>
          </div>
          <div className="col" data-aos="flip-up">
          <div className="text-start h-100 custom_col rounded p-4 glass-card">
            <h3 className="pb-2">Progress Tracker</h3>
            <p>Visualize your topic-wise coverage and stay on top
            of your learning goals.</p>
          </div>
          </div>
          <div className="col" data-aos="flip-up">
          <div className="text-start h-100 custom_col rounded p-4 glass-card">
            <h3 className="pb-2">Admin Panel for Problems</h3>
            <p>Easily add, update, and manage problem sets with
            rich metadata.</p>
          </div>  
          </div>
        </div>
      </section>

      {/* <section className="accordion">
        <div className="container-fluid mt-5 mb-5 ">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-2">
                        <div className="card">
                            <div className="card-body">
                              <h4 className="form-heading mb-4 text-primary text-center mt-3">React Accordion</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      </section> */}


    </div>
      <Footer />
    </>
  );
}
