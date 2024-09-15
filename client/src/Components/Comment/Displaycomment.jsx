import React,{useState} from 'react'
import "./Comment.css"
import moment from 'moment';
import { useSelector,useDispatch } from 'react-redux';
import { editcomment,deletecomment } from '../../action/comment';


const Displaycomment = ({cid,commentbody,userid,commenton,usercommented}) => {
  const [edit,setedit]= useState(false)
  const[commentbdy,setcommentbdy]=useState("")
  const dispatch = useDispatch()
  const [cmtid,setcmntid]=useState("")
  const currentuser =useSelector(state => state.currentuser);
  const handleedit = (ctid,ctbdy)=>{
    setedit(true)
    setcmntid(ctid)
    setcommentbdy(ctbdy)
  }
const handleonsubmit =(e)=>{
  e.preventDefault();
  if(!commentbdy){
    alert("type your comment");

  }
  else{
dispatch(editcomment({id:cmtid,commentbody:commentbdy}))
setcommentbdy("");
  }
  setedit(false)
}

const handledel=(id)=>{
  dispatch(deletecomment(id))
}

  return (
    <div>
      {
        edit?(
          <>
          <form action="" className='comments_Sub_form_comments' onSubmit={(e)=>handleonsubmit(e)}>
          <input type="text" onChange={(e)=>{setcommentbdy(e.target.value)}} placeholder='Edit Comments ..' value={commentbdy} className='comment_ibox' />
          <input type="submit" value="change" className='comment_add_btn_commetns'/>
          </form>
          </>
        ):(
          <p className="comment_body">{commentbody}</p>
        )
}
<p className="usercommented">{" "}- {usercommented} commented {moment(commenton).fromNow}</p>
{currentuser?.result?._id===userid && (
  <p className="EditDel_DisplayCommendt">
    <i onClick={()=>handleedit(cid,commentbody)}>Edit</i>
    <i onClick={()=>handledel(cid)}>Delete</i>
  </p>
)}
    </div>
  )
}

export default Displaycomment
