import React from "react";
import "../styles/Heading.css";
import PlaylistRect from "./PlaylistRect";
import playlistsRect from "../playlistsRect";


const TimeOfDay=new Date().getHours();
    function greetingText(){
        if(TimeOfDay>=0&&TimeOfDay<12){
            return "morning";
        }
        if(TimeOfDay>=12&&TimeOfDay<16){
            return "afternoon";
        }
        if(TimeOfDay>=16&&TimeOfDay<24){
            return "evening";
        }
    }

    function createPlayListRect(playlist){
        return(
            <PlaylistRect key={playlist.id} id={playlist.id} img={playlist.imgURL} name={playlist.name} />
        );
    }

function Heading(){
    return (
        <div>
    <div className="greetingDiv"><h1>Good {greetingText()}</h1></div>
    <div className="test">{playlistsRect.map(createPlayListRect)}  </div>
    </div>

    );
}

export default Heading;