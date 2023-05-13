import React from "react";
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="links">
                <a href="/home" className="homeLink">Home</a>
                <a href="/about" className="aboutLink">About</a>
                <a href="/profile" className="profileLink">Profile</a>
                <a href="/contact" className="contactLink">Contact</a>
            </div>
        </div>
    )
}