import * as types from "./actionType";
import axios from "axios"
const token= JSON.parse(localStorage.getItem("loginData"))
const reduceRequest = ()=>{
    return {
        type: types.REDUCE_REQUEST
    }
}

const reduceSuccess = (payload)=>{
    return {
        type: types.REDUCE_SUCCESS,
        payload
    }
}

const reduceError= ()=>{
    return {
        type: types.REDUCE_ERROR
    }
}

const reduceItem = (payload)=>(dispatch)=>{
    dispatch(reduceRequest());
    // console.log(payload)
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart/dec",payload,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            // console.log("response from reduceItem :-",res);
            dispatch(reduceSuccess());
        })
        .catch((err)=>{
            // console.log(err);
            dispatch(reduceError());
        })
}

export default reduceItem