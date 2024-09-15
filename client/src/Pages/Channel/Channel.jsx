import React from 'react'
import Describechannel from './Describechannel'
import Leftsidebar from '../../Components/Leftsidebar/Leftsidebar'
import Showvideogrid from '../../Components/showvideogrid/Showvideogrid'
import vid from "../../Components/Videos/video1.mp4"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Channel = ({setvideouploadpage,seteditcreatechanelbtn}) => {
    const {cid} = useParams()
    const vids = useSelector(state=>state.videoreducer)?.data?.filter(q=>q?.videochanel===cid).reverse()
 
  return (
   <div className="container_Pages_App" style={{display:"block"}}>
    <div className="container2 Pages_App">
        <Describechannel cid={cid} setvideouploadpage={setvideouploadpage} seteditcreatechanelbtn={seteditcreatechanelbtn} />
     
    </div>
   </div>
  )
}

export default Channel
