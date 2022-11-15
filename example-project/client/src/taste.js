
import {React, useEffect, useState } from "react";
import TasteCard from './taste_card'
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import './taste_card.css';
import Marquee from "react-fast-marquee";
// import NavigationBar from "./NavigationBar";

function Taste({currentUser, setStyleDetails}) {
  const [userTaste, setUserTaste] = useState([])
  const [deleteTasteId, setdeleteTasteId] = useState()

useEffect(()=>{
    fetch('/authorized_user')
    .then(res => res.json())
    .then(user => {
        setUserTaste(user.tastes)
        
    })
   
},[])

const handleDelete = () => {
    fetch(`/tastes/${deleteTasteId}`, {
        method: "DELETE",
    }).then((res) => {
        console.log("done")
    })
}  

const handleLogout = () => {
    // DELETE `/logout`
    fetch('/logout',{
      method:'DELETE'
    })
    .then(res => {
      if(res.ok){
        // updateUser(false)
        homeScreen()
      }
    })
  }
      

function homeScreen() {
    history.push("/")
}



const tastes =  userTaste.map((styleInfo) => {
    return  <TasteCard setdeleteTasteId ={setdeleteTasteId} handleDelete = {handleDelete} styleInfo = {styleInfo} setStyleDetails = {setStyleDetails}/> 
    

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
        </div>
        <Marquee  gradient = {noblur} direction = "left">
        <button className= "quizButtonName" onClick= {handleClick}> take QUIZ &nbsp;  &nbsp; take QUIZ &nbsp;&nbsp;  take QUIZ  &nbsp;&nbsp; take QUIZ</button>
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
        <button className= "logoutButton" onClick ={handleLogout}> logout </button>

     </div>
  )
}

export default Taste;