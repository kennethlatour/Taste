import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './taste_card.css';

function TasteCard({styleInfo, setStyleDetails, setUserTaste}) {
  const history = useHistory()
  const [actualStyle, setActualStyle] = useState("")
  
    var divStyle = {
        backgroundImage: 'url(' + actualStyle.img + ')',
       
      };
      useEffect(()=>{
    fetch(`/styles/${styleInfo.style_id}`)
    .then(res => res.json())
    .then(user => {
      setActualStyle(user)
      
    })}, [])

    const handleDelete = () => {
        fetch(`/tastes/${styleInfo.id}`, {
            method: "DELETE",
        }).then((res) => {
            console.log("done")
            catalogUpdate()
        })
    }  

    function catalogUpdate (){
    fetch('/authorized_user')
        .then(res => res.json())
        .then(user => {
            setUserTaste(user.tastes)
            
        })}

    function details (){
      setStyleDetails(actualStyle)
      history.push('./details')
    }

    return (
      <div  style={divStyle} className="tasteCard">
        <div onClick = {details} className="stlyeName">{actualStyle.style}</div>
        <button className = "deletebttn" onClick = {handleDelete}> delete </button>
     </div>
  )
}

export default TasteCard;