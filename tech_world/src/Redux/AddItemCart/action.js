import * as types from "./actionType";
import axios from "axios"

const token= JSON.parse(localStorage.getItem("loginData"))


const AddSuccess = (payload)=>{
    return {
        type: types.ADD_SUCCESS,
        payload
    }
}




const AddItem = (payload)=> (dispatch)=>{
    dispatch({ type: types.ADD_REQUEST });
    return axios
        .post("https://fine-cyan-millipede-boot.cyclic.app/cart",payload,{
            headers:{
                authorization: token.token
            }
        })
        .then((res)=>{
            // console.log("response from AddItem :-",res.data);
            dispatch(AddSuccess());
        })
        .catch((err)=>{
            console.log(err);
            dispatch({ type: types.ADD_ERROR });
        })
}

export default AddItem