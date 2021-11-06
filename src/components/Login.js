import React from 'react';
import Nav from './Nav';
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";

export default function Login() {
    return (
        <div className="login-view">
            <Nav />
           
            <div className="login-container">
<h3 className="login-title">Zaloguj się</h3>
<img src={decorator} alt="decoration" className="decoration" />
<div className="login-form">
<label for="mail">Email</label>
<input type="text" name="mail"></input>
<label for="password">Hasło</label>
<input type="password" name="password"></input>
</div>
<div className="login-buttons">
<Link to="/register" className="btn btn-login">Załóż konto</Link>
<button type="submit" className="btn btn-login">Zaloguj się</button>
</div>
            </div>
            </div>
        
    )
}
