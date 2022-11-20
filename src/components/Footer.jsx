import React from "react";
import "../Footer.css";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShuffleOnIcon from '@mui/icons-material/ShuffleOn';
import RepeatIcon from '@mui/icons-material/Repeat';
import RepeatOnIcon from '@mui/icons-material/RepeatOn';
import RepeatOneOnIcon from '@mui/icons-material/RepeatOneOn';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import FavoriteIcon from '@mui/icons-material/Favorite';
import logo from "../images/logo192.png"


function Footer(){
    //const [icon, setIcon] = React.useState(<PlayCircleIcon className="playerIcons" />);
    const [pauseIcon,setPauseIcon]=React.useState(false);
    const [isHovering,setHovering]=React.useState(false);
    function handleClick(event){
        if(!pauseIcon){
            setPauseIcon(true);
        }
        else{
            setPauseIcon(false);
        }
        event.preventDefault();
    }
    function handleIcon(){
        if(!pauseIcon){
            return (<PlayCircleIcon id="playIcon" className="playerIcons" />);
        }
        else{
            return <PauseCircleIcon id="playIcon" className="playerIcons" />
        }
    }
    function handleMouseOver(){
        setHovering(true);
    }
    function handleMouseOut(){
        setHovering(false);
    }

    return(
        <div className="footerDiv">
            <div className="img-container">
                <a href="#" className="footerAnc"><img src={logo} id="album-cover" height="45" width="55"></img></a><br />
            </div>
            <div className="text-container">
            <span><a href="#" className="footerAnc" id="song">song-name</a></span><br />
                <span><a href="#" className="footerAnc" id="artist">artist-name</a></span>
            </div>
            <div className="navigation">
            <div className="navigation-buttons">
            <form>
                <button id="prev" onClick={(event)=>{event.preventDefault();}}><ShuffleIcon className="playerIcons" id="playerIcons"/></button>
                <button id="prev" onClick={(event)=>{event.preventDefault();}}><SkipPreviousIcon className="playerIcons" id="playerIcons"/></button>
                <button id="play" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{handleIcon()}</button>
                <button id="next" onClick={(event)=>{event.preventDefault();}}><SkipNextIcon className="playerIcons" id="playerIcons"/></button>
                <button id="prev" onClick={(event)=>{event.preventDefault();}}><RepeatIcon className="playerIcons" id="playerIcons"/></button>
                </form>
            </div>
            <div class="progress-container" id="progress-container">
          <div class="progress" id="progress"></div>
        </div>
            </div>
        </div>
    );
}
export default Footer;