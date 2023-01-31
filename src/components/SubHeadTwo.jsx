import React from "react";
import "../styles/SubHeadOne.css";
import PlaylistSq from "./PlaylistSq";
import playlistsSq from "../playlistsSq";

const customStyle={
    marginBottom:"5em"
}

function SubHeadTwo(){
    return(<
        div>
        <div className="h2div">
            <h2>Work out</h2>
        </div>
        <div style={customStyle} className="test">
        {playlistsSq.map((item,index)=>{
            if(index>=5&&index<=9){
                return <PlaylistSq key={item.id} id={item.id} img={item.imgURL} name={item.name} info={item.info} />}
        })} </div>
        </div>
    );
}

export default SubHeadTwo;