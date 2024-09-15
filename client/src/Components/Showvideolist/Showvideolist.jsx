import React from 'react'
import Showvideo from '../Showvideo/Showvideo'
import vid from "../Videos/video1.mp4"
import { useSelector } from 'react-redux'

const Showvideolist = ({videoid}) => {
    const vids = useSelector(state=>state.videoreducer)
    console.log(vids);
/*
    const vids = [
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
    <div className="Container_ShowVideoGrid">
        {
            vids?.data.filer(q=>q._id===videoid).map(vi=>{
                return(
                    <div className="video_box_app" key={vi._id}>
                        <Showvideo vid={vi} />

                    </div>
                )
            })
        }
    </div>
  )
}

export default Showvideolist
