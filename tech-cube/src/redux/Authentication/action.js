import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESSFUL } from "./actionType";
import axios from 'axios';

export const signup = (userData) => (dispatch) => {
    dispatch({type : REGISTER_USER});
    return axios.post('http://localhost:3000/users', userData)
    .then(res => {
        dispatch({type : REGISTER_USER_SUCCESSFUL, payload : res.data});
    })
    .catch(err => {
        dispatch({type : REGISTER_USER_FAILURE});
    })
}