import React, { useEffect } from 'react';
import Info from './Info';
import { NavLink } from 'react-router-dom';
import "./Icard.css";
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
const Serviceinfo = () => {
    const [show,setShow] = useState(0);
    const sid = useParams();
    const sDetail = Info.filter(x=>x.id === parseInt(sid.id));
    const sd = sDetail[0];
    useEffect(() => {
        if(parseInt(sid.id)===true){
            setShow(1);
        }
        else{
            setShow(0);
        }   
    }, [])
    return (
        <div className="service_info">
            <div className="info-container">
                <div className="icard">
                     <div className="icard-container">
                        <h1 className="ttl">{sd.title}</h1>
                        <div className="combox">
                            <div className="sbox">
                                <h1>Services are:</h1>
                                {
                                    sd.options.map((v)=>{
                                    return <li>{v}</li>
                                })
                                }
                                <h1 className="price"><span>Price : </span>{sd.price} <span>excl.of gov tax</span></h1>
                                <h3>Government fee Approx 1500-4000 depending upon share capital or state of registered office</h3>
                                <NavLink  to="/contact" onClick={()=>{window.scrollTo(0,0)}}>
                                     <button className="con-link">Contact Now</button> 
                                </NavLink>  
                            </div>
                            <div className="wbox">
                                <h1>What You Get:</h1>
                                {
                                    sd.work.map((val)=>{
                                    return <li>{val}</li>
                                })
                                }
                            </div>
                            <div className="wbox">
                                <h1>Requried Documents:</h1>
                                {
                                    sd.docs.map((val)=>{
                                        return <li>{val}</li>
                                    })
                                }
                            </div>
                            {show?(
                                <div className="wbox">
                                    <h1>For 12A and 80G Registrations Required Documents:</h1>
                                    <h3>All documents 3 sets:</h3>
                                    <li>Registration Certificate and Memorandum of association, Articles of association/Trust Deed</li>
                                    <li>NOC from Landlord (where registered office is situated), along with proof of his ownership</li>
                                    <li>Copy of PAN card of NGO</li>
                                    <li>Electricity Bill / House tax Receipt /Water Bill (photocopy)</li>
                                    <li>Evidence of welfare activities carried out and Progress Report since inception or last 3 years</li>
                                    <li>A note specifying the main area of your charitable/ religious activities and a projection/ plan for the main charitable/ religious activities to be undertaken in the next two years</li>
                                    <li>Balance sheet, Profit and loss, ITR and Audit Report of last 3years</li>
                                    <li>List of donors along with their address and PAN</li>
                                    <li>List of governing body i.e. board of trustees members with their contact details</li>
                                    <li>A certified copy of the Trust Deed/ Memorandum of Association and produce original copy for verification</li>
                                    <li>Details of donations made since inception/ during last three years.</li>
                                    <li>Please attach details of donations received, including corpus donation, received since inception/ during last three years.</li>
                                    <li>Please attach details of your bank accounts including name of the bank, branch, type of account and number of account.</li>
                                    <li>Passport size photo of each member (2 nos.)</li>
                                    <h1 className="price"><span>Price : </span>18500 <span>excl.of gov tax</span></h1>
                                    <h3>Government fee Approx 1500-4000 depending upon share capital or state of registered office</h3>
                                </div>
                            ):(<div className="no">No</div>)}
                        </div>        
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Serviceinfo
