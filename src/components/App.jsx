import React from "react";
import Header from "./Header";
import PlaylistRect from "./PlaylistRect";
import Footer from "./Footer";
import playlists from "../playlistsRect";


function createPlayList(playlist){
    return(
        <PlaylistRect key={playlist.id} id={playlist.id} img={playlist.imgURL} name={playlist.name} />
    );
}
function App(){
    return (
        <div>
            <Header />    
            {playlists.map(createPlayList)}   
            <Footer />
        </div>
    );
}

export default App;
