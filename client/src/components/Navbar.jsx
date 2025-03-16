import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../store/auth'

function Navbar() {
    const {isLoggedin} = useAuth();
  return (
    <>
        <header>
            <div className="container header">
                <div className="logo-branding">
                    <NavLink to="/">MERN PROJECT</NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {isLoggedin
                        ?
                        <>
                        <li><NavLink to="/dashboard"> Dashboard</NavLink></li>
                        <li><NavLink to="/logout"> Logout</NavLink></li>
                        </>
                        :
                        <>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/registration"> Registration</NavLink></li>
                        </>}
                    </ul>
                </nav>
            </div>
        </header>
    </>
  )
}

export default Navbar
