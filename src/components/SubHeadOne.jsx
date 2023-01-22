import React from "react";
import "../styles/SubHeadOne.css";
import PlaylistSq from "./PlaylistSq";
import playlistsSq from "../playlistsSq";


function SubHeadOne(){
    return(
        <div>
        <div className="h2div">
            <h2>Best of artists</h2>
            </div>
            <div className="test">
            {playlistsSq.map((item,index)=>{
                if(index>=0&&index<=4){
                    return <PlaylistSq key={item.id} id={item.id} img={item.imgURL} name={item.name} info={item.info} />}
            })} </div>
        </div>
    );
}

export default SubHeadOne;