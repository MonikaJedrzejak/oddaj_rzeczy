import React from 'react';
import iconFb from "../assets/Facebook.svg";
import iconIG from "../assets/Instagram.svg";

export default function HomeFooter() {
    return (
        <footer className="HomeFooter">
            <div className="footer-container container">
            <span>Copyright by Coders Lab</span>
            <div className="footer-icons">
            <img src={iconFb} alt="Facebook icon" className="footer-icon"/>
            <img src={iconIG} alt="Instagram icon" className="footer-icon"/>
            </div>
            </div>
        </footer>
    )
}
