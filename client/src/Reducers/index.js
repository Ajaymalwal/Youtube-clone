import {combineReducers} from "redux"
import authreducer from './auth';
import currentuser from "./currentuser";
import chanelreducer from "./chanel";
import videoreducer from "./video";
import commentreducer from "./comment";
import historyreducer from "./history";
import likedvideoreducer from "./likedvideo";
import watchlaterreducer from "./watchlater";
import pointsreducer from "./points";
export default combineReducers({
    authreducer,
    currentuser,
    chanelreducer,
    videoreducer,
    commentreducer,
    historyreducer,
    likedvideoreducer,
    watchlaterreducer,
    pointsreducer,
})