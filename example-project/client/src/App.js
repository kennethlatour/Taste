import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import Home from "./home";
import './App.css';
import Taste from "./taste";
import Quiz from "./quiz"


function App() {
  
  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()
  
  function handleLogin(user){
    history.push(`/taste`)
    setCurrentUser(user)
   
  }

  return (
    
      <div className="App">
        <Switch>
          <Route exact path ="/taste">
           <Taste currentUser={currentUser}/>
          </Route>
          <Route exact path ="/quiz">
           <Quiz />
          </Route>
          <Route path="/">
          <Home handleLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
   
  );
}

export default App;
