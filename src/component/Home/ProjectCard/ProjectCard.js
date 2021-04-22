import React, { useState } from 'react';
import ProjectPopup from '../ProjectPopup/ProjectPopup';

const ProjectCard = ({data}) => {

     
    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
     
   
  
    function closeModal(){
      setIsOpen(false);
    }
  

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-header">
                        <img src={data.img} className="img-fluid" alt="image"/>
                </div>
                <div className="card-bod px-3 py-3">
                    <h6 className="font-weight-bold">
                        {data.title}
                    </h6>
                    <small>{data.discription}</small><br/>
                    <button onClick={openModal} className="btn btn-info btn-brand">See more</button>
                    <ProjectPopup modalIsOpen={modalIsOpen} projectOn={data.title} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;