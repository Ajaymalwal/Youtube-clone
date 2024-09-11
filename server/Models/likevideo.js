import mongoose from 'mongoose'
const likevideoschema = mongoose.Schema({
    videoid:{type:String,require:true},
    viewer:{type:String,require:true},
    likedon:{type:Date,default:Date.now()}

})

export default mongoose.model("Likedvideo",likevideoschema)