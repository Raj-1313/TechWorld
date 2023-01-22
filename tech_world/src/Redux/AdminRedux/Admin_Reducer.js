import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_SUCCESS,
  AdminDelete_FAILURE,
  AdminCartDetails_FAILURE,
  AdminCartDetails_REQUEST,
  AdminCartDetails_SUCCESS,
} from "./Admin_Types.js";

const initialState = {
  AdminData: [],
  totalPages: null,
  isLoading: false,
  isError: false,
  totalProducts:0,
  PayedData:[]
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
    
    case AdminCartDetails_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case AdminCartDetails_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    case AdminCartDetails_SUCCESS: {
      return {
        ...state,
        PayedData: payload,
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
