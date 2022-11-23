
import React, { useState } from 'react'
import "../styles/Login.css"
import axios from 'axios'

export const Login = () => {

     const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")

   const handleLogin=()=>{
   console.log(email,password)
    const payload={
        email,
        password
    }
    axios({
        method: "post",
        url: "http://localhost:8000/login",
        data: payload
   } 
    )
}
  return (
    <div>
        <div id="login">
            <h3>Log In</h3>
            <input type={"text"} placeholder="Enter Your Mail" onChange={(e)=>{setEmail(e.target.value)}} vlaue={email}></input>
            <input type={"password"} placeholder="Enter Your Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
             <button onClick={handleLogin}>Log In</button>
        </div>
    </div>
  )
}
