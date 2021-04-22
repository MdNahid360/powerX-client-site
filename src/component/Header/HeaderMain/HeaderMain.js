import React from 'react';
import './HeaderMain.css';
import img from '../../../img/vactor4.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faPlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

 
const HeaderMain = () => {
    return (
        <div className=" header d-flex align-items-center overflow-hidden">
            <div className="row container d-flex justify-content-center m-auto text-white  align-items-center ">
                <div className="col-lg-6 col-md-6 col-12 ">
                       <div className="text-left animated-box">
                       <h1 className="font-weight-bold">
                           Create your web applications
                       </h1>          
                       <h3 className="mt-3">
                           with your costomers
                       </h3>
                       <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor a eos voluptatem impedit sunt sint unde molestiae reprehenderit. Illum id nobis enim fuga consequuntur, in doloremque! Maiores beatae asperiores alias!</p>

                       <Link to="/login" className="btn contact-btn px-4 py-2 mt-3 hvr-btn">
                       <FontAwesomeIcon icon={faUsers} className="icon "/>  <span className="ml-3">
                       Contact with us
                       </span>
                       </Link>

                       </div>   
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                            <div className="img-box">
                                <img src={img} alt="ksdj" className="img-fluid image"/>
                            </div>
                </div>
            </div>
            <a href="https://youtu.be/i4laq6e_B6U" target="_blank" className="play-main">
                <div className="play">
                <FontAwesomeIcon icon={faPlay} className="icon "/> 
                </div>
            </a>
        </div>
    );
};

export default HeaderMain;