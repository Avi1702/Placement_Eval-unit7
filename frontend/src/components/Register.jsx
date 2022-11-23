import React from 'react'

export const Register = () => {

    const [form,setForm]=React.useState({name,email,password,confirm_password})

    const change=(e)=>{
      {name,email,password,confirm_password} = e.target.value  
    }

    const register=()=>{

    }
  return (
    <div>
        <form>
            <input type={"test"} placeholder="name" name='name' onChange={(e)=>{change(e)}} value={name}></input>
            <input type={"email"} placeholder="email" name='email' onChange={(e)=>{change(e)}} value={email}></input>
            <input type={"password"} placeholder="password" name='password' onChange={(e)=>{change(e)}} value={password}></input>
            <input type={"password"} placeholder="confirm password" name="confirm" onChange={(e)=>{change(e)}} value={confirm_password}></input>

            <button onClick={register}>Register</button>

        </form>
    </div>
  )
}
