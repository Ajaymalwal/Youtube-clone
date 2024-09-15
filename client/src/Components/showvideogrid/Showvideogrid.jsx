import React from 'react'
import "./Showvideogrid.css"
import Showvideo from '../Showvideo/Showvideo'

const Showvideogrid = ({vids}) => {
    console.log(vids)

    if (!vids || vids.length === 0) {
        return <div>No videos available</div>; // Show a placeholder if no videos
    }
  return (
    <div className='Container_ShowVideoGrid'>
        {
            vids?.reverse().map(vi=>{
                return (
                    <div key={vi._id} className="video_box_app">
                     <Showvideo vid={vi} />
                    </div>
                )
            })
        }
      
    </div>
  )
}

export default Showvideogrid
