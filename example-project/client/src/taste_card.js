import {React, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

function TasteCard({styleInfo}) {
 
    const handleDelete = () => {
        fetch(`/tastes/${styleInfo.id}`, {
            method: "DELETE",
        }).then((res) => {
            console.log("done")
        })
    }  
    return (
      <div>
     <h1>{styleInfo.style.style}</h1>
     <img src= {styleInfo.style.img}/>
    <button onClick = {handleDelete}> delete </button>
     </div>
  )
}

export default TasteCard;