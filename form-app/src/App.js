import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import validator from "validator";
import FinalResult from "./FinalResult"
import Form from './Form'
 

function App(props) {
  
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState(<div className="white">Name</div>)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState(<div className="white">Email</div>)
    const [username, setUsername] = useState("")
    const [usernameError, setUsernameError] = useState(<div className="white">Username</div>)
    const [pword, setPword] = useState("")
    const [pwordError, setPwordError] = useState(<div className="white">Password</div>)
    const [conword, setConword] = useState("")
    const [conwordError, setConwordError] = useState(<div className="white">Confirm Password</div>)
    const [site, setSite] = useState("")
    const [siteError, setSiteError] = useState(<div className="white">Website</div>)
  
  function handleSubmit(e){
    e.preventDefault()
    let err = false
  
    if (validator.isEmpty(name)){
      setNameError(<div className="red">Name - Cannot be blank</div>)
    }
  
    if (!validator.isEmail(email)) {
      setEmailError(<div className="red">Email - Must be a valid email</div>)
    }
    
    if (validator.isEmpty(username)) {
        setUsernameError(<div className="red">Username - Cannot be blank</div>)
    } 
    
    if (pword !== '') {
      if (!validator.matches(pword, conword)) {
        err = true
        setPwordError(<div className="red">Password - Cannot be blank</div>)
      } else {
        setPwordError(<div className="white">Password</div>)
      } 
    } else {
        err = true
        setPwordError(<div className="red">Password - Cannot be blank</div>)
    }
    
  
    if (conword !== '') {
      if (!validator.matches(pword, conword)) {
        err = true
        setConwordError(<div className="red">Confirm Password - Must match the password</div>)
      } else {
        setConwordError(<div className="white">Confirm Password</div>)
      }
    } else {
        err = true
        setConwordError(<div className="red">Confirm Password - Must match the password</div>)
    }
    
    if (!validator.isURL(site)) {
      setSiteError(<div className="red">Website - Must be a valid url</div>) 
    }
  
    if (!err) {
      console.log("Submitted")
      props.history.push('FinalResult')
    } else {
      console.log("not submitted")
    }
  }
  
    return (
      <div className="container">
        
        <form onSubmit={handleSubmit} >
          <p>Profile Form - All fields required</p>

          {/* <label 
                className={textError ? 'error' : ''}
                htmlFor="name">Name {textError ? textError : null}</label> */}


         <label className="error">{nameError}</label>
          <input 
            className={nameError === "" ? "" : ""}
            onChange={e => setName(e.target.value)}
            placeholder="Michael"
            type="text"
            value={name}
          />
          <label className="error">{emailError}</label>
          <input 
            className={emailError === "" ? "" : ""}
            onChange={e => setEmail(e.target.value)}
            placeholder="email@test.com"
            type="email"
            value={email}
          />
          <label className="error">{usernameError}</label>
          <input
            className={usernameError === "" ? "" : ""}
            onChange={e => setUsername(e.target.value)}
            placeholder="myusername"
            type="text"
            value={username}
          />
          <label className="error">{pwordError}</label>
          <input
            className={pwordError === "" ? "" : ""}
            onChange={e => setPword(e.target.value)}
            placeholder="Password"
            type="password"
            value={pword}
          />
          <label className="error">{conwordError}</label>
          <input 
            className={conwordError === "" ? "" : ""}
            onChange={e => setConword(e.target.value)}
            placeholder="Retype Password"
            type="password"
            value={conword}
          />
          <label className="error">{siteError}</label>
          <input
            className={siteError === "" ? "" : ""} 
            onChange={e => setSite(e.target.value)}
            placeholder="https://mywebsite.com"
            type="text"
            value={site}
          />
  
          <button type="submit">Submit</button>
  
          </form>
      </div>
    )
  }
  

export default App;
