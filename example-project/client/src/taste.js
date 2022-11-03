
import {React, useEffect, useState } from "react";
import TasteCard from './taste_card'
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

function Taste({currentUser}) {
  const [userTaste, setUserTaste] = useState({})
    useEffect(() => {
        fetch("/styles")
        .then(res => res.json())
        .then(data => setUserTaste(data))
    }, [])
console.log(userTaste)

const tastes = userTaste
const history = useHistory()
function handleClick () {
    history.push(`/quiz`)
}


    return (
      <div>
    
       <TasteCard style={userTaste} />
       <button onClick= {handleClick}> quiz </button>
     </div>
  )
}

export default Taste;