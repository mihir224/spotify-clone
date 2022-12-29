import React from "react";
import "../Footer.css";
import songs from "../songs";
import NoLove from "../music/No Love.mp3"
import ReactDOM from "react-dom"
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
    var index=0;
    const [audio, setAudio] = React.useState(new Audio(songs[index].src));
   const progressPercent=(audio.currentTime/audio.duration)*100;
   

    function handleClick(event){
        if(!pauseIcon){
            setPauseIcon(true);
            loadSong(songs[index]);
            audio.play();
        }
        else{
            setPauseIcon(false);
            audio.pause();
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
    
    const [song, setSong]=React.useState({
        key:"",
        index:"",
        src:"",
        img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        name:"",
        artist:""
    });
    
    
    function loadSong(song){
        setSong(()=>{
            return ({
                key:song.id,
                index:song.id,
                src:song.src,
                img:song.img,
                name:song.name,
                artist:song.artist
            });
        }
        );
    }

    function handleSkip(event){
        index++;
        if(index>songs.length-1){
            index=0;
        }
        loadSong(songs[index]);
        setAudio(new Audio(songs[index].src));
        audio.play();
    }

    function handlePrev(event){
       index--;
        if(index<0){
            index=songs.length-1;
        }
        loadSong(songs[index]); 
        setAudio(new Audio(songs[index].src));
        audio.play();    
        
    }
    
    const [isHovering,setHovering]=React.useState(false);
    
    function handleMouseOver(){
        setHovering(true);
    }
    function handleMouseOut(){
        setHovering(false);
    }

    return(
        <div className="footerDiv">
        <audio src={song.src} id="audio" ></audio>
            <div className="img-container">
                <a href="#" className="footerAnc"><img src={song.img} id="album-cover" height="45" width="55"></img></a><br />
            </div>
            <div className="text-container">
            <span><a href="#" className="footerAnc" id="song">{song.name}</a></span><br />
                <span><a href="#" className="footerAnc" id="artist">{song.artist}</a></span>
            </div>
            <div className="navigation">
            <div className="navigation-buttons">
            <form>
                <button id="prev" type="button" onClick={(event)=>{event.preventDefault();}}><ShuffleIcon className="playerIcons" id="playerIcons"/></button>
                <button id="prev" type="button" onClick={handlePrev}><SkipPreviousIcon className="playerIcons" id="playerIcons"/></button>
                <button id="play" type="button" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{handleIcon()}</button>
                <button id="next" type="button" onClick={handleSkip}><SkipNextIcon className="playerIcons" id="playerIcons"/></button>
                <button id="prev" type="button" onClick={(event)=>{event.preventDefault();}}><RepeatIcon className="playerIcons" id="playerIcons"/></button>
                </form>
            </div>
            <div class="progress-container" id="progress-container">
          <div class="progress" id="progress" style={{width:`${progressPercent}"%"`}}></div>
        </div>
            </div>
        </div>
    );
}
export default Footer;