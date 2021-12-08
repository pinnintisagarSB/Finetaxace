import Aos from 'aos';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Card.css";
import Sdata from './Sdata';
import "./Service.css";
const Service = () => {
    useEffect(() => {
        Aos.init({duration: 1200})
    }, [])
    const Card = (props) => {
        return (
            <div data-aos="fade-up" key={props.key} className="card">
                <div className="card-container">
                    <div className="box">
                    <img src={props.img} alt="" />
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                    </div>
                    <NavLink to={`/service/${props.id}`}><button className="butn" onClick={()=>{window.scrollTo(0,0)}} >Know More</button></NavLink>
                </div>
            </div>
        )
    }
    return (
        <div className="service">
            <h1>Our Services</h1>
            <div className="service-container">
               {
                   Sdata.map(Card)
               }
            </div>
        </div>
    )
}

export default Service
