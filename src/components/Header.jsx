import React from "react";
import user from "../images/img.png";
import "../Header.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 function Header(){
     const username="Mihir Saini";
     return(
     
        <div className="headerDiv">
         <form>
         <button className="arrows"><span><ArrowBackIosIcon /></span></button> 
         <button className="arrows"><span><ArrowForwardIosIcon /></span></button>
         <button className="profile"><img src={user} height="40" width="40" alt="user-img"></img><span >{username} <ExpandMoreIcon className="expand" /></span></button>
         </form>
         </div> 
  
     );
 }

export default Header;