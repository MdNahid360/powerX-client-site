import React from 'react';
import { Link, Router } from 'react-router-dom';

const Members = (memberData) => {
    return (
        <div className="row mt-5">
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
            <div className="col-lg-10 col-md-10 col-12 items bg-danger">
                <div className="card bg-primary">
                    <div className="card-body">
                        <h5>
                            {
                                memberData.name
                            }
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;