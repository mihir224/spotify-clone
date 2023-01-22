import React from "react";
import "../styles/Header.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


 function Header(){
     const username="Mihir Saini";
     return(
     
        <div className="headerDiv">
         <form>
         <button className="arrows"><span><ArrowBackIosIcon id="arrowIcon"/></span></button> 
         <button className="arrows"><span><ArrowForwardIosIcon id="arrowIcon"/></span></button>
         <button className="profile"><span >{username} ▾</span></button>
         </form>
         </div> 
  
     );
 }

export default Header;