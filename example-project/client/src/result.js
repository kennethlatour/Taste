import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './result.css';
import Marquee from "react-fast-marquee";

function Result({resultStyle, currentUser}) {
 console.log(currentUser)
const history = useHistory()
 const [userId, setUserId] = useState()
          useEffect(() => {
              fetch("/tastes")
              .then(res => res.json())
              .then(data => setUserId(data))
          }, [])
 
 function saveStyle () {
  
    const obj = userId[0]
    const id = obj.user_id
    const newTaste = {style_id: resultStyle.id , user_id: id}
    console.log(newTaste)
    
    fetch("/tastes", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(newTaste)
    })
    .then((res) => res.json())
    .then((res) => {
        history.push('/taste');
 })
 }
 const noblur = false
    return (
      <div>
            <Marquee gradient = {noblur} direction = "right"> 
       <button className= "saveButton" onClick = {saveStyle}>Save Save Save Save Save save save save Save save save save</button>
       </Marquee>
       <div className="styleName"> {resultStyle.style}</div>
       <img  className="styleImg" src = {resultStyle.img} />
       <div className="styleDescript"> {resultStyle.descript}</div>
   
     </div>
  )
}

export default Result;