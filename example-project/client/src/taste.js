
import {React, useEffect, useState } from "react";
import TasteCard from './taste_card'
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import './taste_card.css';
import Marquee from "react-fast-marquee";
// import NavigationBar from "./NavigationBar";

function Taste({currentUser}) {
  const [userTaste, setUserTaste] = useState([])
    useEffect(() => {
        fetch("/tastes")
        .then(res => res.json())
        .then(data => setUserTaste(data))
    }, [])
console.log(userTaste)

function handleDelete(){
    fetch("/sessions", {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(data => {console.log(data)
    handleLogout()})
}

function handleLogout() {
    history.push("/")
}



const tastes =  userTaste.map((styleInfo) => {
    return <TasteCard styleInfo = {styleInfo}/> 
    
  })

// <TasteCard style = {style}/> 
const history = useHistory()
function handleClick () {
    history.push(`/quiz`)
}
const noblur = false




    return (
        <div>
        
    
        <div className="header" >
        <p className= "trialText" >

        Discover the artworld virtually. Here is how to define your taste.

{/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  */}
     

take the quiz below and based off a series of images you will be matched to your favorite artforms and a breif history about them. Save them to your catlog to refrence back to in high society conversations 
</p>
<img  className="trial" src = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/485934/1005920/restricted"/>


        {/* <Marquee gradient = {noblur} > */}
      {/* <span >Discover the artworld virtually. Here is how to define your taste. </span>
      <img src = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/485934/1005920/restricted"/>
        <span>take the quiz below and based off a series of images you will be matched to your favorite artforms and a breif history about them. Save them to your catlog to refrence back to in high society conversations </span>
      </Marquee> */}
        </div>
        <Marquee gradient = {noblur} direction = "left">
        <button className= "quizButtonName" onClick= {handleClick}>  QUIZ</button>
        <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       <button className= "quizButton" onClick= {handleClick}> QUIZ </button>
       
  
       
       </Marquee>
       <Marquee gradient = {noblur} direction = "right" >
       <div className= "results">
       CATALOG CATALOG CATALOG CATALOG CATALOG CATALOG CATALOG 
        
       </div>
       </Marquee>
       <Marquee gradient = {noblur} direction = "right">
        <div className="tasteContainer">
        {tastes}
        </div>
        </Marquee>
        <button className= "logoutButton" onClick ={handleDelete}> logout </button>

     </div>
  )
}

export default Taste;