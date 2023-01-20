import * as types from "./actionType";
import axios from "axios"

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

const AddItem = (payload)=>(dispatch)=>{
    dispatch(AddRequest());
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart",payload,{
            headers:{
                authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0"
            }
        })
        .then((res)=>{
            console.log("response from AddItem :-",res.data);
            dispatch(AddSuccess());
        })
        .catch((err)=>{
            console.log(err);
            dispatch(AddError());
        })
}

export default AddItem