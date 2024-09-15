import React, { useState,useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import youtubeLogo from "../youtubeLogo.png";
import "../Styles/Components/Navbar.css";
import { RiVideoAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiUserCircle } from "react-icons/bi";
import Searhbar from "./Searchbar/Searhbar";
import Auth from "../Pages/Auth/Auth";
import { useGoogleLogin ,googleLogout} from "@react-oauth/google";
import axios from "axios"
import {login} from '../action/auth'
import { setcurrentuser } from "../action/currentuser";
import {jwtDecode} from "jwt-decode"

function Navbar({ toggledrawer, seteditcreatechannelbutton }) {
  const [authbtn, setauthbtn] = useState(false);
  const [user,setuser] = useState([])
  const [profile,setprofile] = useState([])
  const dispatch = useDispatch()
  const currentuser = useSelector(state => state.currentuser);
 const successlogin =()=>{
 if(profile.email){
  dispatch(login({email:profile.email}))
  console.log(profile.email)
 }
}


/*const currentuser = {
  result:{
    id:1,
    name:"ajay",
    email:"abc@gmail.com",
    joinedon:"17-07-2024"
  }

}
  */


const google_login = useGoogleLogin({
  onSuccess: tokenResponse=> setuser(tokenResponse) ,
  onError:(error) =>{console.log("Login faild",error)}

});
useEffect(
  ()=>{
    console.log(user)
    if (user) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,{
        headers:{
          Authorization:`Bearer ${ user.access_token}`,
          Accept:'application/json'
        }
      })
      .then((res)=>{
        setprofile(res.data)
        successlogin()
      })
      .catch((err)=>console.log(err))
      
    }
  },
  [user]
);
const logout =()=>{
  googleLogout()
  console.log("Logging out from...");
  dispatch(setcurrentuser(null))
  localStorage.clear();
 
}
useEffect(()=>{
  const token = currentuser?.token;
  if(token){
    const decodetoken  = jwtDecode(token)
    if(decodetoken.exp *1000 <new Date().getTime()){
      logout()
    }
  }
  dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))))
},[currentuser?.token,dispatch]
)

  return (
    <div>
      <div className="navbar-container">
        <div className="Burger-Logo-navbar">
          <div className="Burger-navbar" onClick={() => toggledrawer()}>
            <p className="burger-lines"></p>
            <p className="burger-lines"></p>
            <p className="burger-lines"></p>
          </div>
          <div className="Logo-navbar">
            <Link to="/">
              <div>
                <img
                  className="youtube-logo"
                  src={youtubeLogo}
                  alt="YouTube Logo"
                />
                <p className="youtube-logo-name">YouTube</p>
              </div>
            </Link>
          </div>
        </div>
        <Searhbar/>
       <div className="right-nav">
        <RiVideoAddLine size={22} className="vid-bell-Navbar" />
        <div className="apps-Box">
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
        </div>
        <IoMdNotificationsOutline size={22} className="vid-bell-Navbar"/>

       

        <div className="Auth-cont-Navbar">
          {currentuser ? (
            <div>
              <div className="Chanel_logo_App" onClick={()=>setauthbtn(true)}>
             <p className="fstChar_logo_App">
           {
            currentuser?.result.name ?(
              <>{currentuser?.result.name.charAt(0).toUpperCase()}</>

            ):(
              <>{currentuser?.result.email.charAt(0).toUpperCase()}</>
            )
           }
             </p>
             </div>
            </div>
          ) : (
            <div className="Auth_Btn" onClick={()=> google_login()}>
              <BiUserCircle size={22} color="rgb(0, 153, 255)" />
              <b style={{"color":"rgb(0, 153, 255)","fontSize":"1rem"}}>Sign in</b>
            </div>
          )}
        </div>
        </div>
      </div>
      {
        authbtn && 
        <Auth seteditcreatechannelbutton={seteditcreatechannelbutton} setauthbtn={setauthbtn} user={currentuser} />
      }
    </div>
  );
}

export default Navbar;
