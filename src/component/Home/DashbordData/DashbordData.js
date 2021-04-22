import React from 'react';
import img1 from '../../../img/ng.png';
import img2 from '../../../img/mh2.png';
import img3 from '../../../img/robin.png';
import Dashbord from '../Dashbord/Dashbord';
import Members from '../Members/Members';

const DashbordData = () => {
    const memberData = [
        {
            name:'MD Nahid',
            img:img1,
            title:'Web Developer',
            discription: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione veniam alias et est impedit nobis mollitia reiciendis nihil, ut pariatur odio, nemo, ex dicta quod cumque quos aperiam aliquid facere?'
        
        }
    ]
    return (
        <div className="row">
           {
                            
                             memberData.map(data => <Dashbord data={data} /> )
           }      
        </div>
    );
};

export default DashbordData;