import React from 'react';
import Info from './Info';
import "./Icard.css";
import { useParams } from 'react-router';
const Serviceinfo = () => {
    const sid = useParams();
    const sDetail = Info.filter(x=>x.id == sid.id);
    const sd = sDetail[0];
    console.log(sDetail);
    return (
        <div className="service_info">
            <div className="info-container">
        <div className="icard">
            <div className="icard-container">
                 <h1>{sd.title}</h1>
                 <div className="combox">
                 <div className="sbox">
                 <h1>Services are:</h1>
                 {
                     sd.options.map((v)=>{
                         return <li>{v}</li>
                     })
                 }
                 <h1>Price:{sd.price} excl.of gov tax</h1>
                 </div>
                 <div className="wbox">
                 <h1>What You Get:</h1>
                 {
                   sd.docs.map((val)=>{
                    return <li>{val}</li>
                })
                 }
                 </div>
                 </div>
                 
            </div>
        </div>
            </div>   
        </div>
    )
}

export default Serviceinfo
