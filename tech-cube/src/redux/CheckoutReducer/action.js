import axios from "axios";
import { GET_ADDRESS, GET_ADDRESS_FAILURE, GET_ADDRESS_SUCCESSFUL, GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESSFUL, POST_ADDRESS_SUCCESS } from "./actionType";

export const showData = (dispatch) => {
    dispatch({ type: GET_DATA });

    axios.get('http://localhost:8080/cart')

        .then(res => {
            dispatch({ type: GET_DATA_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_DATA_FAILURE });
        })
}

export const getAddress = (id) => (dispatch) => {
    dispatch({type : GET_ADDRESS});
    axios.get(`http://localhost:8080/user/${+id}`)
    .then(res => {
        dispatch({type : GET_ADDRESS_SUCCESSFUL, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_ADDRESS_FAILURE});
    })
}

export const postAddress = (id, dataObj) => (dispatch) => {
    dispatch({type : GET_ADDRESS});
    axios.patch(`http://localhost:8080/user/${+id}`, dataObj)
    .then(res => {
        dispatch({type : POST_ADDRESS_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_ADDRESS_FAILURE});
    })
}