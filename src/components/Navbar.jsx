import React from "react";
import "../Navbar.css";
import logo from "../images/spotify.png"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Navbar(){
    return(
        <div className="navbarDiv">
        <a href="#"><h1 className="logo"><img src={logo} alt="logo-img" height="40" width="40"></img> Spotify<span className="regIcon">®</span></h1></a>
        <ul className="navItems">
                <a href="#"><li><HomeIcon className="navIcons"/>Home</li></a>
                <a href="#"><li><SearchIcon className="navIcons"/>Search</li></a>
                <a href="#"><li><LayersIcon className="navIcons"/>Your Library</li></a>
                <br />
                <a href="#"><li><AddBoxIcon className="navIcons" />Create Playlist</li></a>
                <a href="#"><li><FavoriteIcon className="navIcons" />Liked Songs</li></a>
            </ul>
            <hr />

        </div>
    );
}

export default Navbar;