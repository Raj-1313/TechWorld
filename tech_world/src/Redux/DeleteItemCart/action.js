import * as types from "./actionType";
import axios from "axios"

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
    console.log(id)
    return axios
        .delete(`https://fine-cyan-millipede-boot.cyclic.app/cart/${id}`,{
            headers:{
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0"
            }
        })
        .then((res)=>{
            console.log("response from deleteItem :-",res.data);
            dispatch(deleteSuccess());
        })
        .catch((err)=>{
            console.log(err);
            dispatch(deleteError());
        })
}

export default deleteItem