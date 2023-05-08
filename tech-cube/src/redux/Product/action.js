import axios from 'axios';
import {
  SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from './actionType';

export const getProducts = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get('https://gopi.onrender.com/products')
    .then(res => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data }); 
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//https://gopi.onrender.com/products      

export const singleProductfunc=(id)=>(dispatch)=>{
console.log("id receiving at product action.js 👍👍👍👍",id)

  dispatch({type:PRODUCT_REQUEST})
 return axios.get(`http://localhost:8080/products/${id}`)
          .then((res)=>{
            console.log("Deepak from Product Action")
            console.log("**From Product Action.jsx",res.data);
              dispatch({type:SINGLE_PRODUCT_SUCCESS,payload:res.data})
          })
          .catch((err)=>{
              dispatch({type:PRODUCT_FAILURE})
          })
  }