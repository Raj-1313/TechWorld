import axios from "axios";
import {
  LOADING_SEARCH,
  SUCCESS_SEARCH,
  ERROR_SEARCH,
} from "./Search.ActionTypes";

const searchProducts = (query) => async (dispatch) => {
  dispatch({ type: LOADING_SEARCH });
  try {
    let data = await axios.get(
      `https://fine-cyan-millipede-boot.cyclic.app/product?find=${query}`
    );
    dispatch({ type: SUCCESS_SEARCH, payload: data });
  } catch (err) {
    dispatch({ type: ERROR_SEARCH });
  }
};

export default searchProducts;
