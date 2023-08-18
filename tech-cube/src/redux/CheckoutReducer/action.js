<<<<<<< HEAD
import axios from "axios";
import { GET_ADDRESS, GET_ADDRESS_FAILURE, GET_ADDRESS_SUCCESSFUL, GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESSFUL, POST_ADDRESS_SUCCESS } from "./actionType";

export const showData = (dispatch) => {
    dispatch({ type: GET_DATA });

    axios.get('https://viridian-confusion-henley.glitch.me/cart')

        .then(res => {
            dispatch({ type: GET_DATA_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_DATA_FAILURE });
        })
}

export const getAddress = (id) => (dispatch) => {
    dispatch({type : GET_ADDRESS});
    axios.get(`https://viridian-confusion-henley.glitch.me/user/${+id}`)
    .then(res => {
        dispatch({type : GET_ADDRESS_SUCCESSFUL, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_ADDRESS_FAILURE});
    })
}

export const postAddress = (id, dataObj) => (dispatch) => {
    dispatch({type : GET_ADDRESS});
    axios.patch(`https://viridian-confusion-henley.glitch.me/user/${+id}`, dataObj)
    .then(res => {
        dispatch({type : POST_ADDRESS_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_ADDRESS_FAILURE});
    })
=======
import axios from "axios";
import { GET_ADDRESS, GET_ADDRESS_FAILURE, GET_ADDRESS_SUCCESSFUL, GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESSFUL, POST_ADDRESS_SUCCESS } from "./actionType";

export const showData = (dispatch) => {
    dispatch({ type: GET_DATA });

    axios.get('https://viridian-confusion-henley.glitch.me/cart')

        .then(res => {
            dispatch({ type: GET_DATA_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_DATA_FAILURE });
        })
}

export const getAddress = (id) => (dispatch) => {
    dispatch({type : GET_ADDRESS});
    axios.get(`https://viridian-confusion-henley.glitch.me/user/${+id}`)
    .then(res => {
        dispatch({type : GET_ADDRESS_SUCCESSFUL, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_ADDRESS_FAILURE});
    })
}

export const postAddress = (id, dataObj) => (dispatch) => {
    dispatch({type : GET_ADDRESS});
    axios.patch(`https://viridian-confusion-henley.glitch.me/user/${+id}`, dataObj)
    .then(res => {
        dispatch({type : POST_ADDRESS_SUCCESS, payload : res.data})
    })
    .catch(err => {
        dispatch({type : GET_ADDRESS_FAILURE});
    })
>>>>>>> 0b96a5fc907bded82facbd27f754a029d6d4b2cb
}