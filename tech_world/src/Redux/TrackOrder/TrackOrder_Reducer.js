import {
  TrackOrder_FAILURE,
  TrackOrder_REQUEST,
  TrackOrder_SUCCESS,
} from "./TrackOrder_Types.js";

const initialState = {
  OrderData: [],

  isLoading: false,
  isError: false,
};

const TrackOrder_reducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case TrackOrder_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        OrderData: payload,
        totalPages: payload.totalPages,
      };
    }
    case TrackOrder_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case TrackOrder_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }

    // case AdminDelete_FAILURE: {
    //   return {
    //     ...state,
    //     isError: true,
    //     isLoading: false,
    //   };
    // }
    // case AdminDelete_REQUEST: {
    //   return { ...state, isLoading: true, isError: false };
    // }

    // case AdminDelete_SUCCESS: {
    //   console.log(payload);
    //   const deleted_product = state.AdminData.filter(
    //     (item) => item._id !== payload
    //   );
    //   console.log("deleted product", deleted_product);
    //   return {
    //     ...state,
    //     AdminData: deleted_product,
    //     deletedID: payload,
    //     isLoading: false,
    //     isError: false,
    //   };
    // }

    default: {
      return state;
    }
  }
};

export { TrackOrder_reducer };
