import React from "react";
import "../PlaylistSq.css";


function PlaylistSq(props){
    return (
        <div className="playlistSqDiv">
        <button className="playlistSqButton"><img src={props.img} alt="playlist-icon" height="175" width="175"></img><span className="mixName">{props.name}</span><span className="info">{props.info}</span></button>
        </div>
    )
}

export default PlaylistSq;