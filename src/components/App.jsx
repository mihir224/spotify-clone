import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Heading from "./Heading"
import PlaylistRect from "./PlaylistRect";
import PlaylistSq from "./PlaylistSq";
import Footer from "./Footer";
import playlistsRect from "../playlistsRect";
import playlistsSq from "../playlistsSq";




function createPlayListRect(playlist){
    return(
        <PlaylistRect key={playlist.id} id={playlist.id} img={playlist.imgURL} name={playlist.name} />
    );
}
function createPlayListSq(playlist){
    return(
        <PlaylistSq key={playlist.id} id={playlist.id} img={playlist.imgURL} name={playlist.name} artist={playlist.artists} />
    );
}

function App(){
    return (
        <div>
            <Navbar />
            <Header /> 
            <Heading />   
            {playlistsRect.map(createPlayListRect)}  
            {playlistsSq.map(createPlayListSq)} 
            <Footer />
        </div>
    );
}

export default App;
