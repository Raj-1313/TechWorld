import {
  AllUsers_Request,
  AllUsers_Success,
  AllUsers_Failure,
  AllUsers_Delete_REQUEST,
  AllUsers_Delete_SUCCESS,
  AllUsers_Delete_FAILURE,
  AllUsers_Patch_REQUEST,
  AllUsers_Patch_SUCCESS,
  AllUsers_Patch_FAILURE,
} from "./AllUsers.types.js";

const initialState = {
  UserData: [],
  totalPages: null,
  isLoading: false,
  isError: false,
};

const AllUser_reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case AllUsers_Success: {
      return {
        ...state,
        isLoading: false,
        UserData: payload,
      };
    }
    case AllUsers_Failure: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AllUsers_Request: {
      return { ...state, isLoading: true, isError: false };
    }

    case AllUsers_Delete_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AllUsers_Delete_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AllUsers_Delete_SUCCESS: {
      const deleted_User = state.UserData.filter(
        (item) => item._id !== payload
      );
      return {
        ...state,
        UserData: deleted_User,
        deletedID: payload,
        isLoading: false,
        isError: false
      };
    }

    case AllUsers_Patch_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AllUsers_Patch_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AllUsers_Patch_SUCCESS: {
      let updatedUser = state.UserData.map((user) => {
        if (user._id === payload.id) {
          return {
            ...user,
            ...payload.payload,
          };
        }
        return user;
      });
      console.log(updatedUser);
      return {
        ...state,
        UserData: updatedUser,isLoading:false
      };
    }

    default: {
      return state;
    }
  }
};

export { AllUser_reducer };
