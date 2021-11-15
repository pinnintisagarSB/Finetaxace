import Aos from 'aos';
import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import "./Card.css";
const Card = (props) => {
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div data-aos="fade-up" className="card">
            <div className="card-container">
                <img src={props.img} alt="" />
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Card
