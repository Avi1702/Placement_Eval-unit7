import axios from 'axios'
import React from 'react'
import "../styles/Register.css"
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {

    const [name,setName]=React.useState("")
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [confirm,setConfirm]=React.useState("")
   
    const navigate=useNavigate()


    const register=()=>{
         
        let payload={
            name,
            email,
            password
        }
        axios({
            method: "post",
            url: "http://localhost:8000/register",
            data: payload
        })
            .then((res) => { console.log(res) })
            .catch((err) => console.log(err))

        window.alert("User Register Successfully")
        navigate("/Login")
    }
  return (
    <div id="register">
        <h4>Register Here</h4>
        <form>
            <input type={"test"} placeholder="name" name='name' onChange={(e)=>{setName(e.target.value)}} value={name}></input>
            <input type={"email"} placeholder="email" name='email' onChange={(e)=>{setEmail(e.target.value)}} value={email}></input>
            <input type={"password"} placeholder="password" name='password' onChange={(e)=>{setPassword(e.target.value)}} value={password}></input>
            <input type={"password"} placeholder="confirm password" name="confirm" onChange={(e)=>{setConfirm(e.target.value)}} value={confirm}></input>

            <button onClick={register}>Register</button>

            <h6>If you are registered user then <Link to='/Login'>Login Here</Link></h6>

        </form>
    </div>
  )
}
