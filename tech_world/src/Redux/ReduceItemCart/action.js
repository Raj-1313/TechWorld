import * as types from "./actionType";
import axios from "axios"

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
    console.log(payload)
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart/dec",payload,{
            headers:{
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0"
            }
        })
        .then((res)=>{
            console.log("response from reduceItem :-",res);
            dispatch(reduceSuccess());
        })
        .catch((err)=>{
            console.log(err);
            dispatch(reduceError());
        })
}

export default reduceItem