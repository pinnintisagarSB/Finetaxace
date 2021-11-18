import React, { useEffect } from 'react';
import "./About.css";
import Img1 from "./IMG-20211111-WA0021.jpg";
import Img2 from "./IMG-20211111-WA0028.jpg";
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
const About = () => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div  className="about">
               <h1>About Us</h1>
               <div data-aos="fade-up" className="about-container">
               <div className="about-img">
                       <img src={Img2} alt="" />
                       <h1>ABHISHEK RANJAN UPADHYAY</h1>
                       <p>Director</p>
                   </div>
                   <div className="about-us">
                        <h1>Welcome to FineTaxAce,</h1>
                        <p>Here at Finetaxace we offer the very best in Marketing Service,
                        We started Finetaxace with a single purpose, to provide the finest Financial Service to all the peoples,
                        If you need anything don't hesitate to</p>
                        <NavLink className={(navData)=> navData.isActive ? 'navoption active' : 'navoption' } to="/contact" >
                        Contact Us
                        </NavLink>
                        <p>And also checkout what</p>
                        <NavLink className={(navData)=> navData.isActive ? 'navoption active' : 'navoption' } to="/service" >
                         Services
                        </NavLink>
                        <p>we provide.</p>
                        <h3>Thank you for your interest in Finetaxace 
                        From Team FineTaxAce,
                        </h3>
                   </div>
                   <div className="about-img">
                   <img src={Img1} alt="" />
                   <h1>NALLABOTULA SUSHILA KUMARI</h1>
                   <p>Founder</p>
               </div>
               </div>
        </div>
    )
}

export default About
