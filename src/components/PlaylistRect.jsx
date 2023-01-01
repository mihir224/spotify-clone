import React from "react";
import "../styles/PlaylistRect.css";


function PlaylistRect(props){
    return(
        <div className="playlistRectDiv">
        <button className="playlistRectButton"><img src={props.img} height="75" width="75" alt="playlist-icon"></img><span>{props.name}</span></button>
        </div>
    );
}

export default PlaylistRect;
