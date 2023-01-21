import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./Login.ActionTypes";

// const longinToken = localStorage.getItem("longinToken") || "";

const initState = {
  isAuth: false,
  isError: false,
  data: null,
};

const LoginReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        data: payload,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isError: false,
      };
    }
    case LOGOUT: {
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