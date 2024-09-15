import React,{useState} from "react";
import "./Createeditchannel.css"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {updatechaneldata} from "../../action/channeluser"
import {login} from "../../action/auth"

const Createeditchannel = ({seteditcreatechanelbtn})=>{
    const dispatch = useDispatch();
    const currentuser = useSelector(state => state.currentuser);
      const [name,setaname] = useState(currentuser?.result.name)
      const [desc,setdesc] = useState(currentuser?.result?.desc)
      const handlesubmit = ()=>{
        if(!name){
            alert("please enter name")
        }else if(!desc){
            alert("Please enter Desciption")
        }else{
            dispatch(updatechaneldata(currentuser?.result._id,{name:name,desc:desc}))
            seteditcreatechanelbtn(false)
            setTimeout(()=>{
                dispatch(login({email:currentuser.result.email}))
            },5000)
        }
      }
      return(
        <>
        <div className="container_CreateEditChanel">
            <input type="submit" name="text" value={"x"} className="ibtn_x" onClick={()=>seteditcreatechanelbtn(false)} />
            <div className="container2_CreateEditChanel">
                <h1>
                    {currentuser?.result?.name ? <>
                    Edit
                    </>:<>Create</>} Your Channel
                </h1>
                <input type="text" placeholder="Enter your Channel Name" name="text" value={name} onChange={(e)=>setaname(e.target.value)} className="ibox" />
                <textarea type="text" rows={15} placeholder="Enter chanel Description " className="ibox" value={desc} onChange={(e)=>setdesc(e.target.value)}  ></textarea>
                <input type="submit" value={"submit"} onClick={()=>handlesubmit()} className="ibtn" />
            </div>
        </div>
        </>
      )
}

export default Createeditchannel