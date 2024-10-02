import mongoose from "mongoose";

const userschema = mongoose.Schema({
 points:{type:Number,default:0},
 email:{type:String,require:true},
 name:{type:String},
 desc:{type:String},
 joinedon:{type:Date,default:Date.now},
 downvid:[{type:String}],
 downchance:{type:Number,default:1},
 lastDownload: { type: Date },
 usertype:{type:String,enum:['Free','Premium'],default:"Free"}
})

export default mongoose.model("User",userschema)