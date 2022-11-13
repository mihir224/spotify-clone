import React from "react";
import "../PlaylistSq.css";

function PlaylistSq(){
    return (
        <div className="playlistSqDiv">
        <button className="playlistSqButton"><img src={props.img} height="70" width="70"></img><span className="playlistSpan">{props.name}</span></button>
        </div>
    )
}

export default PlaylistSq;