import React from "react";
import Showvideo from "../Showvideo/Showvideo";

const WHLvideolist = ({ page, currentuser, videolist }) => {
 
  return (
    <>
      {currentuser ? (
        <>
          {videolist?.data.filter((q) => q?.viewer === currentuser).reverse().map(m => {
            
            const videoObj = { ...m, _id: m.videoid };
            console.log(videoObj)
              return (
                <>
                  <Showvideo vid={videoObj} key={videoObj?._id} />
                </>
              );
            })}
        </>
      ) : (
        <>
          <h2 style={{ color: "white" }}>Please Login to watch your {page}</h2>
        </>
      )}
    </>
  );
};

export default WHLvideolist;
