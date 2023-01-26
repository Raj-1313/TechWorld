import axios from "axios";

import {
  Admin_FAILURE,
  Admin_REQUEST,
  Admin_SUCCESS,
  AdminDelete_REQUEST,
  AdminDelete_SUCCESS,
  AdminDelete_FAILURE,

  Admin_Post_REQUEST,
  Admin_Post_FAILURE,
  Admin_Post_SUCCESS,

  AdminCartDetails_REQUEST,
  AdminCartDetails_SUCCESS,
  AdminCartDetails_FAILURE,
  AdminExtractedData_SUCCESS

} from "./Admin_Types.js";

const token= JSON.parse(localStorage.getItem("loginData"))


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
            authorization: token.token
          },
        }
      );
      console.log(res);
      dispatch({ type: Admin_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: Admin_FAILURE });
    }
  };

export const PostData =
  ({ payload }) =>
  async (dispatch) => {
    console.log(payload);
    dispatch({ type: Admin_Post_REQUEST });
    try {
      await axios
        .post(`https://fine-cyan-millipede-boot.cyclic.app/admin`, payload, {
          headers: {
            authorization:token.token
          },
        })
        .then((res) => {
          console.log(res.data);
          dispatch({ type: Admin_Post_SUCCESS, payload: payload });
          return res
        });
    } catch (e) {
      dispatch({ type: Admin_Post_FAILURE });
    }
  };

export const adminProductDelete = (id) => async (dispatch) => {
  dispatch({ type: AdminDelete_REQUEST });
  try {
    await axios
      .delete(`https://fine-cyan-millipede-boot.cyclic.app/admin/${id}`, {
        headers: {
          authorization:token.token
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
          authorization: token.token,
        },
      })
      .then((res) => {     
       
        dispatch({ type: AdminCartDetails_SUCCESS, payload:res.data });
      });
  } catch (e) {
    dispatch({ type: AdminCartDetails_FAILURE });
  }
};




export const adminChartDataExtraction = (data) =>(dispatch) => {  
  // console.log(data) 
     dispatch({ type: AdminExtractedData_SUCCESS,payload:data });  
};
