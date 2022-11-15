import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './taste_card.css';

function TasteCard({styleInfo, setStyleDetails, handleDelete, setdeleteTasteId}) {
  const history = useHistory()
  const [actualStyle, setActualStyle] = useState("")
  const deleteId = styleInfo.id
  setdeleteTasteId(deleteId)
    var divStyle = {
        backgroundImage: 'url(' + actualStyle.img + ')',
       
      };
      useEffect(()=>{
    fetch(`/styles/${styleInfo.style_id}`)
    .then(res => res.json())
    .then(user => {
      setActualStyle(user)
      
    })}, [])

    // const handleDelete = () => {
    //     fetch(`/tastes/${styleInfo.id}`, {
    //         method: "DELETE",
    //     }).then((res) => {
    //         console.log("done")
    //     })
    // }  
    function details (){
      setStyleDetails(actualStyle)
      history.push('./details')
    }
    return (
      <div  style={divStyle} className="tasteCard">
       
     <div onClick = {details} className="stlyeName">{actualStyle.style}</div>
     <button className = "deletebttn" onClick = {handleDelete}> delete </button>
     
     {/* <img src= {actualStyle.img}/> */}
    
     </div>
  )
}

export default TasteCard;