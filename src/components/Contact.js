import React, { useEffect, useState } from 'react';
import "./Contact.css";
import * as emailjs from "emailjs-com";
import {FaPhone} from "react-icons/fa";
import Sprink from "./Sprinkle.svg"
import {MdEmail,MdLocationOn} from "react-icons/md";
import Aos from 'aos';
const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        email:'',
        message:'',
    })
    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
        setData('');
    }
    const SubmitEvent = (e)=>{
        e.preventDefault();
        emailjs.sendForm("service_z1icd99","template_cc7mv7b",".contact-container" , 'user_g3NcZm3xQqmCixEIlhpnw')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div className="contact" style={{backgroundImage:`url(${Sprink})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <div className="contacts">
            <div data-aos="fade-up" className="contact-address">
                <h1>Get in Touch With Us!</h1>
                <div className="contact-no">
                    <FaPhone className="call"/>
                    <h2>09123258019</h2>
                </div>
                <div className="contact-no">
                    <MdEmail className="call"/>
                    <h2>Finetaxpvt.ltd@gmail.com</h2>
                </div>
                <div className="contact-no">
                    <MdLocationOn className="call"/>
                    <div className="ad">
                    <h2>15 , 2nd Floor, Deep Complex,</h2><h2>Hume Pipe, Sakchi,</h2>  
                    <h2>Jamshedpur,</h2><h2>Jharkhand 831001, India</h2>
                    </div>
                    
                </div>
            </div>
            <form data-aos="fade-left" className="contact-container"onSubmit={SubmitEvent}>
               <h1 className="top">SAY SOMETHING</h1>
                <label for="name">Full Name</label>
                <input type="text" id="name" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
                <label for="mail">Email</label>
                <input type="email" id="mail" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address"/>
                <label for="msg">Message</label>
                <textarea id="msg" name="message" value={data.message} onChange={InputEvent} cols="35" rows="8"/>
                <button className="btn" onClick={SubmitEvent} type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
