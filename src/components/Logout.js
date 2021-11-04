import React from 'react';
import { Link } from "react-router-dom";
import decorator from "../assets/Decoration.svg";

export default function Logout() {
    return (
        <div className="login-view">
        <div className="register-container">
            <h3 className="logout-title">Wylogowanie nastąpiło pomyślnie!</h3>
<img src={decorator} alt="decoration" className="decoration" />
<Link to="/" className="btn btn-home">Strona główna</Link>
        </div>
        </div>
    )
}
