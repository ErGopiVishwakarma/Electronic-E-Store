import { GET_ADDRESS, GET_ADDRESS_FAILURE, GET_ADDRESS_SUCCESSFUL, GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESSFUL, POST_ADDRESS_SUCCESS } from "./actionType";

const initialState = {
    isLoading : false,
    data : [],
    isError : false,
    userData : {}
}

export const reducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_DATA : {
            return {
                ...state, 
                isLoading : true
            }
        }

        case GET_DATA_SUCCESSFUL : {
            return {
                ...state, 
                isLoading : false,
                data : payload
            }
        }

        case GET_DATA_FAILURE : {
            return {
                ...state, 
                isLoading : false,
                isError : true
            }
        }

        case GET_ADDRESS : {
            return {
                ...state, 
                isLoading :true
            }
        }

        case GET_ADDRESS_SUCCESSFUL : {
            return {
                ...state, 
                isLoading : false,
                userData : payload
            }
        }

        case GET_ADDRESS_FAILURE : {
            return {
                ...state, 
                isLoading : false,
                isError : true
            }
        }

        case POST_ADDRESS_SUCCESS : {
            return {
                ...state,
                isLoading : false,
                userData : payload
            }
        }

        default : {
            return state;
        }
    }
}