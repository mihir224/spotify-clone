import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Heading from "./Heading";
import PlaylistRect from "./PlaylistRect";
import Hss from "./Hss";
import PlaylistSq from "./PlaylistSq";
import Hsss from "./Hsss";
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
        <PlaylistSq key={playlist.id} id={playlist.id} img={playlist.imgURL} name={playlist.name} info={playlist.info} />
    );
}

function App(){
    return (
        <div>
            <Navbar />
            <Header /> 
            <Heading />   
            {playlistsRect.map(createPlayListRect)}  
            <Hss />
            {playlistsSq.map((item,index)=>{
                if(index>=0&&index<=4){
                    return <PlaylistSq key={item.id} id={item.id} img={item.imgURL} name={item.name} info={item.info} />}
            })} 
            <Hsss />
            {playlistsSq.map((item,index)=>{
                if(index>=5&&index<=9){
                    return <PlaylistSq key={item.id} id={item.id} img={item.imgURL} name={item.name} info={item.info} />}
            })} 
            <Footer />
            
        </div>
    );
}

export default App;
