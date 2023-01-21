import axios from "axios";
import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_SUCCESS,
  AdminDelete_FAILURE,
} from "./Admin_Types.js";

export const adminData =
  ({ page, limit, query }) =>
  async (dispatch) => {
    console.log(page);
    dispatch({ type: Admin_REQUEST });
    try {
      let res = await axios.get(
        `http://localhost:8080/admin?page=${page}&limit=${limit}&find=${query}`,
        {
          headers: {
            authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFnQGdtYWlsLmNvbSIsInVzZXJJRCI6IjYzYzk5NTY1MTcyNmUxYWQ2MzNkY2ZkYyIsImlhdCI6MTY3NDIwMzEyMywiZXhwIjoxNjc1MDY3MTIzfQ.Jxpf47Gq36cbwceCxNBddH9w0FaMRH6y2d_d1NfnRzs",
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
      .delete(`http://localhost:8080/admin/${id}`, {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcmFnQGdtYWlsLmNvbSIsInVzZXJJRCI6IjYzYzk5NTY1MTcyNmUxYWQ2MzNkY2ZkYyIsImlhdCI6MTY3NDIwMzEyMywiZXhwIjoxNjc1MDY3MTIzfQ.Jxpf47Gq36cbwceCxNBddH9w0FaMRH6y2d_d1NfnRzs",
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
