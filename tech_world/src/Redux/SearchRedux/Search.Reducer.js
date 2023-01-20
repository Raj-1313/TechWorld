import {
  LOADING_SEARCH,
  SUCCESS_SEARCH,
  ERROR_SEARCH,
} from "./Search.ActionTypes";

const initState = {
  loading: false,
  error: false,
  data: [],
};

const searhReducer = (state = initState, { type, payload }) => {
  switch (type) {
  case LOADING_SEARCH: {
    return {
        ...state,
        loading: true
    }
  }
  case SUCCESS_SEARCH: {
    return {
        ...state,
        loading: false,
        data : payload.data
    }
  }
  case ERROR_SEARCH: {
    return {
        ...state,
        error: true
    }
  }
    default:
      return state;
  }
};

export default searhReducer;