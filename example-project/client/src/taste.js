
import {React, useEffect, useState } from "react";
import TasteCard from './taste_card'
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
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
    fetch("/logout", {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then(data => {console.log(data)
    history.push("/")})
}




const tastes =  userTaste.map((styleInfo) => {
    return <TasteCard styleInfo = {styleInfo}/> 
    
  })

// <TasteCard style = {style}/> 
const history = useHistory()
function handleClick () {
    history.push(`/quiz`)
}


    return (
      <div>
      
        <button onClick ={handleDelete}> logout </button>
       
        {tastes}
       <button onClick= {handleClick}> quiz </button>
     </div>
  )
}

export default Taste;