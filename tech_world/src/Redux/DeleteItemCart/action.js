import * as types from "./actionType";
import axios from "axios"
const token= JSON.parse(localStorage.getItem("loginData"))
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

const deleteItem = (id)=>(dispatch)=>{
    dispatch(deleteRequest());
    // console.log(id)
    return axios
        .delete(`https://fine-cyan-millipede-boot.cyclic.app/cart/${id}`,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            // console.log("response from deleteItem :-",res.data);
            dispatch(deleteSuccess());
        })
        .catch((err)=>{
            // console.log(err);
            dispatch(deleteError());
        })
}

export default deleteItem