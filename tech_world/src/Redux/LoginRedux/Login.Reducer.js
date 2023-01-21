import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_RESET,
  LOGIN_FAILED,
} from "./Login.ActionTypes";

// const longinToken = localStorage.getItem("longinToken") || "";

const initState = {
  isAuth: false,
  isFailed: false,
  isError: false,
  data: "",
};

const LoginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      // payload.token && localStorage.setItem("longinToken", payload.token);
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
      };
    }
    case LOGOUT: {
      // localStorage.removeItem("longinToken");
      return {
        ...state,
        isAuth: false,
        isError: false,
        data: null,
      };
    }
    case LOGIN_RESET: {
      return {
        ...state,
        isAuth: false,
        isError: false,
        data: null,
      };
    }
    default:
      return state;
  }
};

export default LoginReducer;
