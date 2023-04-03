import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Wellcome to Blog website</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="email" placeholder="Enter your email..." className="loginInput"></input>
            <label>Password</label>
            <input type="password" placeholder="Enter your password..." className="loginInput" />
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">Register</Link>
        </button>
    </div>
  )
}
