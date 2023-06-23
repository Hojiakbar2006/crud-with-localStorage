export const reData = (state = JSON.parse(localStorage.getItem("list")) || [], action)=>{
    switch (action.type){
        case "DATA":
        return action.payload;
        default:
        return state;
    }
}

export const acData = (arr)=>{
    return {
        type:"DATA",
        payload:arr
    }
}