
import React from 'react'
import "../styles/Login.css"

export const Login = () => {
  return (
    <div>
        <div id="login">
            <h3>Log In</h3>
            <input type={"text"} placeholder="Enter Your Mail"></input>
            <input type={"password"} placeholder="Enter Your Password"></input>
             <button>Log In</button>
        </div>
    </div>
  )
}
