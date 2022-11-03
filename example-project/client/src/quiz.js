import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import { useState } from "react";

function Quiz() {
 const [firstState, setFirstState] = useState ("R")
 const [secondState, setSecondState] = useState ("S")
 const [holderState, setHolderState] = useState ("")
 const [secondHolderState, setSecondHolderState] = useState ("")
 const [thirdholderState, setThirdHolderState] = useState ("")

function changeFirstState () {
    // if (firstState === "R" && secondState === "S")
    // {setFirstState("M"); setSecondState("I"); setHolderState("R") }
    // else if (firstState === "M" && secondState === "I" && holderState === "R" ) 
    // {setFirstState("M"); setSecondState("R");setHolderState("M") }
    // else if (firstState === "M" && secondState === "I" && holderState === "S" ) 
    // {setFirstState("M"); setSecondState("S"); setHolderState("M") }
    // else if (firstState === "M" && secondState === "S" && holderState === "S" ) 
    // {setFirstState("A"); setSecondState("S"); setHolderState("M") }
    // else if (firstState === "M" && secondState === "s" && holderState === "M" ) 
    // {setFirstState("M"); setSecondState("A"); setHolderState("M") }
    // else if (firstState === "M" && secondState === "R")
    // {setFirstState("M"); setSecondState("A") }
    // else {console.log(firstState)}
    if (firstState === "R" && secondState === "S")
    {setFirstState("M"); setSecondState("I"); setHolderState("R1") }
    else if (firstState === "M" && secondState === "I"  ) 
    {setFirstState("M"); setSecondState("A"); setSecondHolderState("M1") }
    else (split1Quiz())
}
function changeSecondState () {
    if (firstState === "R" && secondState === "S")
    {setFirstState("M"); setSecondState("I"); setHolderState("S1") }
    else if (firstState === "M" && secondState === "I"  ) 
    {setFirstState("M"); setSecondState("A"); setSecondHolderState("I1") }
    else (split2Quiz())
 

    // if (firstState === "R" && secondState === "S")
    // {setFirstState("M"); setSecondState("I"); setHolderState("R") }
    // else if (firstState === "M" && secondState === "I" && holderState === "R" ) 
    // {setFirstState("M"); setSecondState("R");setHolderState("M") }
    // else if (firstState === "M" && secondState === "I" && holderState === "S" ) 
    // {setFirstState("M"); setSecondState("S"); setHolderState("M") }
    // else if (firstState === "M" && secondState === "S" && holderState === "S" ) 
    // {setFirstState("A"); setSecondState("S"); setHolderState("M") }
    // else if (firstState === "M" && secondState === "s" && holderState === "M" ) 
    // {setFirstState("M"); setSecondState("A"); setHolderState("M") }
    // else if (firstState === "M" && secondState === "R")
    // {setFirstState("M"); setSecondState("A") }
    // else {console.log(secondState)}
}
    function split1Quiz() {
        if (firstState === "M" && secondState === "A")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
       else if (firstState === "M" && secondState === "I")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
    else if (firstState === holderState && secondState === secondHolderState)
        {setFirstState(holderState) ; setSecondState("A1")}}

    function split2Quiz() {
        if (firstState === "M" && secondState === "A")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
         else if (firstState === "M" && secondState === "I")
        {setFirstState(holderState) ; setSecondState(secondHolderState)}
        else if (firstState === holderState && secondState === secondHolderState)
        {setFirstState("A1") ;setSecondState(secondHolderState)}}
    


    return (
      <div>
     <button onClick = {changeFirstState}> {firstState} </button>
     <button onClick = {changeSecondState}> {secondState} </button>
     </div>
  )
}

export default Quiz;