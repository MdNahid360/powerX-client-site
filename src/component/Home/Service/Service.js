import React from 'react';
import './Service.css';
import icon1 from '../../../img/cvr.jpg';
import icon2 from '../../../img/pexels-tima-miroshnichenko-5380642.jpg';
import icon3 from '../../../img/pexels-tranmautritam-326501.jpg';


import author1 from '../../../img/ng.png';
import author2 from '../../../img/mh2.png';
import author3 from '../../../img/robin.png';
 

import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const cardData = [
        {
            icon : icon1,
            author : author1, 
            name:'Md Nahid', 
            title : 'Web application',
            discription : ' Lorem ipsum dolor sit amet consectetur adipisicing elit,',
            price1 :'400',
            price2 :'980',
            price3 :'1500'

        },
        {
            icon : icon2,
            author : author2, 
            name:'MH Murshed', 
            title : 'app security',
            discription : ' Lorem ipsum dolor sit amet consectetur adipisicing elit,',
            price1 :'480',
            price2 :'1320',
            price3 :'2030'

        },
        {
            icon : icon3,
            author : author3, 
            name:'Md Robins', 
            title : 'Clean Design ',
            discription : ' Lorem ipsum dolor sit amet consectetur adipisicing elit,',
            price1 :'440',
            price2 :'990',
            price3:'1600'


        },
       
    ]
    return (
        <div className="container my-5">
            <h3  className="font-weight-bold ln">Service</h3>
            <div className="row">
                         {
                             cardData.map(cardData => <ServiceCard cardData={cardData} /> )
                         }      
            </div>
        </div>
    );
};

export default  Service;