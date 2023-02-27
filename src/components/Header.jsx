import React from "react";
import "../styles/Header.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


 function Header(){
     const username="Mihir Saini";
     return(
     
        <div className="headerDiv">
         <form id="formHead">
         <button className="arrows"><span><ArrowBackIosIcon id="arrowIcon"/></span></button> 
         <button className="arrows"><span><ArrowForwardIosIcon id="arrowIcon"/></span></button>
         <button className="profile"><span>{username} ▾</span></button>
         {/* <div id="dropdown">
         <ul>
             <li>Account</li>
             <li>Profile</li>
             <li>Settings</li>
             <hr />
             <li>Logout</li>
         </ul>
         </div> */}
         </form>
         </div> 
  
     );
 }

export default Header;