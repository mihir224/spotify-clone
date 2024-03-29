import React from "react";
import "../styles/Footer.css";
import songs from "../songs";
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
    const [progressPercent,setProgressPercent]=React.useState(0);
    const [index,setIndex]=React.useState(0);
    const [audio, setAudio] = React.useState(new Audio(songs[index].src));
   
  
  
 function handleClick(event){
        if(!pauseIcon){
            setPauseIcon(true);
            loadSong(songs[index]);
            audio.play();
        }
        // else if(audio.currentTime===audio.duration){
        //     setPauseIcon(false);
        //     handleSkip();
        //     setPauseIcon(true);
        // }
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
            return (<PauseCircleIcon id="playIcon" className="playerIcons" />);
        }
    }
    
    const [song, setSong]=React.useState({
        key:"",
        index:"",
        src:"",
        img:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
        name:"Untitled",
        artist:"Untitled"
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
        setIndex(index+1);
        audio.pause();
        if(index>songs.length-1){
            setIndex(0);
        }
        loadSong(songs[index]);
        setAudio(new Audio(songs[index+1].src));
       
    }

    function handlePrev(event){
        setIndex(index-1);
       audio.pause();
        if(index<0){
            setIndex(songs.length-1);
        }
        loadSong(songs[index]); 
        setAudio(new Audio(songs[index-1].src));
      
    }
  React.useEffect(()=>{
      setTimeout(()=>setProgressPercent((audio.currentTime/audio.duration)*100), 1000)
  },[audio.currentTime])
    console.log(progressPercent);
    const customStyling={
       width: progressPercent + "%",
       backgroundColor: "white",
       borderRadius: "5px",
       height: "100%",
       transition:"width 0.1s linear"
   }
    // const [isHovering,setHovering]=React.useState(false);
    
    // function handleMouseOver(){
    //     setHovering(true);
    // }
    // function handleMouseOut(){
    //     setHovering(false);
    // }

    return(
        <div className="footerDiv">
        <audio src={song.src} id="audio" ></audio>
            <div className="img-container">
                <a href="#" className="footerAnc"><img src={song.img} id="album-cover" height="54" width="54"></img></a><br />
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
                <button id="play" type="button" onClick={handleClick}>{handleIcon()}</button>
                <button id="next" type="button" onClick={handleSkip}><SkipNextIcon className="playerIcons" id="playerIcons"/></button>
                <button id="prev" type="button" onClick={(event)=>{event.preventDefault();}}><RepeatIcon className="playerIcons" id="playerIcons"/></button>
                </form>
            </div>
            <div className="progress-container" id="progress-container">
          <div style={customStyling}></div>
         
        </div>
            </div>
        </div>
    );
}
export default Footer;