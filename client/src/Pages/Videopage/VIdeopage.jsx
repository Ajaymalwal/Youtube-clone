import React, { useEffect } from "react";
import "./Videopage.css";
import moment from "moment";
import Comment from "../../Components/Comment/Comment"
import Likewatchlatersavebtns from "./likewatchlatersavebtns";
import { Link, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { viewvideo } from "../../action/video";
import { addtohistory } from "../../action/history";
import { addpoints } from "../../action/points";
const Videopage = () => {
  const { vidd } = useParams();
  const dispatch = useDispatch()
  const vids = useSelector((state)=>state.videoreducer)
 
  const vv = vids?.data?.filter((q) => q._id === vidd)[0];
  const currentuser = useSelector(state => state.currentuser);
const handleview = ()=>{
  dispatch(viewvideo({id:vidd}))
}
const handlehistory =()=>{
  dispatch(addtohistory({
    videoid:vidd,
    viewer:currentuser?.result?._id,
  }))
}

const handlepoints =()=>{
  dispatch(addpoints(
    currentuser?.result?._id,
    5
  ))
}
 useEffect(()=>{
  if(currentuser){
    handlehistory();
    handlepoints();
  }
  handleview()
 },[currentuser]);

  return (
    <div>
      <div className="container_videoPage">
        <div className="container2 videoPage">
          <div className="video_display_screen_videoPage">
            <video
              src={`https://youtube-clone-dxg5.onrender.com/${vv?.filepath.replace(/\\/g, '/')}`} 
              className="video_ShowVideo_videoPage"
              controls
            ></video>
            <div className="video_details_videoPage">
              <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">{vv?.title}</p>
                <div className="views_dates_btns_VideoPage">
                  <div className="views_VideoPage">
                    {vv?.views} views <div className="dot"></div>
                    {""}
                    {moment(vv?.createat).fromNow()}
                  </div>
                  <Likewatchlatersavebtns vv={vv} vid={vidd} />
                </div>
              </div>
              <Link to={"/"} className="chanel_details_videoPage">
                <b className="chanel_logo_videoPage">
                  <p className="">{vv?.uploader.charAt(0).toUpperCase()}</p>
                </b>
                <p className="chanel_name_videoPage">{vv?.uploader}</p>
              </Link>
              <div className="comments_VideoPage">
                <h2>
                    <u>Comments</u>
                </h2>
                <Comment videoid={vv._id} />
              </div>
            </div>
          </div>
        </div>
        <div className="moreVideoBar">More Videos</div>
      </div>
    </div>
  );
};

export default Videopage;
