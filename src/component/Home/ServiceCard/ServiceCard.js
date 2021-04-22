import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({cardData}) => {
    return (
        <div className="col-md-4 mt-3 p-4">
            <div className="sdo">
                 <div className="card">
                     <div className="card-header overflow-hidden px-1 pt-1 pb-1">
                     <img className="img-fluid" src={cardData.icon} alt="img"/>
                            <div className="hvr d-flex justify-content-center align-items-center">
                            <Link to="/hire" className="btn mBtn btn-outline-danger  ibt"> <FontAwesomeIcon icon={faAngleDoubleRight}   className="icn "/> Hire Me</Link>
                        </div>
                    </div>
                    
                     <div className="w-100 card-body px-3 py-3">
                       
                         <div className="d-flex">
                                <div className="profile ">
                                    <img src={cardData.author} className="img-fluid" alt="img"/>
                                </div>
                                <div className="info ml-2 text-left  align-items-center">
                                    <h6 className="font-weight-bold">{cardData.name}</h6> 
                                    <small>{cardData.title}</small>

                                   
                                </div>
                                
                         </div>
                         <p className="text-left text-justify fon mt-3 text-justify ">{cardData.discription}</p>
       
                     </div>
                        <div className="card-footer p-0">
                        <div className="prc d-flex mx-auto w-100">
                                    <div className="box1 brd  px-3 py-2  d-block">
                                        <small className="font-weight-bold text-center p-1 pr">
                                            Basic
                                        </small> <br/>
                                        <small className="font-weight-bold " style={{color:'#09008a'}}>$ {cardData.price1}</small>   
                                        
                                    </div>     
                                    <div className="box2 brd px-3 py-2 w-100 d-block">
                                        <small className="font-weight-bold text-center p-2 pr">
                                            Standerd
                                        </small> <br/>
                                        <small className="font-weight-bold " style={{color:'#09008a'}}>$ {cardData.price2}</small>   
                                        
                                    </div>     
                                    <div className="box3 brd  px-1 py-2 w-100 d-block">
                                        <small className="font-weight-bold text-center p-2 pr">
                                            Premium
                                        </small> <br/>
                                        <small className="font-weight-bold " style={{color:'#09008a'}}>$ {cardData.price3}</small>   
                                        
                                    </div>     
                            </div>            
                        </div>
                 </div>
                  
            </div>
        </div>
    );
};

export default ServiceCard;