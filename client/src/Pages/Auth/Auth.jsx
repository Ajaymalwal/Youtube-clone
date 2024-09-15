import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setcurrentuser } from "../../action/currentuser";
import "./Auth.css"
const Auth = ({ user, setauthbtn, seteditcreatechannelbutton }) => {
  const dispatch = useDispatch()
  const logout = () => {
    console.log("Logging out...");
    googleLogout();
    console.log("Google logout called.");
    dispatch(setcurrentuser(null));
    localStorage.clear()
    console.log("Redux state cleared.");
  };
  
 
  return (
    <div
      className="Auth_container"
      onClick={() => {
        setauthbtn(false);
      }}
    >
      <div className="Auth_container2">
        <p className="User_Details">
            <div className="Chanel_logo_App">
          <p className="fstChar_logo_App">
            {user?.result.name ? (
              <>{user?.result.name.charAt(0).toUpperCase()}</>
            ) : (
              <>{user?.result.email.charAt(0).toUpperCase()}</>
            )}
          </p>
              
          </div>
          <div className="email_Auth">{user?.result.email}</div>
        </p>
        <div className="btns_Auth">
            {user?.result.name ?(
                    <>
                    {
                      <Link to={`/channel/${user?.result?._id}`} className="btn_Auth">Your Channel</Link>
                    }
                    </>
            ):(
                    <>
                    <input type="submit" className="btn_Auth" value="Create your own channel" onClick={()=>{seteditcreatechannelbutton(true)}}/>
                    </>
                )}
                <div>
                    <div className="btn_Auth" onClick={()=>{logout(); console.log(user,localStorage.getItem("Profile"))}}>
                        <BiLogOut/>
                        Log Out
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
