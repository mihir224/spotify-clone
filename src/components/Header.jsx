import React from "react";
import Logo from "../images/img.png";
import "../Header.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const TimeOfDay=new Date().getHours();
    function greetingText(){
        if(TimeOfDay>=0&&TimeOfDay<12){
            return "morning";
        }
        if(TimeOfDay>=12&&TimeOfDay<16){
            return "afternoon";
        }
        if(TimeOfDay>=16&&TimeOfDay<23){
            return "evening";
        }
    }

 function Header(){
     const username="Mihir Saini";
     return(
        <div>
        <div className="headerDiv">
         <form>
         <button className="arrows"><span><ArrowBackIosIcon /></span></button> 
         <button className="arrows"><span><ArrowForwardIosIcon /></span></button>
         <button className="profile"><img src={Logo} height="40" width="40" alt="user-img"></img><span >{username}</span></button>
         </form>
         </div> 
         <div className="greetingDiv"><h1>Good {greetingText()}</h1></div>
         </div>
     );
 }

export default Header;