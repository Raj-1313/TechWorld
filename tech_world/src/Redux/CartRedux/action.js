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

const AddRequest = ()=>{
    return {
        type: types.ADD_REQUEST
    }
}

const AddSuccess = (payload)=>{
    return {
        type: types.ADD_SUCCESS,
        payload
    }
}

const AddError= ()=>{
    return {
        type: types.ADD_ERROR
    }
}

const deleteRequest = ()=>{
    return {
        type: types.DELETE_REQUEST
    }
}

const deleteSuccess = (payload)=>{
    return {
        type: types.DELETE_SUCCESS,
        payload
    }
}

const deleteError= ()=>{
    return {
        type: types.DELETE_ERROR
    }
}
export const handleAddCouponDis = (payload)=>{
    return {
        type:types.ADD_COUPON_DIS,
        payload
    }
}

export const handleAddCoupon = (payload)=>{
    return {
        type:types.ADD_COUPON,
        payload
    }
}
export const handleTotalPrice = (price)=>{
   return {
        type:types.SendTotalPrice,
        payload:price
    }
}

const getData = ()=> (dispatch)=>{
    dispatch({
        type: types.CART_REQUEST
    });
    return axios
        .get("https://fine-cyan-millipede-boot.cyclic.app/cart",{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            console.log("response from action",res.data)
            dispatch({
                type: types.CART_SUCCESS,
                payload:res.data
            });
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type: types.CART_ERROR
            });
        })
}

export default getData

export const reduceItem = (payload)=>(dispatch)=>{
    dispatch(reduceRequest());
    console.log(payload)
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart/dec",payload,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            console.log("response from reduceItem :-",res.data);
            dispatch(reduceSuccess(res.data));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(reduceError());
        })
}




export const AddItem = (payload)=>(dispatch)=>{
    console.log(payload)
    dispatch(AddRequest());
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart",payload,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            console.log("response from AddItem :-",res.data);
            dispatch(AddSuccess(res.data));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(AddError());
        })
}

export const deleteItem = (id)=>(dispatch)=>{
    dispatch(deleteRequest());
    console.log(id)
    return axios
        .delete(`https://fine-cyan-millipede-boot.cyclic.app/cart/${id}`,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            console.log("response from deleteItem :-",res.data);
            dispatch(deleteSuccess(res.data));
        })
        .catch((err)=>{
            console.log(err);
            dispatch(deleteError());
        })
}


export const PayedTotao = (payload)=> (dispatch)=>{
   
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart/payment",payload,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            // console.log("response from AddItem :-",res.data);
            dispatch({type:"succes"});
        })
        .catch((err)=>{
            console.log(err);
            
        })
}