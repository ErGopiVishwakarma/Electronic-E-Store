import axios from "axios";
import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESSFUL } from "./actionType";

export const showData = (dispatch) => {
    dispatch({ type: GET_DATA });
    axios.get('http://localhost:8080/addcard')
        .then(res => {
            dispatch({ type: GET_DATA_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_DATA_FAILURE });
        })
}