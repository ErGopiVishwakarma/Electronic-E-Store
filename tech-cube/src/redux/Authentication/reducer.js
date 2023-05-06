import { LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESSFUL, REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESSFUL, RESET } from "./actionType"

const initialState = {
    isLoading : false,
    isAuth : false,
    isRegistered : false,
    users : [],
    isError : false,
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case REGISTER_USER : {
            return {
                ...state,
                isLoading : true
            }
        }

        case REGISTER_USER_SUCCESSFUL : {
            return {
                ...state,
                isLoading : false,
                isRegistered : true,
                data : [...state.users, payload]
            }
        }

        case REGISTER_USER_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        }

        case LOGIN_USER : {
            return {
                ...state,
                isLoading : true,
                isAuth : false
            }
        }

        case LOGIN_USER_SUCCESSFUL : {
            return {
                ...state,
                isLoading : false,
                isAuth : true
            }
        }

        case LOGIN_USER_FAILURE : {
            return {
                ...state,
                isLoading : false,
                isError : true,
                isAuth : false
            }
        }

        case RESET : {
            return {
                ...initialState
            }
        }

        default : {
            return state
        }
    }
}