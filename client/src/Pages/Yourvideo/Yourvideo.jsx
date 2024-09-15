import React from 'react'
import "./Yourvideo.css"
import vid from "../../Components/Videos/video1.mp4"
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../Components/showvideogrid/Showvideogrid'
import { useSelector } from 'react-redux'

const Yourvideo = () => {
   const currentuser =useSelector(state => state.currentuser);
   const Yourvideovideolist =useSelector(s=>s.videoreducer)?.data?.filter(q=>q.videochanel===currentuser?.result._id).reverse()
 /*   const Yourvideovideolist = [
        {
            id:1,
            video_src:vid,
            chanel:"afjio",
            title:"video1",
            uploader:"abc",
            description:"Description of video1",
        },
        {
            id:2,
            video_src:vid,
            chanel:"afjio",
            title:"video2",
            uploader:"abc",
            description:"Description of video2",
        },
        {
            id:3,
            video_src:vid,
            chanel:"afjio",
            title:"video3",
            uploader:"abc",
            description:"Description of video3",
        },
        {
            id:4,
            video_src:vid,
            chanel:"afjio",
            title:"video4",
            uploader:"abc",
            description:"Description of video4",
        }
    ]
        */
  return (
    <div className="container_Pages_App">
        <Leftsidebar />
        <div className="container2_Pages_App">
            <div className="container_yourvideo">
                <h1>Your Video</h1>
                {
                    currentuser ?(
                        <>
                        <Showvideogrid vids={Yourvideovideolist} />

                        </>):(<>
                        <h3>Please login to see your uploaded videos list.</h3>
                        </>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Yourvideo
