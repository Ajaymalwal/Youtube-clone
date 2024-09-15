const commentreducer = (state={data:[]},action)=>{
    switch(action.type){
        case "EDIT_COMMENT":
            return {...state}
        case "POST_COMMENT":
            return {...state}
        case "FETCH_ALL_COMMENTS":
            return {...state,data:action.payload}
                            
        default:
            return state
        
    }
}

export default commentreducer;