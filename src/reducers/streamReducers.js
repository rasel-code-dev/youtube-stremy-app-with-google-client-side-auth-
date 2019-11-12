const INITIAL_STATE = {
  streams:[]
}

export default (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case "FETCH_STREAMS":
      return ""
    default:
      return state
  }
}