import React, { useEffect, useState } from 'react';
import "./Contact.css";
import * as emailjs from "emailjs-com";
import {FaPhone} from "react-icons/fa";
import {MdEmail,MdLocationOn} from "react-icons/md";
import Aos from 'aos';
const Contact = () => {
    const [display,setDis] = useState(0);
    const [err,setErr] = useState(0);
    const [fill,setFill] = useState(0);
    const [sending,setSend] = useState(0);
    const [data,setData] = useState({
        fullname:'',
        email:'',
        message:'',
    })
    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setFill(0);
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            };
        });
    }
    const SubmitEvent = (e)=>{
        e.preventDefault();
        setSend(1);
        if(data.fullname ==='' || data.message===''|| data.email===''){
            setSend(0);
            setFill(1);
        }
        else{
        emailjs.sendForm("service_z1icd99","template_cc7mv7b",".contact-container" , 'user_g3NcZm3xQqmCixEIlhpnw')
        .then((result) => {
            setSend(0);
            setDis(1);
            setTimeout(()=>{
                setDis(0);
            },4000);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
            setErr(1);
            setTimeout(()=>{
                setErr(0);
            },4000);
        });
        setData({
            fullname:'',
            email:'',
            message:'',
        });
        window.scrollTo(0,0);
    }
    };
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div className="contact">
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
               {sending?<h1 className="dis">Sending....</h1>: <h1 className="disno">No</h1> }
               {display?<h1 className="dis1">Sent Successfylly!</h1>: <h1 className="disno">No</h1> }
               {fill?<h1 className="dis2">Fill all the data!</h1>: <h1 className="disno">No</h1> }
               {err?<h1 className="dis2">Sorry, try again?</h1>: <h1 className="disno">No</h1> }
                <label for="name">Full Name</label>
                <input type="text" id="name" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" required/>
                <label for="mail">Email</label>
                <input type="email" id="mail" name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email Address" required/>
                <label for="msg">Message</label>
                <textarea id="msg" name="message" value={data.message} onChange={InputEvent} cols="30" rows="10" required/>
                <button className="btn" onClick={SubmitEvent} type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
