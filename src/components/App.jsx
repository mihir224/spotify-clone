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



function App(){
    return (
        <div>
            <Navbar />
            <Header /> 
            <Heading />   
            <Hss />
            <Hsss />
            <Footer />
            
        </div>
    );
}

export default App;
