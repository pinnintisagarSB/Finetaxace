import Aos from 'aos';
import React, { useEffect } from 'react';
import Card from './Card';
import Sdata from './Sdata';
import "./Service.css";
const Service = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (
        <div className="service">
            <h1>Our Services</h1>
            <div className="service-container">
               {
                   Sdata.map((val,ind)=>{
                       return <Card key={ind} img={val.img} title={val.title} desc={val.description}/>
                   })
               }
            </div>
        </div>
    )
}

export default Service
