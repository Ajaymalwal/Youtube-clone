import express from "express"
import { login } from "../Controllers/Auth.js"
import { updatechaneldata,getallchanels } from "../Controllers/channel.js"
import { addtopoints,getpoints } from "../Controllers/points.js"
import { downloadVideo,getDownloadedVid } from "../Controllers/downloadvideo.js"
const routes = express.Router()

routes.post("/login",login)
routes.patch('/update/:id',updatechaneldata)
routes.get('/getallchannel',getallchanels)

routes.post("/addpoints/", addtopoints);
routes.get("/getpoints/:userId",getpoints)

routes.post("/downloadvideo",downloadVideo);
routes.get("/getdownloadvid/:userId",getDownloadedVid)
export default routes;