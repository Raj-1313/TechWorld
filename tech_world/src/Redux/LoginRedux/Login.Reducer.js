import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_RESET
} from "./Login.ActionTypes";

const loginData = JSON.parse(localStorage.getItem("loginData")) || {};

const initState = {
  isAuth: false,
  isError: false,
  message: null,
  data: loginData,
};

const LoginReducer = (state = initState, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("loginData", JSON.stringify(payload));
      return {
        ...state,
        isAuth: true,
        data: payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isError: true,
        message: payload
      };
    }
    case LOGOUT: {
      localStorage.removeItem("loginData");
      return {
        ...state,
        isAuth: false,
        isError: false,
        message: null,
        data: {}
      };
    }
    case LOGIN_RESET: {
      return {
        ...state,
        isAuth: false,
        isError: false,
        message: null,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
