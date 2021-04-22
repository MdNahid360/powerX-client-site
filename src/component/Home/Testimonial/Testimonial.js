import React from 'react';
import './Testimonial.css';
import user from '../../../img/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Testimonial = () => {
    return (
        <div className="box4 d-flex align-items-center  overflow-auto  py-5">
            <div className="row container m-auto">
                <div className="col-lg-6 col-md-6 col-12 text-left">
                    <h3 className="font-weight-bold">
                        Testimonials
                    </h3>
                    <h5>
                        What clients say
                    </h5>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dolor repellat, nesciunt consequatur aliquid, mollitia repudiandae a placeat quae cupiditate molestiae fugiat debitis ratione velit reiciendis voluptate magni nam!
                    </small>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="users-bos">
                        <div className="d-flex align-items-center">
                           <div className="i">
                             <img src={user}  className="img-fluid user-pic" alt=""/>
                           </div>
                           <div className="name">
                                    <h6 className=" font-weight-bold ml-3">Chonchol Chowdhuri</h6>
                                    <small className="text-left  float-left ml-3 ">AgencyCo</small>
                                   
                           </div>
                        </div>
                        <p className="text-left mt-3">
                      <span className=" pr-1 pb-1">  <FontAwesomeIcon icon={faQuoteLeft} className="icon " className="ic "/> </span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis quos modi totam distinctio recusandae voluptatum nihil quod qui numquam exercitationem facere quo, incidunt placeat soluta aut error commodi asperiores accusamus.
                                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;