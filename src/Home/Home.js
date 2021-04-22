import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import HeaderMain from '../component/Header/HeaderMain/HeaderMain.js';
  import './Home.css';
import Service from "../component/Home/Service/Service.js";
import Project from "../component/Home/Project/Project.js";
import Footer from "../component/Footer/Footer.js";
import Testimonial from "../component/Home/Testimonial/Testimonial.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  return (
    <>
   
     <HeaderMain />
     <Service />
     <Project  />
     <Testimonial />
     <Footer />
      
    </>
  );
};

export default Home;
