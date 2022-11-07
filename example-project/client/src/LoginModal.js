import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './App.css'
function LoginModal({handleShow, show, handleClose, handleLogin, setCurrentUser}){
  const [ loginData, setLoginData ] = useState({username: "", password: ""})

  const handleOnChange = (event) => {
    const name = event.target.name
    let value = event.target.value

    setLoginData({...loginData, [name]: value})
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    fetch("/login", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData)
    })
    .then((res) => {
      if(res.ok) {
        res.json().then(user => {
          handleLogin(user) 
          setCurrentUser(user)
      })
      }else{res.json().then(json => console.log(json.errors))} 
    })
  }


    return( <>
        <Button className = "login" variant="primary" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group className="mb-3" >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleOnChange}
                  autoFocus
                />
              </Form.Group>
              <Button className = "logSubmit" variant="primary" type='submit' onClick={handleClose}>
              Login
            </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
       
          </Modal.Footer>
        </Modal>
      </>



    )
}


export default LoginModal;