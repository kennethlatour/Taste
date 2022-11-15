import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./home";
import './App.css';
import Taste from "./taste";
import Quiz from "./quiz";
import Result from "./result";
import Details from "./details"


function App() {
  const [typeState, setTypeState] = useState ()
  const [resultStyle, setResultStyle] = useState()
  const [currentUser, setCurrentUser] = useState({})
  const [styleDetails, setStyleDetails] = useState({})

  const history = useHistory()
 

  function handleLogin(user){
    history.push(`/taste`)
    setCurrentUser(user)
  }



  useEffect(() => {
    fetch(`/styles/${typeState}`)
    .then(res => res.json())
    .then(data => setResultStyle(data))
}, [typeState])

  return (
    
      <div className="App">
        <Switch>
          <Route exact path ="/taste">
           <Taste setStyleDetails = {setStyleDetails} currentUser={currentUser}/>
          </Route>
          <Route exact path ="/quiz">
           <Quiz setTypeState = {setTypeState}/>
          </Route>
          <Route exact path ="/result">
           <Result resultStyle = {resultStyle} currrentUser = {currentUser} />
          </Route>
          <Route exact path ="/details">
           <Details  styleDetails = {styleDetails}/>
          </Route>
          <Route path="/">
          <Home handleLogin={handleLogin} setCurrentUser = {setCurrentUser} />
          </Route>
        </Switch>
      </div>
   
  );
}

export default App;
