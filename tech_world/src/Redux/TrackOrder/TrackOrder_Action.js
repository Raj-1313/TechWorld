import axios from "axios";
import {
  TrackOrder_FAILURE,
  TrackOrder_REQUEST,
  TrackOrder_SUCCESS,
} from "./TrackOrder_Types.js";

export const TrackOrderData = () => async (dispatch) => {
  dispatch({ type: TrackOrder_REQUEST });
  try {
    let res = await axios.get(
      `https://fine-cyan-millipede-boot.cyclic.app/admin/orders`,
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
        },
      }
    );
    console.log(res.data);
    dispatch({ type: TrackOrder_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: TrackOrder_FAILURE });
  }
};
