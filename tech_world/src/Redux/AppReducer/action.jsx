
  import * as types from './actionTypes'
  import axios from 'axios'

  
  export const getRequest = () => {
      return {
          type: types.GET_DATA_REQUEST
      }
  }
  
  export const getSuccess = (payload) => {
      return {
          type: types.GET_DATA_SUCCESS,
          payload
      }
  }
  
  export const getFailure = () => {
      return {
          type: types.GET_DATA_FAILURE
      }
  }
  
   const getdata = (queryParams) => (dispatch) => {
      dispatch(getRequest());
      return axios.get("https://fine-cyan-millipede-boot.cyclic.app/product",queryParams)
          .then((res) => {
              // console.log(res.data)
              dispatch(getSuccess(res.data))
          })
          .catch((err) => {
              dispatch(getFailure())
          })
  }

    export {getdata}
  



