import './App.css';
import Navbar from './Components/Navbar';
import React,{useEffect, useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from "./Allroutes"
import Drawerslidebar from './Components/Leftsidebar/Drawerslidebar';
import Createeditchannel from './Pages/Channel/Createditchannel';
import Videoupload from './Pages/Videoupload/Videoupload';
import { useDispatch } from 'react-redux';
import { fetchallchannel } from './action/channeluser';
import { getallvideo } from './action/video';
import { getallcomment } from './action/comment';
import { getallhistory } from './action/history';
import { getalllikedvideo } from './action/likedvideo';
import { getallwatchlatervideo } from './action/watchlater';

function App() {
  const [toggledrawersidebar,settoggledrawersidebar] = useState({
    display:"none"
  })
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchallchannel())
    dispatch(getallvideo())
    dispatch(getallcomment())
    dispatch(getallhistory())
    dispatch(getallwatchlatervideo())
    dispatch(getalllikedvideo())
  },[dispatch])

  const toggledrawer = ()=> {
    if(toggledrawersidebar.display === "none"){
      settoggledrawersidebar({display:"flex"})
    }
    else{
      settoggledrawersidebar({display:"none"})
    }
  }

const [editcreatechannelbutton,seteditcreatechannelbutton] = useState(false)
const [videouploadpage,setvideouploadpage] = useState(false)
  return (
    <div className="App">
    <BrowserRouter>
    {
      videouploadpage && <Videoupload setvideouploadpage={setvideouploadpage} />
    }
    {
      editcreatechannelbutton &&
(
  <Createeditchannel seteditcreatechanelbtn={seteditcreatechannelbutton} />
)    }
    <Navbar seteditcreatechannelbutton={seteditcreatechannelbutton} toggledrawer={toggledrawer}/>
    <Drawerslidebar toggledrawer={toggledrawer} toggledrawersidebar={toggledrawersidebar} />
    <Allroutes seteditcreatechanelbtn={seteditcreatechannelbutton} setvideouploadpage={setvideouploadpage} />
    </BrowserRouter>
    </div>
  );
}

export default App;
