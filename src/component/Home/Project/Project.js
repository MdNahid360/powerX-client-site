import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import img1 from '../../../img/ecomarce.jpeg';
import img2 from '../../../img/portfolio.JPG';
import img3 from '../../../img/Web 1920 – 1.jpg';

const Project = () => {
      const projectData=[
          {
              img          :img1,
              title        : 'E-Comarce',
              discription  : '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus culpa, '
               
          },
          {
              img          :img2,
              title        : 'Portfolio',
              discription  : '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus culpa, '
               
          },
          {
              img          :img3,
              title        : 'news portal',
              discription  : '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus culpa,  '
               
          }
      ]
    return (
        <div className="container mt-5 py-5">
            <h3 className="font-weight-bold">
                Project
            </h3>
            <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Quis, optio!
            </p>
            <div className="row py-4">
                {
                     projectData.map(data=> <ProjectCard data={data} />)   
                }
            </div>
        </div>
    );
};

export default Project;