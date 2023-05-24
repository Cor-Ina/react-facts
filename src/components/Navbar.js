import React from "react";
import iconSmall from '../images/react-icon-small.png';

export default function Navbar() {
    return (
        <nav>
            <div class="nav--left">
                <img src={iconSmall} className="nav--icon" alt="react logo"/>
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}