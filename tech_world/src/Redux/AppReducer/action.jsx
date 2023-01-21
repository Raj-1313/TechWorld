
  import {GET_DATA_FAILURE,GET_DATA_REQUEST,GET_DATA_SUCCESS} from './actionTypes'
  import axios from 'axios'

  
  
   const getdata = () => async(dispatch) => {
      dispatch({type: GET_DATA_REQUEST });
try{

    let res= await axios.get("https://fine-cyan-millipede-boot.cyclic.app/product")
    
    console.log(res.data)
    dispatch({ type:GET_DATA_SUCCESS,payload:res.data })

}
 catch(err){
              dispatch({ type:GET_DATA_FAILURE })
               }
  }

    export {getdata}
  



