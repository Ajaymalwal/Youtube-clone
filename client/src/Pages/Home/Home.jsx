import React, { useEffect } from "react";
import "./Home.css";
import Leftsidebar from "../../Components/Leftsidebar/Leftsidebar";
import vid from "../../Components/Videos/video1.mp4";
import Showvideogrid from "../../Components/showvideogrid/Showvideogrid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getallvideo } from "../../action/video";
import { getallcomment } from "../../action/comment";
const Home = () => {
    const vids = useSelector(state => state.videoreducer)?.data?.filter(q => q).reverse();
    console.log(useSelector(state => state.videoreducer))

    const dispatch = useDispatch();

    // Dispatch getallvideo when the component mounts
    useEffect(() => {
        console.log("Dispatching getallvideo");  // Check if this is printed
        dispatch(getallvideo());  // Dispatching action
        
    }, [dispatch]);

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
    const navList = [
        "All",
        "Python",
        "C++",
        "Java",
        "Movies",
        "Science",
        "Animation",
        "Gaming",
        "Comedy"
    ]
    return (
        <div className="container_Pages_App" style={{ "display": "flex", backgroundColor: "black" }}>
            <Leftsidebar />
            <div className="container2_Pages_App" style={{ "width": "100%" }}>
                <div className="navigation_Home">
                    {
                        navList.map((m) => {
                            return (
                                <p key={m} className="btn_nav_home">{m}</p>
                            );
                        })
                    }

                </div>
                <Showvideogrid vids={vids} />
            </div>
        </div>
    )
}
export default Home;

