import mongoose from "mongoose";

const userschema = mongoose.Schema({
 points:{type:Number,default:0},
 email:{type:String,require:true},
 name:{type:String},
 desc:{type:String},
 joinedon:{type:Date,default:Date.now},


})

export default mongoose.model("User",userschema)