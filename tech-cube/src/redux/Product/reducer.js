import {
  GET_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  SINGLE_PRODUCT_SUCCESS,
} from './actionType';

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  data: {},
  totalProducts: 0,
};

export const reducer = (
  state = initialState,
  { type, payload, totalProducts }
) => {
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
        totalProducts: totalProducts,
      };

    case POST_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case SINGLE_PRODUCT_SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }

    default:
      return state;
  }
};
