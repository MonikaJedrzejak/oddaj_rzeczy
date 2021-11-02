import React from 'react';
import {Link} from 'react-router-dom';
import decorator from '../assets/Decoration.svg';

export default function HomeHeader() {
    return (
        <div className="home-header-container">
        <div className="header-image"></div>
        <div className="header-text-container">
        <h2 className="header-title">Zacznij pomagać!</h2>
        <h2 className="header-title">Oddaj niechciane rzeczy w zaufane ręce</h2>
        <img src={decorator} alt="decoration" className="decoration"/>
        <div className="header-btn-container">
            <button className="btn btn-header"><Link to="/login" >ODDAJ RZECZY</Link></button>
            <button className="btn btn-header"><Link to="/login" >ZORGANIZUJ ZBIÓRKĘ</Link></button>
        </div>
        </div>
        </div>
    )
}
