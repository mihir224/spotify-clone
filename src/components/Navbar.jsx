import React from "react";
import "../styles/Navbar.css";
import logo from "../images/spotify.png"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LayersIcon from '@mui/icons-material/Layers';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import playlistsNav from "../playlistsNav";

function createNavPlaylist(playlist){
    return(
        <div className="playNav">
        <ul>
            <a href={playlist.href} className="navItems2"><li key={playlist.id} id={playlist.id} style={{color:"white",listStyle:"none"}}>{playlist.name}</li></a>
        </ul></div>
    )
}
function Navbar(){
    return(
        <div className="navbarDiv">
        <a href="#" target="_self"><h1 className="logo"><img src={logo} alt="logo-img" height="40" width="40"></img> Spotify<span className="regIcon">®</span></h1></a>
        <ul >
                <a href="#" className="navItems"><li><HomeIcon className="navIcons"/>Home</li></a>
                <a href="#" className="navItems"><li><SearchIcon className="navIcons"/>Search</li></a>
                <a href="#" className="navItems"><li><LayersIcon className="navIcons"/>Your Library</li></a>
                <br />
                <a href="#" className="navItems"><li><AddBoxIcon className="navIcons" />Create Playlist</li></a>
                <a href="#" className="navItems"><li><FavoriteIcon className="navIcons" />Liked Songs</li></a>
            </ul>
            <hr />
        {playlistsNav.map(createNavPlaylist)}
        </div>
    );
}

export default Navbar;