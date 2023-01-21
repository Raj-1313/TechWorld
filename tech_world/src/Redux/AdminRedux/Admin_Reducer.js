import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_SUCCESS,
  AdminDelete_FAILURE,
} from "./Admin_Types.js";

const initialState = {
  AdminData: [],
  totalPages: null,
  isLoading: false,
  isError: false,
  totalProducts:0,
};

const Admin_reducer = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case Admin_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        AdminData: payload.products,
        totalPages: payload.totalPages,
        totalProducts: payload.count,
      };
    }
    case Admin_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case Admin_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AdminDelete_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AdminDelete_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AdminDelete_SUCCESS: {
      console.log(payload);
      const deleted_product = state.AdminData.filter(
        (item) => item._id !== payload
      );
      console.log("deleted product", deleted_product);
      return {
        ...state,
        AdminData: deleted_product,
        deletedID: payload,
        isLoading: false,
        isError: false,
      };
    }

    default: {
      return state;
    }
  }
};

export { Admin_reducer };
