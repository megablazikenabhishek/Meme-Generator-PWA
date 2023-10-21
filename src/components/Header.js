import React from "react"
import logo from '../assets/troll-face.svg';
export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">made with ♥ by Abhii</h4>
        </header>
    )
}