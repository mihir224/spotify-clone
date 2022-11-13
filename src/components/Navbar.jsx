import React from "react";
import "../Navbar.css";
import logo from "../images/spotify.png"

function Navbar(){
    return(
        <div className="navbarDiv">
        <h1 className="logo"><img src={logo} alt="logo-img" height="40" width="40"></img> Spotify®</h1>
        </div>
    );
}

export default Navbar;