import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebase.config";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import google from "../../../img/google.png"




const Login = () => {
     const [signedInUser, setSignInUser] = useContext(UserContext)
    
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);

        }

    const handlerLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
        .signInWithPopup(provider)
        .then(res => {
            const {displayName, email,photoURL } = res.user;
            const signedInUser = {name: displayName,  email, photoURL}

                setSignInUser(signedInUser)
                history.replace(from);
        //    setUser(signedInUser)
           console.log();
        
        //   var user = res.user;
    
        }).catch((error) => {
          
          var errorCode = error.code;
          console.log(errorCode);
          var errorMessage = error.message;
          console.log(errorMessage);
          // The email of the user's account used.
          var email = error.email;
          console.log(email);
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(credential);
          // ...
        });


    }

    return (
        <div className="py-5 mt-5">
            
            <h1 className="text-dark">Login</h1>
           
        {
            
             <button className="btn" style={{border:'1px solid gray', borderRadius:'80px', width:'300px'}} onClick={handlerLogin}><img className="img-fluid float-left" style={{width:'20px'}} src={google} alt=""/><span className="ml-3 float-right">login with google</span></button>
        }

 
        </div>
    );
};

export default Login;