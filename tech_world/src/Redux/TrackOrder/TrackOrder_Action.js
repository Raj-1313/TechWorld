import axios from "axios";
import {
  TrackOrder_FAILURE,
  TrackOrder_REQUEST,StatusUpdate,
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

// Raaj made this
export const OrderStatusUpdate = (value,id) => async (dispatch) => {
  dispatch({ type: TrackOrder_REQUEST });
  console.log(id,value)
  try {
    let res = await axios.patch(
      `https://fine-cyan-millipede-boot.cyclic.app/admin/orders/${id}`,{orderStatus:value},
      {
        headers: {
          authorization:token.token
        },
      }
    );
    console.log(res);
    dispatch({ type: StatusUpdate});
  } catch (e) {
    dispatch({ type: TrackOrder_FAILURE });
  }
};
