import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-12 mt-3 text-left">
                            <h3 className="">PowerX</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas placeat, eos id facere itaque,  
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mt-3 text-left">
                            <ul className="list-unstyled text-white">
                            <li className="text-white">
                                   <span  className="font-weight-bold text-primary">
                                       Links
                                   </span>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Home</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Service</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Project</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Blog</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Team</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 mt-3 text-left">
                            <ul className="list-unstyled text-white">
                             
                                <li className="text-white">
                                   <span  className="font-weight-bold text-primary">
                                       Information
                                   </span>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Register Now</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Advance</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Video</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Blog</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Team</a>
                                </li>
                                <li className="text-white">
                                    <a href="#" className="text-left text-white">Updates</a>
                                </li>
                            </ul>
                        </div>
                      
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;