import axios from "axios"
import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS,AUTHSIGNUP_FAILURE,AUTHSIGNUP_REQUEST,AUTHSIGNUP_SUCCESS,LOGOUT} from "./Auth_ActionTypes"


export const logout = ()=>(dispatch)=> {
    dispatch({type:LOGOUT})
}