import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import "./Card.css";
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    useEffect(() => {
        Aos.init({duration: 1200})
    }, [])
    return (
        <div data-aos="fade-up" className="card">
            <div className="card-container">
                <div className="box">
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                </div>
                <NavLink to="/"><button className="butn">Know More</button></NavLink>
            </div>
        </div>
    )
}

export default Card
