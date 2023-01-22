import * as types from "./actionType";
import axios from "axios"

const cartRequest = ()=>{
    return {
        type: types.CART_REQUEST
    }
}

const cartSuccess = (payload)=>{
    return {
        type: types.CART_SUCCESS,
        payload
    }
}

const cartError= ()=>{
    return {
        type: types.CART_ERROR
    }
}

const getData = ()=> (dispatch)=>{
    dispatch(cartRequest());
    return axios
        .get("https://fine-cyan-millipede-boot.cyclic.app/cart",{
            headers:{
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0"
            }
        })
        .then((res)=>{
            console.log("response from action",res.data)
            dispatch(cartSuccess(res.data));
        })
        .catch((err)=>{
            console.log(err)
            dispatch(cartError());
        })
}

export default getData


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

const reduceData = (payload)=>(dispatch)=>{
    dispatch(reduceRequest());
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart/dec",payload,{
            headers:{
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0"
            }
        })
        .then((res)=>{
            console.log(res);
            dispatch(reduceSuccess());
        })
        .catch((err)=>{
            console.log(err);
            dispatch(reduceError());
        })
}