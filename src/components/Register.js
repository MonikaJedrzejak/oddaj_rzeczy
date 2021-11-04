import React from 'react';
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";

export default function Register() {
    return (
        <div className="login-view">
           
            <div className="register-container">
<h3 className="login-title">Załóż konto</h3>
<img src={decorator} alt="decoration" className="decoration" />
<div className="login-form">
<label for="mail">Email</label>
<input type="text" name="mail"></input>
<label for="password">Hasło</label>
<input type="password" name="password"></input>
<label for="password">Powtórz hasło</label>
<input type="password" name="password"></input>
</div>
<div className="login-buttons">
<Link to="/login" className="btn btn-login">Zaloguj się</Link>
<button type="submit" className="btn btn-login">Załóż konto</button>
</div>
            </div>
            </div>
        
    )
}
