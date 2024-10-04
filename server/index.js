import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import userroutes from "./Rotues/User.js"
import videoroutes from './Rotues/video.js'
import path from "path"
import commentroutes from './Rotues/comment.js'
import users from './Models/Auth.js'
import cron from 'node-cron'
dotenv.config();


const app = express()
app.use(cors())
app.use(express.json({limit:"30mb", extended:"true"}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join("uploads")))


app.get('/',(req,res)=>{
    res.send ("Youtube is working")
})

app.use(bodyParser.json())
app.use('/user',userroutes)
app.use('/video',videoroutes)
app.use('/comment',commentroutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})

const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL).then(()=>{
    console.log("MOnogdb database connected")
}).catch((error)=>{
    console.log(error)
})

cron.schedule('0 0 * * *', async () => {
    try {

        await users.updateMany({ usertype: 'Free' }, { downchance: 1 });
        console.log("Download chances reset for free users");
    } catch (error) {
        console.error("Error resetting download chances:", error);
    }
}, {
    timezone: "Asia/Kolkata" // Use the correct time zone (e.g., for IST)
});