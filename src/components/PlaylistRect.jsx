import React from "react";
import "../PlaylistRect.css";


function PlaylistRect(props){
    return(
        <div className="playlistRectDiv">
        <button className="playlistRectButton"><img src={props.img} height="80" width="80" alt="playlist-icon"></img><span>{props.name}</span></button>
        </div>
    );
}

export default PlaylistRect;
