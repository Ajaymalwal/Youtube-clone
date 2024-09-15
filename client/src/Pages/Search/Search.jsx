import React from "react";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import Showvideogrid from '../../Components/showvideogrid/Showvideogrid'
import vid from '../../Components/Videos/video1.mp4'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () =>{
    const {searchquery} = useParams();
    const vids =  useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase()))
 /*   const vids = [
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
    return(
        <>
        <div className="container_Pages_App" style={{"display":"flex",backgroundColor:"black"}}>
    <Leftsidebar />
    <div className="container2_Pages_App" style={{"width":"100%"}}>
        
        <Showvideogrid vids={vids} />
    </div>
</div> 
        </>
    )
}

export default Search;