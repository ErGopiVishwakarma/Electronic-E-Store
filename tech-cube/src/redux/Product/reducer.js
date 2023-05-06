import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS
} from './actionType';

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  data:{},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
      case SINGLE_PRODUCT_SUCCESS:{
        return {...state,isLoading:false,data:payload}
    };
    default:
      return state;
  }
};
