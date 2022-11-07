import React, { useState } from 'react';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import { useHistory } from "react-router-dom";
import './App.css'
function Home( { handleLogin , setCurrentUser} ){
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignupShow = () => setSignupShow(true)
    const handleSignupClose = () => setSignupShow(false);
//Will have a signup and login modal
    return (
        <div className='top'>
        <>
        <div className='title'> TASTE</div>
       <img className='top' src = 'https://64.media.tumblr.com/1bb8f47cc7aeab2d541867c251244ebb/tumblr_p67sm2UF8W1trkvxko1_r1_1280.jpg'/>
        <div className= "overlay" id = "login">
            <div className = "vertical-center">
            <SignupModal
            
            show={signupShow}
            handleClose={handleSignupClose}
            handleShow={handleSignupShow}
            handleLogin={handleLogin}
            />
            <div className= "vertical-center">
            <LoginModal
            setCurrentUser = {setCurrentUser} 
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            handleLogin={handleLogin}
            />
            </div>
            
            </div>
        </div>
          
        </>
        </div>
    );
    
}

export default Home;