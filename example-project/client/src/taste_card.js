import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import './taste_card.css';

function TasteCard({styleInfo}) {
 
    // document.documentElement.style.setProperty(' --style-img', url(styleInfo.style.img) )

    var divStyle = {
        backgroundImage: 'url(' + styleInfo.style.img + ')',
       
      };
    
    const handleDelete = () => {
        fetch(`/tastes/${styleInfo.id}`, {
            method: "DELETE",
        }).then((res) => {
            console.log("done")
        })
    }  
    return (
      <div style={divStyle} className="tasteCard">
       
     <div className="stlyeName">{styleInfo.style.style}</div>
     <button className = "deletebttn" onClick = {handleDelete}> delete </button>
     
     {/* <img src= {styleInfo.style.img}/> */}
    
     </div>
  )
}

export default TasteCard;