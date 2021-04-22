import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../Dashbord/Dashbord.css';
import Members from '../Members/Members'
const Dashbord = (data) => {
  
    const [userInfo, setUserInfo] = useState();
    const [file, setFile] = useState(null);
    
    const handleBlur = e =>{
        const newUserInfo = {...userInfo};
        newUserInfo [e.target.name] = e.target.value;
        setUserInfo(newUserInfo)
    }

        const handleFileChange = (e) => {
            const newFile = e.target.files[0];
            setFile(newFile);
        }


        const handleSubmit=()=>{
            
        }


    return (
       <div className="w-100 overflow-hidden">
              <div className="row bg-white mt-5 ">
               <div className="col-lg-2 col-ml-2 col-md-2 col-12 bg-danger menu container pt-4">
                <ul className="list-unstyled px-2">
                    <li className="py-2 px-3  text-left">
                        <Link to="members" className="text-white"> 
                        Member
                        </Link>
                    </li>
                    <li className="py-2 px-3  text-left">
                        <Link to="members" className="text-white"> 
                        Projects
                        </Link>
                    </li>
                    <li className="py-2 px-3  text-left">
                        <Link to="members" className="text-white"> 
                        Add Developer
                        </Link>
                    </li>
                    <li className="py-2 px-3  text-left">
                        <Link to="members" className="text-white text-left"> 
                        Setting
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="col-lg-10 col-md-10 col-12">
            <div className="container py-4">
        
               <form className="form" onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Your Email</label>
                        <input type="email"
                        onBlur={handleBlur} class="form-control" id="exampleInputEmail1" 
                        name="email"
                        placeholder="Enter your email" />
                      
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Your Name</label>
                        <input type="text"
                         onBlur={handleBlur}  class="form-control"  
                        name="name"
                        placeholder="Enter your name" />
                      
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload file</label>
                        <input type="file" class="form-control" onChange={handleFileChange} id="exampleInputPassword1"  />
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                
            </div>
            </div>
        </div>
       </div>
    );
};

export default Dashbord;