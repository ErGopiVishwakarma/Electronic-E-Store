import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESSFUL, REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESSFUL } from "./actionType";
import axios from 'axios';

export const signup = (userData) => (dispatch) => {
    dispatch({ type: REGISTER_USER });
    axios.post('http://localhost:8080/user', userData)

        .then(res => {
            dispatch({ type: REGISTER_USER_SUCCESSFUL, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: REGISTER_USER_FAILURE });
        })
}

// export const loginData = (dispatch) => {
//     dispatch({ type: LOGIN_USER })
//     axios.get('http://localhost:8080/user')
//         .then(res => {
//             dispatch({ type: LOGIN_USER_SUCCESSFUL, payload: res.data });
//             console.log(res);
//         })
//         .catch(err => {
//             dispatch({ type: LOGIN_USER_FAILURE });
//         })
// }
