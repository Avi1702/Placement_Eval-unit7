import React from 'react'
import "../styles/navbar.css"
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    
        <div id={"main"}>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Todos">Todos</Link></li>
                <li> <Link to="/">Sign Up</Link></li>
                <li><Link to="/Login">LogIn</Link></li>

            </ul>
        </div>
    
  )
}
