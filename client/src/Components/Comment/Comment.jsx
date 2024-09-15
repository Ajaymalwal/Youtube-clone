import React,{useState} from "react";
import "./Comment.css"
import { useSelector } from "react-redux";
import Displaycomment from "./Displaycomment";
import { postcomment } from "../../action/comment";
import { useDispatch } from "react-redux";

const Comment =({videoid})=>{
    const dispatch = useDispatch()
    const [commenttext,setcommenttext] = useState("")
    const currentuser = useSelector(state => state.currentuser);
    const commentlist = useSelector(state=>state.commentreducer)
 
  /*  const commentlist = [{
        id:1,
        commentbody:"hello",
        usercommented:"abc"
    },
    {
        id:2,
        commentbody:"hello2",
        usercommented:"abc2"
    },
    {
        id:3,
        commentbody:"hello3",
        usercommented:"abc3"
    },
]
*/
const handleonsubmit = (e)=>{
    e.preventDefault();
    if(currentuser){
        if(!commenttext){
            alert("please type your comment");
        }
        else{
            dispatch(postcomment({
                videoid:videoid,
                userid:currentuser?.result._id,
                commentbody:commenttext,
                usercommented:currentuser.result.name,
            }))
            
            setcommenttext("")
        }
    }else{
        alert("Please login to comment")
    }
}

return(
    <>
    <form action="" className="comments_sub_form_comments" onSubmit={handleonsubmit}>
        <input type="text " onChange={(e)=>setcommenttext(e.target.value)} placeholder="add comments..." value={commenttext} className="comment_ibox"/>
        <input type="submit" value="add" className="comment_add_btn_comments"/>
    </form>
    <div className="display_comments_container">
        {commentlist?.data.filter((q)=>videoid === q?.videoid).reverse().map((m)=>{
            return(<Displaycomment key={m.id} cid={m._id} commentbody={m.commentbody} commnenton={m.commentedon} usercommented={m.usercommented} userid={currentuser?.result?._id}/>)

        })}
    </div>
    
    </>
)
}
export default Comment