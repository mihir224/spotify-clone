import React from "react";
import "../PlaylistRect.css";


function PlaylistRect(props){
    return(
        <div className="playlistRectDiv">
        <button className="playlistRectButton"><img src={props.img} height="70" width="70" alt="playlist-icon"></img><span>{props.name}</span></button>
        </div>
    );
}

export default PlaylistRect;
