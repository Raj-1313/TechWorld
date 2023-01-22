import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_RESET,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./Login.ActionTypes";

export const login = (creds) => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://fine-cyan-millipede-boot.cyclic.app/auth/login",
      creds
    );
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR });
  }
};

export const resetLogin = () => async (dispatch) => {
  dispatch({ type: LOGIN_RESET });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
