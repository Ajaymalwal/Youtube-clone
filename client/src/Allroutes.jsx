import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx"
import Search from "./Pages/Search/Search.jsx";
import Videopage from "./Pages/Videopage/VIdeopage.jsx";
import Channel from "./Pages/Channel/Channel.jsx";
import Library from "./Pages/Library/Library.jsx";
import Likedvideo from "./Pages/LikedVideo/Likedvideo.jsx";
import Watchhistory from "./Pages/Watchhistory/Watchhistory.jsx";
import Watchlater from "./Pages/Watchlater/Watchlater.jsx";
import Yourvideo from "./Pages/Yourvideo/Yourvideo.jsx";

const allroutes=({seteditcreatechanelbtn,setvideouploadpage})=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search/:searchQuery" element={<Search/>} />
            <Route path="/videopage/:vidd" element={<Videopage/>} />
            <Route path="/Library" element={<Library/>} />
            <Route path="/Likedvideo" element={<Likedvideo/>} />
            <Route path="/Watchhistory" element={<Watchhistory/>} />
            <Route path="/Watchlater" element={<Watchlater/>} />
            <Route path="/Yourvideo" element={<Yourvideo/>} />
            <Route path="/channel/:cid" element={<Channel seteditcreatechanelbtn={seteditcreatechanelbtn} setvideouploadpage={setvideouploadpage}/>} />
        </Routes>
    )
}
export default allroutes;