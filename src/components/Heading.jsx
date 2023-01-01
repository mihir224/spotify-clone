import React from "react";
import "../styles/Heading.css";
const TimeOfDay=new Date().getHours();
    function greetingText(){
        if(TimeOfDay>=0&&TimeOfDay<12){
            return "morning";
        }
        if(TimeOfDay>=12&&TimeOfDay<16){
            return "afternoon";
        }
        if(TimeOfDay>=16&&TimeOfDay<24){
            return "evening";
        }
    }

function Heading(){
    return (
    <div className="greetingDiv"><h1>Good {greetingText()}</h1></div>
    );
}

export default Heading;