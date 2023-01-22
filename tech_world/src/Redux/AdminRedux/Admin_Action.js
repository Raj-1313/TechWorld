import axios from "axios";
import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_SUCCESS,
  AdminDelete_FAILURE,
  AdminCartDetails_REQUEST,
  AdminCartDetails_SUCCESS,
  AdminCartDetails_FAILURE
} from "./Admin_Types.js";

export const adminData =
  ({ page, limit, query }) =>
  async (dispatch) => {
    console.log(page);
    dispatch({ type: Admin_REQUEST });
    try {
      let res = await axios.get(
        `https://fine-cyan-millipede-boot.cyclic.app/admin?page=${page}&limit=${limit}&find=${query}`,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
          },
        }
      );
      console.log(res);
      dispatch({ type: Admin_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: Admin_FAILURE });
    }
  };

export const adminProductDelete = (id) => async (dispatch) => {
  dispatch({ type: AdminDelete_REQUEST });
  try {
    await axios
      .delete(`https://fine-cyan-millipede-boot.cyclic.app/admin/${id}`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
        },
      })
      .then((res) => {
        console.log("response from deleteItem :-", id);
        dispatch({ type: AdminDelete_SUCCESS, payload: id });
      });
  } catch (e) {
    dispatch({ type: AdminDelete_FAILURE });
  }
};


// made by raj
export const adminPaymentTracking = () => async (dispatch) => {
  
  dispatch({ type: AdminCartDetails_REQUEST });
  try {
    await axios.get(`https://fine-cyan-millipede-boot.cyclic.app/admin/orders`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyMzEyM0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4ZTNmNTYwNDhmNTJmOTY2NmFjZWYiLCJpYXQiOjE2NzQxMDk5NTAsImV4cCI6MTY3NDk3Mzk1MH0.XpoBl-EDh0ZIcd87ZRMQ2SLGziko4wo2aO1mlyXxuf0",
        },
      })
      .then((res) => {     
        dispatch({ type: AdminCartDetails_SUCCESS, payload:res.data });
      });
  } catch (e) {
    dispatch({ type: AdminCartDetails_FAILURE });
  }
};
