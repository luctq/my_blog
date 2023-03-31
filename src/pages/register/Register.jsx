import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Wellcome to Blog website</span>
        <form action="" className="registerForm">
            <label>Username</label>
            <input type="text" placeholder="Enter your usename..." className="registerInput" />
            <label>Email</label>
            <input type="email" placeholder="Enter your email..." className="registerInput"></input>
            <label>Password</label>
            <input type="password" placeholder="Enter your password..." className="registerInput" />
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
