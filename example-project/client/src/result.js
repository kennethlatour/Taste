import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

function Result({resultStyle, currentUser}) {
 
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
        history.push('/tastes');
 })
 }
    return (
      <div>
       <h1> {resultStyle.style}</h1>
       <img src = {resultStyle.img} />
       <h2> {resultStyle.descript}</h2>
       <button onClick = {saveStyle}>Save</button>
     </div>
  )
}

export default Result;