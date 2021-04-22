 import './App.css';
import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './img/Group 1.png';
import Hire from './component/Home/Hire/Hire';
import Login from './component/Home/Login/Login';
import { createContext, useState } from 'react';
import './component/Home/Login/login.css';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import DashbordData from './component/Home/DashbordData/DashbordData';
import Dashbord from './component/Home/Dashbord/Dashbord';
export const UserContext = createContext(); 
function App() {

  const [signedInUser, setSignInUser] = useState({});
  

  return (
    <div className="App">

        <UserContext.Provider value={[signedInUser, setSignInUser]}>
         
             <nav className="navbar navbar-expand-lg navbar-light text-white sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
           <img src={logo} className="img-fluid" style={{width:"140px"}} alt=""/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >



            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <Router>
           <ul className="navbar-nav ml-auto">
               <li className="nav-item px-3">
                    <Link to="/home" className="text-white">
                       Home
                    </Link>
               </li>
               <li className="nav-item px-3">
                    <Link to="/service" className="text-white" to="/service">
                       Service
                    </Link>
               </li>
             
               <li className="nav-item px-3">
                    <Link to="/about" className="text-white" to="/project">
                       Project
                    </Link>
               </li>
               <li className="nav-item px-3">
                    <Link to="/blog" className="text-white" to="/blog">
                       blog
                    </Link>
               </li>
               <li className="nav-item px-3">
                    <Link to="/team" className="text-white" to="/team">
                       Team
                    </Link>
               </li>
               <li className="nav-item px-3">
                    <Link to="/contact" className="text-white" to="/contact">
                       Contact
                    </Link>
               </li>
               <li className="nav-item text-white">
                               <Link to="/dashboard" className="text-white">Dashbord</Link>
                            </li>
               <li className="nav-item px-3 d-lg-block d-md-block d-none">
                    <img src={signedInUser.photoURL} className="img-fluid user" alt=""/>
               </li>
               <li className="nav-item px-1 d-lg-none d-md-none d-block">
                   <small className="font-weight-bold text-white nav-link">{signedInUser.name}</small>
               </li>
               <li className="nav-item px-1 d-lg-none d-md-none d-block">
                   <small className="font-weight-bold text-white nav-link">{signedInUser.name}</small>
               </li>

            
            </ul>
           </Router>
            
          </div>
        </div>
      </nav>

        <Router>
           
        <Switch>
        
          <Route exact path="/">
               <Home />
          </Route>
          <Route path="/home">
             <Home />
          </Route>
              <PrivateRoute path="/hire">
          <Hire />
          </PrivateRoute>
         
          <Route path="/login">
              <Login />
          </Route>

         

          <Route  path="/home">
          <Home />
          </Route>

          <PrivateRoute  path="/dashboard">
             <Dashbord />
          </PrivateRoute>
        </Switch>
    
    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
