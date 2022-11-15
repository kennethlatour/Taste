
import {React, useEffect, useState } from "react";
import TasteCard from './taste_card'
import { useHistory } from "react-router-dom";
import './taste_card.css';
import Marquee from "react-fast-marquee";
// import NavigationBar from "./NavigationBar";

function Taste({setStyleDetails}) {
  const [userTaste, setUserTaste] = useState([])
  const [deleteTasteId, setdeleteTasteId] = useState()
  const noblur = false
  const history = useHistory()

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
        
        fetch('/logout',{
        method:'DELETE'
        })
        .then(res => {
        if(res.ok){
            homeScreen()
        }
        })
    }
        

    function homeScreen() {
        history.push("/")
    }

    const tastes =  userTaste.map((styleInfo) => {
        return  <TasteCard key = {styleInfo.id} setdeleteTasteId ={setdeleteTasteId} handleDelete = {handleDelete} styleInfo = {styleInfo} setStyleDetails = {setStyleDetails}/> 
    })

    
    function handleClick () {
        history.push(`/quiz`)
    }
    
    return (
        <div>
        
    
            <div className="header" >
                <p className= "trialText" >
                    Discover the artworld virtually. Here is how to define your taste. take the quiz below and based off a series of images you will be matched to your favorite artforms and a breif history about them. Save them to your catlog to refrence back to in high society conversations 
                </p>
                <img  className="trial" alt = "" src = "https://collectionapi.metmuseum.org/api/collection/v1/iiif/485934/1005920/restricted"/>
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