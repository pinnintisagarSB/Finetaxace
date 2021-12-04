import React, { useEffect } from 'react';
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import {BsFacebook,BsTwitter} from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
import Aos from 'aos';
const Footer = () => {
  useEffect(() => {
    Aos.init({duration: 1500})
}, [])
    return (
        <div className="footer">
            <div className="footers">
            <div className="footer-container">
            <h1><NavLink className="title" to="/">
                      FineTaxAce
                    </NavLink></h1>
            </div>
            <div className="links">
                <ul>
                    <li>
                    <NavLink className="navlink" to="/" onClick={()=>{window.scrollTo(0,0)}}>
                      Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className="navlink" to="/service" onClick={()=>{window.scrollTo(0,0)}}>
                      Services
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className="navlink" to="/about" onClick={()=>{window.scrollTo(0,0)}}>
                      About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className="navlink" to="/contact" onClick={()=>{window.scrollTo(0,0)}}>
                      Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            </div>
            <div className="social">
              <BsFacebook className="so"/>
              <FaInstagram className="so"/>
              <BsTwitter className="so"/>
            </div>
            <div className="copyright">
                <h1>FineTaxAce Private Limited Copyrights © 2021 .All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer
