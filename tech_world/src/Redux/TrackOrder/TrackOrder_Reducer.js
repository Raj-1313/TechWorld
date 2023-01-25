import {
  TrackOrder_FAILURE,
  TrackOrder_REQUEST,
  TrackOrder_SUCCESS,StatusUpdate
} from "./TrackOrder_Types.js";

const initialState = {
  OrderData: [],
  isLoading: false,
  isError: false,
};

const TrackOrder_reducer = (state = initialState, { type, payload }) => {
  // console.log(payload);
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
    case StatusUpdate: {
      return { ...state, isLoading: false, isError: false };
    }

    default: {
      return state;
    }
  }
};

export { TrackOrder_reducer };
