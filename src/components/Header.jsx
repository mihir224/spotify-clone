import React from "react";
import Logo from "../images/img.png";
import "../Header.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

 function Header(){
     const username="Mihir Saini";
     return(
         <div>
         <form>
         <button className="arrows"><span><ArrowBackIosIcon /></span></button> 
         <button className="arrows"><span><ArrowForwardIosIcon /></span></button>
         <button className="profile"><img src={Logo} height="35" width="35"></img><span >{username}</span></button>
         </form>
         </div> 
     );
 }

export default Header;