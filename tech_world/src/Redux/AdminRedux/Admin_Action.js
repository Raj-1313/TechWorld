import axios from "axios";
import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_FAILURE,
  AdminDelete_SUCCESS,
} from "./Admin_Types.js";

export const adminData =
  ({ page, limit }) =>
  async (dispatch) => {
    console.log(page);
    dispatch({ type: Admin_REQUEST });
    try {
      let res = await axios.get(
        `http://localhost:8080/admin?page=${page}&limit=${limit}`,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imllc0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4MWY4MzA0M2IwNmFiNjQ5OWJkMDAiLCJpYXQiOjE2NzQwNjE1MTMsImV4cCI6MTY3NDkyNTUxM30.tJD0PHLvDyZxOJ25to-Rm-VXq84qZCywyHaXgjw03XA",
          },
        }
      );
      // console.log(res);
      dispatch({ type: Admin_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: Admin_FAILURE });
    }
  };

export const adminDelete = (id) => async (dispatch) => {
  console.log(id);
  dispatch({ type: AdminDelete_REQUEST });
  try {
    let res = await axios.delete(`http://localhost:8080/admin/${id}`, {
      headers: {
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imllc0BnbWFpbC5jb20iLCJ1c2VySUQiOiI2M2M4MWY4MzA0M2IwNmFiNjQ5OWJkMDAiLCJpYXQiOjE2NzQwNjE1MTMsImV4cCI6MTY3NDkyNTUxM30.tJD0PHLvDyZxOJ25to-Rm-VXq84qZCywyHaXgjw03XA",
      },
    });
    console.log(res);
    dispatch({ type: AdminDelete_SUCCESS });
  } catch (e) {
    dispatch({ type: AdminDelete_FAILURE });
  }
};
