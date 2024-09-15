import * as api from "../Api";
export const addtowatchlater = (watchlaterdata)=>async(dispatch)=>{
    try {
        const {data}= await api.addtowatchlater(watchlaterdata)
        dispatch({type:"POST_WATCHLATER",data})
        dispatch(getallwatchlatervideo())
    } catch (error) {
     console.log(error)   
    }
}

export const getallwatchlatervideo = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getallwatchlatervideo()
        dispatch({type:"FETCH_ALL_WATCHLATER",payload:data})

    } catch (error) {
        console.log(error)
    }
}

export const deletewatchlater = (watchlaterdata)=>async(dispatch)=>{
    try {
        const {videoid,viewer}= watchlaterdata
        await api.deletewatchlatervideo(videoid,viewer)
        dispatch(getallwatchlatervideo())
    } catch (error) {
        console.log(error)
    }
}