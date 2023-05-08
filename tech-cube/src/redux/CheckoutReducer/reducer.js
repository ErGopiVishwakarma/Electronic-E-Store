import { GET_DATA, GET_DATA_FAILURE, GET_DATA_SUCCESSFUL } from "./actionType";

const initialState = {
    isLoading : false,
    data : [],
    isError : false
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

        default : {
            return state;
        }
    }
}