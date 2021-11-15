import React, { useEffect, useState } from 'react';
import "./App.css";
import { Route, Routes} from 'react-router';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HashLoader from "react-spinners/HashLoader";
import "../src/components/Loader.css";
import Aos from 'aos';
import { css } from "@emotion/react";
const load = css`
  display: block;
  margin: 0 auto;
  width: 5rem;
  color: #fff;
  height: 5rem;
  justify-content: center;
  align-items: center;
`;
const App = () => {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
          setLoading(false)
        },4000)
        },[]);
    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    if(loading){
      return (
        <div className="loader">
            <HashLoader color={'#fff'} css={load} loading={loading} size={40} />
        </div>
    )
    }else{
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
  );
}
}

export default App
