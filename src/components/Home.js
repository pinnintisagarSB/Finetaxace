import React from 'react';
import "./Home.css";
import { useEffect } from 'react';
import {NavLink} from "react-router-dom";
import Aos from "aos";
import Cloud2 from "./Cloudy2.svg"
import Homepng from "./undraw_designer_re_5v951.svg";
const Home = () => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
        return (
            <div className="home" style={{height:'100vh' ,backgroundImage:`url(${Cloud2})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
               
                <div className="homes">
                <div data-aos="fade-up" className="home-container">
                    <h1>FineTaxAce</h1>
                    <h2>Enlightening Paths Fulfilling Dreams</h2>
                    <NavLink to="/service">
                    <button>Our Services</button>
                    </NavLink>
                </div>
                <div data-aos="fade-up" className="bg">
                    <img src={Homepng} alt="" />
                </div>
                </div>
            </div>
        )    
    }
export default Home
