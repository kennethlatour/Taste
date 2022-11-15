import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { useHistory } from "react-router-dom";


function SignupModal({handleShow, show, handleClose, handleLogin}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    function handleSubmit(e){
    e.preventDefault()

    const userData = {
        username : username,
        password : password,
        password_confirmation : confirmPassword,
        email : email
    }

    fetch('/signup', {
      method: "POST",
      headers: {
       "Content-Type" : "application/json",
    },
      body: JSON.stringify(userData),
    })
    .then((r) => r.json())
    .then((data) => {console.log(data); defaultStyle(data)
    })
    setTimeout(()=> fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({username: userData.username,
    password: userData.password})
    })
    .then((r) => r.json())
    .then((data) => {handleLogin(data)
    }), 2000)
  }
    
  function defaultStyle (data) {
   
    const useId = data.id
    const newTaste = {style_id: 16, user_id: useId}
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
      console.log(newTaste);
})
  }
  
    
    return(
    <> 
    <Button  className = "login" variant="primary" onClick={handleShow}>
    Register
    </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header >
      <Modal.Title>Register</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="email-address">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@account.com"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>  
        <Form.Group className="mb-3" controlId="confirm-password">
          <Form.Label> Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            autoFocus
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group> 
         <Button closeButton className = "logSubmit" variant="primary" type="submit" >
        Register
      </Button>
      </Form>
      
    </Modal.Body>
  </Modal>
</>


    )
}


export default SignupModal;