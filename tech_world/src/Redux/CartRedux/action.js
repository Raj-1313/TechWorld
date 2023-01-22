import * as types from "./actionType";
import axios from "axios"
const token= JSON.parse(localStorage.getItem("loginData"))


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
                authorization: token.token
            }
        })
        .then((res)=>{
            console.log(res.data)
            dispatch(cartSuccess(res.data));
        })
        .catch((err)=>{
            console.log(err)
            dispatch(cartError());
        })
}

export default getData


