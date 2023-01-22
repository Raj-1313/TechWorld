import axios from "axios";
import {
  TrackOrder_FAILURE,
  TrackOrder_REQUEST,
  TrackOrder_SUCCESS,
} from "./TrackOrder_Types.js";

const token= JSON.parse(localStorage.getItem("loginData"))

export const TrackOrderData = () => async (dispatch) => {
  dispatch({ type: TrackOrder_REQUEST });
  try {
    let res = await axios.get(
      `https://fine-cyan-millipede-boot.cyclic.app/admin/orders`,
      {
        headers: {
          authorization:token.token
        },
      }
    );
    console.log(res.data);
    dispatch({ type: TrackOrder_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: TrackOrder_FAILURE });
  }
};
