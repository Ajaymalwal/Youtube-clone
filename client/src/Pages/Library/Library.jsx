import React from 'react'
import { useSelector } from 'react-redux'
import { FaHistory } from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import vid from "../../Components/Videos/video1.mp4"
import WHLvideolist from '../../Components/WHL/WHLvideolist'
import "./Library.css"
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'

const Library = () => {
  /*  const vids = [
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

    const Likedvideolist = useSelector(state=> state.likedvideoreducer)
    const Watchlatervideolist =  useSelector(s=>s.watchlaterreducer)
    const Watchhistoryvideolist = useSelector(s=>s.historyreducer)

    const currentuser = useSelector(state => state.currentuser);
      
    
  return (
   <div className="container_Pages_App">
    <Leftsidebar />
    <div className="container2_Pages_App">
        <div className="container_libraryPage">
            <h1 className="title_container_LibraryPage">
                <b>
                    <FaHistory/>
                </b>
                <b>History</b>
            </h1>
            <div className="container_videoList_LibraryPage">
                <WHLvideolist page={"History"} currentuser={currentuser?.result?._id} videolist={Watchhistoryvideolist} />
            </div>

        </div>
        <div className="container_libraryPage">
            <h1 className="title_container_LibraryPage">
                <b>
                    <MdOutlineWatchLater/>
                </b>
                <b>Watch Later</b>
            </h1>
            <div className="container_videoList_LibraryPage">
                <WHLvideolist page={"Watch Later"} currentuser={currentuser?.result?._id} videolist={Watchlatervideolist} />
            </div>

        </div>
        <div className="container_libraryPage">
            <h1 className="title_container_LibraryPage">
                <b>
                    <AiOutlineLike/>
                </b>
                <b>Like Video</b>
            </h1>
            <div className="container_videoList_LibraryPage">
                <WHLvideolist page={"Like Video"} currentuser={currentuser?.result?._id} videolist={Likedvideolist} />
            </div>

        </div>
    </div>
   </div>
  )
}

export default Library
