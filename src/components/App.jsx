import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Heading from "./Heading";
import SubHeadOne from "./SubHeadOne";
import SubHeadTwo from "./SubHeadTwo";
import Footer from "./Footer";

function App(){
    return (
        <div>
            <Navbar />
            <Header /> 
            <Heading />   
            <SubHeadOne />
            <SubHeadTwo />
            <Footer />
        </div>
    );
}

export default App;