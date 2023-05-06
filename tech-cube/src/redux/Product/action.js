import axios from 'axios';
import {
  SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from './actionType';

export const getProducts = dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get('http://localhost:8080/products')
    .then(res => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};



export const singleProductfunc=(id)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  axios.get(`http://localhost:8080/products/${id}`)
          .then((res)=>{
              dispatch({type:SINGLE_PRODUCT_SUCCESS,payload:res.data})
          })
          .catch((err)=>{
              dispatch({type:PRODUCT_FAILURE})
          })
  }