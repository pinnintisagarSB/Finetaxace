import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars,FaRegTimesCircle} from "react-icons/fa";
import {BsFacebook,BsTwitter} from "react-icons/bs";
import {FaInstagram} from "react-icons/fa";
import "./Navbar.css";
import Aos from 'aos';
const Navbar = () =>{
  const [set,setOn]= useState(1);
  const [onHome,setonHome]= useState(1);
  const [homeclick,setHome] = useState(1);
  useEffect(() => {
    Aos.init({duration: 1500})
}, [])
  if(set){
  return (
        <div className={(onHome) ? 'navbar active' : 'navbar' }>
            <div className="navlogo">
                 <h1><NavLink className="title" to="/">
                      FineTaxAce
                    </NavLink></h1>
            </div>
            <div className="navmenu">
                <ul>
                    <li>
                    <NavLink className={(navData)=> navData.isActive ? 'navoption active' : 'navoption' } to="/" onClick={()=>{setHome(1);setonHome(1);window.scrollTo(0,0)}}>
                      Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className={(navData)=> navData.isActive ? 'navoption active' : 'navoption' } to="/service" onClick={()=>{setonHome(1);window.scrollTo(0,0)}}>
                      Services
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className={(navData)=> navData.isActive ? 'navoption active' : 'navoption' } to="/about" onClick={()=>{setonHome(1);window.scrollTo(0,0)}}>
                      About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink className={(navData)=> navData.isActive ? 'navoption active' : 'navoption' } to="/contact" onClick={()=>{setonHome(1);window.scrollTo(0,0)}}>
                      Contact
                    </NavLink>
                    </li>
                </ul>
            </div>
            <FaBars className={homeclick?"bars": "bars active"} onClick={()=>{setOn(0)}}/>
        </div>
    )}else{
      return (
        <div className="full">
      <div className="dropdown">
        <ul onClick={()=>{setOn(1)}}>
            <li>
            <NavLink className='navoption1' to="/" onClick={()=>{window.scrollTo(0,0)}}>
              Home
            </NavLink>
            </li>
            <li>
            <NavLink className='navoption1' to="/service" onClick={()=>{window.scrollTo(0,0)}}>
              Services
            </NavLink>
            </li>
            <li>
            <NavLink className='navoption1' to="/about" onClick={()=>{window.scrollTo(0,0)}}>
              About
            </NavLink>
            </li>
            <li>
            <NavLink className='navoption1' to="/contact" onClick={()=>{window.scrollTo(0,0)}}>
              Contact
            </NavLink>
            </li>
            <div className="social">
              <BsFacebook className="so"/>
              <FaInstagram className="so"/>
              <BsTwitter className="so"/>
            </div>
        </ul>
        </div>
        <div className="close">
        <FaRegTimesCircle color="black" className="bars" onClick={()=>{setOn(1)}}/>
        </div>
    </div>
  )
    }
  }
export default Navbar
