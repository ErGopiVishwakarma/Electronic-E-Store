import axios from 'axios';
import {
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
