import React,{useEffect,useState} from "react";
import "../styles/Header.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {signInWithPopup} from '@firebase/auth';
import {auth,provider} from '../firebase';
import {useDispatch,useSelector} from 'react-redux';
import {loginStart,loginSuccess,loginFailure,logout} from '../redux/userSlice';

 function Header(){
     const username="Mihir Saini";
     const dispatch=useDispatch();
     const user=useSelector(state=>state.user.currentUser);
     useEffect(()=>{
         console.log(user);
     },[user]);

     const handleClick=async()=>{
         dispatch(loginStart());
         try{
            await signInWithPopup(auth,provider).then((res)=>{
                dispatch(loginSuccess(res._tokenResponse))
            })
         }catch(err){
             console.log(dispatch(loginFailure()));
         }
     }
     const handleLogout=()=>{
         dispatch(logout());
     }
   
     return(
        <div className="headerDiv">
        <div >
            <button className="arrows"><span><ArrowBackIosIcon id="arrowIcon"/></span></button> 
            <button className="arrows"><span><ArrowForwardIosIcon id="arrowIcon"/></span></button>
         </div>
         {user?
         <div id='dropdown'>
            <button className="profile" 
            >
            <button style={{
                background:  `url(${user?.photoUrl})`,
                backgroundSize: 'cover', // Use cover to ensure the image covers the circle
                border:'1px solid transparent',
                borderRadius: '50px',
                padding:'15.5px',
                margin:'0'
                
            }}> </button>
                <span>
                    {user.displayName}
                </span>
            </button>
            <div id="dropdown-content" >
                    <ul>
                    <li className="dd-list-item"><button id="logout-btn" onClick={handleLogout}>Log out</button></li>
                    </ul>
            </div>
            </div>
            :
            <button className='signin-btn' onClick={handleClick} >
                <span>Sign In</span>
            </button>}
 
         
         {/* <div id="dropdown">
         <ul>
             <li>Account</li>
             <li>Profile</li>
             <li>Settings</li>
             <hr />
             <li>Logout</li>
         </ul>
         </div> */}
         </div> 
  
     );
 }

export default Header;