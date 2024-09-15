import React from 'react'
import WHL from '../../Components/WHL/WHL'
import { useSelector } from 'react-redux'

const Watchlater = () => {
    const Watchlatervideolist =  useSelector(s=>s.watchlaterreducer)
    console.log(Watchlatervideolist)
/*    const Watchlatervideolist = [
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
    <WHL page={"Watch Later"} videolist={Watchlatervideolist}/>
  )
}

export default Watchlater
