import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Login.ActionTypes";

export const login = (creds) => async (dispatch) => {
  console.log(creds)
  try {
    let res = await axios.post(
      "https://fine-cyan-millipede-boot.cyclic.app/auth/login",
      creds
    );
    console.log("res:",res)
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    dispatch({ type: LOGIN_ERROR, payload: message });
  }
};

export const resetLogin = () => async (dispatch) => {
  dispatch({ type: LOGIN_RESET });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
