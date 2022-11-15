import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './result.css';
import Marquee from "react-fast-marquee";

function Result({resultStyle}) {
    const history = useHistory()
    const [userId, setUserId] = useState()
    const noblur = false

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

    function goBack () {
      history.push('/taste')
    }

    return (
      <div>
        <Marquee gradient = {noblur} direction = "right"> 
          <button className= "saveButton" onClick = {saveStyle}>Save to CATALOG Save to CATALOG Save to CATALOG Save to CATALOG </button>
        </Marquee>
          <div className="styleName"> {resultStyle.style}</div>
          <img  className="styleImg" alt = {resultStyle.style} src = {resultStyle.img} />
          <div className="styleDescript"> {resultStyle.descript}</div>
        <Marquee gradient = {noblur} direction = "left"> 
          <button className= "backButton" onClick = {goBack}>Back back back back back back back back back back back back</button>
        </Marquee>
     </div>
  )
}

export default Result;