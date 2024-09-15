import React from 'react'
import vid from "../../Components/Videos/video1.mp4"
import WHL from '../../Components/WHL/WHL'
import { useSelector } from 'react-redux'

const Likedvideo = () => {
  const Likedvideolist = useSelector(state=> state.likedvideoreducer)
  /*
  const Likedvideolist = [
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
    
    <WHL page={"Liked video" } videolist={Likedvideolist} />
  )
}

export default Likedvideo;

