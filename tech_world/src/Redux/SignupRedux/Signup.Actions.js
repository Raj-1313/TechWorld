import axios from "axios";
import {
  SIGNUP_FAILED,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from "./Signup.ActionTypes";

export const signup = (creds) => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://fine-cyan-millipede-boot.cyclic.app/auth/signup",
      creds
    );
    dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SIGNUP_FAILED });
  }
};

export const signupReset = () => (dispatch) => {
  dispatch({ type: SIGNUP_RESET });
};
